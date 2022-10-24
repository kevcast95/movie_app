import React from 'react';
import Button from '../Button';
import './Landing.scss';

function Landing() {
  return (
    <section className="landing">
      <div className="landing-cover">
        <h1>THE LOST CITY</h1>
        <p className="landing-cover-description">
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eum autem perferendis quae,
          eligendi nihil accusantium itaque doloremqu
          excepturi esse suscipit consequuntur a quo
          voluptatum optio illum necessitatibus, sunt
          voluptates cumque.
        </p>
        <div className="landing-cover-properties">
          <span>
            164 min.
          </span>
          <span>
            Subtitles
          </span>
          <span>
            Imdb: 9.1/10
          </span>
        </div>
        <div className="landing-cover-btns">
          <Button>
            Play
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Landing;
