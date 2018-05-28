/******
***Q***
******/// for queue

let Q = {
    fqueue: [],
    queue: 0,
    holdQueue: false,//for choice but not really needed
    skipQueue: false,
    clickBox: new Graphics(),
    canSkip: true, //for wait
    handleQueue: function() {
        if(!this.holdQueue){
            if(this.queue>0){
                --this.queue;
            } else if (this.queue==0) {
                if(!this.canSkip){
                    this.canSkip = true;
                } //end wait
                if(this.fqueue.length != 0){
                    this.fqueue[0](); 
                    this.fqueue.splice(0, 1);
                }
            }
        }
        if(!this.canSkip){
            this.skipQueue = false; //ignore click when waiting
        }
        if(pushCount <= 0 && this.skipQueue){
            this.skipQueue = false;
            this.queue = 0;
        }
        //console.log(this.queue +', '+ this.canSkip);
    }, //A lot messy
    addQueue: function() {
        this.queue += this.framecount;
        this.canSkip = false;
    },
    wait: function(ms){
        this.framecount = Math.floor(ms*60/1000); //so this works without defining before
        this.fqueue.push(this.addQueue.bind(this));
    },
    do: function(foo){
        this.fqueue.push(foo);
    }
}

//clickable transparent skip box - can I put it inside Q?
Q.clickBox.beginFill(0, 0);
Q.clickBox.drawRect(0, 0, 360, 640);
Q.clickBox.endFill();
Q.clickBox.interactive = true;
Q.clickBox.on('pointerdown', function(){
    //console.log('clicked!'); 
    Q.skipQueue = true;
});
app.stage.addChild(Q.clickBox);


/***************
****Messages****
***************/

let Message = function(txt, align, bgColor, txtColor) {
    this.txt = txt;
    this.alpha = 0.7;
    this.align = align;
    this.bgColor = bgColor;
    if(align == 'right') {this.xPos = 330;}
    else if(align == 'left') {this.xPos = 30;}
    this.yPos = 250;
    this.style = new TextStyle ({
        fontFamily : 'Arial',
        fontSize: 14,
        fill : txtColor,
        wordWrap: true,
        wordWrapWidth: 300 
    });
    this.textMetrics = TextMetrics.measureText(txt, this.style);
    this.msgContainer = new Container();
    this.speak = false;
}

Message.prototype.setup = function() {
    this.msgContainer.position.set(this.xPos, this.yPos);

    let txtBox = new Graphics();
    txtBox.beginFill(this.bgColor, this.alpha);
    if(this.speak == true && this.align == 'left') {
        txtBox.moveTo(-25, -3);
        txtBox.lineTo(-15, -3);
        txtBox.lineTo(-15, -3 + 10);
        txtBox.lineTo(-25, -3);
    } else if(this.speak == true && this.align == 'right') {
        txtBox.moveTo(this.textMetrics.width + 15, -3);
        txtBox.lineTo(this.textMetrics.width + 15 + 10, -3);
        txtBox.lineTo(this.textMetrics.width + 15, -3 + 10);
        txtBox.lineTo(this.textMetrics.width + 15, -3);
    }
    txtBox.drawRoundedRect(-15, -10, this.textMetrics.width + 30, this.textMetrics.height + 20, 10);
    txtBox.endFill();
    this.msgContainer.addChild(txtBox);

    let msgTxt = new Text(this.txt, this.style);
    msgTxt.position.set(0, 0);
    if(this.align == 'right') {
        txtBox.pivot.set(this.textMetrics.width, 0);
        msgTxt.pivot.set(this.textMetrics.width, 0);
    }
    this.msgContainer.addChild(msgTxt);

    
}

Message.prototype.draw = function() {
    //console.log('draw called ' + this.textMetrics.height);
    Q.queue += Math.floor(this.textMetrics.width/2) + 40; //adjusts speed of autoskip
    //console.log(queue);
    pushHeight = this.textMetrics.height + 25;
    pushCount = this.textMetrics.height + 24; // - 1 to prevent pushing further
    this.msgContainer.position.y = 250;
    msgArray.push(this.msgContainer);
    app.stage.addChild(this.msgContainer);
    resources.send.sound.play();
}

/**************
***character***
**************/

let Character = function(config){
    this.bgColor = config.bgColor;
    this.txtColor= config.txtColor;
    this.align = config.align;
    //this.sound = config.sound;
}

//s is for speak
Character.prototype.s = function(txt){
    newMsg = new Message(txt, this.align, this.bgColor, this.txtColor);
    newMsg.speak = true;
    newMsg.setup();
    Q.fqueue.push(newMsg.draw.bind(newMsg));//bind method lets this function work in ticker
}

//t is for think 
Character.prototype.t = function(txt){
    newMsg = new Message(txt, this.align, this.bgColor, this.txtColor);
    newMsg.setup();
    Q.fqueue.push(newMsg.draw.bind(newMsg));
}

//Me - black
M = new Character({bgColor:0x000000, txtColor:0xffffff, align: 'left'});
//Player - white 
P = new Character({bgColor:0xffffff, txtColor:0x000000, align: 'right'});
//Text - gray
T = new Character({bgColor:0x888888, txtColor:0xffffff, align: 'left'});
//Grandmother - yellowish
Gm = new Character({bgColor:0xbf9f48, txtColor:0xffffff, align: 'left'});
//Vet - greenish
V = new Character({bgColor:0x177748, txtColor:0xffffff, align: 'left'});
//Friend - blueish
F = new Character({bgColor:0x004d47, txtColor:0xffffff, align: 'left'});
//Girlfriend - pinkish
Gf = new Character({bgColor:0xb15647, txtColor:0xffffff, align: 'left'});
//Assistant
A = new Character({bgColor:0x6b503c, txtColor:0xffffff, align: 'left'});

/************
***choices***
************/

let Choice = function(){

    this.interval = 300;
    this.style = new TextStyle ({
        fontFamily : 'Arial',
        fontSize: 14,
        fill : 0x000000,
        wordWrap: true,
        wordWrapWidth: 300 
    });
    this.alpha = 0.7;
    this.n;

    this.textMetrics;
    this.gradientShow = [false];
    this.gradientHide = [false];

    this.button = [];
    this.text = [];
    this.option = [];
    this.speech = [];
  
    this.box = new Graphics();
    this.box.beginFill(0xffffff, this.alpha);
    this.box.drawRoundedRect(0, 0, 300, 30, 10);
    this.box.endFill();

    this.tail = new Graphics();
    this.tail.beginFill(0x888888, this.alpha);
    this.tail.moveTo(0, 0);
    this.tail.lineTo(10, 10);
    this.tail.lineTo(0, 10);
    this.tail.lineTo(0, 0);
    this.tail.endFill();

    for(var i = 0; i<3; ++i) {
        //new option
        this.option[i] = new Container();
        this.option[i].position.set(30, 500 + 40*i);
        app.stage.addChild(this.option[i]);
        //text container button
        this.button[i] = new Sprite(this.box.generateCanvasTexture());
        this.button[i].interactive = false;
        this.button[i].buttonMode = true;
        this.option[i].addChild(this.button[i]);
        //add tail
        this.speech[i] = new Sprite(this.tail.generateCanvasTexture());
        this.speech[i].position.set(300, 12);
        this.option[i].addChild(this.speech[i]);
        //add text
        this.text[i] = new Text(' ', this.style);
        this.text[i].x = 300/2;
        this.text[i].y = 8;
        this.option[i].addChild(this.text[i]);
        this.option[i].visible = false;
    }
}

Choice.prototype.show = async function(){
    Q.holdQueue = true;
    for(var i=0;i<this.n;++i){
        await sleep(this.interval);
        this.button[i].interactive = true;
        this.option[i].visible = true;
        this.option[i].alpha = 0;
        this.gradientShow[i] = true;
    }
}

Choice.prototype.hide = async function(){
    for(var i = 0; i<this.n; ++i) {
        this.gradientHide[i] = true;
        this.button[i].off('pointerdown');
        await sleep(this.interval);
        this.option[i].visible = false;
    }
    Q.holdQueue = false;
}

Choice.prototype.t = async function(obj) {
    await sleep(3*this.interval); //prevent crashing between choices. This soltion makes impossible to add messages after choice in a function
    
    var labels = Object.keys(obj); //get the keys and make an array of them
    this.n = labels.length;

    for(var i = 0; i < this.n; ++i) {
        this.speech[i].visible = false;
        this.text[i].text = labels[i];
        this.textMetrics = TextMetrics.measureText(labels[i], this.style);
        this.text[i].x = 300/2 - this.textMetrics.width/2;
        this.button[i].on('pointerdown', (
            function(callback,message){
                return function(){callback(message);};
            }
        )(obj[labels[i]], labels[i]));
    } //ncase/
    Q.fqueue.push(this.show.bind(this));
}

Choice.prototype.s = async function(obj) {
    await sleep(3*this.interval); //prevent crashing between choices. This soltion makes impossible to add messages after choice in a function but...
    
    var labels = Object.keys(obj);
    this.n = labels.length;

    for(var i = 0; i < this.n; ++i) {
        this.speech[i].visible = true;
        this.text[i].text = labels[i];
        this.textMetrics = TextMetrics.measureText(labels[i], this.style);
        this.text[i].x = 300/2 - this.textMetrics.width/2;
        this.button[i].on('pointerdown', (
            function(callback,message){
                return function(){callback(message);};
            }
        )(obj[labels[i]], labels[i]));
    }
    Q.fqueue.push(this.show.bind(this));
}

choice = new Choice();

