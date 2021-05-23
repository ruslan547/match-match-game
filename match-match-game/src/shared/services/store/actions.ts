import { IUser } from '../../interfaces';
import ActionConstants from '../../constants/action.constants';

export const init = () => ({ type: ActionConstants.INIT });
export const page = (payload: string) => ({ type: ActionConstants.PAGE, payload });
export const game = () => ({ type: ActionConstants.GAME });
export const inputDataIntoForm = (payload: boolean) => (
  { type: ActionConstants.INPUT_DATE_INTO_FORM, payload }
);
export const registerUser = (payload: IUser) => ({ type: ActionConstants.REGISTER_USER, payload });
