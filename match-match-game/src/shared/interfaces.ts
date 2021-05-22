export interface IComponent {
  render(): HTMLElement;
}

export interface IAction {
  type: string;
  payload?: string | boolean;
}

export interface IState {
  page: string;
  user: IUser | null;
  isGame: boolean;
  isRegistrationForm: boolean;
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
