import ContentConstants from '../../../shared/constants/content.constants';
import TagConstants from '../../../shared/constants/tag.constants';
import { IComponent } from '../../../shared/interfaces';
import Rule from '../Rule/Rule';
import RuleDescription from '../RuleDescription/RuleDescription';
import './RulesList.scss';
import form from '../../../assets/img/form.svg';
import button from '../../../assets/img/button.svg';
import board from '../../../assets/img/board.svg';
import { ClassesConstants } from '../../../shared/constants/classes.constants';

class RulesList implements IComponent {
  private rulesList = document.createElement(TagConstants.UL);

  private formImg = new Image();

  private btnImg = new Image();

  private boardImg = new Image();

  private setAttributes = () => {
    this.formImg.src = form;
    this.btnImg.src = button;
    this.boardImg.src = board;
  };

  public render = () => {
    this.setAttributes();
    this.rulesList.classList.add(ClassesConstants.RULES_LIST);

    this.rulesList.append(
      new Rule(
        new RuleDescription(1, ContentConstants.REGISTER_RULE).render(),
        this.formImg,
      ).render(),
      new Rule(
        new RuleDescription(2, ContentConstants.CONFIGURE_RULE).render(),
        this.btnImg,
      ).render(),
      new Rule(
        new RuleDescription(3, ContentConstants.START_GAME_RULE).render(),
        this.boardImg,
      ).render(),
    );

    return this.rulesList;
  };
}

export default RulesList;
