import TagConstants from '../../shared/constants/tag.constants';
import ContentConstants from '../../shared/constants/content.constants';
import './AboutGame.scss';
import RulesList from './RulesList/RulesList';

class AboutGame {
  private about = document.createElement(TagConstants.DIV);

  render = () => {
    const aboutTitle = document.createElement(TagConstants.H3);
    aboutTitle.textContent = ContentConstants.HOW_TO_PLAY;
    aboutTitle.classList.add('about-title');

    this.about.classList.add('about');
    this.about.append(aboutTitle, new RulesList().render());

    return this.about;
  };
}

export default AboutGame;
