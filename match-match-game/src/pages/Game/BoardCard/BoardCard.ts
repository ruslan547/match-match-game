import { ClassesConstants } from '../../../shared/constants/classes.constants';
import { PathConstants } from '../../../shared/constants/path.constants';
import TagConstants from '../../../shared/constants/tag.constants';
import { IComponent } from '../../../shared/interfaces';
import { store } from '../../../shared/services/store/store.service';
import './BoardCard.scss';

class BoardCard implements IComponent {
  private boardCard = document.createElement(TagConstants.DIV);

  private frontCard = document.createElement(TagConstants.IMG);

  private backCard = document.createElement(TagConstants.DIV);

  constructor(private cardNum: number) { }

  private addClasses = () => {
    this.boardCard.classList.add(ClassesConstants.BOARD_CARD);
    this.frontCard.classList.add(ClassesConstants.FRONT_CARD);
    this.backCard.classList.add(ClassesConstants.BACK_CARD);
  };

  public render = () => {
    const { cardsType } = store.getState();

    this.addClasses();
    this.frontCard.src = `${PathConstants.ASSETS}${cardsType}/${this.cardNum}${PathConstants.IMG_FORMAT}`;
    this.boardCard.append(this.backCard, this.frontCard);

    return this.boardCard;
  };
}

export default BoardCard;
