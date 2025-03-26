import "./Main.css";
import { AboutMe } from "../AboutMe/AboutMe";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";

let show = "Experience"; //? Variable para controlar que se muestra

const updateContent = () => {
  const content = document.querySelector("#content");
  const button = document.querySelector("#change");

  if (window.location.hash === "#education") {
    content.innerHTML = Education();
    show = "Education";
  } else {
    content.innerHTML = Experience();
    show = "Experience";
  }

  if (button) {
    button.textContent = show === "Education" ? "Mostrar Experiencia" : "Mostrar Estudios";
  }
};

//? Función para cambiar el contenido inmediatamente
const changeView = (newView) => {
  window.location.hash = `#${newView.toLowerCase()}`;
  updateContent(); 
};

const template = () => {
  return `
    <main>
      ${AboutMe()}
      <div class="change-container">
        <button id="change">Mostrar Estudios</button>
      </div>
      <div id="content">
        ${Experience()}
      </div>
      ${Projects()}
    </main>
  `;
};

export const Main = () => {
  return template();
};

export const addMainListeners = () => {
  const button = document.querySelector("#change");

  button.addEventListener("click", () => {
    const newView = show === "Experience" ? "Education" : "Experience";
    changeView(newView);
  });

  window.addEventListener("hashchange", updateContent);

  //? Agregar listeners a los enlaces del nav para que actualicen instantáneamente
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener("click", (event) => {
      const section = event.target.getAttribute("href").substring(1); //? Obtener "education" o "experience"
      changeView(section.charAt(0).toUpperCase() + section.slice(1)); //? Capitalizar primera letra
    });
  });

  //? Asegurar que el contenido se sincroniza al cargar la página
  updateContent();
};