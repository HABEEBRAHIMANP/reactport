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
import Woocommerce from "./../../images/Woocommerce.png";
import Elementor from "./../../images/Elementor.svg";

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
    name: "Woocommerce",
    url: "https://woocommerce.com/",
    img: Woocommerce
  },
  {
    name: "Elementor",
    url: "https://elementor.com/",
    img: Elementor
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
    url: "https://developer.android.com/studio?gclid=CjwKCAjwpayjBhAnEiwA-7ena4Q0KN8CNKpJ_WeJoYs6r851K8syUypUM9ve2GcEW7J0JnvzIVIuABoCgbcQAvD_BwE&gclsrc=aw.ds",
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
    url: "https://www.autodesk.in/products/autocad/overview?mktvar002=5019031|SEM|11381098301|111085709213|kwd-297275808151&utm_source=GGL&utm_medium=SEM&utm_campaign=GGL_DEC_AutoCAD_APAC_IN_eComm_SEM_BR_New_EX_0000_5019031_PureBrand&utm_id=5019031&utm_term=kwd-297275808151&mkwid=s|pcrid|591421598631|pkw|autocad|pmt|e|pdv|c|slid||pgrid|111085709213|ptaid|kwd-297275808151|pid|&utm_medium=cpc&utm_source=google&utm_campaign=&utm_term=autocad&utm_content=s|pcrid|591421598631|pkw|autocad|pmt|e|pdv|c|slid||pgrid|111085709213|ptaid|kwd-297275808151|&gad=1&gclid=CjwKCAjwpayjBhAnEiwA-7ena0j2xG2ssDtZUvETcGdYGgXlbG90Yxe4D0pERTAays1hvlFUMnZQbhoCFF8QAvD_BwE&ef_id=YsQU4wAAAHZmtAM5:20230522162229:s",
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
    url: "https://flutter.dev/development?gclid=CjwKCAjwpayjBhAnEiwA-7ena3OAW2MGWMeb2I28xJ86MyCzor9ABkOcr6lHsVjOa8XDb__FGpPo5BoC9RAQAvD_BwE&gclsrc=aw.ds",
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