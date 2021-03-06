import { store } from './store/store.service';
import { DbConstants } from '../constants/db.constants';
import WinPopup from '../../pages/Game/WinPopup/WinPopup';
import DbService from './db.service';
import { popupService } from './popup.serivce';
import TimerService from './timer.service';
import { ClassesConstants } from '../constants/classes.constants';
import { NumberConstants } from '../constants/number.constatnts';

class GameService {
  private db = new DbService();

  private timeService = new TimerService();

  private succeeds: HTMLElement[] = [];

  private cardNum = 0;

  private prev: HTMLElement | null = null;

  private cmpNum = 0;

  private errCmpNum = 0;

  constructor() {
    store.subscribe(() => {
      if (this.timeService.getDate() < 1) {
        this.startGame();
      }
    });
  }

  private startGame = () => {
    const cards = document.querySelectorAll('.fliped');
    cards.forEach((item) => item.classList.remove(ClassesConstants.FLIPED));
  };

  private clearFilds = () => {
    this.prev = null;
  };

  private setToSuccess = (...elems: HTMLElement[]) => {
    elems.forEach((item) => item.classList.add(ClassesConstants.SUCCEED));
    this.succeeds.push(...elems);
  };

  private flipOver = (elem: HTMLElement) => {
    elem.classList.add(ClassesConstants.FLIPED);
  };

  private reset = (prev: HTMLElement, elem: HTMLElement) => {
    prev.classList.add(ClassesConstants.ERROR);
    elem.classList.add(ClassesConstants.ERROR);

    setTimeout(() => {
      prev.classList.remove(ClassesConstants.ERROR, ClassesConstants.FLIPED);
      elem.classList.remove(ClassesConstants.ERROR, ClassesConstants.FLIPED);
    }, 1000);

    this.clearFilds();
  };

  private calcScore = () => {
    const cmp = this.cmpNum - this.errCmpNum;
    const seconds = this.timeService.getDate();
    const score = (
      cmp * NumberConstants.FIRST_SCORE_COF - seconds * NumberConstants.SECOND_SCORE_COF
    );

    return score < 0 ? 0 : score;
  };

  private sendScore = async () => {
    const { user } = store.getState();

    user.score = this.calcScore();
    await this.db.open(DbConstants.USERS);
    this.db.update(user);
    this.db.close();
  };

  private finishGame = async () => {
    this.timeService.stopTimer();
    await this.sendScore();
    popupService.createPopup(new WinPopup().render());
  };

  private isFinish = () => this.succeeds.length === this.cardNum;

  private isTheSameImg = (
    prev: HTMLElement,
    cur: HTMLElement,
  ) => prev.dataset.img === cur.dataset.img;

  public chooseElem = (elem: HTMLElement) => {
    if (elem.classList.contains(ClassesConstants.FLIPED)) {
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
