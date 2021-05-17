import TagConstants from '../../../shared/constants/tag.constants';
import { IComponent } from '../../../shared/interfaces';
import RuleNumber from '../RuleNumber/RuleNumber';
import './RuleDescription.scss';

class RuleDescription implements IComponent {
  private ruleDescription = document.createElement(TagConstants.DIV);

  constructor(private number: number, private text: string) { }

  public render = () => {
    const textContainer = document.createElement(TagConstants.DIV);
    textContainer.classList.add('rule-description-text');
    textContainer.textContent = this.text;

    this.ruleDescription.classList.add('rule-description');
    this.ruleDescription.append(new RuleNumber(this.number).render(), textContainer);

    return this.ruleDescription;
  };
}

export default RuleDescription;
