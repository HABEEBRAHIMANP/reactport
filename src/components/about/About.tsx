import React, { useState } from "react";
import { Heading, Text, Button, CloseButton } from '@chakra-ui/react';
import { AiFillGithub, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram, BsChevronDown, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { FaDiscord  } from "react-icons/fa";
import avatar from "./../../images/hi.png";
import "./About.css";


const About = () => {
  
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const hide = () => setIsVisible(false);

  const getFontSize = () => {
    let width = window.innerWidth;
    if(width < 450) return "5rem";
    if(width < 1250) return "6rem";
    return "8rem";
  }

  const getAlertSize = () => {
    let width = window.innerWidth;
    if(width < 1275) return "md";
    return "lg";
  }

  const Alert = () => {
    if(isVisible) {
      return(
        <div className="alert">
          <Heading as="h3" size={getAlertSize()}>💻{"   "}<a href="mailto:habeebmeladi@gmail.com" className="contact-link">Hire Me!</a></Heading>
          <CloseButton size='lg' className="close-btn" onClick={() => hide()} />
        </div>
      )
    }else{
      return null
    }
  }

  return(
    <>
    <Alert />
    <div className="bg">
      <div className="about-wrapper">
        <div className="about-text">
          <div className="about-title">
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              Hi! 👋
            </Heading>
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              I'm <span className="name">Habeeb</span>
            </Heading>
          </div>
          <div className="about-text-desc">
            <Text fontSize='3xl'>Passionate <span className="name">TECH ENTHUSIAST</span> from India with almost 5 years of experience in web design, web development, graphic design and IT Support. As well as working as an IT Support Engineer. My experience and knowledge would be a great asset to a role as an IT Engineer.</Text>
          </div>

          <div className="icons">
            <a href="https://github.com/HABEEBRAHIMANP" target="_blank">
              <AiFillGithub className="icon" />
            </a>
            <a href="www.linkedin.com/in/habeeb-live" target="_blank">
              <BsLinkedin className="icon" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=971525778565&text&type=phone_number&app_absent=0" target="_blank">
              <BsWhatsapp className="icon" />
            </a>
          </div>

          <a href="https://api.whatsapp.com/send/?phone=971525778565&text&type=phone_number&app_absent=0">
            <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid'>
              Contact Me
            </Button>
          </a>
        </div>
        <div className="about-avatar">
          <img src={avatar} className="avatar" alt="HABEEBEMOJ" />
        </div>
      </div>
      <div className="icon-wrapper">
        <div className="bottom-icon">
          <BsChevronDown />
        </div>
      </div>
    </div>
    </>
  )  
}

export default About;