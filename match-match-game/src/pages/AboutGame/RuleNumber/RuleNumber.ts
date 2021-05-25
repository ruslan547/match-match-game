import { ClassesConstants } from '../../../shared/constants/classes.constants';
import TagConstants from '../../../shared/constants/tag.constants';
import { IComponent } from '../../../shared/interfaces';
import './RuleNumber.scss';

class RuleNumber implements IComponent {
  private numberElem = document.createElement(TagConstants.DIV);

  constructor(private number: number) { }

  render = () => {
    this.numberElem.classList.add(ClassesConstants.RULE_NUMBER);
    this.numberElem.textContent = this.number.toString();

    return this.numberElem;
  };
}

export default RuleNumber;
