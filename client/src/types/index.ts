export interface ProjectCard {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryLabel: string;
  categoryClass: string;
  tech: string[];
  links: {
    github: string;
    live: string;
  };
}

export interface SkillItem {
  name: string;
  percentage: number;
}
