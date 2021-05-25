export interface IComponent {
  render(): HTMLElement;
}

export interface IAction {
  type: string;
  payload?: string | boolean | IUser | null;
}

export interface IState {
  page: string;
  user: IUser | null;
  isValidForm: boolean;
  cardsType: string;
  difficulty: string;
  time: string;
}

export interface IUser {
  id?: number;
  img: string | null;
  firstName: string;
  lastName: string;
  email: string;
  score: number;
}

export interface IPopupService {
  createPopup(element: HTMLElement): void;
  removePopup(): void;
}
