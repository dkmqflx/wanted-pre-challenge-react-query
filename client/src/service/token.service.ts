export interface TokenServiceImp {
  getToken(): string | null;
  setToken(token: string): void;
  deleteToken(): void;
}

class TokenService implements TokenServiceImp {
  getToken() {
    return localStorage.getItem('token-todo');
  }

  setToken(token: string) {
    localStorage.setItem('token-todo', token);
  }

  deleteToken() {
    localStorage.removeItem('token-todo');
  }
}

export default new TokenService();
