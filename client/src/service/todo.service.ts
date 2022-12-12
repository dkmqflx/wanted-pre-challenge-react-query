import axios from 'axios';
import TokenService from './token.service';
import { BASE_URL } from '@constants/http';

class Todo {
  private http;

  constructor() {
    this.http = axios.create({
      baseURL: BASE_URL,
    });
  }

  setInterCepters() {
    const token = TokenService.getToken();

    this.http.interceptors.request.use((req) => {
      if (req.headers) {
        req.headers.authorization = token;
      }
      return req;
    });
  }

  async createTodo(title: string, content: string) {
    this.setInterCepters();
    const { data } = await this.http.post('/todos', { title, content });
    return data;
  }
}

export default new Todo();
