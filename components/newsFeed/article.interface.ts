export enum Category {
  GENERAL = "GENERAL",
  BUSINESS = "BUSINESS",
  ENTERTAINMENT = "ENTERTAINMENT",
  HEALTH = "HEALTH",
  SCIENCE = "SCIENCE",
  SPORTS = "SPORTS",
  TECHNOLOGY = "TECHNOLOGY",
}
export interface DBPublisherInterace {
  id: number;
  name: string;
  category: Category;
  leftVotes: number;
  rightVotes: number;
  language: string;
  country: string;
}
export interface DBArticleInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  leftVotes: number;
  rightVotes: number;
  country: string;
  publishDate: string;
  category: Category;
  source: DBPublisherInterace;
  votes: VoteInterface[];
}
export interface VoteInterface {
  id?: number;
  value: number;
  articleId?: number;
}
