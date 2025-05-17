import Mozart from '../img/Mozart.jpeg';
import Vivaldi from '../img/Vivaldi.jpeg';
import Beethoven from '../img/Beethoven.jpeg';
import './TodoList.css'

// Definindo temas em objetos
const mozart = {
  name: 'Wolfgang Amadeus Mozart',
  theme: {
    background: 'linear-gradient(to right, pink, lightblue)', 
    color: 'black'
  }
};

const vivaldi = {
  name: 'Antonio Vivaldi',
  theme: {
    background: 'linear-gradient(to right, pink, lightblue)',
    color: 'black' 
  }
};

const beethoven = {
  name: 'Ludwig van Beethoven',
  theme: {
    background: 'linear-gradient(to right, pink, lightblue)',
    color: 'black' 
  }
};

export default function TodoList() {
  return (
    <>
      <div className="composer-container" style={mozart.theme}>
        <h4>Wolfgang Amadeus Mozart</h4>
        <img
          src={Mozart}
          alt="Wolfgang Amadeus Mozart"
          className="photo"
        />
        <ul>
          <li>Compositor Austríaco</li>
          <li>Nasceu em 27 de janeiro de 1756... Morreu em 5 de dezembro de 1791.</li>
          <li>Compôs várias obras, sendo o responsável pela inclusão do clarinete na orquestra.</li>
        </ul>
      </div>

      <div className="composer-container" style={vivaldi.theme}>
        <h4>Antonio Vivaldi</h4>
        <img
          src={Vivaldi}
          alt="Antonio Vivaldi"
          className="photo"
        />
        <ul>
          <li>Compositor Italiano</li>
          <li>Nasceu em 04 de março de 1678... Morreu em 28 de julho de 1741.</li>
          <li>Compôs várias obras, incluindo 'As Quatro Estações'.</li>
        </ul>
      </div>

      <div className="composer-container" style={beethoven.theme}>
        <h4>Ludwig van Beethoven</h4>
        <img
          src={Beethoven}
          alt="Ludwig van Beethoven"
          className="photo"
        />
        <ul>
          <li>Compositor alemão</li>
          <li>Nasceu em 17 de dezembro de 1770... Morreu em 26 de março de 1827.</li>
          <li>Compôs várias obras mesmo depois de ficar surdo, sendo a 'Nona Sinfonia' a mais conhecida.</li>
        </ul>
      </div>
    </>
  );
}