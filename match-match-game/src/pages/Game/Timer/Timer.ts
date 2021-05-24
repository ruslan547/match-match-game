import TagConstants from '../../../shared/constants/tag.constants';
import { IComponent } from '../../../shared/interfaces';
import { store } from '../../../shared/services/store/store.service';
import './Timer.scss';

class Timer implements IComponent {
  private timer = document.createElement(TagConstants.DIV);

  public render = () => {
    this.timer.classList.add('timer');

    store.subscribe(() => {
      this.timer.textContent = store.getState().time;
    });

    return this.timer;
  };
}

export default Timer;
