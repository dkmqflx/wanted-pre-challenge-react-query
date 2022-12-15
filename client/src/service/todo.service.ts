import axios from 'axios';
import TokenService from './token.service';
import { TokenServiceImp } from './token.service';
import { BASE_URL } from '@constants/http';

class TodoService {
  private http;

  constructor(private tokenService: TokenServiceImp) {
    this.http = axios.create({
      baseURL: BASE_URL,
    });
  }

  setInterCepters() {
    const token = this.tokenService.getToken();

    this.http.interceptors.request.use((req) => {
      if (req.headers) {
        req.headers.authorization = token;
      }
      return req;
    });

    this.http.interceptors.response.use(
      (response) => {
        return response;
      },
      () => {
        if (window.confirm('에러가 발생했습니다. 다시 로그인해주세요')) {
          this.tokenService.deleteToken();
        }
      }
    );
  }

  async getTodos() {
    this.setInterCepters();
    const { data } = await this.http.get('/todos');

    return data.data;
  }

  async getTodoById(id?: string) {
    this.setInterCepters();
    const { data } = await this.http.get(`/todos/${id}`);
    return data.data;
  }

  async createTodo(title: string, content: string) {
    this.setInterCepters();
    const { data } = await this.http.post('/todos', { title, content });
    return data.data;
  }

  async updateTodo(id: string, title: string, content: string) {
    this.setInterCepters();
    const { data } = await this.http.put(`/todos/${id}`, { title, content });
    return data.data;
  }

  async deleteTodo(id: string) {
    this.setInterCepters();
    const { data } = await this.http.delete(`/todos/${id}`);
    return data.data;
  }
}

export default new TodoService(TokenService);
