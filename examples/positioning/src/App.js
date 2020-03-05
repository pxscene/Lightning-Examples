export default class MyApp extends ux.App {
  static _template() {
    return {
      Header: {
        rect: true, w: window.innerWidth, h: 50, color: 0xff005500,
        Title: {
          x: (w => w - 50), mountX: 1, mountY: 0.5, y: 30,
          text: { text: 'Header' },
          OverlayGradient: {
            w: (w => 0.25 * w),
            rect: true,
            colorLeft: 0xFF000000,
            colorRight: 0x00000000
          }
        }
      }
    }
  }
}

MyApp.COLORS = {
    BACKGROUND: 0xff282e32
};
