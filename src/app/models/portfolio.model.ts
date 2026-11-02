export interface NavigationLink {
  id: string;
  label: string;
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  dates: string;
  highlights: string[];
}

export interface PortfolioProject {
  name: string;
  category: string;
  description: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface EducationEntry {
  qualification: string;
  institution: string;
  location: string;
  dates: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
  summary: string;
  navigation: NavigationLink[];
  rotatingFocuses: string[];
  skills: SkillGroup[];
  experience: WorkExperience[];
  projects: PortfolioProject[];
  education: EducationEntry[];
}