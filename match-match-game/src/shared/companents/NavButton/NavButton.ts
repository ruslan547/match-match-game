import { page } from '../../actions/page';
import { store } from '../../store/store';
import './NavButton.scss';

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

  curPage;

  constructor({ text, img, url }: NavButtonProp) {
    this.curPage = url.replace(/[/#]/g, '');
    this.text = text;
    this.img = img;
    this.url = url;
  }

  private activate = (link: HTMLElement) => {
    const state = store.getState();

    if (state.page === this.curPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  };

  render = () => {
    const navLinkTag = document.createElement('a');
    const imgTag = document.createElement('img');
    const textTag = document.createElement('span');

    navLinkTag.href = this.url;
    navLinkTag.classList.add('nav-link');
    this.activate(navLinkTag);
    imgTag.src = this.img;
    imgTag.classList.add('nav-link__img');
    textTag.textContent = this.text;
    textTag.classList.add('nav-link__text');
    navLinkTag.append(imgTag, textTag);

    navLinkTag.addEventListener('click', () => {
      store.dispatch(page(this.curPage));
    });

    store.subscribe(() => {
      this.activate(navLinkTag);
    });

    return navLinkTag;
  };
}

export default NavLink;
