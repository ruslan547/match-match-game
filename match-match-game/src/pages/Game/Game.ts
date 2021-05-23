import TagConstants from '../../shared/constants/tag.constants';
import { IComponent } from '../../shared/interfaces';
import './Game.scss';

class Game implements IComponent {
  private game = document.createElement(TagConstants.DIV);

  public render = () => {
    this.game.classList.add('game-page');
    return this.game;
  };
}

export default Game;
