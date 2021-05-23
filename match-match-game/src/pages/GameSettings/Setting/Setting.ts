import { IAction, IComponent } from '../../../shared/interfaces';
import TagConstants from '../../../shared/constants/tag.constants';
import { store } from '../../../shared/services/store/store.service';
import './Setting.scss';

class Setting implements IComponent {
  private setting = document.createElement(TagConstants.DIV);

  private settingTitle = document.createElement(TagConstants.H3);

  private select = document.createElement(TagConstants.SELECT);

  constructor(
    title: string,
    private options: string[],
    private action: (payload: string) => IAction,
  ) {
    this.settingTitle.textContent = title;
  }

  private renderOptions = () => this.options.map((item) => {
    const option = document.createElement(TagConstants.OPTION);
    option.value = item;
    option.textContent = item;

    return option;
  });

  private handleInput = () => {
    store.dispatch(this.action(this.select.value));
  };

  public render = () => {
    this.setting.classList.add('setting');
    this.settingTitle.classList.add('setting-title');

    this.select.append(...this.renderOptions());
    this.select.addEventListener('input', this.handleInput);
    this.setting.append(this.settingTitle, this.select);

    return this.setting;
  };
}

export default Setting;