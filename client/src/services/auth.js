class Auth {
  static instance;

  isAuthenticated = false;

  constructor() {
    if (Auth.instance) return Auth.instance;
    Auth.instance = this;
  }

  authenticate(token, cb) {
    if (token) {
      this.isAuthenticated = true;
      localStorage.setItem('jwt', token);
      cb && cb();
    }
  }

  signout() {
    this.isAuthenticated = false;
    localStorage.removeItem('jwt');
  }
}

const auth = new Auth();
const auth2 = new Auth();

console.log(auth === auth2);

export { auth };