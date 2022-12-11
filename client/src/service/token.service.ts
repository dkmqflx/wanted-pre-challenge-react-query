class TokenService {
  getToken() {
    return localStorage.getItem('token-todo');
  }

  setToken(token: string) {
    localStorage.setItem('token-todo', token);
  }
}

export default new TokenService();
