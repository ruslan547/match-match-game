import { ClassesConstants } from '../../shared/constants/classes.constants';
import { setCardsType, setDifficulty } from '../../shared/services/store/actions';
import ContentConstants from '../../shared/constants/content.constants';
import TagConstants from '../../shared/constants/tag.constants';
import { IComponent } from '../../shared/interfaces';
import './GameSetting.scss';
import Setting from './Setting/Setting';

class GameSetting implements IComponent {
  private gameSetting = document.createElement(TagConstants.DIV);

  public render = () => {
    this.gameSetting.classList.add(ClassesConstants.GAME_SETTINGS);

    this.gameSetting.append(
      new Setting(
        ContentConstants.GAME_CARDS,
        ContentConstants.SELECT_CARDS_TYPE,
        [ContentConstants.ANIMALS, ContentConstants.CARS],
        setCardsType,
      ).render(),
      new Setting(
        ContentConstants.DIFFICULTY,
        ContentConstants.SELECT_GAME_TYPE,
        [ContentConstants.X4, ContentConstants.X6, ContentConstants.X8],
        setDifficulty,
      ).render(),
    );

    return this.gameSetting;
  };
}

export default GameSetting;
