export default class MyApp extends ux.App {
  static _template() {
    return {
      LilLightning:{ x: 100, y: 100, src: 'https://www.sparkui.org/examples/gallery/images/ball.png' }
    }
  }

  _handleLeft(){
    this.tag('LilLightning').patch({ x: 100 });
  }

  _handleRight(){
    this.tag('LilLightning').patch({ x: 400 });
  }
}

MyApp.COLORS = {
    BACKGROUND: 0xff282e32
};
