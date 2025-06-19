import { TechCategory } from "../tech-profile/interfaces/tech.interface";

export const TECH_DATA: TechCategory[] = [
  {
    title: 'Languages',
    items: [
      {
        name: 'JavaScript',
        svg: 'assets/svg/languageProgram/javascript.svg'
      },
      {
        name: 'TypeScript',
        svg: 'assets/svg/languageProgram/typescript.svg'
      },
      {
        name: 'CShart',
        svg: 'assets/svg/languageProgram/cShart.svg'
      },
      {
        name: 'PostgreSQL',
        svg: 'assets/svg/languageProgram/postgreSQL.svg'
      },
      {
        name: 'CSS',
        svg: 'assets/svg/languageProgram/css.svg'
      },
      {
        name: 'HTML',
        svg: 'assets/svg/languageProgram/html.svg'
      }
    ]
  },
  {
    title: 'Frameworks',
    items: [
      {
        name: 'Angular',
        svg: 'assets/svg/framework/angular.svg'
      },
      {
        name: 'Boostrap',
        svg: 'assets/svg/framework/boostrap.svg'
      },
      {
        name: 'React',
        svg: 'assets/svg/framework/react.svg'
      },
      {
        name: 'RxJs',
        svg: 'assets/svg/framework/rxJs.svg'
      },
      {
        name: 'Tailwind',
        svg: 'assets/svg/framework/tailwind.svg'
      }
    ]
  },
  {
    title: 'Others',
    items: [
      {
        name: 'Canva',
        svg: 'assets/svg/toolsOther/canva.svg'
      },
      {
        name: 'Excalidraw',
        svg: 'assets/svg/toolsOther/excalidraw.svg'
      },
      {
        name: 'Figma',
        svg: 'assets/svg/toolsOther/figma.svg'
      },
      {
        name: 'GitHub',
        svg: 'assets/svg/toolsOther/github.svg'
      }
    ]
  },
  // Agrega más categorías si deseas
];