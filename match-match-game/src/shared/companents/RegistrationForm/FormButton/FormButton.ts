import ContentConstants from '../../../constants/content.constants';
import TagConstants from '../../../constants/tag.constants';
import { IComponent } from '../../../interfaces';
import { store } from '../../../services/store/store.service';
import './FormButton.scss';

class FormButton implements IComponent {
  private formButton = document.createElement(TagConstants.INPUT);

  constructor(private value: string) { }

  private handleClick = (event: Event) => {
    if (this.value === ContentConstants.CANCEL) {
      event.preventDefault();

      document.querySelectorAll(TagConstants.INPUT).forEach((item) => {
        if (item.type !== TagConstants.SUBMIT) {
          item.value = '';
          item.checked = false;
        }
      });
    }
  };

  private addSubscribe = () => {
    if (this.value === ContentConstants.ADD_USER) {
      this.formButton.disabled = true;
      store.subscribe(() => {
        this.formButton.disabled = !store.getState().isValidForm;
      });
    }

    this.formButton.addEventListener('click', this.handleClick);
  };

  render = () => {
    this.formButton.classList.add('form-button');
    this.formButton.type = TagConstants.SUBMIT;
    this.formButton.value = this.value;
    this.addSubscribe();

    return this.formButton;
  };
}

export default FormButton;
