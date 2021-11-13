import axios, { AxiosError, AxiosInstance } from "axios";
import { url } from "../globalVariables";

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
        url + "/api/auth/loggedin",
        { token: saved_token }
      );
      return data.token;
    } catch (err: any) {
      return false;
    }
  }
  async login(username: string, password: string) {
    const { data } = await this.initCall().post<{ token: string }>(
      url + "/api/auth/signin",
      {
        username: username,
        password: password,
      }
    );
    return data;
  }
}

export const apiService = new ApiService();
