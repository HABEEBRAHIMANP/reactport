import { getSkill, Skill, skills } from "../skills/config"
import Oxobikes from "./../../images/oxobikes.png";
import Portfolio from "./../../images/portfolio.png";
import Avatar from "./../../images/hardhat-logo.png";
import Sparcot from "./../../images/Sparcot.png";
import Automax from "./../../images/automax.png";
import Dairy from "./../../images/dairy.png";
import AMT from "./../../images/amt.png";
import obd2 from "./../../images/obd2.png";
import white from "./../../images/White.png";
import DR from "./../../images/drsalwadarwish.png"
import Sara from "./../../images/sarainfolabs web.png"
import Autotech from "./../../images/Autotech.png"
import topdon from "./../../images/topdon.png"
import shop from "./../../images/shop.png"


export type Project = {
  name: string,
  description: string,
  image: any,
  url: string,
  github: string,
  technologies: Skill[],
}

export const projects: Project[] = [
  {
    name: "Portfolio",
    description: "Developer portfolio showing my recent projects, skillset and certificates.",
    image: Portfolio,
    url: "",
    github: "",
    technologies: getSkill(["react", "typescript", "html", "css", "git", "npm"])
  },
  {
    name: "Whitefort Restaurant",
    description: "E-commerce website development involves creating online platforms that enable businesses to sell their products or services to customers over the internet, offering a convenient and secure shopping experience",
    image: white,
    url: "https://whitefort-mandi.in/",
    github: "",
    technologies: getSkill(["wordpress", "css", "photoshop", "seo", "elementor", "html"])
  },
  {
    name: "Topdon AE",
    description: "E-commerce website development involves creating online platforms that enable businesses to sell their products or services to customers over the internet, offering a convenient and secure shopping experience",
    image: topdon,
    url: "https://topdon.ae/",
    github: "",
    technologies: getSkill(["wordpress", "css", "photoshop", "seo", "elementor", "html"])
  },
  {
    name: "Autogarageshop",
    description: "E-commerce website development involves creating online platforms that enable businesses to sell their products or services to customers over the internet, offering a convenient and secure shopping experience",
    image: shop,
    url: "https://autogarageshop.com/",
    github: "",
    technologies: getSkill(["wordpress", "css", "photoshop", "seo", "elementor", "html"])
  },
  {
    name: "Obd2world",
    description: "Participated in the development of website product adding prepared images and contents. Complete e-commerce build in WordPress cms platform.",
    image: obd2,
    url: "https://www.obd2world.co.uk/",
    github: "",
    technologies: getSkill(["wordpress", "elementor", "photoshop", "seo", "solidity"])
  },
  {
    name: "Oxobikes",
    description: "Static webpage using html5 css3 and js. Hosted on GitHub (budget free) just for online presence showing their location contact info social media, etc.",
    image: Oxobikes,
    url: "https://oxobikes.in/",
    github: "https://github.com/",
    technologies: getSkill(["html", "css", "javascript", "photoshop","vscode","digital marketing"])
  },
  {
    name: "Sparco Dairy",
    description: "Brand website Using wordpress, elementor",
    image: Dairy,
    url: "http://dairy.sparcot.com/",
    github: "https://github.com/",
    technologies: getSkill(["wordpress", "photoshop", "elementor"])
  },
  {
    name: "Automax Tools",
    description: "Maintaining existing web and rebuild completely add new features, product adding changing graphics banner, etc.",
    image: Automax,
    url: "https://www.automaxtools.me/",
    github: "https://github.com/",
    technologies: getSkill(["wordpress", "elementor", "photoshop", "seo", "digital marketing",])
  },
  {
    name: "Sparcot",
    description: "Brand website Using HTML, CSS, JS then converted to WordPress theme, customized dynamic website.",
    image: Sparcot,
    url: "https://sparcot.com/",
    github: "https://github.com/",
    technologies: getSkill(["wordpress", "javascript", "css", "html", "git", "vscode","bootstarp","Illustator"])
  },
  {
    name: "DR Salwa Dental Center",
    description: "Develop Dental Center website. Under MultiSquad IT Solutions ",
    image: DR,
    url: "https://salwadentalcenter.com/",
    github: "https://github.com/",
    technologies: getSkill(["wordpress", "javascript", "css", "html", "Digital Marketing", "SEO","Elementor","photoshop"])
  },
  {
    name: "Flutter Ecommerce Shopping Application Connects to WordPress",
    description: "Configure and Execute Flutter App For WordPress & Woocommerce. For a better shopping experience.",
    image: AMT,
    url: "https://play.google.com/store/apps/details?id=com.automaxtools.automax&pcampaignid=web_share",
    github: "",
    technologies: getSkill(["flutter", "wordpress", "photoshop", "android studio"])
  },
  {
    name: "SARA INFO LABS",
    description: "Develop IT Company website. Under SARA INFO LABS",
    image: Sara,
    url: "https://sarainfolabs.in",
    github: "",
    technologies: getSkill(["wordpress", "javascript", "css", "html", "Digital Marketing", "SEO","Elementor","photoshop"])
  },
  {
    name: "Auto-Tech",
    description: "Develop Automotive Equpment website. Under Automax Tools",
    image: Autotech,
    url: "https://auto-tech.me",
    github: "",
    technologies: getSkill(["wordpress", "javascript", "css", "html", "", "SEO","","photoshop"])
  },
]