//Create a Pixi Application
let app = new Application({ 
    width: 360, 
    height: 640,                       
    antialiasing: true, 
    transparent: false, 
    resolution: 1
  }
);

document.body.appendChild(app.view);


loader
    .add("images/example.png")
    .load(setup);

var style = new TextStyle ({
    fontFamily : 'Arial',
    fontSize: 14,
    fill : 0xffffff,
    wordWrap: true,
    wordWrapWidth: 300 
});

//variables across the functions
const button = [];

var text = [];
let textMetrics;
let option = [];
let state;
var tick = 0;
let gradientShow = [false], gradientHide = [false];


//new msg test
/*
let leftMessage = new Container();
leftMessage.position.set(20, 100);
app.stage.addChild(leftMessage);
let myLeftMsg = 'this is a new message on the left';
let myLeftTxt = new Text(myLeftMsg, style);
textMetrics = TextMetrics.measureText(myLeftMsg, style);

let leftBox = new Graphics();
leftBox.beginFill(0x888888, 0.25);
leftBox.drawRoundedRect(-15, -10, textMetrics.width + 30, textMetrics.height + 20, 10);
leftBox.endFill();
leftMessage.addChild(leftBox)

myLeftTxt.position.set(0, 0);
leftMessage.addChild(myLeftTxt);
*/


//right msg test
/*
let rightMessage = new Container();
rightMessage.position.set(340, 150);
app.stage.addChild(rightMessage);
let myRightMsg = 'this is a new message on the right';
let myRightTxt = new Text(myRightMsg, style);
textMetrics = TextMetrics.measureText(myRightMsg, style);
myRightTxt.pivot.set(textMetrics.width, 0);

let rightBox = new Graphics();
rightBox.beginFill(0x888888, 0.25);
rightBox.drawRoundedRect(-15, -10, textMetrics.width + 30, textMetrics.height + 20, 10);
rightBox.endFill();
rightBox.pivot.set(textMetrics.width, 0);
rightMessage.addChild(rightBox)

myRightTxt.position.set(0, 0);
rightMessage.addChild(myRightTxt);
*/

function newMsg(message, align, yPos){
    let xPos;
    let myMsg = new Container();
    
    if(align == 'right'){
        xPos = 340;
    }
    else if(align == 'left'){
        xPos = 20;
    }
    else{
        console.log("You did somethign wrong..");
    }

    myMsg.position.set(xPos, yPos);
    app.stage.addChild(myMsg);
    let newTxt = new Text(message, style);
    newTxt.position.set(0, 0);
    textMetrics = TextMetrics.measureText(message, style);

    let txtBox = new Graphics();
    txtBox.beginFill(0x888888, 0.25);
    txtBox.drawRoundedRect(-15, -10, textMetrics.width + 30, textMetrics.height + 20, 10);
    txtBox.endFill();

    if(align == 'right'){
        newTxt.pivot.set(textMetrics.width, 0);
        txtBox.pivot.set(textMetrics.width, 0);
    }

    myMsg.addChild(newTxt);
    myMsg.addChild(txtBox);
}



//box grpahics used for choices 
let choiceBox = new Graphics();
choiceBox.beginFill(0x888888, 0.25);
choiceBox.drawRoundedRect(0, 0, 300, 30, 10);
choiceBox.endFill();



//make choice choiceBoxes
for(var i = 0; i<3; ++i) {
        //new option
        option[i] = new Container();
        option[i].position.set(30, 500 + 40*i);
        app.stage.addChild(option[i]);
        //text container button
        button[i] = new Sprite(choiceBox.generateCanvasTexture());
        button[i].interactive = true;
        button[i].buttonMode = true;
        option[i].addChild(button[i]);
        //add text
        text[i] = new Text(' ', style);
        text[i].x = 300/2;
        text[i].y = 8;
        option[i].addChild(text[i]);
        option[i].visible = false;
}

function setup() {     
    
    app.ticker.add(delta => gameLoop(delta));

    dev();

    state = play;
}

function gameLoop(delta){
    state(delta);
    //console.log(option[0].alpha + " " + gradientShow + " " + gradientHide);
}

function play(delta){
    //handle alpha values of options
    for(var i=0;i<3;++i){
        if(option[i].alpha < 1 && gradientShow[i]){
            option[i].alpha += 0.10;
        }
        else if (option[i].alpha >= 1 && gradientShow[i]){
            option[i].alpha = 1;
            gradientShow[i] = false;
        }

        if(option[i].alpha > 0 && gradientHide[i]){
            option[i].alpha -= 0.10;
        }
        else if (option[i].alpha <= 0 && gradientHide[i]){
            option[i].alpha = 0;
            gradientHide[i] = false;
        }
    }
}

async function dev(){

    newMsg('dev enter', 'right', 200);

    await sleep(100);

    choose(['Choice 1', 'Choice 2!!!!!', 'Choice 3 and there'], 
    [
        function onClick1() {console.log("clicked 1!"); clearOptions(); dev2();}, 
        function onClick2() {console.log("clicked 2!"); clearOptions(); dev2();},
        function onClick3() {console.log("clicked 3!"); clearOptions(); blank();},
    ]);
}

async function dev2(){


    await sleep(1000);

    newMsg('dev2 enter', 'left', 250);

    await sleep(100);

    choose(['Choice 1 again', 'Choice 2!!!!! again!', 'Choice 3 and there again'],
    [
        function onClick1() {console.log("clicked 1 this time!"); clearOptions(); blank();}, 
        function onClick2() {console.log("clicked 2 this time!"); clearOptions(); blank();},
        function onClick3() {console.log("clicked 3 this time!"); clearOptions(); blank();}
    ]);
}

function blank(){

    newMsg('blank enter', 'right', 300)

}





    
/*
    var textTest = 'basic text testing 한글 테스트';

    var text = new Text(textTest, style);
    text.x = 50;
    text.y = 508;
    app.stage.addChild(text);

    let textMetrics = TextMetrics.measureText(textTest, style);
    console.log('width: ' + textMetrics.width + '\n height: ' + textMetrics.height);
*/

    


