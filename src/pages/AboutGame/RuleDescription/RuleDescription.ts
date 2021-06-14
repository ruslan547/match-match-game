import { ClassesConstants } from '../../../shared/constants/classes.constants';
import TagConstants from '../../../shared/constants/tag.constants';
import { IComponent } from '../../../shared/interfaces';
import RuleNumber from '../RuleNumber/RuleNumber';
import './RuleDescription.scss';

class RuleDescription implements IComponent {
  private ruleDescription = document.createElement(TagConstants.DIV);

  private textContainer = document.createElement(TagConstants.DIV);

  constructor(private number: number, private text: string) { }

  public render = () => {
    this.textContainer.classList.add(ClassesConstants.RULE_DESCRIPTION_TEXT);
    this.ruleDescription.classList.add(ClassesConstants.RULE_DESCRIPTION);
    this.textContainer.textContent = this.text;
    this.ruleDescription.append(new RuleNumber(this.number).render(), this.textContainer);

    return this.ruleDescription;
  };
}

export default RuleDescription;
