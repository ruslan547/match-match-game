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

  private handleInput = () => {
    const { files } = this.fileInput as HTMLInputElement;
    const reader = new FileReader();

    reader.onload = () => {
      if (this.img) {
        this.img.src = reader.result as string;
        this.fileInput.files = null;
      }
    };

    if (files) {
      const file = files[0];
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  public render = () => {
    this.fileInputContainer.classList.add('file-input-container');
    this.fileInput.classList.add('file-input');
    this.img.classList.add('file-input-img');
    this.fileInput.type = TagConstants.FILE;
    this.img.src = avatar;

    this.fileInput.addEventListener('input', this.handleInput);

    this.img.addEventListener('click', this.handleClick);

    this.fileInputContainer.append(this.img, this.fileInput);

    return this.fileInputContainer;
  };
}

export default FileInput;
