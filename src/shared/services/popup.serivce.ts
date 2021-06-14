import Popup from '../companents/Popup/Popup';
import { IPopupService } from '../interfaces';

class PopupService implements IPopupService {
  private popup: HTMLElement | null = null;

  createPopup = (element: HTMLElement): void => {
    this.popup = new Popup(element).render();
    document.body.append(this.popup);
    document.body.style.overflowY = 'hidden';
  };

  removePopup = (): void => {
    this.popup?.remove();
    document.body.style.overflowY = 'auto';
  };
}

export const popupService = new PopupService();
