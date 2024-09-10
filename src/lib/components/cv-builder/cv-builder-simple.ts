import { writable } from "svelte/store";

export type BulletPoints = string[];

export interface WorkExperienceUnit {
  position: string;
  employer: string;
  dateStart: string;
  dateEnd: string;
  bulletPoints: BulletPoints;
}

export interface EducationUnit {
  degree: string;
  institution: string;
  dateStart: string;
  dateEnd: string;
  bulletPoints: BulletPoints;
}

export interface ProjectUnit {
  title: string;
  description: string;
  link: string;
  bulletPoints: BulletPoints;
}

export interface PersonalInfo {
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  website: string;
  location: string;
  github: string;
}

export type WorkExperience = WorkExperienceUnit[];
export type Education = EducationUnit[];
export type Projects = ProjectUnit[];
export type CoursesAndCertifications = BulletPoints;
export type Languages = BulletPoints;
export type Skills = BulletPoints;

export interface FullInfo {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience;
  education: Education;
  coursesAndCertifications: CoursesAndCertifications;
  projects: Projects;
  skills: Skills;
  languages: Languages;
}

// ==== STORE ====

export const makeEmptyInfo: () => FullInfo = () => {
  return {
    personalInfo: {
      name: "",
      phone: "",
      email: "",
      linkedin: "",
      website: "",
      location: "",
      github: "",
    },
    workExperience: [],
    education: [],
    coursesAndCertifications: [],
    projects: [],
    languages: [],
    skills: [],
  };
};

export let simpleCVStore = writable(makeEmptyInfo());
