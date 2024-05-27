interface educationInfo {
  kind: "education";
  institution: string;
  degree: string;
  dateStart: Date;
  dateEnd: Date;
  extraInfo: string[];
}


const educationInfoPrototype: educationInfo = {
  kind: "education",
  institution: "",
  degree: "",
  dateStart: new Date(),
  dateEnd: new Date(),
  extraInfo: [],
};

const test = typeof educationInfoPrototype;

interface workExperienceInfo {
  kind: "workExperience";
  employer: string;
  position: string;
  dateStart: Date;
  dateEnd: Date;
  extraInfo: string[];
}

interface courseInfo {
  kind: "courseInfo";
  institution: string;
  courseTitle: string;
  courseHours: number | null;
  extraInfo: string[];
}

interface certificationInfo {
  kind: "certification";
  institution: string;
  courseTitle: string;
  courseHours: number | null;
  extraInfo: string[];
}

interface projectInfo {
  kind: "project";
  projectTitle: string;
  extraInfo: string[];
}

interface volunteerInfo {
  kind: "volunteer";
  employer: string;
  position: string;
  dateStart: Date;
  dateEnd: Date;
  extraInfo: string[];
}

interface infoInput {
  label: string;
  placeholder: string;
  type: string;
}

function prototypeToInputs(prototype: Object): infoInput[] {
  function valToType(val: string | Date | number | null) {
    switch (typeof val) {
      case typeof "":
        return "text";
      case typeof new Date():
        return "date";
      case typeof 0:
        return "numeric";
      default:
        return "text";
    }
  }
  return Object.entries(prototype).map(([key, val]) => {
    return { label: key, placeholder: val, type: valToType(val) };
  });
}
