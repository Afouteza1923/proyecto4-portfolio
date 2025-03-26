import data from "../../data/data";
import "./AboutMe.css";

const template = () => {
  return `
    <section class="aboutme" id="aboutme">
      <h2>Acerca de mí</h2>
      <img class="avatar" src="${data.avatar}" alt="${data.name}"/>
      <ul class="skills-list">
      ${data.skills
        .map(
          (skill) => `
            <li class="skill-item">
              <img src="${skill.logo}" alt="${skill.name}" class="skill-logo"/>
              <p>${skill.name}</p>
            </li>`
        )
        .join("")}
      </ul>
      <p>${data.aboutMe}</p>
      <p>${data.address}</p>
      <button id="contact-button" class="contact-button">Contáctame</button>
    </section>
  `;
};

export const AboutMe = () => {
  return template();
};

export const addAboutListeners = () => {
  const avatar = document.querySelector(".avatar");
  const contactButton = document.querySelector("#contact-button");

  if (avatar) {
    avatar.addEventListener("click", (e) => e.target.classList.toggle("rotate"));
  }

  if (contactButton) {
    contactButton.addEventListener("click", () => {
      window.location.href = `mailto:${data.email}`;
    });
  }
};
