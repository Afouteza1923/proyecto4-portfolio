import "./Header.css";

const template = () => {
  return `
  <header class="header">
    <div class="header-container">
      <h1>José María Fdez. Alonso (Chema)</h1>
      <img class="logo" src="public/assets/Logotipo_jmfernaal.png" alt="Logo"/>
    </div>
    <nav>
      <ul>
        <li>
          <a href="#aboutme">Acerca de mí</a>
        </li>
        <li>
          <a href="#education">Estudios</a>
        </li>
        <li>
          <a href="#experience">Experiencia</a>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
      </ul>
    </nav>
  </header>
  `;
};

const Header = () => {
  return template();
};

export default Header;