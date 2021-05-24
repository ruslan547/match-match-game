import { IUser, IComponent } from '../../../shared/interfaces';
import TagConstants from '../../../shared/constants/tag.constants';
import DbService from '../../../shared/services/db.service';
import avatar from '../../../assets/img/form-avatar.svg';
import './BestPlayersList.scss';
import { DbConstants } from '../../../shared/constants/db.constants';

class BestPlayersList implements IComponent {
  private bestPlayersList = document.createElement(TagConstants.UL);

  private db = new DbService();

  private creatUserCard = (item: IUser) => {
    const userCard = document.createElement(TagConstants.LI);
    const userImg = document.createElement(TagConstants.IMG);
    const userInfo = document.createElement(TagConstants.DIV);
    const userNames = document.createElement(TagConstants.DIV);
    const userEmail = document.createElement(TagConstants.DIV);
    const userScore = document.createElement(TagConstants.DIV);

    userCard.classList.add('user-card');
    userImg.classList.add('user-img');
    userInfo.classList.add('user-info');
    userNames.classList.add('user-names');
    userEmail.classList.add('user-email');
    userScore.classList.add('user-score');

    if (!item.img) {
      userImg.src = avatar;
    } else {
      userImg.src = item.img;
    }

    userNames.textContent = `${item.firstName} ${item.lastName}`;
    userEmail.textContent = item.email;
    userScore.textContent = `Score: ${item.score.toString()}`;

    userInfo.append(userNames, userEmail);
    userCard.append(userImg, userInfo, userScore);

    return userCard;
  };

  private renderList = async () => {
    await this.db.open(DbConstants.USERS);
    const data = this.db.getAll();

    if (data) {
      data.onsuccess = () => {
        const usersList = data.result
          .filter((_, index) => index < 10)
          .sort((a, b) => b.score - a.score)
          .map((item: IUser) => this.creatUserCard(item));

        this.bestPlayersList.append(...usersList);
        this.db.close();
      };
    }
  };

  public render = () => {
    this.renderList();
    this.bestPlayersList.classList.add('best-players-list');

    return this.bestPlayersList;
  };
}

export default BestPlayersList;
