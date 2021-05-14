import Header, { IHeader } from '../../shared/companents/Header/Header';
import s from './AboutGame.scss';

interface AboutGameProp {
  header: IHeader;
}

interface IAboutGame {
  header: IHeader
}

class AboutGame implements IAboutGame {
  header;

  constructor({ header }: AboutGameProp) {
    this.header = header;
  }

  render = () => {
    const aboutTag = document.createElement('div');

    aboutTag.classList.add(s.about);
    aboutTag.append(new Header().render());

    return aboutTag;
  };
}

export default AboutGame;
