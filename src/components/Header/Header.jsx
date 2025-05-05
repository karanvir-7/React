
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import reactImg from '../assets/react-core-concepts.png';
import './Header.css';

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
//defference b/w export and export default
export default function Header(){
    const description = reactDescriptions[genRandomInt(2)];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }