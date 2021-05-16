import './App.scss';
import Router from './shared/services/router.service';
import AboutGame from './pages/AboutGame/AboutGame';
import RouteConstants from './shared/constants/route.constants';
import Header from './shared/companents/Header/Header';
import { IComponent } from './shared/interfaces';
import TagConstants from './shared/constants/tag.constants';

class App implements IComponent {
  private content: HTMLElement;

  private app: HTMLElement;

  constructor() {
    this.app = document.createElement(TagConstants.DIV);
    this.content = document.createElement(TagConstants.DIV);
    this.initRouter();
  }

  public render = () => {
    this.app.classList.add('app');
    this.content.classList.add('content');
    this.content.append(new AboutGame().render());
    this.app.append(new Header().render());
    this.app.append(this.content);

    return this.app;
  };

  private initRouter = () => {
    new Router({
      mode: RouteConstants.HASH,
      root: RouteConstants.HASH_ABOUT,
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
