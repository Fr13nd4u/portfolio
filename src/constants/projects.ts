import petspaw from '../assets/projects/pets-paw.jpg'
import petspaw_sm from '../assets/projects/pets-paw-sm.jpg'


export interface IProject {
  id: number;
  name: string;
  description: string;
  photo: {
    sm: string;
    md: string;
    alt: string;
  };
  stack: string[];
  demo_link?: string;
  repo_link?: string;
}

export const projects: IProject[] = [
  {
    id: 1,
    name: "Pets Paw",
    description: "Pets Paw description",
    photo: {
      sm: petspaw_sm,
      md: petspaw,
      alt: "pets-paw",
    },
    stack: ['React'],
    demo_link: 'o',
    repo_link: 'a',
  },
  {
    id: 2,
    name: "Pets Paw 2",
    description: "Pets Paw 2 description",
    photo: {
      sm: petspaw_sm,
      md: petspaw,
      alt: "pets-paw",
    },
    stack: ['React'],
    demo_link: 'o',
    repo_link: 'a',
  }
]