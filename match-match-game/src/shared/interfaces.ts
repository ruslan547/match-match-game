export interface IComponent {
  render(): HTMLElement;
}

export interface IAction {
  type: string;
  payload?: string | boolean | IUser;
}

export interface IState {
  page: string;
  user: IUser | null;
  isGame: boolean;
  isValidForm: boolean;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  score: number;
}

export interface IPopupService {
  createPopup(element: HTMLElement): void;
  removePopup(): void;
}
