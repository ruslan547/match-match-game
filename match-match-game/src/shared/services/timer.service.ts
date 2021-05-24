import { setTime } from './store/actions';
import { store } from './store/store.service';

class TimerService {
  private time: string = '';

  private date: number = 0;

  private timerId;

  constructor() {
    this.timerId = setInterval(() => {
      this.date += 1;

      this.time = `${this.addZero(Math.floor(this.date / 60))}:${this.addZero(Math.floor(this.date % 60))}`;
      store.dispatch(setTime(this.time));
    }, 1000);
  }

  public addZero = (value: number) => ((value < 10) ? `0${value}` : value);

  public getDate = () => this.date;

  public stopTimer = () => {
    clearInterval(this.timerId);
  };
}

export default TimerService;
