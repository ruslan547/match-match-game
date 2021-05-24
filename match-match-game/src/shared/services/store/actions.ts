import { IUser } from '../../interfaces';
import ActionConstants from '../../constants/action.constants';

export const init = () => ({ type: ActionConstants.INIT });
export const setPage = (payload: string) => ({ type: ActionConstants.SET_PAGE, payload });
export const setGame = () => ({ type: ActionConstants.SET_GAME });
export const inputDataIntoForm = (payload: boolean) => (
  { type: ActionConstants.INPUT_DATE_INTO_FORM, payload }
);
export const registerUser = (payload: IUser) => ({ type: ActionConstants.REGISTER_USER, payload });
export const setCardsType = (payload: string) => (
  { type: ActionConstants.SET_CARDS_TAPY, payload }
);
export const setDifficulty = (payload: string) => (
  { type: ActionConstants.SET_DIFFICULTY, payload }
);
export const setTime = (payload: string) => ({ type: ActionConstants.SET_TIME, payload });
