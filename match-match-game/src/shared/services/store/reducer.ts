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
    case ActionConstants.INPUT_DATE_INTO_FORM:
      return { ...state, isValidForm: action.payload };
    default:
      return state;
  }
}

export default reducer;
