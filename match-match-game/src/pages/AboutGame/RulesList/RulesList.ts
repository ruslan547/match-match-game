import ContentConstants from '../../../shared/constants/content.constants';
import TagConstants from '../../../shared/constants/tag.constants';
import { IComponent } from '../../../shared/interfaces';
import Rule from '../Rule/Rule';
import RuleDescription from '../RuleDescription/RuleDescription';
import './RulesList.scss';

class RulesList implements IComponent {
  private rulesList = document.createElement(TagConstants.UL);

  public render = () => {
    this.rulesList.classList.add('rules-list');
    this.rulesList.append(
      new Rule(new RuleDescription(1, ContentConstants.REGISTER_RULE).render()).render(),
      new Rule(new RuleDescription(2, ContentConstants.CONFIGURE_RULE).render()).render(),
      new Rule(new RuleDescription(3, ContentConstants.START_GAME_RULE).render()).render(),
    );

    return this.rulesList;
  };
}

export default RulesList;
