import "./Footer.css";

const template = () => {
  return `
  <footer>
    <div class="social-icons">
      <a href="https://twitter.com/jmfernaal" target="_blank">
        <img src="public/assets/twitter.png" alt="X">
      </a>
      <a href="https://www.strava.com/athletes/66599691" target="_blank">
        <img src="public/assets/strava.png" alt="Strava">
      </a>
      <a href="https://www.instagram.com/jmfernaal" target="_blank">
        <img src="public/assets/instagram.png" alt="Instagram">
      </a>
      <a href="https://www.linkedin.com/in/jmfernaal" target="_blank">
        <img src="public/assets/linkedin.png" alt="LinkedIn">
      </a>
    </div>
    <p class="created">©️ Creado por jmfernaal 2025</p>
  </footer>
  `;
};

const Footer = () => {
  return template();
};

export default Footer;