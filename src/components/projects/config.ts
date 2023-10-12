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
    url: "https://whitefort-mandi.shop/",
    github: "",
    technologies: getSkill(["wordpress", "css", "photoshop", "seo", "html"])
  },
  {
    name: "Obd2world",
    description: "Participated in the development of website product adding prepared images and contents. Complete e-commerce build in WordPress cms platform.",
    image: obd2,
    url: "https://www.obd2world.co.uk/",
    github: "",
    technologies: getSkill(["wordpress", "", "photoshop", "seo", "solidity"])
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
    technologies: getSkill(["wordpress", "photoshop", ""])
  },
  {
    name: "Automax Tools",
    description: "Maintaining existing web adding new features, product adding changing graphics banner, etc.",
    image: Automax,
    url: "https://www.automaxtools.me/",
    github: "https://github.com/",
    technologies: getSkill(["wordpress", "photoshop", "seo", "digital marketing",])
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
    name: "Flutter Ecommerce Shopping Application Connects to WordPress",
    description: "Integrated Flutter App For Wordpress & Woocommerce. For a better shopping experience. Under testing stage.",
    image: AMT,
    url: "https://play.google.com/store/apps/details?id=me.automaxtools.amtonlinestore",
    github: "",
    technologies: getSkill(["flutter", "wordpress", "photoshop", "android studio"])
  },
]