import { writable, type Writable } from "svelte/store";

type LanguageMap = {
  [lang: string]: string;
};

type CVTextObj = {
  langs: LanguageMap;
  tags: string[];
};

class CVText {
  langs: LanguageMap;
  tags: string[];
  constructor(langs: LanguageMap = {}, tags: string[] = []) {
    this.langs = langs;
    this.tags = tags;
  }
  serialize(): string {
    return JSON.stringify(this.toObject());
  }

  static deserialize(source: string) {
    const obj = JSON.parse(source);
    return new CVText(obj.langs??{}, obj.tags??[]);
  }

  toObject(): CVTextObj {
    return { langs: this.langs, tags: this.tags };
  }

  static fromObject(obj: CVTextObj): CVText {
    return new CVText(obj.langs, obj.tags);
  }

  static fromSingleString(s: string): CVText {
    const langMap: LanguageMap = { default: s };
    return new CVText(langMap, []);
  }

  static empty(): CVText {
    return new CVText({ default: "" }, []);
  }
}

class PersonalInfo {
  name: CVText;
  phone: CVText;
  email: CVText;
  linkedin: CVText;
  website: CVText;
  github: CVText;

  constructor(
    name: CVText,
    phone: CVText,
    email: CVText,
    linkedin: CVText,
    website: CVText,
    github: CVText,
  ) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.linkedin = linkedin;
    this.website = website;
    this.github = github;
  }

  static fromSimpleStrings(
    name: string,
    phone: string,
    email: string,
    linkedin: string,
    website: string,
    github: string,
  ) {
    const nName = CVText.fromSingleString(name);
    const nPhone = CVText.fromSingleString(phone);
    const nEmail = CVText.fromSingleString(email);
    const nLinkedin = CVText.fromSingleString(linkedin);
    const nWebsite = CVText.fromSingleString(website);
    const nGithub = CVText.fromSingleString(github);
    return new PersonalInfo(
      nName,
      nPhone,
      nEmail,
      nLinkedin,
      nWebsite,
      nGithub,
    );
  }

  static empty(): PersonalInfo {
    return PersonalInfo.fromSimpleStrings("", "", "", "", "", "");
  }
}

export class WorkExperienceUnit {
  position: CVText;
  employer: CVText;
  dateStart: CVText;
  dateEnd: CVText;
  bulletPoints: CVText[];

  constructor(
    position: CVText,
    employer: CVText,
    dateStart: CVText,
    dateEnd: CVText,
    bulletPoints: CVText[],
  ) {
    this.position = position;
    this.employer = employer;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.bulletPoints = bulletPoints;
  }

  static empty() {
    return new WorkExperienceUnit(
      CVText.empty(),
      CVText.empty(),
      CVText.empty(),
      CVText.empty(),
      [],
    );
  }
}

class EducationUnit {
  degree: CVText;
  institution: CVText;
  dateStart: CVText;
  dateEnd: CVText;
  bulletPoints: CVText[];

  constructor(
    degree: CVText,
    institution: CVText,
    dateStart: CVText,
    dateEnd: CVText,
    bulletPoints: CVText[],
  ) {
    this.degree = degree;
    this.institution = institution;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.bulletPoints = bulletPoints;
  }
}

class ProjectUnit {
  title: CVText;
  description: CVText;
  link: CVText;
  bulletPoints: CVText[];

  constructor(
    title: CVText,
    description: CVText,
    link: CVText,
    bulletPoints: CVText[],
  ) {
    this.title = title;
    this.description = description;
    this.link = link;
    this.bulletPoints = bulletPoints;
  }
}

class BulletPoints {
  bulletPoints: CVText[];

  constructor(bulletPoints: CVText[]) {
    this.bulletPoints = bulletPoints;
  }

  serialize(): string {
    return JSON.stringify(this.bulletPoints.map((b) => b.serialize()));
  }

  static deserialize(source: string) {
    let sourceTrimmed = source.trim();
    if (sourceTrimmed.startsWith("[")) {
      sourceTrimmed = sourceTrimmed.slice(1);
    }
    if (sourceTrimmed.endsWith("]")) {
      sourceTrimmed = sourceTrimmed.slice(0, sourceTrimmed.length);
    }
    const objBulletPointsSerialized = sourceTrimmed.split(",");
    const objBulletPoints = objBulletPointsSerialized.map((b) =>
      CVText.deserialize(b)??CVText.empty(),
    );
    return new BulletPoints(objBulletPoints);
  }

  static empty() {
    return new BulletPoints([]);
  }
}

// ===== Sections =====

type WorkExperience = WorkExperienceUnit[];
type Education = EducationUnit[];
type Projects = ProjectUnit[];
type CoursesAndCertifications = CVText[];
type Languages = CVText[];
type Skills = CVText[];

interface FullInfo {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience;
  education: Education;
  coursesAndCertifications: CoursesAndCertifications;
  projects: Projects;
  skills: Skills;
  languages: Languages;
}

function serializeFullInfo(fullInfo: FullInfo) {
  return JSON.stringify(fullInfo);
}


// ==== STORE ====

export let userInfo: Writable<FullInfo> = writable({
  personalInfo: PersonalInfo.empty(),
  workExperience: [],
  education: [],
  coursesAndCertifications: [],
  projects: [],
  languages: [],
  skills: [],
});
