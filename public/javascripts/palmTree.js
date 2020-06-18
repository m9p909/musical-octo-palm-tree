var isFirefox = typeof InstallTrigger !== "undefined";
var isChrome =
  !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
class leaf {
  audio;
  leafsvg;
  constructor(leafID, snapObj) {
    this.audio = new Audio("audio/string" + leafID + ".ogg");
    //console.log(this.audio);
    this.leafsvg = snapObj.select("#leaf" + leafID);
    this.leafsvg.addClass("clickable leaf");
  }
}
class palmTree {
  constructor(h, w) {
    this.height = h;
    this.width = w;
  }
  draw(id) {
    var s = Snap(id);
    Snap.load("tree/palmtree.svg", function (f) {
      let leafs = [];
      for (let i = 0; i < 8; i++) {
        leafs[i] = new leaf(i + 1, f);
        leafs[i].leafsvg.click(() => {
          /*if (isFirefox) {
            leafs[i].audio.currentTime = 2.5;
          } else {
            leafs[i].audio.currentTime = 3;
          }*/ 
          // uncomment for guitar files
          leafs[i].audio.currentTime=0;
          leafs[i].audio.play();
        });
        /*leafs[i].leafsvg.hover(
          () => {
            console.log(leafs[i].leafsvg.attr());
          },
          () => {

            let normal = {
                fill:"#008000"
            }

            //console.log(leafs[i].leafsvg);
            leafs[i].leafsvg.attr(normal);
          }
        );*/
      }

      s.append(f);
    });
  }
}
tree = new palmTree(200, 100);
tree.draw("#svg");
