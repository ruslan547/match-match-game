import { ClassesConstants } from '../../constants/classes.constants';
import { IComponent } from '../../interfaces';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import './Header.scss';
import HeaderButton from './HeaderButton/HeaderButton';
import TagConstants from '../../constants/tag.constants';

class Header implements IComponent {
  private headerTag = document.createElement(TagConstants.DIV);

  private leftHeaderContainer = document.createElement(TagConstants.DIV);

  private rightHeaderContainer = document.createElement(TagConstants.DIV);

  private addClasses = () => {
    this.headerTag.classList.add(ClassesConstants.HEADER);
    this.leftHeaderContainer.classList.add(ClassesConstants.LEFT_HEADER_CONTAINER);
    this.rightHeaderContainer.classList.add(ClassesConstants.RIGHT_HEADER_CONTAINER);
  };

  render = () => {
    this.addClasses();
    this.leftHeaderContainer.append(new Logo().render(), new Nav().render());
    this.rightHeaderContainer.append(new HeaderButton().render());
    this.headerTag.append(this.leftHeaderContainer, this.rightHeaderContainer);

    return this.headerTag;
  };
}

export default Header;
