import ActionConstants from '../../constants/action.constants';

export const init = () => ({ type: ActionConstants.INIT });
export const page = (payload: string) => ({ type: ActionConstants.PAGE, payload });
export const game = () => ({ type: ActionConstants.GAME });
export const registration = () => ({ type: ActionConstants.REGISTRATION });