import './style.scss';

import * as P5 from 'p5';
new P5((p5: p5) => {
  p5.setup = () => {};
  p5.draw = () => {
    p5.ellipse(50, 50, 80, 80);
  };
});
