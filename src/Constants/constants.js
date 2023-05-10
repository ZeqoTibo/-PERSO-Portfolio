import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRobot,
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTrello,
  faReact,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

import {
  codecademy,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  threeIcon,
  tailwindIcon,
  reduxIcon,
  gitIcon,
  githubIcon,
  nodejsIcon,
  trelloIcon,
  slackIcon,
  figmaIcon,
  jammmingProject,
  teslaProject,
  venomsoulProject,
  memojiComputeur,
  memojiHello,
  memojiHandCheck,
  htmlCertificate,
  cssCertificate,
  jsCertificate,
  reactCertificate,
  webflowCertificate,
} from "../assets";

const media = {
  codecademy,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  threeIcon,
  tailwindIcon,
  reduxIcon,
  gitIcon,
  githubIcon,
  nodejsIcon,
  trelloIcon,
  slackIcon,
  figmaIcon,
  jammmingProject,
  teslaProject,
  venomsoulProject,
  memojiComputeur,
  memojiHello,
  memojiHandCheck,
  htmlCertificate,
  cssCertificate,
  jsCertificate,
  reactCertificate,
  webflowCertificate,
}

const icons = {
  faTrello,
  faRobot,
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
};

const introduction = {
  text: [

    "Bonjour et bienvenu sur mon portfolio !",

    "Je m'appelle Thibault et je suis un jeune développeur fullstack basé en France, à coté d'Angers. Ma passion pour le développement web a commencé durant mes années d'étude, plus précisement en STI2D, lorsque j'ai commencé à concevoir des sites en HTML/CSS/JS. Depuis, je n'ai cessé de progresser et d'élargir mes connaissances dans ce domaine.",

    "En septembre 2019, j'intègre un DUT Informatique à Laval qui m'a permis de plonger plus profondément dans le développement informatique, ce qui m'a amené ensuite à continuer dans une Licence Professionnelle : Développeur et Intégrateur de Web Application afin d'acquerir davantages de compétences.",

    "Je suis désormais en 1ère année de Master : Développeur Fullstack, mais aussi en tant qu'auto-entrepreneur.",

    "Merci d'avoir pris le temps de visiter mon portfolio !",
  ],
};

const journeys = [
  {
    title: "Web Foundations",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#204056",
    date: "5 Dec 2022 - 14 Dec 2022",
    points: [
      "Fundamentals of HTML",
      "Fundamentals of CSS",
      "Developing Websites Locally",
      "Deploying Websites",
    ],
  },
  {
    title: "Improved Styling with CSS",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#204056",
    date: "15 Dec 2022 - 29 Dec 2022",
    points: [
      "Fundamentals of Web Design",
      "Making a Website Responsive",
      "CSS Transitions and Animations",
    ],
  },
  {
    title: "Building Interactive Websites",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#204056",
    date: "30 Dec 2022 -  9 Feb 2023",
    points: [
      "JavaScript Syntax",
      "Building Interactive Websites",
      "Making a Website Accessible",
      "Git and Github",
    ],
  },
  {
    title: "Front-End Development",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#204056",
    date: "10 Feb - Present",
    points: [
      "JavaScript Syntax",
      "JavaScript Testing",
      "Async JavaScript",
      "Web Apps",
      "React Framework",
    ],
  },
];

const projects = [
  {
    name: "Venomsoul E-Commerce",
    description: "",
    image: venomsoulProject,
    source_code_link: "https://github.com/valeriusec",
    demo_link: "https://infopilot.netlify.app/",
  },
  {
    name: "Tesla Website",
    description: "",
    image: teslaProject,
    source_code_link: "https://github.com/valeriusec/tesla-website",
    demo_link: "https://infopilot.netlify.app/",
  },
  {
    name: "Jammming App",
    description:
        "Jammming allows you to search for your favorite songs and create custom playlists. Once you've created your playlist, you can export it directly to your Spotify account.",
    image: jammmingProject,
    source_code_link: "https://github.com/valeriusec/jammming-app",
    demo_link: "https://jammming-b7d.pages.dev/",
  },
];

const certificates = {
  image: [
    htmlCertificate,
    cssCertificate,
    jsCertificate,
    reactCertificate,
    webflowCertificate,
  ],
};

const memoji = {
  image: [memojiHello, memojiComputeur, memojiHandCheck],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
        "Je maîtrise l'utilisation du langage HTML pour structurer les pages web et créer du contenu accessible à tous les utilisateurs.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
        "Je sais utiliser les CSS pour styliser les pages web et créer des conceptions visuellement agréables qui améliorent l'expérience de l'utilisateur.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
        "J'ai de l'expérience dans l'utilisation de JavaScript pour ajouter de l'interactivité et des fonctionnalités aux pages web et créer des interfaces utilisateur dynamiques.",
  },
  {
    id: "react",
    title: "React JS",
    icon: reactIcon,
    description:
        "Je maîtrise React et ses concepts de base. Je suis capable de créer des composants réutilisables et de gérer l'état de l'application à l'aide de hooks et de contextes.",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    icon: tailwindIcon,
    description:
        "I am familiar with using Tailwind CSS to quickly and efficiently style web pages, and am able to create custom designs by combining pre-defined classes.",
  },
  // {
  //   id: "threejs",
  //   title: "Three.js",
  //   icon: threeIcon,
  //   description:
  //       "I have experience using Three.js to create 3D graphics and animations in web applications, and am able to create complex scenes and visualizations.",
  // },
  {
    id: "reactnative",
    title: "React Native",
    icon: figmaIcon,
    description:
        "Je sais utiliser React Native pour concevoir des applications mobiles compatibles Android et IOS. Un framework que j'ai découvert récemment et qui m'a beaucoup plu.",
  },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
        "Je sais utiliser Git pour gérer et suivre les modifications apportées à mon code au fil du temps, collaborer avec d'autres personnes sur un projet et gérer les conflits entre les différentes modifications.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
        "Je sais utiliser GitHub pour collaborer à des projets, partager du code, suivre les problèmes et les bugs. Avec GitHub, je peux créer et gérer des dépôts, contribuer à des projets open-source et présenter mon travail à des employeurs potentiels.",
  },
  {
    id: "nodejs",
    title: "NodeJS",
    icon: nodejsIcon,
    description:
        "NodeJs est un environnement d'exécution JavaScript côté serveur qui me permet d'écrire des scripts côté serveur pour produire du contenu dynamique pour les pages web.",
  },
  {
    id: "trello",
    title: "Trello",
    icon: trelloIcon,
    description:
        "Trello est très utile pour gérer mes projets et mes tâches. Je sais créer des tableaux, des listes et des cartes, et les organiser pour suivre mes progrès et collaborer avec d'autres personnes.",
  },
  {
    id: "slack",
    title: "Slack",
    icon: slackIcon,
    description:
        "J'utilise désormais Slack pour communiquer avec mes collègues et mes clients. Je sais utiliser les canaux, les messages directs et les applications pour collaborer efficacement.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

const N = 1;
const globeData = [...Array(N).keys()].map(() => ({
  lat: 48.0,
  lng: 11.0,
  size: 20,
  color: "red",
}));

export {
  media,
  introduction,
  journeys,
  projects,
  certificates,
  memoji,
  skills,
  markerSvg,
  globeData,
  icons,
};
