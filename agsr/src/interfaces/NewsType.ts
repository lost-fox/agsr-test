export interface News {
  id: number;
  img_url: string;
  title: string;
  date: string;
  info: string;
}

export interface NewsType {
  news: News[];
}
