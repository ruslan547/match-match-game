import './AboutGame.scss';

class AboutGame {
  render = () => {
    const aboutTag = document.createElement('div');

    aboutTag.classList.add('about');
    aboutTag.append('about');

    return aboutTag;
  };
}

export default AboutGame;
