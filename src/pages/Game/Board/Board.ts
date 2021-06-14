import { ClassesConstants } from '../../../shared/constants/classes.constants';
import ContentConstants from '../../../shared/constants/content.constants';
import { NumberConstants } from '../../../shared/constants/number.constatnts';
import TagConstants from '../../../shared/constants/tag.constants';
import { IComponent } from '../../../shared/interfaces';
import GameService from '../../../shared/services/game.service';
import { store } from '../../../shared/services/store/store.service';
import BoardCard from '../BoardCard/BoardCard';
import './Board.scss';

class Board implements IComponent {
  private board = document.createElement(TagConstants.DIV);

  private gameService = new GameService();

  private getCardNumber = () => {
    const { difficulty } = store.getState();

    switch (difficulty) {
      case ContentConstants.X6:
        return NumberConstants.X6_CURD_NUMBER;
      case ContentConstants.X8:
        return NumberConstants.X8_CURD_NUMBER;
      default:
        return NumberConstants.X4_CURD_NUMBER;
    }
  };

  private addClasses = () => {
    const { difficulty } = store.getState();

    this.board.className = ClassesConstants.BOARD;

    switch (difficulty) {
      case ContentConstants.X6:
        this.board.classList.add(ClassesConstants.X6);
        break;
      case ContentConstants.X8:
        this.board.classList.add(ClassesConstants.X8);
        break;
      default:
        this.board.classList.add(ClassesConstants.X4);
        break;
    }
  };

  private shuffle = (array: HTMLElement[]) => {
    array.sort(() => Math.random() - NumberConstants.RANDOM_COF);
  };

  private createCardList = () => {
    const cards = [];
    const n = this.getCardNumber();

    this.gameService.setCardNum(n);

    for (let i = 0; i < n; i += 1) {
      const { difficulty } = store.getState();
      let cardNum = (i % NumberConstants.IMG_NUMBER) + 1;

      if (difficulty === ContentConstants.X6 && i > NumberConstants.FIRST_X6_IMG_SET) {
        cardNum = (i % 2) + 1;
      }

      const card = new BoardCard(cardNum).render();

      card.classList.add(ClassesConstants.FLIPED);
      card.dataset.img = cardNum.toString();
      cards.push(card);
    }

    this.shuffle(cards);

    return cards;
  };

  private handleClick = ({ target }: Event) => {
    const elem = (target as HTMLElement).parentNode as HTMLElement;

    if (!elem.hasAttribute('data-img')) {
      return;
    }

    this.gameService.chooseElem(elem as HTMLElement);
  };

  public render = () => {
    this.addClasses();
    this.board.addEventListener('click', this.handleClick);
    this.board.append(...this.createCardList());

    return this.board;
  };
}

export default Board;
