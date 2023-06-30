import bootstrap from '../assets/icons/bootstrap-4-icon.svg'
import cssIcon from '../assets/icons/css-icon.svg'
import htmlIcon from '../assets/icons/html-icon.svg'
import jsIcon from '../assets/icons/javascript-programming-language-icon.svg'
import laravelIcon from '../assets/icons/laravel-icon.svg'
import mariadbIcon from '../assets/icons/mariadb-icon.svg'
import phpIcon from '../assets/icons/php-programming-language-icon.svg'
import reactIcon from '../assets/icons/react.svg'
import reactIcon2 from '../assets/icons/react-js-icon.svg'
import shopifyIcon from '../assets/icons/shopify-icon.svg'
import twIcon from '../assets/icons/tailwind-css-icon.svg'
import wpIcon from '../assets/icons/wordpress-icon.svg'

import {Link} from "react-router-dom";

function About () {
  return (
    <div className="w-11/12 md:container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 -mt-40">
        <div className="border-b-8 border-r-0 md:border-b-0 md:border-r-8 mb-5 pr-0 md:pb-0 md:pr-5 border-light-green-0 py-20">
          <h2 className="text-4xl font-bold pb-5">Who Am I</h2>
          <p className="pb-10">
            Hey, I am Karson. I am a software developer based out of Alabama.
            I have been building web apps for over 5 years and have used a variety of tools.
            Starting freelancing on upwork really opened up my horizon of different tools and set ups.
            I really fell in love with solving complex challenges,
            and helping my clients get their apps back to working order.
            If you want to add a feature to your app, or just need that pesky bug squashed,
            send me a message and I would be more then happy to help you
          </p>

          <Link to="https://www.upwork.com/workwith/karsonn" className="border-2 px-10 py-3 w-11/12 md:w-1/3 text-center mt-10 bg-lime-green-0 border-lime-green-0 hover:bg-light-green-0">
            Hire Me!
          </Link>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
          <div className="w-20 pt-10">
            <img src={bootstrap} alt="Bootstrap Icon"/>
          </div>
          <div className="w-20 pt-40 flex items-end">
            <img src={cssIcon} alt="CSS Icon"/>
          </div>
          <div className="w-20 pt-10">
            <img src={htmlIcon} alt="HTML Icon"/>
          </div>
          <div className="w-20 pt-40 flex items-end">
            <img src={jsIcon} alt="Bootstrap Icon"/>
          </div>
          <div className="w-20 pt-10">
            <img src={laravelIcon} alt="CSS Icon"/>
          </div>
          <div className="w-20 pt-40 flex items-end">
            <img src={mariadbIcon} alt="HTML Icon"/>
          </div>
          <div className="w-20 pt-10">
            <img src={phpIcon} alt="Bootstrap Icon"/>
          </div>
          <div className="w-20 pb-10 flex items-end">
            <img src={reactIcon2} alt="HTML Icon"/>
          </div>
          <div className="w-20 pt-10">
            <img src={shopifyIcon} alt="Bootstrap Icon"/>
          </div>
          <div className="w-20 pt-10">
            <img src={twIcon} alt="CSS Icon"/>
          </div>
          <div className="w-20 pt-10">
            <img src={wpIcon} alt="HTML Icon"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About