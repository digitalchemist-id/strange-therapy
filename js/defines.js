//Create a Pixi Application
let app = new Application({ 
    width: 360, 
    height: 640,                       
    antialiasing: true, 
    transparent: false,
    backgroundColor: 0x1099bb,
    resolution: 1
});

/***********************************
***variables across the functions***
***********************************/

//setup
let state;
let fqueue = [];
var queue = 0, signal = false;
var holdQueue = false;
var skipQueue = false;

//clickable transparent skip box
clickBox = new Graphics();
clickBox.beginFill(0x000000, 0);
clickBox.drawRect(0, 0, 360, 640);
clickBox.endFill();
clickBox.interactive = true;
clickBox.on('pointerdown', function(){console.log('clicked!'); skipQueue = true;});
app.stage.addChild(clickBox);

var style = new TextStyle ({
    fontFamily : 'Arial',
    fontSize: 14,
    fill : 0xffffff,
    wordWrap: true,
    wordWrapWidth: 300 
});

//message
var msgArray = [];
var pushCount, pushHeight;

let msgLine = new Graphics();
msgLine.lineStyle(4, 0xffd900, 1);
msgLine.moveTo(0, 240);
msgLine.lineTo(360, 240);
app.stage.addChild(msgLine);

