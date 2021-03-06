import RouteConstants from '../constants/route.constants';

type RoutePath = RegExp | string;

type RouteCb = () => void;

interface Route {
  path: RoutePath;
  cb: RouteCb;
}

interface RouterProp {
  mode: string | null;
  root: string;
}

class Router {
  routes: Array<Route> = [];

  mode: string | null = null;

  root = RouteConstants.ROOT as string;

  intervalId;

  current = '--';

  constructor(options: RouterProp) {
    if (options.mode) this.mode = options.mode;
    if (options.root) this.root = options.root;
    this.intervalId = this.listen();
  }

  add = (path: RoutePath, cb: RouteCb) => {
    this.routes.push({ path, cb });
    return this;
  };

  remove = (path: RoutePath) => {
    for (let i = 0; i < this.routes.length; i += 1) {
      if (this.routes[i].path === path) {
        this.routes.slice(i, 1);
        return this;
      }
    }
    return this;
  };

  flush = () => {
    this.routes = [];
    return this;
  };

  clearSlashes = (path: RoutePath) => path
    .toString()
    .replace(/\/$/, RouteConstants.EMPTY_FILLER)
    .replace(/^\//, RouteConstants.EMPTY_FILLER);

  getFragment = () => {
    let fragment = RouteConstants.EMPTY_FILLER as string;
    if (this.mode === 'history') {
      fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
      fragment = fragment.replace(/\?(.*)$/, RouteConstants.EMPTY_FILLER);
      fragment = (this.root !== RouteConstants.ROOT)
        ? fragment.replace(this.root, RouteConstants.EMPTY_FILLER) : fragment;
    } else {
      const match = window.location.href.match(/#(.*)$/);
      fragment = match ? match[1] : RouteConstants.EMPTY_FILLER;
    }
    return this.clearSlashes(fragment);
  };

  navigate = (path = RouteConstants.EMPTY_FILLER) => {
    if (this.mode === 'history') {
      window.history.pushState(
        null,
        RouteConstants.EMPTY_FILLER,
        this.root + this.clearSlashes(path),
      );
    } else {
      window.location.href = `${window.location.href.replace(/#(.*)$/, RouteConstants.EMPTY_FILLER)}#${path}`;
    }
    return this;
  };

  listen = () => {
    clearInterval(this.intervalId);
    return setInterval(this.interval, 50);
  };

  interval = () => {
    if (this.current === this.getFragment()) {
      return;
    }

    this.current = this.getFragment();

    this.routes.some((route) => {
      const match = this.current.match(route.path);
      if (match) {
        match.shift();
        route.cb.apply({}, match as []);
        return match;
      }
      return false;
    });
  };
}

export default Router;
