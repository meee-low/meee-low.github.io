export interface ProjectInfo {
  id: number;
  title: string;
  description: string;
  skills: string[];
  languagesAndFrameworks: string[];
  additionalInfo: string;
  projectUrl: string;
  imagePath: string;
  highlighted: boolean;
  hidden: boolean;
  filterableTags: string[];
}

export interface Tag {
  label: string;
  filterEnabled: boolean;
  baseOrder: number;
}
