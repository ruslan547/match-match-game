interface IApp {
  str: string
}

class App implements IApp {
  str;

  constructor() {
    this.str = 'hi';
  }

  render() {
    return `${this.str}`;
  }
}

export default App;
