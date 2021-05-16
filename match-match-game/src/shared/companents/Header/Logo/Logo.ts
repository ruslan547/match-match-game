import ContentConstants from '../../../constants/content.constants';
import TagConstants from '../../../constants/tag.constants';
import './Logo.scss';

class Logo {
  render = () => {
    const logo = document.createElement(TagConstants.DIV);
    const firstText = document.createElement(TagConstants.DIV);
    const secondText = document.createElement(TagConstants.DIV);

    logo.classList.add('logo');
    firstText.textContent = ContentConstants.LOGO;
    firstText.classList.add('logo__first-text');
    secondText.textContent = ContentConstants.LOGO;
    secondText.classList.add('logo__second-text');
    logo.append(firstText, secondText);

    return logo;
  };
}

export default Logo;
