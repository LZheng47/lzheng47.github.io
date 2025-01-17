type project = {
  header: string;
  description: string;
  tags: string[];
  date: { [key: string]: string };
  image: string[];
  link: { [key: string]: string };
};

export default project;