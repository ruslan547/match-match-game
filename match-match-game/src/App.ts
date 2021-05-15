import './App.scss';
import Router from './shared/services/router';
import AboutGame from './pages/AboutGame/AboutGame';
import RouteConstants from './shared/constants/route.constants';
import Header from './shared/companents/Header/Header';

interface AppProp {
  router: Router
}

class App {
  private router;

  private content: HTMLElement;

  constructor({ router }: AppProp) {
    this.router = router;
    this.content = document.createElement('div');
    this.initRouter();
  }

  render = () => {
    const app = document.createElement('div');
    this.content = document.createElement('div');

    app.classList.add('app');
    this.content.classList.add('content');

    this.content.append(new AboutGame().render());
    app.append(new Header().render());
    app.append(this.content);

    return app;
  };

  initRouter = () => {
    this.router
      .add('/', () => {
      })
      .add(RouteConstants.ABOUT, () => {
        console.log('about');
        this.content?.firstChild?.replaceWith(new AboutGame().render());
      })
      .add('best', () => {
        console.log('best');
      })
      .add('settings', () => {
        console.log('sett');
        this.content?.firstChild?.replaceWith('settings');
      });
  };
}

export default App;
