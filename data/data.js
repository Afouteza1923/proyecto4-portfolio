const data = {
  name: "José María Fdez. Alonso (Chema)",
  address: "Lugar O Outeiriño, 16, 36892 Ponteareas, Pontevedra",
  email: "josemaria@jmfernaal.com",
  avatar: "/public/assets/20240402_143224.jpg",
  aboutMe: "Soy una persona accesible, cordial y honesta, con más de 25 años de experiencia en el ámbito comercial en diversos sectores. Soy el creador del Ecommerce de ropa, calzado y complementos jmfernaalshop, así como del logotipo de A Riada do Tea. Mi pasión por la tecnología, la música y el ciclismo (deporte que practico activamente) me ha llevado a cursar actualmente un Bootcamp de Desarrollo Web Full Stack en The Power Business School. En dicho programa estoy plenamente involucrado en la creación de varios proyectos, utilizando los lenguajes y metodologías más actuales para optimizar el código, garantizando que sea más limpio y fácil de comprender.",
  education: {
    degree: "Técnico Superior en Anatomía Patológica",
    university: "Instituto Meixueiro Ricardo Mella",
    graduationYear: 1999,
    honors: "Técnico Superior",
    relevantCourses: [
      "Bootcamp Full Stack Developer",
      "Introducción a Programación Python",
      "Gestión de Ventas, Marketing Directo y Utilización de Redes Sociales en la Gestión Comercial",
      "Especialización en Dirección de Marketing",
      "Comunicación Efectiva, Colaboración y Gestión de Crisis en la Empresa"
    ],
  },
  workExperience: [
    {
      position: "Gestor Programa Generación Digital Pymes",
      company: "Galicia Business School",
      startDate: "02/2025",
      endDate: "Actualidad",
      description:"Captación y gestión de responsables de empresas de 1 a 249 empleados en Galicia, para que se beneficien del Programa Generación Digital Pymes. Hago llamadas telefónicas en frío, contacto leads, envío correos electrónicos y gestiono documentación. Empleando las siguientes herramientas CRM para la gestión de correo electrónico, empresas y agenda.",
    },
    {
      position: "Gestor de Proyectos Web Kit Digital",
      company: "SiWeb Planificación Integral Web",
      startDate: "09/2024",
      endDate: "12/2024",
      description: "Realizo control de calidad, comprobación de los datos y productos solicitados por parte de las empresas y autónomos con relación a la subvención del KIT DIGITAL para la digitalización de estas (Web Profesional, Tienda Online, RRSS, SEO, Puesto de Trabajo Seguro) bien con los propios interesados o sus representantes legales, asesorías, gestorías, abogados siendo el gestor de su proyecto en todo el proceso, un proceso que va desde la solicitud, pasando por la subsanación si así se requiere desde el Kit Digital como la firma de contratos y posterior firma de acuerdos en la plataforma del Kit Digital, cobro del IVA y la justificación del proyecto. Empleando para ello las siguientes herramientas Core, OCM, Plataforma Gestión Kit Digital, Correo Electrónico, Slack, Anydesk, Holded.",
    },
    {
      position: "E-Commerce Manager, Gestor de Ventas Digital, Creador de jmfernaalshop.com",
      company: "jmfernaalshop",
      startDate: "10/2021",
      endDate: "06/2023",
      description: "Creo la web de comercio electronico jmfernaalshop.com ecommerce de moda, ropa, calzado y complementos en la que realizo la gestión y actualización de contenidos con las siguientes herramientas Shopify, Canva, Metricool, Meta, Microsoft Excel, teléfono, tablet, Pc, email, RRSS, Google, así como la gestión de pedidos de clientes y proveedores en las plataformas y aplicaciones por estos establecidas."
    }
  ],

  skills: [
    { name: "HTML5", logo: "public/assets/html5.png" },
    { name: "CSS3", logo: "public/assets/css-3.png" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", logo: "public/assets/node-js.svg" },
    { name: "Visual Studio Code", logo: "public/assets/visual-studio-code.svg" },
    { name: "GitHub", logo: "public/assets/github.png" },
    { name: "Frontend and Backend Development", logo: "public/assets/desarrollo-Back-end.png" },
  ],
  projects: [
    {
      title: "Landing Page Ecommerce",
      description: "Creo mi propio diseño para un ecommerce, haciendo un buen uso de variables Css, reutilización de estilos con el uso de clases, uso de Grip y Flex, esta página es full responsive, con una buena semántica y accesibilidad, con alguna meta etiqueta que mejora el SEO y con enlaces a los productos reales. Lenguajes utilizados HTML y CSS ",
      link: "https://github.com/Afouteza1923/proye-uno-jmfernaal",
      preview: "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&w=500",
    },
    {
      title: "Tienda de Filtros",
      description: "Relacionado con el proyecto Landing Page Ecommerce realizo una tienda en la que poder filtrar los procductos, estos son pintados en HTML mediante DOM. Lenguajes utilizados HTML, CSS Y javascript.",
      link: "https://github.com/Afouteza1923/proye-dos-tienda-de-filtros",
      preview: "https://images.unsplash.com/photo-1621600411688-4be93cd68504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Pinterest Async",
      description: "En este proyecto realizaremos una réplica de pinterest. Esta página nos permitirá ver diferentes tipos de imágenes mediante la búsqueda que realiza un usuario. Será un proyecto hecho con VITE, creando componentes para repartir y reutilizar mejor nuestro código. Utilizaremos la API de unsplash para realizar las solicitudes y que nos permita obtener diferentes imágenes según la búsqueda.Esta es la documentación de la API: https://unsplash.com/developers Todos los datos que aparecen pintados se obtienen mediante la API",
      link: "https://github.com/Afouteza1923/proye-3-pinterest-components",
      preview: "https://images.unsplash.com/photo-1661160094555-a798a7df499f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHBpbnRlcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Portfolio Website",
      description: "Este proyecto se basa en plasmar un portfolio personal, en el que se muestren los proyectos realizados, la formación académica y la experiencia laboral. Se ha utilizado HTML, CSS y JavaScript para su desarrollo. Se ha hecho uso de la API de Github para mostrar los repositorios y de la API de Unsplash para mostrar las imágenes de los proyectos.",
      link: "https://github.com/Afouteza1923/proyecto4-portfolio",
      preview: "https://images.unsplash.com/photo-1545665277-5937489579f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fHww",
    },
  ],
};

export default data;
