export enum Category {
  GENERAL = "general",
  BUSINESS = "business",
  ENTERTAINMENT = "entertainment",
  HEALTH = "health",
  SCIENCE = "science",
  SPORTS = "sports",
  TECHNOLOGY = "technology",
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
}
