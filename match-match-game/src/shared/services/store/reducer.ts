import ActionConstants from '../../constants/action.constants';
import { IAction, IState } from '../../interfaces';

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case ActionConstants.PAGE:
      return { ...state, page: action.payload };
    case ActionConstants.GAME:
      return { ...state, isGame: !state.isGame };
    case ActionConstants.REGISTRATION:
      return { ...state, isRegistrationForm: !state.isRegistrationForm };
    default:
      return state;
  }
}

export default reducer;
