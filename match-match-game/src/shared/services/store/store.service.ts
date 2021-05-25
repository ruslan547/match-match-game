import ContentConstants from '../../constants/content.constants';
import RouteConstants from '../../constants/route.constants';
import { IAction, IState } from '../../interfaces';
import { init } from './actions';
import reducer from './reducer';

const initialState = {
  page: RouteConstants.HASH_ABOUT,
  user: null,
  isValidForm: false,
  cardsType: ContentConstants.ANIMALS,
  difficulty: ContentConstants.X4,
  time: ContentConstants.EMPTY_FILLER,
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
