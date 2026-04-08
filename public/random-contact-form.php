<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require '../vendor/autoload.php';

$ENV = parse_ini_file('../.env');
$BASE_URL = $ENV['BASE_URL'];

$captcha = $_POST['cf-turnstile-response'];

if (!$captcha) {
	header("Location: $BASE_URL/contact");
	exit;
}

$secretKey = $ENV['TURNSTILE_SECRET_KEY'];
$ip = $_SERVER['REMOTE_ADDR'];

$url_path = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
$data = array('secret' => $secretKey, 'response' => $captcha, 'remoteip' => $ip);
$query = http_build_query($data);

$options = array(
	'http' => array(
		'header' => "Content-Type: application/x-www-form-urlencoded\r\n".
			"Content-Length: ".strlen($query)."\r\n".
			"User-Agent:MyAgent/1.0\r\n",
		'method' => 'POST',
		'content' => $query)
);

$stream = stream_context_create($options);
$response = file_get_contents($url_path, false, $stream);
$responseKeys = json_decode($response,true);

if(!empty($_POST) && intval($responseKeys["success"]) === 1){
	$first_name = htmlspecialchars(stripslashes(trim($_POST['first-name'])));
	$last_name = htmlspecialchars(stripslashes(trim($_POST['last-name'])));
	$phone_number = htmlspecialchars(stripslashes(trim($_POST['phone-number'])));
	$subject = htmlspecialchars(stripslashes(trim($_POST['subject'])));
	$subject = preg_replace("/[\r\n]+/", " ", $subject);
	$email = htmlspecialchars(stripslashes(trim($_POST['email'])));
	$message = htmlspecialchars(stripslashes(trim($_POST['message'])));

	if(!preg_match("/^[A-Za-z .'-]+$/", $first_name)){
		$name_error = 'Invalid name';
	}
	if(!preg_match("/^[A-Za-z .'-]+$/", $subject)){
		$subject_error = 'Invalid subject';
	}
	if(!preg_match("/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/", $email)){
		$email_error = 'Invalid email';
	}
	if(strlen($message) === 0){
		$message_error = 'Your message should not be empty';
	}

	// Create PHPMailer instance
	$mail = new PHPMailer(true);

	try {
		// Server settings
		$mail->isSMTP();
		$mail->Host       = $ENV['SMTP_HOST'];
		$mail->SMTPAuth   = true;
		$mail->Username   = $ENV['SMTP_USERNAME'];
		$mail->Password   = $ENV['SMTP_PASSWORD'];
		$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
		$mail->Port       = $ENV['SMTP_PORT'];

		// Recipients
		$mail->setFrom($ENV['SMTP_FROM_EMAIL'], $ENV['SMTP_FROM_NAME']);
//		$mail->addAddress($ENV['EMAIL_1']);
		$mail->addReplyTo($email, "$first_name $last_name");

		// Content
		$mail->isHTML(false);
		$mail->Subject = 'Site contact form - ' . $subject;
		$mail->Body    = "New message from $first_name $last_name\n\n";
		$mail->Body   .= "phone: $phone_number\n";
		$mail->Body   .= "subject: $subject\n";
		$mail->Body   .= "email: $email\n\n";
		$mail->Body   .= "message:\n$message\n\n";

		$mail->send();

		header("Location: $BASE_URL/thank-you");
		exit;
	} catch (Exception $e) {
		error_log("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
		header("Location: $BASE_URL/contact?error=email");
		exit;
	}
}

header("Location: $BASE_URL/contact");
exit;