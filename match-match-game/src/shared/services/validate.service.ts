import TagConstants from '../constants/tag.constants';

class ValidateService {
  private isValid = false;

  public checkText = (input: HTMLInputElement) => {
    const { value } = input;
    console.log(value);
  };

  public checkEmail = (input: HTMLInputElement) => {
    const { value } = input;
    console.log(value);
  };

  private handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;

    if (input.type === TagConstants.TEXT) {
      this.checkText(input);
    } else {
      this.checkEmail(input);
    }
  };

  public validate = (input: HTMLInputElement) => {
    input.addEventListener('input', this.handleInput);
  };

  public getIsValid = (): boolean => this.isValid;
}

export default ValidateService;
