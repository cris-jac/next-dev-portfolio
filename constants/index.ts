export const bannerTitlesData = [
    {
        title: "Sobre mi",
        textColor: "text-primary-color",
        bgColor: "bg-light-color",
        bannerPicture: {
            alt: "banner 1",
            ref: "/banner1.png",
        }
    },
    { 
        title: "Proyectos",
        textColor: "text-light-color",
        bgColor: "bg-primary-color",
        bannerPicture: {
        alt: "banner 2",
        ref: "/banner2.png",
        } 
    },
    {
        title: "Contacto",
        textColor: "text-light-color",
        bgColor: "bg-primary-color",
        bannerPicture: {
          alt: "banner 3",
          ref: "/banner3.png",
        },
    }
]

export const projectsData = [
    { 
        title: "Restaurant UI",
        img: "/restaurantUI.jpg",
        links: {
            repositoryUrl: "https://github.com/cris-jac/restaurantUi-React"
        },
        projectType: "FRONT-END",
        techTags: ["TypeScript", "React", "RTK", "Material UI"],
        description: "Sitio web de restaurant, incluyendo paginas: menu, detalles, carrito, autenticacion, pagos, ordenes. Peticiones de API y contexto con RTK. Pagos con API de Stripe. Autenticacion con tokens JWT y localStorage. Requiere uso de Restaurant API, para funcionamiento completo."
    },
    { 
        title: "Restaurant API",
        img: "/restaurantAPI.png",
        links: {
            repositoryUrl: "https://github.com/cris-jac/restaurantApi-NetSql"
        },
        projectType: "BACK-END",
        techTags: [".NET", "PostgreSQL", "EF", "Identity"],
        description: "REST API con tematica restaurant/compra online, con 14 endpoints. Con PostgreSQL como base de datos y EntityFramework como ORM. Autenticacion basada en roles con Identity y JWT tokens. Pagos realizados con API de Stripe."
    },
    { 
        title: "Books API",
        img: "/booksAPI.png",
        links: {
            repositoryUrl: "https://github.com/cris-jac/booksApi_netMongo"
        },
        projectType: "BACK-END",
        techTags: [".NET", "MongoDB"],
        description: "REST API con tematica de libros, con mas de 45 endpoints. Con MongoDB como base de datos. Incluye autenticacion y tokens JWT. Repository Pattern."
    },
    { 
        title: "Dollar-Peso Converter",
        img: "/dolarArg.jpg",
        links: {
            repositoryUrl: "https://github.com/cris-jac/dollar-converter-vanillajs",
            demoUrl: "https://dollar-converter-vanillajs.vercel.app/"
        },
        projectType: "FRONT-END",
        techTags: ["JavaScript", "HTML", "CSS", "Bootstrap"],
        description: "Sitio web de conversion enter dolares ($US) y pesos blue ($ARS). Datos provistos por API de terceros ‘DolarApi’.  Incluye otro tipo de ‘dolares’ usados en el pais (oficial, bolsa, etc.). Cuenta con plot comparativo que ilustra las diferencias de las monedas."
    },
    { 
        title: "EDA results",
        img: "/EDA.png",
        links: {
            repositoryUrl: "https://github.com/cris-jac/data_analyst_cv",
            demoUrl: "https://cristian-apaza.netlify.app/#/p01"
        },
        projectType: "FRONT-END",
        techTags: ["React", "Tailwind.css"],
        description: "Sitio web de analisis de datos, basado en informacion provista por un EDA (Analisis exploratorio de datos). El EDA fue elaborado en JupyterNotebook con Python y librerias. Plot de exportados como HTMLs. "
    }
];

export const aboutTextData = [
    "Soy un estudiante de desarrollo de software, apasionado por la tecnologia y el aprendizaje. Mi viaje inicio con desarrollo web, lo que me llevo a frontend con React y posteriormente a backend con .NET y Node.js, al menos por ahora, ya que planeo expandirme a otras tecnologias.",
    "A lo largo de este viaje, participe en varios proyectos, que desafiaron mis habilidades de resolver problemas. En estas experiencias note que la importancia de una mente abierta, la colaboracion y el feedback son la clave de un efectivo trabajo de equipo. Y mientras siga este viaje, seguire aprendiendo para crear o ser parte del desarrollo de proyectos que tenga un impacto positivo.",
    "Mi trabajo, pudiendo ser frontend o backend, se enfoca en la integracion de sitios web funcionales, que trabajen desde el servidor hasta las manos del cliente. Para ello, yo realizo:"
]

export const aboutSvgData = [
    { label: "Diseño de base de datos", svgFile: "/database.svg" },
    { label: "Integración de API", svgFile: "/code3.svg" },
    { label: "Diseño de interfaz de usuario (UI)", svgFile: "/display.svg" },
]