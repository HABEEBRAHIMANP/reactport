import React from "react";
import { Button } from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram, BsGlobe2, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import "./Contact.css";

export type Contact = {
  name: string,
  info: string,
  icon: React.ReactElement,
  url: string,
}

export const contacts: Contact[] = [
  {
    name: "EMAIL:",
    info: "habeebmeladi@gmail.com",
    icon: <MdOutlineEmail className="contact-icon" />,
    url: "mailto:contactme@tijan.dev",
  },
  {
    name: "WHATSAPP:",
    info: "+971 52 577 8565",
    icon: <BsWhatsapp className="contact-icon" />,
    url: "https://api.whatsapp.com/send/?phone=971525778565&text&type=phone_number&app_absent=0",
  },
  {
    name: "TELEGRAM:",
    info: "@HABEEBRAHIMANP",
    icon: <BsTelegram className="contact-icon" />,
    url: "https://t.me/habeebrahimanp",
  },
  {
    name: "LINKED IN:",
    info: "habeeb-live",
    icon: <BsLinkedin className="contact-icon" />,
    url: "https://linkedin.com/in/habeeb-live",
  },
  {
    name: "GitHub:",
    info: "@HABEEBRAHIMANP",
    icon: <AiFillGithub className="contact-icon" />,
    url: "https://github.com/HABEEBRAHIMANP",
  },
  {
    name: "LOCATION:",
    info: "Sharjah, UAE",
    icon: <IoLocationOutline className="contact-icon" />,
    url: "",
  },
];

const Contact = () => {
  return(
    <div className="bg-contact">
      <div className="contact-header">
        <p className="heading">Contacte Me</p>
        <p className="text">If you have any questions or want to hire me, please contact me:</p>
      </div>

      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return(
            <a key={uuidv4()} href={contact.url} target="_blank">
              <div className="contact-section">
                  {contact.icon}
                  <div className="contact-text-div">
                    <p className="contact-title">{contact.name}</p>
                    <p className="contact-details">{contact.info}</p>
                  </div>
              </div>
            </a>
          )
        })}
      </div>

      <div className="button-container">
        <a href="https://api.whatsapp.com/send/?phone=918089094778&text&type=phone_number&app_absent=0">
          <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid' className="contact-btn">
            Contact Me
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Contact;