import {
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  LogoAngular,
  LogoCSharp,
  LogoIonic,
  LogoJava,
  LogoJavaScript,
  LogoLit,
  LogoMongoDB,
  LogoNestJS,
  LogoNextJS,
  LogoNodeJS,
  LogoReact,
  LogoSass,
  LogoSqlite,
  LogoSQLServer,
  LogoTypescript,
  TelegramIcon,
  TwitterIcon,
} from './icons';

export const skills = [
  {
    name: 'Typescript',
    percent: 80,
    color: '#007acc',
    icon: LogoTypescript,
    type: 'lang',
  },
  {
    name: 'Sass',
    percent: 60,
    color: '#cc6699',
    icon: LogoSass,
    type: 'lang',
  },
  {
    name: 'NodeJS',
    percent: 70,
    color: '#3c873a',
    icon: LogoNodeJS,
    type: 'software',
  },
  {
    name: 'React',
    color: '#61dbfb',
    percent: 50,
    icon: LogoReact,
    type: 'framework',
  },
  {
    name: 'Angular',
    color: '#c3002f',
    percent: 90,
    icon: LogoAngular,
    type: 'framework',
  },
  {
    name: 'Ionic',
    color: '#387ef5',
    percent: 90,
    icon: LogoIonic,
    type: 'framework',
  },
  {
    name: 'Java',
    color: '#ea2845',
    percent: 40,
    icon: LogoJava,
    type: 'framework',
  },

  {
    name: 'C#',
    color: '#e535ab',
    percent: 40,
    icon: LogoCSharp,
    type: 'lang',
  },
  {
    name: 'SQLServer',
    color: '#151515',
    percent: 40,
    icon: LogoSQLServer,
    type: 'framework',
  },
  {
    name: 'SQLite',
    color: '#0f79c3',
    percent: 40,
    icon: LogoSqlite,
    type: 'software',
  },
  {
    name: 'JavaScript',
    color: '#4DB33D',
    percent: 60,
    icon: LogoJavaScript,
    type: 'database',
  },
  {
    name: 'NextJS',
    color: '#ea2845',
    percent: 40,
    icon: LogoNextJS,
    type: 'framework',
  },


];

export const contact = [
  {
    icon: TwitterIcon,
    user: '@oscartmxp',
    name: 'Twitter',
    url: 'https://twitter.com/oscartmxp',
  },
  {
    icon: FacebookIcon,
    user: '@oscartmxp',
    name: 'Facebook',
    url: 'https://www.facebook.com/oscartmxp',
  },
  {
    icon: LinkedInIcon,
    user: '@oscartmxp',
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/oscar-trujillo-morales/',
  },
  {
    icon: GitHubIcon,
    user: '@oscartmxpgit',
    name: 'GitHub',
    url: 'https://github.com/oscartmxpgit',
  },
  {
    icon: TelegramIcon,
    user: '@oscartmxp',
    name: 'GitHub',
    url: 'https://t.me/oscartmxp',
  },
];

export const releases = [
  {
    title: 'ASP.Net Core Demo',
    text: `ASP.Net Core Demo + SQL Server gestor de usuarios y sus contratos con una agencia de viajes.`,
    url: 'https://github.com/oscartmxpgit/TravelingHabana',
    build: '0.0.5-beta',
  },
  {
    title: 'Monitor de recursos de sistema',
    text: `Monitor de recursos de sistema utilizando, WPF App.`,
    url: 'https://github.com/oscartmxpgit/MonitorSistemaWPF',
    build: '0.0.3-beta',
  },
  {
    title: 'SpotiApp',
    text: `SpotiApp está hecho con Angular. Utiliza la API de Spotify.`,
    url: 'https://github.com/oscartmxpgit/SpotiApp-master',
    build: '0.0.1-beta',
  }
];
