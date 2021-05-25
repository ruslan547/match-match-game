import ContentConstants from '../../../shared/constants/content.constants';
import TagConstants from '../../../shared/constants/tag.constants';
import { IComponent } from '../../../shared/interfaces';
import Rule from '../Rule/Rule';
import RuleDescription from '../RuleDescription/RuleDescription';
import './RulesList.scss';
import form from '../../../assets/img/form.svg';
import button from '../../../assets/img/button.svg';
import board from '../../../assets/img/board.svg';

class RulesList implements IComponent {
  private rulesList = document.createElement(TagConstants.UL);

  public render = () => {
    this.rulesList.classList.add('rules-list');

    const formImg = new Image();
    const btnImg = new Image();
    const brdImg = new Image();
    formImg.src = form;
    btnImg.src = button;
    brdImg.src = board;

    this.rulesList.append(
      new Rule(new RuleDescription(1, ContentConstants.REGISTER_RULE).render(), formImg).render(),
      new Rule(new RuleDescription(2, ContentConstants.CONFIGURE_RULE).render(), btnImg).render(),
      new Rule(new RuleDescription(3, ContentConstants.START_GAME_RULE).render(), brdImg).render(),
    );

    return this.rulesList;
  };
}

export default RulesList;
