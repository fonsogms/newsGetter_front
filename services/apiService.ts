import axios, { AxiosError, AxiosInstance } from "axios";
import { url } from "../globalVariables";
import { PoliticalInclination } from "../components/registration/Registration2";
import { PreviewData } from "../components/AddArticle/previewData";
import {
  DBArticleInterface,
  VoteInterface,
} from "../components/newsFeed/article.interface";
class ApiService {
  token: string;
  url: string;
  client?: AxiosInstance;
  setApiError?: React.Dispatch<React.SetStateAction<string[]>>;
  constructor() {
    this.url = url;
    this.token = "";
    this.client = null;
    this.setApiError = null;
  }
  init(setApiError: React.Dispatch<React.SetStateAction<string[]>>) {
    this.setApiError = setApiError;
  }
  initCall() {
    let headers: { Accept: string; Authorization?: string } = {
      Accept: "application/json",
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    this.client = axios.create({
      baseURL: this.url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  }

  setToken(token: string) {
    this.token = token;
  }
  handleError(err: Error | AxiosError) {
    if (axios.isAxiosError(err)) {
      const axiosErr = err as AxiosError;

      this.setApiError([axiosErr.response.data.message]);
    } else {
      console.log(err);
    }
    return false;
  }

  async getToken(saved_token?: string) {
    try {
      const { data } = await this.initCall().post<{ token: string }>(
        "/api/auth/loggedin",
        { token: saved_token }
      );
      return data.token;
    } catch (err: any) {
      return false;
    }
  }
  async login(username: string, password: string) {
    const { data } = await this.initCall().post<{ token: string }>(
      "/api/auth/signin",
      {
        username: username,
        password: password,
      }
    );
    return data;
  }
  async register(
    username: string,
    password: string,
    politicalInclination: PoliticalInclination,
    countryId: string
  ) {
    const { data } = await this.initCall().post<{ token: string }>(
      "/api/auth/signup",
      {
        username: username,
        password: password,
        politicalInclination: politicalInclination,
        country: countryId,
      }
    );
    return data;
  }
  async previewArticle(url: string) {
    const { data: previewData } = await this.initCall().get<PreviewData>(
      "/api/urlPreview?url=" + url
    );
    return previewData;
  }
  urlInput: string;
  title: string;
  description: string;
  image: string;
  siteName: string;
  category: string;
  async saveArticle({
    urlInput,
    title,
    description,
    image,
    siteName,
    category,
  }: {
    urlInput: string;
    title: string;
    description: string;
    image: string;
    siteName: string;
    category: string;
  }) {
    const { data } = await this.initCall().post<{ success: boolean }>(
      "/api/news/add",
      {
        url: urlInput,
        category: category.toLocaleUpperCase(),
        title,
        description,
        image,
        siteName,
      }
    );
    return data;
  }

  async getArticles(category: string, limit: number) {
    const { data } = await this.initCall().get<{
      articles: DBArticleInterface[];
      votes: VoteInterface[];
    }>(`/api/news?category=${category}&limit=${limit}`);
    return data;
  }
  async viewArticle(index, source) {
    const data = await this.initCall().post("/api/news/view", {
      articleId: index,
      publisherId: source.id,
    });
    return data;
  }
  async voteArticle(index, curVoteVal, publisher) {
    const { data } = await this.initCall().post(url + "/api/news/vote", {
      articleId: index,
      value: curVoteVal,
      publisherId: publisher.id,
    });
    return data;
  }
}

export const apiService = new ApiService();
