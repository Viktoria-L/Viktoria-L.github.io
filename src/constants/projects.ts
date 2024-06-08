import bookducks1 from '../assets/bookducks1.jpg';
import artplants from '../assets/artofplants1.jpg';
import starwarstrivia from '../assets/starwarstrivia.jpg';
import echoes from '../assets/echoesGif.gif';
import christmas from '../assets/christmas.gif';
import tsharder from '../assets/tsharder.jpg';
import ewallet1 from '../assets/ewallet1.jpg';
import ewallet2 from '../assets/ewallet2.jpg';
import ewallet3 from '../assets/ewallet3.jpg';
import ewallet4 from '../assets/ewallet4.jpg';
import musicplayer from '../assets/music-player.jpg';

export const MyProjects = [
  {
    title: 'Musik Player',
    info: 'Mitt examensarbete, en musikspelare med musik från Jamendo API. Både frontend och backend för inloggning, spara favoriter/spellistor. Byggt med Typescript, React, Redux, NodeJS. Frontend-delen är live på hemsida.',
    url: 'https://music-player-eight-jet.vercel.app/',
    github: 'https://github.com/Viktoria-L/music-player',
    img: [musicplayer],
    techstack: ['Typescript', 'React', 'Redux', 'NodeJS', 'Express'],
  },
  {
    title: 'Technostate Harder',
    info: 'Jag har byggt mina vänners hemsida för deras nya eventkoncept. Sidan är live och det går att signa upp för nyhetsbrev, se kommande events och köpa biljetter via Biletto widget. ',
    url: 'https://tsharder.com',
    img: [tsharder],
    techstack: ['Wordpress'],
  },
  {
    title: 'Echoes of Shanti',
    info: 'En festivalsida med listning av aktiviteter, biljetter och detaljsidor för varje aktvititet. Frontend och backend med ett REST-api. Kurs Javascript 4.',
    github: 'https://github.com/Viktoria-L/event-festival-assignment',
    img: [echoes],
    techstack: ['React', 'Typescript', 'NodeJS', 'Express'],
  },
  {
    title: 'Santa sweet delight',
    info: 'En webbshop med julgodis, möjlighet att se produkter och lägga i varukorg. Frontend och backend med ett REST-api. TDD. Kurs Javascript 4.',
    github: 'https://github.com/Viktoria-L/christmas-ecommerce-assignment',
    img: [christmas],
    techstack: ['React', 'Typescript', 'NodeJS', 'Express'],
  },
  {
    title: 'E-wallet',
    info: 'En e-wallet med möjlighet att lägga till bankkort samt välja vilket kort som ska vara aktivt. Light/Darkmode. Kurs Javascript 3.',
    github: 'https://github.com/Viktoria-L/E-wallet-assignment',
    img: [ewallet1, ewallet2, ewallet3, ewallet4],
    techstack: ['React', 'Typescript', 'NodeJS', 'Express'],
  },
  {
    title: 'Book Ducks',
    info: 'Kurs CMS. Implementerar Strapi CMS till en boksida. I bokaffären ska det gå att skapa användare/logga in, betygsätta böcker och spara böcker till en egen lista.',
    github: 'http://github.com',
    img: [bookducks1],
    techstack: ['Javascript', 'CMS-Strapi', 'CSS', 'HTML'],
  },
  {
    title: 'Star Wars Trivia',
    info: 'En sida för att jämföra Star Wars karaktärer, hämtning sker från SWAPI Api. Kurs Javascript 2.',
    url: 'https://viktoria-l.github.io/Javascript-2-assignment-Star-Wars/',
    github: 'https://github.com/Viktoria-L/Javascript-2-assignment-Star-Wars',
    img: [starwarstrivia],
    techstack: ['CSS', 'HTML'],
  },
  {
    title: 'Art of Plants',
    info: 'En sida för ett företag som säljer växter, ett projekt i kursen HTML & CSS',
    url: 'https://viktoria-l.github.io/HTML-CSS-School-Assignment/',
    github: 'http://github.com',
    img: [artplants],
    techstack: ['CSS', 'HTML'],
  },
];
