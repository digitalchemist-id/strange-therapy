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

let choiceLine = new Graphics();
choiceLine.lineStyle(4, 0xffd900, 1);
choiceLine.moveTo(0, 490);
choiceLine.lineTo(360, 490);
app.stage.addChild(choiceLine);

let blackout = new Graphics();
blackout.beginFill(0x000000, 1);
blackout.drawRect(0, 0, 360, 640);
blackout.endFill();
app.stage.addChild(blackout); //NOT YET IMPLEMENTED need to addchild at the frontmost
blackout.visible = false;