import App from './App';
import RouteConstants from './shared/constants/route.constants';
import Router from './shared/services/Router';

const router = new Router({
  mode: RouteConstants.HASH,
  root: RouteConstants.HASH_ABOUT,
});

document.body.append(new App({ router }).render());
