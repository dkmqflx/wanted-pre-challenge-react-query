import axios from 'axios';
import { BASE_URL } from '@constants/http';
import { loginInputType } from '@type/auth.types';

class AuthService {
  private request;

  constructor() {
    this.request = axios.create({
      baseURL: BASE_URL,
    });
  }

  async login({ email, password }: loginInputType) {
    const { data } = await this.request.post('/users/login', {
      email,
      password,
    });

    return data;
  }

  async signup({ email, password }: loginInputType) {
    const { data } = await this.request.post('/users/create', {
      email,
      password,
    });

    return data;
  }
}

export default new AuthService();
