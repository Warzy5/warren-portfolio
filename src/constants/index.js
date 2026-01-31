import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  skyscope,
  leaderboard,
  password,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  airliquide,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'python',
    company_name: 'Air Liquide',
    icon: airliquide,
    iconBg: '#333333',
    date: ' 12 Dec 2022 - 16 Dec 2022',
  },
  {
    title: 'Front end introduction',
    company_name: 'Edenschool',
    icon: microverse,
    iconBg: '#333333',
    date: 'Sep 2023 - Jul 2025',
  },
  {
    title: 'Back end introduction',
    company_name: 'Edenschool',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Sep 2025 - still going',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Skyscope',
    description: 'A little webpage schocasing nasa infos',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: skyscope,
    repo: 'https://github.com/Warzy5/Starscope-es-24',
    demo: 'https://warzy5.github.io/Starscope-es-24/#acceuil',
  },
  {
    id: 'project-2',
    name: 'Password Generator',
    description:
      'A password generator made with html,css and JavaScript',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: password,
    repo: 'https://github.com/Warzy5/password-generator',
    demo: 'https://warzy5.github.io/password-generator/',
  },
];

export { services, technologies, experiences, projects };
