import { store } from './shared/services/store/store.service';
import './App.scss';
import Router from './shared/services/router.service';
import AboutGame from './pages/AboutGame/AboutGame';
import RouteConstants from './shared/constants/route.constants';
import Header from './shared/companents/Header/Header';
import { IComponent } from './shared/interfaces';
import TagConstants from './shared/constants/tag.constants';
import BestScore from './pages/BestScore/BestScore';
import GameSetting from './pages/GameSettings/GameSettings';
import Game from './pages/Game/Game';

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
        this.content?.firstChild?.replaceWith(new AboutGame().render());
      })
      .add(RouteConstants.BEST, () => {
        this.content?.firstChild?.replaceWith(new BestScore().render());
      })
      .add(RouteConstants.SETTINGS, () => {
        this.content?.firstChild?.replaceWith(new GameSetting().render());
      })
      .add(RouteConstants.GAME, () => {
        if (store.getState().user) {
          this.content?.firstChild?.replaceWith(new Game().render());
        } else {
          const link = document.createElement(TagConstants.A);
          link.href = RouteConstants.HASH_ABOUT;
          link.click();
        }
      });
  };
}

export default App;
