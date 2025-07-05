<?php
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
	$phone_number = htmlspecialchars(stripslashes(trim($_POST['last-name'])));
	$subject = htmlspecialchars(stripslashes(trim($_POST['subject'])));
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

	$content = "New message from $first_name $last_name\n\n";
	$content .= "phone: $phone_number";
	$content .= "subject: $phone_number";
	$content .= "$email: $phone_number\n\n";
	$content .= "message: \n $message\n\n";

	mail('kenichols@gmail.com', $email, $subject, $content);
}