export default class MyApp extends ux.App {
  static _template() {
    return {
      Message: {text: {text: "Press 's' key to show Search"}}
    }
  }

  _handleSearch(){
    this.tag("Message").text.text = "Search";
  }
}

MyApp.COLORS = {
    BACKGROUND: 0xff282e32
};
