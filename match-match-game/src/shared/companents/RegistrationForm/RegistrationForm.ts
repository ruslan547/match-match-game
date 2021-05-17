import TagConstants from '../../constants/tag.constants';
import { IComponent } from '../../interfaces';
import './RegistrationForm.scss';

class RegistrationForm implements IComponent {
  private registrationForm = document.createElement(TagConstants.FORM);

  public render = () => {
    this.registrationForm.classList.add('registration-form');
    this.registrationForm.append('regform');

    return this.registrationForm;
  };
}

export default RegistrationForm;
