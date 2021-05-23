import { setPage } from '../../../services/store/actions';
import ContentConstants from '../../../constants/content.constants';
import RouteConstants from '../../../constants/route.constants';
import TagConstants from '../../../constants/tag.constants';
import { IComponent } from '../../../interfaces';
import { popupService } from '../../../services/popup.serivce';

import { store } from '../../../services/store/store.service';
import RegistrationForm from '../../RegistrationForm/RegistrationForm';
import './HeaderButton.scss';

class HeaderButton implements IComponent {
  private button = document.createElement(TagConstants.A);

  private initBtn = () => {
    const { user } = store.getState();
    const { href } = document.location;

    if (!user) {
      this.button.textContent = ContentConstants.REGISTER_NEW_PLAYER;
    } else if (href.includes(RouteConstants.GAME)) {
      this.button.textContent = ContentConstants.STOP_GAME;
    } else {
      this.button.textContent = ContentConstants.START_GAME;
    }
  };

  private startGame = () => {
    this.button.href = RouteConstants.HASH_GAME;
    this.button.click();
    store.dispatch(setPage(RouteConstants.HASH_GAME));
  };

  private stopGame = () => {
    this.button.href = RouteConstants.HASH_ABOUT;
    this.button.click();
  };

  private handleClick = () => {
    const { user } = store.getState();
    const { href } = document.location;

    if (!user) {
      popupService.createPopup(new RegistrationForm().render());
    } else if (href.includes(RouteConstants.GAME)) {
      this.stopGame();
    } else {
      this.startGame();
    }

    this.initBtn();
  };

  public render = () => {
    this.button.classList.add('header-btn');
    this.initBtn();
    this.button.addEventListener('click', this.handleClick);

    store.subscribe(() => setTimeout(this.initBtn, 0));

    return this.button;
  };
}

export default HeaderButton;
