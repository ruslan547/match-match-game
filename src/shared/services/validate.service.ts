import TagConstants from '../constants/tag.constants';
import { inputDataIntoForm } from './store/actions';
import { store } from './store/store.service';

class ValidateService {
  private isValid = false;

  private handleInput = () => {
    this.isValid = true;

    document.querySelectorAll(TagConstants.INPUT).forEach((item) => {
      if (!(item as HTMLInputElement)?.validity.valid) {
        this.isValid = false;
      }
    });

    store.dispatch(inputDataIntoForm(this.getIsValid()));
  };

  public validate = (input: HTMLInputElement) => {
    input.addEventListener('input', this.handleInput);
  };

  public getIsValid = (): boolean => this.isValid;
}

export default ValidateService;
