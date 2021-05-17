import TagConstants from '../../../constants/tag.constants';
import { IComponent } from '../../../interfaces';
import './FormButton.scss';

class FormButton implements IComponent {
  private formButton = document.createElement(TagConstants.INPUT);

  constructor(private value: string, private cb: () => void) { }

  render = () => {
    this.formButton.classList.add('form-button');
    this.formButton.type = TagConstants.SUBMIT;
    this.formButton.value = this.value;

    return this.formButton;
  };
}

export default FormButton;
