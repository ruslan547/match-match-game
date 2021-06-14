import { IUser, IComponent } from '../../../interfaces';
import { ClassesConstants } from '../../../constants/classes.constants';
import { registerUser } from '../../../services/store/actions';
import ContentConstants from '../../../constants/content.constants';
import RouteConstants from '../../../constants/route.constants';
import TagConstants from '../../../constants/tag.constants';
import { popupService } from '../../../services/popup.serivce';
import { store } from '../../../services/store/store.service';
import RegistrationForm from '../../RegistrationForm/RegistrationForm';
import './HeaderButton.scss';

class HeaderButton implements IComponent {
  private button = document.createElement(TagConstants.A);

  private img = document.createElement(TagConstants.IMG);

  private curUser: IUser | null = null;

  private curPage: string | null = null;

  private initBtn = () => {
    const { user, page } = store.getState();

    if (this.curUser === user && this.curPage === page) {
      return;
    }

    this.curUser = user;
    this.curPage = page;

    if (user) {
      this.img.src = user.img;
      this.img.title = `${user.firstName} ${user.lastName}`;
      this.button.after(this.img);

      if (page === RouteConstants.GAME) {
        this.button.textContent = ContentConstants.STOP_GAME;
      } else {
        this.button.textContent = ContentConstants.START_GAME;
      }
    } else {
      this.button.textContent = ContentConstants.REGISTER_NEW_PLAYER;
      this.img.remove();
    }
  };

  private startGame = () => {
    this.button.href = RouteConstants.GAME;
    this.button.click();
  };

  private stopGame = () => {
    this.button.href = RouteConstants.ABOUT;
    this.button.click();
  };

  private handleClick = () => {
    const { user, page } = store.getState();

    if (!user) {
      popupService.createPopup(new RegistrationForm().render());
    } else if (page === RouteConstants.GAME) {
      this.stopGame();
    } else {
      this.startGame();
    }
  };

  private handleImgClick = () => {
    store.dispatch(registerUser(null));
    this.stopGame();
    popupService.removePopup();
  };

  private addClasses = () => {
    this.button.classList.add(ClassesConstants.HEADER_BTN);
    this.img.classList.add(ClassesConstants.HEADER_BTN_IMG);
  };

  public render = () => {
    this.addClasses();
    this.initBtn();
    this.button.addEventListener('click', this.handleClick);
    this.img.addEventListener('click', this.handleImgClick);

    store.subscribe(() => this.initBtn());

    return this.button;
  };
}

export default HeaderButton;
