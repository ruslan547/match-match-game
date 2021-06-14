import { ClassesConstants } from '../../../shared/constants/classes.constants';
import { IAction, IComponent } from '../../../shared/interfaces';
import TagConstants from '../../../shared/constants/tag.constants';
import { store } from '../../../shared/services/store/store.service';
import './Setting.scss';
import ContentConstants from '../../../shared/constants/content.constants';

class Setting implements IComponent {
  private setting = document.createElement(TagConstants.DIV);

  private settingTitle = document.createElement(TagConstants.H3);

  private select = document.createElement(TagConstants.SELECT);

  constructor(
    title: string,
    private preview: string,
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

  private renderPrevOption = () => {
    const option = document.createElement(TagConstants.OPTION);

    option.value = ContentConstants.EMPTY_FILLER;
    option.textContent = this.preview;

    return option;
  };

  private handleInput = () => {
    store.dispatch(this.action(this.select.value));
  };

  private addClasses = () => {
    this.setting.classList.add(ClassesConstants.SETTING);
    this.settingTitle.classList.add(ClassesConstants.SETTING_TITLE);
    this.select.classList.add(ClassesConstants.SETTING_SELECT);
  };

  public render = () => {
    this.addClasses();
    this.select.append(this.renderPrevOption(), ...this.renderOptions());
    this.select.addEventListener('input', this.handleInput);
    this.setting.append(this.settingTitle, this.select);

    return this.setting;
  };
}

export default Setting;
