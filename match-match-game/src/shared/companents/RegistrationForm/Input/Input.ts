import { RegExpConstants } from '../../../constants/regexp.constants';
import TagConstants from '../../../constants/tag.constants';
import { IComponent } from '../../../interfaces';
import './Input.scss';

class Input implements IComponent {
  private element = document.createElement(TagConstants.DIV);

  private input = document.createElement(TagConstants.INPUT);

  private checkbox = document.createElement(TagConstants.INPUT);

  constructor(private name: string, private cb: Function, private type = TagConstants.TEXT) { }

  public handleCheckboxClick = (event: Event) => {
    event.preventDefault();
  };

  private addClasses = () => {
    this.element.classList.add('input-container');
    this.input.classList.add('input');
    this.checkbox.classList.add('checkbox');
  };

  private setAttributes = () => {
    this.input.type = this.type;
    this.input.name = this.name;
    this.input.placeholder = this.name;
    this.input.required = true;
    this.input.pattern = RegExpConstants.INITIALS;
    this.input.pattern = (this.type === TagConstants.TEXT)
      ? RegExpConstants.INPUT_INITIALS : RegExpConstants.INPUT_EMAIL;
    this.checkbox.type = 'checkbox';
  };

  private addEventListeners = () => {
    this.checkbox.addEventListener('click', this.handleCheckboxClick);
    this.input.addEventListener('input', ({ target }) => {
      if ((target as HTMLInputElement)?.validity.valid) {
        this.checkbox.checked = true;
        this.element.classList.remove('invalid');
      } else {
        this.checkbox.checked = false;
        this.element.classList.add('invalid');
      }
    });
  };

  render = () => {
    this.addClasses();
    this.setAttributes();
    this.cb(this.input);
    this.addEventListeners();
    this.element.append(this.input, this.checkbox);

    return this.element;
  };
}

export default Input;
