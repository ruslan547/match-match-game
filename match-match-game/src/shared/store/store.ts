import RouteConstants from '../constants/route.constants';
import { IAction } from '../interfaces/action';
import { IState } from '../interfaces/state';
import rootReducer from '../reducers/root.reducer';

const initialState = {
  page: RouteConstants.ABOUT,
};

const createStore = (reducer: Function, initState: IState) => {
  let state = reducer(initState, { type: 'init' });
  const subscribers: Array<() => void> = [];

  return {
    dispatch(action: IAction) {
      state = reducer(state, action);
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

export const store = createStore(rootReducer, initialState);
