import { Mode } from "src/styled";

export interface DefaultValues {
  username: string;
  mode: Mode;
  soundEnabled: boolean;
  documentTitle: string;
}

export interface ExtendedData {
  resume: string;
  about: {
    paragraphs: string[];
    skills: string[];
    imageUrl: string;
  };
  jobs: Job[];
  featuredProjects: FeaturedProject[];
  otherProjects: Project[];
  contactMessage: string;
}

interface Job {
  title: string;
  company: string;
  companyUrl: string;
  date: {
    from: string;
    to: string;
  };
  accomplishments: string[];
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  date: {
    from: string;
    to: string;
  };
  repoUrl?: string;
  externalUrl?: string;
}

type FeaturedProject = Project & { imageUrl: string };
