import NavButton from '../NavButton/NavButton';
import s from './Header.scss';

export interface IHeader {

}

class Header implements IHeader {
  render = () => {
    const headerTag = document.createElement('div');
    headerTag.classList.add(s.header);

    headerTag.append(new NavButton({
      text: 'About',
      img: '../../assets/img/question.svg',
      url: '/#/settings',
    }).render());

    return headerTag;
  };
}

export default Header;
