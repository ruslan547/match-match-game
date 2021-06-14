import { IUser, IComponent } from '../../../shared/interfaces';
import TagConstants from '../../../shared/constants/tag.constants';
import DbService from '../../../shared/services/db.service';
import './BestPlayersList.scss';
import { DbConstants } from '../../../shared/constants/db.constants';
import { store } from '../../../shared/services/store/store.service';
import BestPlayer from '../BestPlayer/BestPlayer';
import { ClassesConstants } from '../../../shared/constants/classes.constants';
import ContentConstants from '../../../shared/constants/content.constants';
import { NumberConstants } from '../../../shared/constants/number.constatnts';

class BestPlayersList implements IComponent {
  private bestPlayersList = document.createElement(TagConstants.UL);

  private loading = document.createElement(TagConstants.H2);

  private db = new DbService();

  private curPage: string | null = null;

  private curUser: IUser | null = null;

  private renderList = async () => {
    const { page, user } = store.getState();

    if (this.curPage === page && this.curUser === user) {
      return;
    }

    this.curPage = page;
    this.curUser = user;

    if (!this.bestPlayersList.children.length) {
      this.bestPlayersList.append(this.loading);
    }

    await this.db.open(DbConstants.USERS);
    const data = this.db.getAll();

    if (data) {
      data.onsuccess = () => {
        const usersList = data.result
          .sort((a, b) => b.score - a.score)
          .filter((_, index) => index < NumberConstants.BEST_PLAYERS_NUMBER)
          .map((item: IUser) => new BestPlayer(item).render());

        this.bestPlayersList.innerHTML = ContentConstants.EMPTY_FILLER;
        this.bestPlayersList.append(...usersList);
        this.db.close();
      };
    } else {
      this.bestPlayersList.innerHTML = ContentConstants.EMPTY_FILLER;
    }
  };

  private addClasses = () => {
    this.loading.classList.add(ClassesConstants.LOADING);
    this.bestPlayersList.classList.add(ClassesConstants.BEST_PLAYERS_LIST);
  };

  public render = () => {
    this.addClasses();
    this.loading.textContent = ContentConstants.LOADING;
    this.renderList();
    store.subscribe(() => this.renderList());

    return this.bestPlayersList;
  };
}

export default BestPlayersList;
