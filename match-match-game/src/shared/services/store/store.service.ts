import RouteConstants from '../../constants/route.constants';
import { IAction, IState } from '../../interfaces';
import { init } from './actions';
import reducer from './reducer';

const initialState = {
  page: RouteConstants.HASH_ABOUT,
  user: null,
  isGame: false,
  isRegistrationForm: false,
  isValidForm: false,
};

const createStore = (rootReducer: Function, initState: IState) => {
  let state = rootReducer(initState, init());
  const subscribers: Array<() => void> = [];

  return {
    dispatch(action: IAction) {
      state = rootReducer(state, action);
      subscribers.forEach((sub) => sub());
    },
    subscribe(callback: () => void) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
};

export const store = createStore(reducer, initialState);
