import TagConstants from '../../shared/constants/tag.constants';
import ContentConstants from '../../shared/constants/content.constants';
import './AboutGame.scss';
import RulesList from './RulesList/RulesList';
import { ClassesConstants } from '../../shared/constants/classes.constants';

class AboutGame {
  private about = document.createElement(TagConstants.DIV);

  private aboutTitle = document.createElement(TagConstants.H3);

  private addClasses = () => {
    this.aboutTitle.classList.add(ClassesConstants.ABOUT_TITLE);
    this.about.classList.add(ClassesConstants.ABOUT);
  };

  render = () => {
    this.addClasses();
    this.aboutTitle.textContent = ContentConstants.HOW_TO_PLAY;
    this.about.append(this.aboutTitle, new RulesList().render());

    return this.about;
  };
}

export default AboutGame;
