import TagConstants from '../../../shared/constants/tag.constants';
import { IComponent } from '../../../shared/interfaces';
import './Rule.scss';

class Rule implements IComponent {
  private rule = document.createElement(TagConstants.LI);

  constructor(private ruleDiscription: HTMLElement) { }

  public render = () => {
    this.rule.classList.add('rule');
    this.rule.append(this.ruleDiscription);

    return this.rule;
  };
}

export default Rule;
