import TagConstants from '../../../shared/constants/tag.constants';
import { IComponent } from '../../../shared/interfaces';
import './BoardCard.scss';

class BoardCard implements IComponent {
  private boardCard = document.createElement(TagConstants.DIV);

  private frontCard = document.createElement(TagConstants.IMG);

  private backCard = document.createElement(TagConstants.DIV);

  constructor(private cardNum: number) { }

  private addClasses = () => {
    this.boardCard.classList.add('board-card');
    this.frontCard.classList.add('front-card');
    this.backCard.classList.add('back-card');
  };

  public render = () => {
    this.addClasses();
    this.frontCard.src = `/assets/${'animals'}/${this.cardNum}.jpg`;
    this.boardCard.append(this.backCard, this.frontCard);

    return this.boardCard;
  };
}

export default BoardCard;
