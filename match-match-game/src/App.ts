import Router from './shared/services/Router';

interface AppProp {
  router: Router
}

interface IApp {
  router: Router;
}

class App implements IApp {
  router;

  constructor({ router }: AppProp) {
    this.router = router;
    this.initRouter();
  }

  initRouter = () => {
    this.router
      .add('/', () => {
        const div = document.createElement('div');
        const about = document.createElement('a');
        about.href = '/#/about';
        about.innerText = 'about';

        const best = document.createElement('a');
        best.href = '/#/best';
        best.innerText = 'best';

        div.append(about, best);
        document.body.append(div);
      })
      .add('about', () => {
        document.body.innerText = 'this is about';
        const best = document.createElement('a');
        best.href = '/#/';
        best.innerText = 'root';
        document.body.append(best);
      })
      .add('best', () => {
        document.body.innerText = 'best';
        document.body.innerText = 'this is about';
        const best = document.createElement('a');
        best.href = '/#/';
        best.innerText = 'root';
        document.body.append(best);
      })
      .add('/settings', () => {
        document.body.innerText = 'setting';
      });
  };

  render = () => {
    const div = document.createElement('div');
    const about = document.createElement('a');
    about.href = '/#/about';
    about.innerText = 'about';

    const best = document.createElement('a');
    best.href = '/#/best';
    best.innerText = 'best';

    div.append(about, best);
    return div;
  };
}

export default App;
