import ContentConstants from '../../../shared/constants/content.constants';
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
      case ContentConstants.X4:
        return 16;
      case ContentConstants.X6:
        return 36;
      case ContentConstants.X8:
        return 64;
      default:
        return 16;
    }
  };

  private addClasses = () => {
    const { difficulty } = store.getState();

    this.board.className = 'board';

    switch (difficulty) {
      case ContentConstants.X6:
        this.board.classList.add('x6');
        break;
      case ContentConstants.X8:
        this.board.classList.add('x8');
        break;
      default:
        this.board.classList.add('x4');
        break;
    }
  };

  private shuffle = (array: HTMLElement[]) => {
    array.sort(() => Math.random() - 0.5);
  };

  private createCardList = () => {
    const cards = [];
    const n = this.getCardNumber();

    this.gameService.setCardNum(n);

    for (let i = 0; i < n; i += 1) {
      const cardNum = (i % 8) + 1;
      const card = new BoardCard(cardNum).render();

      card.classList.add('fliped');
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
