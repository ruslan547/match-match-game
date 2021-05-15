import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import './Header.scss';

class Header {
  render = () => {
    const headerTag = document.createElement('div');

    headerTag.classList.add('header');

    headerTag.append(new Logo().render(), new Nav().render());

    return headerTag;
  };
}

export default Header;
