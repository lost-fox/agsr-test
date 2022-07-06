export interface Docs {
  id: number;
  category: string;
  title: string;
  date: string;
  number: string;
  file: string;
}

export interface DocsType {
  docs: Docs[];
}
