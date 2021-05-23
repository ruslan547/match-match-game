import ContentConstants from '../../../constants/content.constants';
import './Nav.scss';
import TagConstants from '../../../constants/tag.constants';
import NavLink from '../NavButton/NavButton';
import about from '../../../../assets/img/about.svg';
import star from '../../../../assets/img/star.svg';
import setting from '../../../../assets/img/set.svg';
import RouteConstants from '../../../constants/route.constants';

class Nav {
  private nav = document.createElement(TagConstants.UL);

  render = () => {
    this.nav.classList.add('nav');

    this.nav.append(
      new NavLink({
        text: ContentConstants.ABOUT_GAME,
        img: about,
        url: RouteConstants.HASH_ABOUT,
      }).render(),
      new NavLink({
        text: ContentConstants.BEST_SCORE,
        img: star,
        url: RouteConstants.HASH_BEST,
      }).render(),
      new NavLink({
        text: ContentConstants.GAME_SETTINGS,
        img: setting,
        url: RouteConstants.HASH_SETTING,
      }).render(),
    );

    return this.nav;
  };
}

export default Nav;
