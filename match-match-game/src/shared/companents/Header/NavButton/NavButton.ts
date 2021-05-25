import TagConstants from '../../../constants/tag.constants';
import { ClassesConstants } from '../../../constants/classes.constants';
import './NavButton.scss';

interface NavButtonProp {
  text: string;
  img: string;
  url: string;
}

class NavLink {
  private text;

  private img;

  private url;

  private navLinkTag = document.createElement(TagConstants.A);

  private imgTag = document.createElement(TagConstants.IMG);

  private textTag = document.createElement(TagConstants.SPAN);

  constructor({ text, img, url }: NavButtonProp) {
    this.text = text;
    this.img = img;
    this.url = url;
  }

  private addClasses = () => {
    const { href } = document.location;

    this.navLinkTag.classList.add(ClassesConstants.NAV_LINK);
    this.imgTag.classList.add(ClassesConstants.NAV_LINK_IMG);

    if (href.includes(this.url)) {
      this.navLinkTag.classList.add(ClassesConstants.ACTIVE);
    }
  };

  private initElem = () => {
    this.navLinkTag.href = this.url;
    this.imgTag.src = this.img;
    this.textTag.textContent = this.text;
  };

  render = () => {
    this.addClasses();
    this.initElem();

    this.navLinkTag.append(this.imgTag, this.textTag);

    return this.navLinkTag;
  };
}

export default NavLink;
