import { ClassesConstants } from '../../../shared/constants/classes.constants';
import { store } from '../../../shared/services/store/store.service';
import ContentConstants from '../../../shared/constants/content.constants';
import RouteConstants from '../../../shared/constants/route.constants';
import TagConstants from '../../../shared/constants/tag.constants';
import { IComponent } from '../../../shared/interfaces';
import './WinPopup.scss';

class WinPopup implements IComponent {
  private winPopup = document.createElement(TagConstants.DIV);

  private wipPopupLink = document.createElement(TagConstants.A);

  private addClasses = () => {
    this.winPopup.classList.add(ClassesConstants.WIN_POPUP);
    this.wipPopupLink.classList.add(ClassesConstants.WIN_POPUP_LINK);
  };

  private setAttributes = () => {
    this.winPopup.textContent = ContentConstants.WIP_POPUP_TEXT
      + store.getState().time + ContentConstants.MINUTES;
    this.wipPopupLink.href = RouteConstants.HASH_BEST;
    this.wipPopupLink.textContent = ContentConstants.OK;
  };

  private handleClick = () => {
    const popup = document.getElementsByName(ClassesConstants.POPUP)[0];
    popup?.remove();
  };

  public render = () => {
    this.addClasses();
    this.setAttributes();
    this.wipPopupLink.addEventListener('click', this.handleClick);
    this.winPopup.append(this.wipPopupLink);

    return this.winPopup;
  };
}

export default WinPopup;
