class TokenService {
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
