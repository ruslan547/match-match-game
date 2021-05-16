import { IComponent } from '../../interfaces';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import './Header.scss';
import HeaderButton from './HeaderButton/HeaderButton';

class Header implements IComponent {
  render = () => {
    const headerTag = document.createElement('div');

    headerTag.classList.add('header');
    headerTag.append(new Logo().render(), new Nav().render(), new HeaderButton().render());

    return headerTag;
  };
}

export default Header;
