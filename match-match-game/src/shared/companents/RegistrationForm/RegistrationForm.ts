import TagConstants from '../../constants/tag.constants';
import { IComponent } from '../../interfaces';
import './RegistrationForm.scss';

class RegistrationForm implements IComponent {
  private registrationForm = document.createElement(TagConstants.FORM);

  private handleClick = (event: Event) => {
    event.stopPropagation();
  };

  public render = () => {
    this.registrationForm.classList.add('registration-form');
    this.registrationForm.append('regform');
    this.registrationForm.addEventListener('click', this.handleClick);

    return this.registrationForm;
  };
}

export default RegistrationForm;
