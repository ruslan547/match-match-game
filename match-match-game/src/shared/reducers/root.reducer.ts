import ActionConstants from '../constants/action.constants';
import { IAction } from '../interfaces/action';
import { IState } from '../interfaces/state';

function rootReducer(state: IState, action: IAction) {
  switch (action.type) {
    case ActionConstants.PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
