import TagConstants from '../../../constants/tag.constants';
import { IComponent } from '../../../interfaces';
import './FileInput.scss';
import avatar from '../../../../assets/img/form-avatar.svg';

class FileInput implements IComponent {
  private fileInputContainer = document.createElement(TagConstants.DIV);

  private fileInput = document.createElement(TagConstants.INPUT);

  private img = document.createElement(TagConstants.IMG);

  private handleClick = () => {
    this.fileInput.click();
  };

  public render = () => {
    this.fileInputContainer.classList.add('file-input-container');
    this.fileInput.classList.add('file-input');
    this.img.classList.add('file-input-img');
    this.fileInput.type = TagConstants.FILE;
    this.img.src = avatar;

    this.img.addEventListener('click', this.handleClick);

    this.fileInputContainer.append(this.img, this.fileInput);

    return this.fileInputContainer;
  };
}

export default FileInput;
