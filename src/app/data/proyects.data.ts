import { Project } from "../front-portafolio/interfaces/proyects.interface";

export const projects: Project[] = [
  {
    id: 1,
    name: "Gif-Map",
    technologies: ["Angular", "TypeScript", "HTML", "CSS"],
    description: "Proyecto que permite buscar y mostrar GIFS consumiendo la Api Giphy",
    githubUrl: "https://github.com/DinoMatheow/Lista-de-gifs",
    previewUrl: "https://dinomatheow.github.io/Lista-de-gifs/",
    imageUrl: "/assets/images/project-coffee.png",
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
    githubUrl: "https://github.com/DinoMatheow/Lista-de-gifs",
    previewUrl: "https://dinomatheow.github.io/Lista-de-gifs/",
    imageUrl: "/assets/images/project-coffee.png",
    features: [
      "Buscador Gif",
      "Lista de resultados",
      "Historial de busquedad"
    ]
  },
  {
    id: 3,
    name: "Gif-Map",
    technologies: ["Angular", "TypeScript", "Html", "CSS"],
    description: "Proyecto que permite buscar y mostrar GIFS consumiendo la Api Giphy",
    githubUrl: "https://github.com/DinoMatheow/Lista-de-gifs",
    previewUrl: "https://dinomatheow.github.io/Lista-de-gifs/",
    imageUrl: "/assets/images/project-coffee.png",
    features: [
      "Buscador Gif",
      "Lista de resultados",
      "Historial de busquedad"
    ]
  }
  // ... más proyectos
];