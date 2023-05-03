import React from "./../../images/react-logo.png";
import HTML from "./../../images/html5-logo.png";
import CSS from "./../../images/css-logo.png";
import JS from "./../../images/js-logo.png";
import DigitalMarketing from "./../../images/Digital_Marketing.png";
import WordPress from "./../../images/WordPress.png";
import Photoshop from "./../../images/Photoshop.png"; 
import Illustrator from "./../../images/Illustrator.png"; 
import MicrosoftOffice365 from "./../../images/Microsoft Office365.png"; 
import VSCode from "./../../images/Vscode.png"; 
import seo from "./../../images/seo.jpg";
import jQuery from "./../../images/jQuery.png";
import Git from "./../../images/git-logo.png";
import Autocad from "./../../images/autocad.jpg";
import Flutter from "./../../images/flutter.png";
import raspberrypi from "./../../images/raspberry pi.png";
import Figma from "./../../images/Figma.png";
import Xd from "./../../images/Xd.png";
import CCNA from "./../../images/ccna.png";
import bootstrap from "./../../images/bootstrap.jpg";
import Nas from "./../../images/nas.png";
import Angular from "./../../images/angular.png";
import MCSE from "./../../images/mcse.png";
import Android from "./../../images/andorid.jpg";

export type Skill = {
  name: string;
  img: any;
  url: string;
}

export const getSkill = (names: string[]) => {
  let toReturn: Skill[] = [];
  names.map((name: string) => {
    skills.map((skill: Skill) => {
      if(skill.name.toLowerCase() === name.toLowerCase()) {
        toReturn.push(skill);
      }
    });
  })
  return toReturn;
}

export const skills: Skill[] = [
  {
    name: "WordPress",
    url: "https://wordpress.com/",
    img: WordPress
  },
  {
    name: "Photoshop",
    url: "https://www.adobe.com/in/products/photoshop.html",
    img: Photoshop
  },
  {
    name: "Xd",
    url: "https://helpx.adobe.com/in/support/xd.html",
    img: Xd
  },
  {
    name: "Illustrator",
    url: "https://www.adobe.com/in/products/illustrator.html",
    img: Illustrator
  },
  {
    name: "Microsoft Office 365",
    url: "https://www.office.com/",
    img: MicrosoftOffice365
  },
  {
    name: "VSCode",
    url: "https://code.visualstudio.com/",
    img: VSCode
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: JS
  },
  {
    name: "Digital Marketing",
    url: "https://mailchimp.com/marketing-glossary/digital-marketing/#:~:text=Digital%20marketing%2C%20also%20called%20online,messages%20as%20a%20marketing%20channel.",
    img: DigitalMarketing
  },
  {
    name: "Android Studio",
    url: "https://nodejs.org/en/",
    img: Android
  },
  {
    name: "MCSE",
    url: "https://learn.microsoft.com/en-us/certifications/posts/mcsa-mcsd-mcse-certifications-retire-with-continued-investment-to-role-based-certifications",
    img: MCSE
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    img: React
  },
  {
    name: "CCNA",
    url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html",
    img: CCNA
  },
  {
    name: "AutoCAD",
    url: "https://moralis.io/",
    img: Autocad
  },
  {
    name: "Figma",
    url: "https://www.figma.com/",
    img: Figma
  },
  {
    name: "Raspberry Pi",
    url: "https://www.raspberrypi.org/",
    img: raspberrypi
  },
  {
    name: "True NAS",
    url: "https://www.ixsystems.com/logos-truenas-ixsystems/",
    img: Nas
  },
  {
    name: "Angular",
    url: "https://angular.io/presskit",
    img: Angular
  },
  {
    name: "bootstrap",
    url: "https://getbootstrap.com/docs/5.0/about/brand/",
    img: bootstrap
  },
  {
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    img: HTML
  },
  {
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    img: CSS
  },
  {
    name: "Flutter",
    url: "https://reactnative.dev/",
    img: Flutter
  },
  {
    name: "SEO",
    url: "",
    img: seo
  },
  {
    name: "jQuery",
    url: "https://jquery.com/",
    img: jQuery
  },
  {
    name: "Git",
    url: "https://git-scm.com/",
    img: Git
  },
]