import { ClassesConstants } from '../../constants/classes.constants';
import TagConstants from '../../constants/tag.constants';
import { IComponent } from '../../interfaces';
import './Popup.scss';

class Popup implements IComponent {
  private popup = document.createElement(TagConstants.DIV);

  constructor(private element: HTMLElement) { }

  private handleClick = () => {
    this.popup.remove();
    document.body.style.overflowY = 'auto';
  };

  public render = () => {
    this.popup.classList.add(ClassesConstants.POPUP);
    this.popup.append(this.element);
    this.popup.addEventListener('click', this.handleClick);

    return this.popup;
  };
}

export default Popup;
