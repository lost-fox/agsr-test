export interface NewsType {
  id: number;
  img_url: string;
  title: string;
  date: string;
  info: string;
}

export interface NewsTypeProps {
  value: NewsType;
}
