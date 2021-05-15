import ContentConstants from '../../constants/content.constants';
import './Nav.scss';
import TagConstants from '../../constants/tag.constants';
import NavLink from '../NavButton/NavButton';
import about from '../../../assets/img/about.svg';
import star from '../../../assets/img/star.svg';
import set from '../../../assets/img/set.svg';
import RouteConstants from '../../constants/route.constants';

class Nav {
  render = () => {
    const ul = document.createElement(TagConstants.UL);

    ul.classList.add('nav');
    for (let i = 0; i < 3; i += 1) ul.append(document.createElement(TagConstants.LI));

    const links = ul.children;

    links.item(0)?.append(new NavLink({
      text: ContentConstants.ABOUT_GAME,
      img: about,
      url: RouteConstants.HASH_ABOUT,
    }).render());

    links.item(1)?.append(new NavLink({
      text: ContentConstants.BEST_SCORE,
      img: star,
      url: RouteConstants.HASH_BEST,
    }).render());

    links.item(2)?.append(new NavLink({
      text: ContentConstants.GAME_SETTINGS,
      img: set,
      url: RouteConstants.HASH_SETTING,
    }).render());

    return ul;
  };
}

export default Nav;
