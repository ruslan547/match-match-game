interface AppI {
  str: string
}

class App implements AppI {
  str;

  constructor() {
    this.str = 'hi';
  }

  render() {
    return `${this.str}`;
  }
}

export default App;
