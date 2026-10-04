export interface Article {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

export interface CurationData {
  title: string;
  curationId: string;
  curationType: string;
  link: string | null;
  count: number;
  articles: Article[];
}


export type CurationList = CurationData[];