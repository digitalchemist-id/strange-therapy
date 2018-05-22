//Create a Pixi Application
let app = new Application({ 
    width: 360, 
    height: 640,                       
    antialiasing: true, 
    transparent: false,
    backgroundColor: 0x1099bb,
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

//setup
let state;
let fqueue = [];
var count = 0;
var queue = 0, signal = false;

//message
var msgArray = [];
var pushCount, pushHeight;
let msgLine = new Graphics();
msgLine.lineStyle(4, 0xffd900, 1);
msgLine.moveTo(0, 240);
msgLine.lineTo(360, 240);
app.stage.addChild(msgLine);

//choices
let textMetrics;
const button = [];
var text = [];
let option = [];
var style = new TextStyle ({
    fontFamily : 'Arial',
    fontSize: 14,
    fill : 0xffffff,
    wordWrap: true,
    wordWrapWidth: 300 
});
let gradientShow = [false], gradientHide = [false];

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
    button[i].interactive = false;
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

    dev();

    state = play;
    
    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta){
    ++count;

    state(delta);

    if(queue>1){
        --queue;
    } else if (queue==1) {
        --queue;
        signal = true;
    } else if (queue==0) {
        signal = false;
        if(fqueue.length != 0){
            fqueue[0](); 
            fqueue.splice(0, 1);
        }
    }
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

    checkMsgPush();
}

async function dev(){

    M.s('dev enter');
    P.s('hello');
    P.s('welcome');
    M.s('Hi Ho');
    P.s('don\'t make me do this');
    M.s('do what?');
    P.s('make you read all this long sentence, you know. I\'m gonna go double');
    P.s('You know what');
    P.s('this is messed up')

    choose(['Choice 1', 'Choice 2!!!!!', 'Choice 3 and there'], 
    [
        function onClick1() {console.log("clicked 1!"); clearOptions(); dev2();}, 
        function onClick2() {console.log("clicked 2!"); clearOptions(); dev2();},
        function onClick3() {console.log("clicked 3!"); clearOptions(); blank();},
    ]);
}

async function dev2(){


    await sleep(1000);

    M.speak('dev2 enter', 'left', 250);

    

    await sleep(100);

    choose(['Choice 1 again', 'Choice 2!!!!! again!', 'Choice 3 and there again'],
    [
        function onClick1() {console.log("clicked 1 this time!"); clearOptions(); blank();}, 
        function onClick2() {console.log("clicked 2 this time!"); clearOptions(); blank();},
        function onClick3() {console.log("clicked 3 this time!"); clearOptions(); blank();}
    ]);
}

async function blank(){

    M.speak('blank enter', 'right', 300);
    await sleep(1000);
}