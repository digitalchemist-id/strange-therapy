//Create a Pixi Application
let app = new Application({ 
    width: 360, 
    height: 640,                       
    antialiasing: true, 
    transparent: false,
    backgroundColor: 0x000000,
    resolution: 1
});


let state;

var style = new TextStyle ({
    fontFamily : 'Arial',
    fontSize: 14,
    fill : 0xffffff,
    wordWrap: true,
    wordWrapWidth: 300 
});

var msgArray = [];
var pushCount, pushHeight;

loadBox = new Graphics();
loadBox.beginFill(0xffffff, 1);
loadBox.drawRect(0, 0, 360, 640);
loadBox.endFill();
app.stage.addChildAt(loadBox, 0);

loadText = new Text("LOADING", {
    fontFamily : 'Verdana',
    fontSize: 44,
    fill : 0x000000
});
loadText.x = 72;
loadText.y = 400;
app.stage.addChild(loadText);