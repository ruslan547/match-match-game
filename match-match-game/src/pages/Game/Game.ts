import TagConstants from '../../shared/constants/tag.constants';
import { IComponent } from '../../shared/interfaces';
import Board from './Board/Board';
import './Game.scss';

class Game implements IComponent {
  private game = document.createElement(TagConstants.DIV);

  public render = () => {
    this.game.classList.add('game-page');
    this.game.append(new Board().render());
    return this.game;
  };
}

export default Game;
