import App from './App';
import Router from './shared/services/Router';

const router = new Router({
  mode: 'hash',
  root: '/',
});

document.body.append(new App({ router }).render());
