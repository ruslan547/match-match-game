import ActionConstants from '../../constants/action.constants';
import { IAction, IState } from '../../interfaces';

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case ActionConstants.SET_PAGE:
      return { ...state, page: action.payload };
    case ActionConstants.INPUT_DATE_INTO_FORM:
      return { ...state, isValidForm: action.payload };
    case ActionConstants.REGISTER_USER:
      return { ...state, user: action.payload };
    case ActionConstants.SET_CARDS_TAPY:
      return { ...state, cardsType: action.payload };
    case ActionConstants.SET_DIFFICULTY:
      return { ...state, difficulty: action.payload };
    case ActionConstants.SET_TIME:
      return { ...state, time: action.payload };
    default:
      return state;
  }
}

export default reducer;
