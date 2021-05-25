import NodeJS from 'process';
import { NumberConstants } from '../constants/number.constatnts';
import RouteConstants from '../constants/route.constants';
import { setTime } from './store/actions';
import { store } from './store/store.service';

class TimerService {
  private time;

  private date: number = 30;

  private timerId: NodeJS.Timeout | null = null;

  constructor() {
    this.time = this.calcTime(this.date);
    this.prevTime();

    store.subscribe(() => {
      if (store.getState().page !== RouteConstants.HASH_GAME) {
        clearInterval(this.timerId as NodeJS.Timeout);
      }
    });
  }

  private calcTime = (date: number) => {
    const secondInMin = NumberConstants.SECOND_IN_MINUTE;
    const minutes = this.addZero(Math.floor(date / secondInMin));
    const secondes = this.addZero(Math.floor(date % secondInMin));

    return `${minutes}:${secondes}`;
  };

  private gemeTime = () => {
    this.timerId = setInterval(() => {
      this.date += 1;
      this.time = this.calcTime(this.date);
      store.dispatch(setTime(this.time));
    }, 1000);
  };

  private prevTime = () => {
    this.timerId = setInterval(() => {
      if (this.date === 1) {
        clearInterval(this.timerId as NodeJS.Timeout);
        this.gemeTime();
      }

      this.date -= 1;
      this.time = this.calcTime(this.date);
      store.dispatch(setTime(this.time));
    }, 1000);
  };

  public addZero = (value: number) => ((value < 10) ? `0${value}` : value);

  public getDate = () => this.date;

  public stopTimer = () => {
    clearInterval(this.timerId as NodeJS.Timeout);
  };
}

export default TimerService;
