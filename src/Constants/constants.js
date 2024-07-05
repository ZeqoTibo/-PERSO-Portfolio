import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRobot,
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faMobile,
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
  symfonyIcon,
  tailwindIcon,
  reduxIcon,
  gitIcon,
  githubIcon,
  nodejsIcon,
  trelloIcon,
  slackIcon,
  figmaIcon,
  topiscineProject,
  hopMaListeProject,
  alibabaProject,
  buildYoneProject,
  memojiComputeur,
  memojiHello,
  memojiHandCheck,
} from "../assets";

const media = {
  codecademy,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  symfonyIcon,
  tailwindIcon,
  reduxIcon,
  gitIcon,
  githubIcon,
  nodejsIcon,
  trelloIcon,
  slackIcon,
  figmaIcon,
  topiscineProject,
  hopMaListeProject,
  buildYoneProject,
  memojiComputeur,
  memojiHello,
  memojiHandCheck,
}

const icons = {
  faTrello,
  faRobot,
  faBars,
  faMobile,
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

    "Je suis désormais en 2ème année de Master : Développeur Fullstack, mais aussi en tant qu'auto-entrepreneur.",

    "Merci d'avoir pris le temps de visiter mon portfolio !",
  ],
};


const projects = [
  {
    name: "Build Yone",
    description: "",
    image: buildYoneProject,
  },
  {
    name: "Hop Ma List - CHU ANGERS",
    description: "",
    image: hopMaListeProject,
  },
  {
    name: "Topiscine",
    description:
        "",
    image: topiscineProject,
  },
  {
    name: "Alibaba Kebab",
    description:
          "",
    image: alibabaProject,
  },
];

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
     id: "symfony",
     title: "Symfony",
     icon: symfonyIcon,
     description: "J'ai découvert Symfony il y a maintenant plus de 3 ans. C'est l'un des premiers framework que j'ai appris et que j'ai pu utiliser dans le cadre de mes études et experiences professionnelles.",
  },
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
  projects,
  memoji,
  skills,
  markerSvg,
  globeData,
  icons,
};
