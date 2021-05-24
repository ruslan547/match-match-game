import WinPopup from '../../pages/Game/WinPopup/WinPopup';
import { popupService } from './popup.serivce';

class GameService {
  private succeeds: HTMLElement[] = [];

  private cardNum = 0;

  private prev: HTMLElement | null = null;

  private cur: HTMLElement | null = null;

  private clearFilds = () => {
    this.prev = null;
    this.cur = null;
  };

  private setToSuccess = (...elems: HTMLElement[]) => {
    elems.forEach((item) => item.classList.add('succeed'));
    this.succeeds.push(...elems);
  };

  private flipOver = (elem: HTMLElement) => {
    elem.classList.add('fliped');
  };

  private reset = (prev: HTMLElement, elem: HTMLElement) => {
    prev.classList.add('error');
    elem.classList.add('error');

    setTimeout(() => {
      prev.classList.remove('error', 'fliped');
      elem.classList.remove('error', 'fliped');
    }, 1000);

    this.clearFilds();
  };

  private finishGame = () => {
    popupService.createPopup(new WinPopup().render());
  };

  private isFinish = () => this.succeeds.length === this.cardNum;

  private isSucceeds = (elem: HTMLElement) => !!this.succeeds.find((item) => Object.is(item, elem));

  private isTheSameImg = (
    prev: HTMLElement,
    cur: HTMLElement,
  ) => prev.dataset.img === cur.dataset.img;

  public chooseElem = (elem: HTMLElement) => {
    if (this.isSucceeds(elem) || elem === this.prev) {
      return;
    }

    this.flipOver(elem);

    if (!this.prev) {
      this.prev = elem;
      return;
    }

    if (this.isTheSameImg(this.prev, elem)) {
      this.setToSuccess(this.prev, elem);
      this.clearFilds();

      if (this.isFinish()) {
        this.finishGame();
      }

      return;
    }

    this.reset(this.prev, elem);
  };

  public setCardNum = (num: number) => {
    this.cardNum = num;
  };
}

export default GameService;
