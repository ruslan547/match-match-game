import s from './App.scss';
import Router from './shared/services/Router';
import AboutGame from './pages/AboutGame/AboutGame';
import RouteConstants from './shared/constants/route.constants';
import Header from './shared/companents/Header/Header';

interface AppProp {
  router: Router
}

interface IApp {
  router: Router;
  appTag: HTMLElement;
}

class App implements IApp {
  router;

  appTag;

  constructor({ router }: AppProp) {
    this.router = router;
    this.appTag = this.createAppTag();
    this.initRouter();
  }

  createAppTag = () => {
    const appTag = document.createElement('div');

    appTag.classList.add(s.app);
    appTag.append(new AboutGame({
      header: new Header().render(),
    }).render());

    return appTag;
  };

  initRouter = () => {
    this.router
      .add('/', () => {
      })
      .add(RouteConstants.ABOUT, () => {
        console.log('about');
        this.appTag.replaceWith(new AboutGame({
          header: new Header().render(),
        }).render());
      })
      .add('best', () => {
        console.log('best');
      })
      .add('settings', () => {
        console.log('sett');
        this.appTag.replaceWith('settings');
      });
  };

  render = () => this.appTag;
}

export default App;
