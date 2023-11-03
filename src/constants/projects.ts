import petspaw_sm from '../assets/projects/pets-paw-sm.jpg'
import petspaw_md from '../assets/projects/pets-paw-md.jpg'
import petspaw_lg from '../assets/projects/pets-paw.jpg'


export interface IProject {
  id: number;
  name: string;
  description: string;
  photo: {
    sm: string;
    md: string;
    lg: string;
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
      md: petspaw_md,
      lg: petspaw_lg,
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
      md: petspaw_md,
      lg: petspaw_lg,
      alt: "pets-paw",
    },
    stack: ['React'],
    demo_link: 'o',
    repo_link: 'a',
  }
]