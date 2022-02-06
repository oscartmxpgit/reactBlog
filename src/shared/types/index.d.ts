export interface PostInterface {
  image?: string;
  id?: string;
  title: string;
  repo: string;
  desc: string;
  date: string;
  tags: string[];
  content?: string;
  thumb?: string;
}
export interface ProjectI {
  title?: string;
  id: string;
  type: string;
  name: string;
  date: string;
  language: string;
  tool: string;
  desc: string;
  tags: string[];
  stack: string[];
  repo: string; // github repo url
}
export interface MatterProps extends PostInterface {
  id: string;
}

export interface FieldData {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
}
