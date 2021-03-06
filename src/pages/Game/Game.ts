import { ClassesConstants } from '../../shared/constants/classes.constants';
import TagConstants from '../../shared/constants/tag.constants';
import { IComponent } from '../../shared/interfaces';
import Board from './Board/Board';
import './Game.scss';
import Timer from './Timer/Timer';

class Game implements IComponent {
  private game = document.createElement(TagConstants.DIV);

  public render = () => {
    this.game.classList.add(ClassesConstants.GAME_PAGE);
    this.game.append(new Timer().render(), new Board().render());

    return this.game;
  };
}

export default Game;
