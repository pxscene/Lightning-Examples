export default class MyApp extends ux.App {
    static _template() {
        return {
          UsingShorthand: {
            x: 250,
            y: 70,
            src: 'https://www.sparkui.org/examples/gallery/images/ball.png',
          },
          UsingTexture: {
            x: 250,
            y: 350,
            texture: {
              type: lng.textures.ImageTexture,
              src: 'https://www.sparkui.org/examples/gallery/images/ball.png',
            },
          },
        };
    }
}

MyApp.COLORS = {
    BACKGROUND: 0xff282e32
};
