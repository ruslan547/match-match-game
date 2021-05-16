export interface IComponent {
  render(): HTMLElement;
}

export interface IAction {
  type: string;
  payload?: string;
}

export interface IState {
  page: string;
  user: IUser | null;
  isGame: boolean;
  isRegistrationForm: boolean;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  score: number;
}
