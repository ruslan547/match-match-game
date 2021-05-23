import { IUser } from '../interfaces';

class RegistrationService {
  private user: IUser | null;

  constructor() {
    this.user = null;
  }
}

export default RegistrationService;
