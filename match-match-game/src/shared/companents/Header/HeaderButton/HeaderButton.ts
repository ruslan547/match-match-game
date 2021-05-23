import ContentConstants from '../../../constants/content.constants';
import TagConstants from '../../../constants/tag.constants';
import { IComponent } from '../../../interfaces';
import { popupService } from '../../../services/popup.serivce';
import { game } from '../../../services/store/actions';
import { store } from '../../../services/store/store.service';
import RegistrationForm from '../../RegistrationForm/RegistrationForm';
import './HeaderButton.scss';

class HeaderButton implements IComponent {
  private button = document.createElement(TagConstants.BUTTON);

  private initBtn = () => {
    const { user, isGame } = store.getState();

    if (user) {
      if (isGame) {
        this.button.textContent = ContentConstants.STOP_GAME;
      } else {
        this.button.textContent = ContentConstants.START_GAME;
      }
    } else {
      this.button.textContent = ContentConstants.REGISTER_NEW_PLAYER;
    }
  };

  private handleClick = () => {
    const { user } = store.getState();

    if (user) {
      store.dispatch(game());
    } else {
      popupService.createPopup(new RegistrationForm().render());
    }
  };

  public render = () => {
    this.button.classList.add('header-btn');
    this.initBtn();
    this.button.addEventListener('click', this.handleClick);
    store.subscribe(() => this.initBtn());

    return this.button;
  };
}

export default HeaderButton;
