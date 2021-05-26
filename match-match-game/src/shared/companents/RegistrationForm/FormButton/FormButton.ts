import ContentConstants from '../../../constants/content.constants';
import TagConstants from '../../../constants/tag.constants';
import { IComponent } from '../../../interfaces';
import { store } from '../../../services/store/store.service';
import './FormButton.scss';
import avatar from '../../../../assets/img/form-avatar.svg';
import { ClassesConstants } from '../../../constants/classes.constants';

class FormButton implements IComponent {
  private formButton = document.createElement(TagConstants.INPUT);

  constructor(private value: string) { }

  private handleClick = (event: Event) => {
    const img = document.getElementsByClassName(ClassesConstants.FILE_INPUT_IMG)[0];

    if (this.value === ContentConstants.CANCEL) {
      event.preventDefault();
      (img as HTMLImageElement).src = avatar;

      document.querySelectorAll(TagConstants.INPUT).forEach((item) => {
        if (item.type !== TagConstants.SUBMIT) {
          item.value = ContentConstants.EMPTY_FILLER;
          item.checked = false;
        }
      });
    }
  };

  private addSubscribe = () => {
    if (this.value === ContentConstants.ADD_USER) {
      this.formButton.disabled = true;
      store.subscribe(() => {
        const { isValidForm } = store.getState();

        this.formButton.classList.remove(ClassesConstants.INVALID);
        this.formButton.disabled = !isValidForm;

        if (!isValidForm) {
          this.formButton.classList.add(ClassesConstants.INVALID);
        }
      });
    }

    this.formButton.addEventListener('click', this.handleClick);
  };

  render = () => {
    this.formButton.classList.add(ClassesConstants.FORM_BUTTON);
    this.formButton.type = TagConstants.SUBMIT;
    this.formButton.value = this.value;
    this.addSubscribe();

    return this.formButton;
  };
}

export default FormButton;
