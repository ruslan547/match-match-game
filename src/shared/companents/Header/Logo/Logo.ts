import { ClassesConstants } from '../../../constants/classes.constants';
import ContentConstants from '../../../constants/content.constants';
import TagConstants from '../../../constants/tag.constants';
import './Logo.scss';

class Logo {
  private logo = document.createElement(TagConstants.DIV);

  private firstText = document.createElement(TagConstants.DIV);

  private secondText = document.createElement(TagConstants.DIV);

  private addClasses = () => {
    this.logo.classList.add(ClassesConstants.LOGO);
    this.firstText.classList.add(ClassesConstants.LOGO_FIRST_TEXT);
    this.secondText.classList.add(ClassesConstants.LOGO_SECOND_TEXT);
  };

  private setAttributes = () => {
    this.firstText.textContent = ContentConstants.LOGO;
    this.secondText.textContent = ContentConstants.LOGO;
  };

  render = () => {
    this.addClasses();
    this.setAttributes();
    this.logo.append(this.firstText, this.secondText);

    return this.logo;
  };
}

export default Logo;
