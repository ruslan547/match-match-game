import { IComponent } from '../../shared/interfaces';
import TagConstants from '../../shared/constants/tag.constants';
import './BestScore.scss';
import ContentConstants from '../../shared/constants/content.constants';
import BestPlayersList from './BestPlayersList/BestPlayersList';

class BestScore implements IComponent {
  private bestScore = document.createElement(TagConstants.DIV);

  public render = () => {
    const bestScoreTitle = document.createElement(TagConstants.H3);
    bestScoreTitle.textContent = ContentConstants.BEST_PLAYERS;

    this.bestScore.classList.add('best-score');
    bestScoreTitle.classList.add('best-score-title');

    this.bestScore.append(bestScoreTitle, new BestPlayersList().render());

    return this.bestScore;
  };
}

export default BestScore;
