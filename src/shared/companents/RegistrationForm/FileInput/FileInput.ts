import TagConstants from '../../../constants/tag.constants';
import { IComponent } from '../../../interfaces';
import './FileInput.scss';
import avatar from '../../../../assets/img/form-avatar.svg';
import { ClassesConstants } from '../../../constants/classes.constants';

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
        this.fileInputContainer.dataset.img = this.img.src;
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

  private addClasses = () => {
    this.fileInputContainer.classList.add(ClassesConstants.FILE_INPUT_CONTAINER);
    this.fileInput.classList.add(ClassesConstants.FILE_INPUT);
    this.img.classList.add(ClassesConstants.FILE_INPUT_IMG);
  };

  private setAttributes = () => {
    this.fileInput.type = TagConstants.FILE;
    this.img.src = avatar;
    this.fileInputContainer.dataset.img = avatar;
  };

  public render = () => {
    this.addClasses();
    this.setAttributes();
    this.fileInput.addEventListener('input', this.handleInput);
    this.img.addEventListener('click', this.handleClick);
    this.fileInputContainer.append(this.img, this.fileInput);

    return this.fileInputContainer;
  };
}

export default FileInput;
