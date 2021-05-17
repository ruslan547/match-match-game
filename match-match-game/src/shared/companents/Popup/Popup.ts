import TagConstants from '../../constants/tag.constants';
import { IComponent } from '../../interfaces';
import './Popup.scss';

class Popup implements IComponent {
  private popup = document.createElement(TagConstants.DIV);

  constructor(private element: HTMLElement) { }

  public render = () => {
    this.popup.classList.add('popup');
    this.popup.append(this.element);

    return this.popup;
  };
}

export default Popup;
