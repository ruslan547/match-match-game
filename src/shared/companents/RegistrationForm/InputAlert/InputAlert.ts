import { IComponent } from '../../../interfaces';
import TagConstants from '../../../constants/tag.constants';
import './InputAlert.scss';

class InputAlert implements IComponent {
  private inputAlert = document.createElement(TagConstants.DIV);

  public render = () => {
    this.inputAlert.classList.add('input-alert');
    return this.inputAlert;
  };
}

export default InputAlert;
