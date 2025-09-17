import { Project } from "../front-portafolio/interfaces/proyects.interface";

export const projects: Project[] = [
  {
    id: 1,
    name: "Gif-Map",
    technologies: ["Angular", "TypeScript", "HTML", "CSS"],
    description: "Proyecto que permite buscar y mostrar GIFS consumiendo la Api Giphy",
    githubUrl: "https://github.com/DinoMatheow/Lista-de-gifs",
    previewUrl: "https://dinomatheow.github.io/Lista-de-gifs/",
    imageUrl: "assets/images/proyects/gifApp.png",
    features: [
      "Buscador Gif",
      "Lista de resultados",
      "Historial de busquedad"
    ]
  },
  {
    id: 2,
    name: "Map-Box",
    technologies: ["Angular", "TypeScript", "Tailwind CSS", "RxJS"],
    description: "Aplicación web que permite agregar marcador es dinámicos y mostrar coordenadas"
    + "geográficas en un mapa utilizando la API de MAPBOX",
    githubUrl: "https://github.com/DinoMatheow/Maptest",
    previewUrl: "https://maptest-oraq.vercel.app/fullscream",
    imageUrl: "/assets/images/proyects/map.png",
    features: [
      "Buscador Gif",
      "Lista de resultados",
      "Historial de busquedad"
    ]
  },
  {
    id: 3,
    name: "Spotify-App",
    technologies: ["Angular", "TypeScript", "Tailwind CSS", "React", "Astro"],
    description: "Portfolio personal desarrollado con Angular y Tailwind CSS",
    githubUrl: "https://github.com/DinoMatheow/SpotifyApp",
    previewUrl: "https://spotify-app-one-opal.vercel.app/",
    imageUrl: "/assets/images/proyects/spotify.png",
    features: [
      "Diseño responsive",
      "Animaciones",
      "Modo oscuro"
    ]
  },
  {
    id: 4,
    name: "E-comerce",
    technologies: ["Angular", "TypeScript", "Tailwind CSS", "RxJS"],
    description: "Aplicación para gestionar tareas con persistencia local",
    githubUrl: "https://github.com/DinoMatheow/FakeStore",
    previewUrl: "https://ecomerce-store-nine.vercel.app/",
    imageUrl: "/assets/images/proyects/ecomerce.png",
    features: [
      "CRUD de tareas",
      "Filtros",
      "Persistencia local"
    ]
  },
  // {
  //   id: 5,
  //   name: "Weather App",
  //   technologies: ["Angular", "TypeScript", "CSS", "API"],
  //   description: "Aplicación del clima que consume API externa",
  //   githubUrl: "https://github.com/DinoMatheow/weather-app",
  //   previewUrl: "https://dinomatheow.github.io/weather-app/",
  //   imageUrl: "/assets/images/project-coffee.png",
  //   features: [
  //     "Pronóstico del tiempo",
  //     "Búsqueda por ciudad",
  //     "Datos en tiempo real"
  //   ]
  // },
  // {
  //   id: 6,
  //   name: "E-commerce",
  //   technologies: ["Angular", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  //   description: "Tienda online completa con carrito de compras",
  //   githubUrl: "https://github.com/DinoMatheow/ecommerce",
  //   previewUrl: "https://dinomatheow.github.io/ecommerce/",
  //   imageUrl: "/assets/images/project-coffee.png",
  //   features: [
  //     "Catálogo de productos",
  //     "Carrito de compras",
  //     "Sistema de usuarios"
  //   ]
  // }
];
