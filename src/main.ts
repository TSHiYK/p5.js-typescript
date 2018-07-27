import './style.scss';

import * as P5 from 'p5';

// model
import * as teapot from './assets/teapot.obj';

new P5((p5: p5) => {
  let model: any;
  p5.preload = () => {
    model = p5.loadModel(teapot, false, onPreLoad);
  };
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
  };
  p5.draw = () => {
    p5.background(255);
    p5.scale(50);
    p5.rotateZ(p5.radians(180));
    p5.rotateY(p5.frameCount * 0.01);
    p5.model(model);
  };
});

const onPreLoad = (data: any) => {
  console.log(data);
};
