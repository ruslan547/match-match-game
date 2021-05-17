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

  render = () => {
    this.element.classList.add('input-container');
    this.input.classList.add('input');
    this.checkbox.classList.add('checkbox');
    this.input.type = this.type;
    this.input.name = this.name;
    this.input.placeholder = this.name;
    this.checkbox.type = 'checkbox';

    this.cb(this.input);

    this.element.append(this.input, this.checkbox);
    this.checkbox.addEventListener('click', this.handleCheckboxClick);

    return this.element;
  };
}

export default Input;
