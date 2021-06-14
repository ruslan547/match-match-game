import { IUser, IComponent } from '../../../shared/interfaces';
import { ClassesConstants } from '../../../shared/constants/classes.constants';
import TagConstants from '../../../shared/constants/tag.constants';
import './BestPlayer.scss';
import ContentConstants from '../../../shared/constants/content.constants';

class BestPlayer implements IComponent {
  private userCard = document.createElement(TagConstants.LI);

  private userImg = document.createElement(TagConstants.IMG);

  private userInfo = document.createElement(TagConstants.DIV);

  private userNames = document.createElement(TagConstants.DIV);

  private userEmail = document.createElement(TagConstants.DIV);

  private userScore = document.createElement(TagConstants.DIV);

  private userScoreNum = document.createElement(TagConstants.SPAN);

  constructor(private user: IUser) { }

  private addClasses = () => {
    this.userCard.classList.add(ClassesConstants.USER_CARD);
    this.userImg.classList.add(ClassesConstants.USER_IMG);
    this.userInfo.classList.add(ClassesConstants.USER_INFO);
    this.userNames.classList.add(ClassesConstants.USER_NAMES);
    this.userEmail.classList.add(ClassesConstants.USER_EMAIL);
    this.userScore.classList.add(ClassesConstants.USER_SCORE);
    this.userScoreNum.classList.add(ClassesConstants.USER_SCORE_NUM);
  };

  private setAttributes = () => {
    this.userImg.src = this.user.img;
    this.userNames.textContent = `${this.user.firstName} ${this.user.lastName}`;
    this.userEmail.textContent = this.user.email;
    this.userScore.textContent = ContentConstants.SCORE;
    this.userScoreNum.textContent = this.user.score.toString();
  };

  public render = () => {
    this.addClasses();
    this.setAttributes();
    this.userInfo.append(this.userNames, this.userEmail);
    this.userScore.append(this.userScoreNum);
    this.userCard.append(this.userImg, this.userInfo, this.userScore);

    return this.userCard;
  };
}

export default BestPlayer;
