import reactImage from '../../assets/react-core-concepts.png'
import './Header.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function generateRandmonInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[generateRandmonInt(2)];

  return (
    <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}