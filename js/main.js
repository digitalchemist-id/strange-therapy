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
    .add("images/example.png")//example image
    .load(setup);

/***********************************
***variables across the functions***
***********************************/
var style = new TextStyle ({
    fontFamily : 'Arial',
    fontSize: 14,
    fill : 0xffffff,
    wordWrap: true,
    wordWrapWidth: 300 
});

const button = [];

var text = [];
let textMetrics;
let option = [];
let state;
var tick = 0;
let gradientShow = [false], gradientHide = [false];
let dialogueShow = false, dialogueHide = false;

let dialogue = new Container();
app.stage.addChild(dialogue);

/***************
****Messages****
***************/

async function newMsg(message, align, bgColor, txtColor){

    dialogueHide = true;
    await sleep(150);

    let xPos;
    let myMsg = new Container();

    textMetrics = TextMetrics.measureText(message, style);
    
    dialogue.y -= textMetrics.height + 30;

    if(align == 'right'){
        xPos = 330;
    }
    else if(align == 'left'){
        xPos = 30;
    }
    else{
        console.log("You did somethign wrong..");
    }

    myMsg.position.set(xPos, 200 - dialogue.y);
    dialogue.addChild(myMsg);
    let newTxt = new Text(message, {fontFamily: 'Arial', fontSize: 14, fill: txtColor, wordWrap: true, wordWrapWidth: 300});
    newTxt.position.set(0, 0);

    let txtBox = new Graphics();
    txtBox.beginFill(bgColor, 0.5);
    txtBox.drawRoundedRect(-15, -10, textMetrics.width + 30, textMetrics.height + 20, 10);
    txtBox.endFill();

    if(align == 'right'){
        newTxt.pivot.set(textMetrics.width, 0);
        txtBox.pivot.set(textMetrics.width, 0);
    }

    myMsg.addChild(txtBox);
    myMsg.addChild(newTxt);

    dialogueShow = true;
    
}

/**************
***character***
**************/

let character = function(config){
    this.bgColor = config.bgColor;
    this.txtColor= config.txtColor;
    this.align = config.align;
}

character.prototype.speak = function(msg){
    newMsg(msg, this.align, this.bgColor, this.txtColor);
    console.log(this.txtColor);
}

M = new character({bgColor: 0xffffff, txtColor:0x000000, align: 'left'});
P = new character({bgColor: 0x008888, txtColor:0xffffff, align: 'right'});


/*************
***choices****
*************/


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


/***********************
***setup and gameplay***
***********************/

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

    //handle alpha value of dialogue
    if(dialogue.alpha < 1 && dialogueShow){
        dialogue.alpha += 0.50;
    }
    else if (dialogue.alpha >= 1 && dialogueShow){
        dialogue.alpha = 1;
        dialogueShow = false;
    }
    if(dialogue.alpha > 0 && dialogueHide){
        dialogue.alpha -= 0.50;
    }
    else if (dialogue.alpha <= 0 && dialogueHide){
        dialogue.alpha = 0;
        dialogueHide = false;
    }
}

async function dev(){

    M.speak('dev enter');
    await sleep(1000);
    P.speak('hello');
    await sleep(1000);
    P.speak('welcome');
    await sleep(1000);


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

async function blank(){

    newMsg('blank enter', 'right', 300);
    await sleep(1000);
    dialogue.visible = false;

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

    


