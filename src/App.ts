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
import { setPage } from './shared/services/store/actions';
import { ClassesConstants } from './shared/constants/classes.constants';

class App implements IComponent {
  private content: HTMLElement;

  private app: HTMLElement;

  constructor() {
    this.app = document.createElement(TagConstants.DIV);
    this.content = document.createElement(TagConstants.DIV);
    this.initRouter();
  }

  private addClasses = () => {
    this.app.classList.add(ClassesConstants.APP);
    this.content.classList.add(ClassesConstants.CONTENT);
  };

  public render = () => {
    this.addClasses();
    this.content.append(new AboutGame().render());
    this.app.append(new Header().render());
    this.app.append(this.content);

    return this.app;
  };

  private initRouter = () => {
    new Router({
      mode: RouteConstants.HASH,
      root: RouteConstants.ROOT,
    })
      .add(RouteConstants.BEST_PATH, () => {
        this.content?.firstChild?.replaceWith(new BestScore().render());
        store.dispatch(setPage(RouteConstants.BEST));
      })
      .add(RouteConstants.SETTINGS_PATH, () => {
        this.content?.firstChild?.replaceWith(new GameSetting().render());
        store.dispatch(setPage(RouteConstants.SETTINGS));
      })
      .add(RouteConstants.GAME_PATH, () => {
        if (store.getState().user) {
          this.content?.firstChild?.replaceWith(new Game().render());
          store.dispatch(setPage(RouteConstants.GAME));
        } else {
          const link = document.createElement(TagConstants.A);
          link.href = RouteConstants.ABOUT;
          link.click();
        }
      })
      .add(RouteConstants.ABOUT_PATH, () => {
        this.content?.firstChild?.replaceWith(new AboutGame().render());
        store.dispatch(setPage(RouteConstants.ABOUT));
      });
  };
}

export default App;
