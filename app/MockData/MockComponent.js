class MockComponent {
  constructor() {
    this.state = {
      comics: [],
      isLoading: false,
      loginCreds: {},
      signupCreds: {},
    };
  }

  setState(obj) {
    Object.keys(obj).forEach(key => {
      this.state[key] = obj[key];
    });
  }
}

export default MockComponent;
