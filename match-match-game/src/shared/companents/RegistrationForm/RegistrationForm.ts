import { popupService } from '../../services/popup.serivce';
import { registerUser } from '../../services/store/actions';
import ContentConstants from '../../constants/content.constants';
import TagConstants from '../../constants/tag.constants';
import { IComponent } from '../../interfaces';
import DbService from '../../services/db.service';
import { store } from '../../services/store/store.service';
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

  private firstNameInput = new Input(
    ContentConstants.FIRST_NAME,
    this.validateService.validate,
  );

  private lastNameInput = new Input(
    ContentConstants.LAST_NAME,
    this.validateService.validate,
  );

  private emailInput = new Input(
    ContentConstants.EMAIL,
    this.validateService.validate,
    TagConstants.EMAIL,
  );

  private db = new DbService();

  private handleClick = (event: Event) => {
    event.stopPropagation();
  };

  private handleSubmit = async (event: Event) => {
    const img: HTMLImageElement | null = document.querySelector('.file-input-img');

    event.preventDefault();

    const user = {
      img: img ? img.src : null,
      firstName: this.firstNameInput.getValue(),
      lastName: this.lastNameInput.getValue(),
      email: this.emailInput.getValue(),
      score: 0,
    };

    await this.db.open('users');
    const data = this.db.get(user.email);

    if (data) {
      data.onsuccess = () => {
        if (!data?.result) {
          this.db.add(user);
        }

        popupService.removePopup();
        store.dispatch(registerUser(user));
        this.db.close();
      };
    }

    document.querySelectorAll(TagConstants.INPUT).forEach((item) => {
      if (item.type !== TagConstants.SUBMIT) {
        item.value = ContentConstants.EMPTY_FILLER;
        item.checked = false;
      }
    });
  };

  private addClasses = () => {
    this.registrationForm.classList.add('registration-form');
    this.inutsContainer.classList.add('inputs-container');
    this.fildsContainer.classList.add('filds-container');
    this.buttonsContainer.classList.add('buttons-container');
  };

  private addEventListeners = () => {
    this.registrationForm.addEventListener('click', this.handleClick);
    this.registrationForm.addEventListener('submit', this.handleSubmit);
  };

  private addAttributes = () => {
    this.formTitle.textContent = ContentConstants.REGISTER_NEW_PLAYER;
    this.registrationForm.noValidate = true;
  };

  public render = () => {
    this.addClasses();
    this.addEventListeners();
    this.addAttributes();

    this.fildsContainer.append(
      this.firstNameInput.render(),
      this.lastNameInput.render(),
      this.emailInput.render(),
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
