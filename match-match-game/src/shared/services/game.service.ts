import { store } from './store/store.service';
import { DbConstants } from '../constants/db.constants';
import WinPopup from '../../pages/Game/WinPopup/WinPopup';
import DbService from './db.service';
import { popupService } from './popup.serivce';
import TimerService from './timer.service';

class GameService {
  private db = new DbService();

  private timeService = new TimerService();

  private succeeds: HTMLElement[] = [];

  private cardNum = 0;

  private prev: HTMLElement | null = null;

  private cmpNum = 0;

  private errCmpNum = 0;

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

  private calcScore = () => {
    const cmp = this.cmpNum - this.errCmpNum;
    const seconds = this.timeService.getDate();
    const score = cmp * 100 - seconds * 10;

    return score < 0 ? 0 : score;
  };

  private sendScore = async () => {
    const { user } = store.getState();

    user.score = this.calcScore();
    await this.db.open(DbConstants.USERS);
    this.db.update(user);
  };

  private finishGame = async () => {
    this.timeService.stopTimer();
    await this.sendScore();
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

    this.cmpNum += 1;
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

    this.errCmpNum += 1;
    this.reset(this.prev, elem);
  };

  public setCardNum = (num: number) => {
    this.cardNum = num;
  };
}

export default GameService;
