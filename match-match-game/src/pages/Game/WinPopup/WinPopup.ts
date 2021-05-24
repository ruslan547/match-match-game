import TagConstants from '../../../shared/constants/tag.constants';
import { IComponent } from '../../../shared/interfaces';
import './WinPopup.scss';

class WinPopup implements IComponent {
  private winPopup = document.createElement(TagConstants.DIV);

  public render = () => {
    this.winPopup.classList.add('win-popup');
    this.winPopup.textContent = 'Congratulations! You successfully found all matches.';

    return this.winPopup;
  };
}

export default WinPopup;
