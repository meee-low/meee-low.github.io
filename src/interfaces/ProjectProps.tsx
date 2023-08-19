interface ProjectData {
  id: number;
  title: string;
  description: string;
  skills: string[];
  languagesAndFrameworks: string[];
  additionalInfo: string;
  imagePath: string;
  projectUrl: string;
  highlighted: boolean;
  hidden: boolean;
}

export default ProjectData;
