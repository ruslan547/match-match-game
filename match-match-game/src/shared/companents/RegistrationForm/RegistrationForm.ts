import ContentConstants from '../../constants/content.constants';
import TagConstants from '../../constants/tag.constants';
import { IComponent } from '../../interfaces';
import ValidateService from '../../services/validate.service';
import FileInput from './FileInput/FileInput';
import FormButton from './FormButton/FormButton';
import Input from './Input/Input';
import './RegistrationForm.scss';

class RegistrationForm implements IComponent {
  private registrationForm = document.createElement(TagConstants.FORM);

  private formTitle = document.createElement(TagConstants.H3);

  private inutsContainer = document.createElement(TagConstants.DIV);

  private fildsContainer = document.createElement(TagConstants.DIV);

  private buttonsContainer = document.createElement(TagConstants.DIV);

  private validateService = new ValidateService();

  private handleClick = (event: Event) => {
    event.stopPropagation();
  };

  public render = () => {
    this.registrationForm.classList.add('registration-form');
    this.inutsContainer.classList.add('inputs-container');
    this.fildsContainer.classList.add('filds-container');
    this.buttonsContainer.classList.add('buttons-container');
    this.registrationForm.addEventListener('click', this.handleClick);
    this.formTitle.textContent = ContentConstants.REGISTER_NEW_PLAYER;

    this.registrationForm.noValidate = true;

    this.fildsContainer.append(
      new Input(ContentConstants.FIRST_NAME, this.validateService.validate).render(),
      new Input(ContentConstants.LAST_NAME, this.validateService.validate).render(),
      new Input(
        ContentConstants.EMAIL,
        this.validateService.validate,
        TagConstants.EMAIL,
      ).render(),
    );

    this.inutsContainer.append(this.fildsContainer, new FileInput().render());

    this.buttonsContainer.append(
      new FormButton(ContentConstants.ADD_USER).render(),
      new FormButton(ContentConstants.CANCEL).render(),
    );

    this.registrationForm.append(
      this.formTitle,
      this.inutsContainer,
      this.buttonsContainer,
    );

    return this.registrationForm;
  };
}

export default RegistrationForm;
