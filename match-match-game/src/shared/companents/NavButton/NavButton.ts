import s from './NavButton.scss';

interface NavButtonProp {
  text: string;
  img: string;
  url: string;
}

interface INavLink {
  text: string;
  img: string;
  url: string;
}

class NavLink implements INavLink {
  text;

  img;

  url;

  constructor({ text, img, url }: NavButtonProp) {
    this.text = text;
    this.img = img;
    this.url = url;
  }

  render = () => {
    const navLinkTag = document.createElement('a');
    const imgTag = document.createElement('img');
    const textTag = document.createElement('span');

    navLinkTag.href = this.url;
    navLinkTag.classList.add(s['nav-link']);
    imgTag.src = this.img;
    imgTag.classList.add('nav-link__img');
    textTag.textContent = this.text;
    textTag.classList.add('nav-link__text');
    navLinkTag.append(imgTag, textTag);

    return navLinkTag;
  };
}

export default NavLink;
