import { IComponent } from '../../shared/interfaces';
import TagConstants from '../../shared/constants/tag.constants';
import './BestScore.scss';
import ContentConstants from '../../shared/constants/content.constants';
import BestPlayersList from './BestPlayersList/BestPlayersList';
import { ClassesConstants } from '../../shared/constants/classes.constants';

class BestScore implements IComponent {
  private bestScore = document.createElement(TagConstants.DIV);

  private bestScoreTitle = document.createElement(TagConstants.H3);

  private addClasses = () => {
    this.bestScore.classList.add(ClassesConstants.BEST_SCORE);
    this.bestScoreTitle.classList.add(ClassesConstants.BEST_SCORE_TITLE);
  };

  public render = () => {
    this.addClasses();
    this.bestScoreTitle.textContent = ContentConstants.BEST_PLAYERS;
    this.bestScore.append(this.bestScoreTitle, new BestPlayersList().render());

    return this.bestScore;
  };
}

export default BestScore;
