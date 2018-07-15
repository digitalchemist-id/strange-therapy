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
        //console.log(this.queue);
        //console.log(this.queue +', '+ this.canSkip);
    }, //A lot messy
    wait: function(ms){
        this.fqueue.push(function(){
            this.queue += Math.floor(ms*60/1000);
            this.canSkip = false;
        }.bind(this));
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

let Message = function(txt, align, bgColor, txtColor, sound) {
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
    this.sound = sound;
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

    var txtLength = 0;

    this.textMetrics.lineWidths.forEach(function(element){
        txtLength += element;
    });
    Q.queue += Math.floor(txtLength/2.2) + 50; //adjusts speed of autoskip
    pushHeight = this.textMetrics.height + 25;
    pushCount = this.textMetrics.height + 24; // - 1 to prevent pushing further
    this.msgContainer.position.y = 250;
    msgArray.push(this.msgContainer);
    app.stage.addChild(this.msgContainer);
    if(this.sound == 4){
        resources.send_4.sound.play();
    } else if(this.sound == 3){
        resources.send_3.sound.play();
    } else if(this.sound == 2) {
        resources.send_2.sound.play();
    } else {
        resources.send_1.sound.play();
    }
}

Message.prototype.panic = function() {

    Q.queue += 5;//panic
    Q.canSkip = false;//unskippable
    pushHeight = this.textMetrics.height + 25;
    pushCount = this.textMetrics.height + 24; // - 1 to prevent pushing further
    this.msgContainer.position.y = 250;
    msgArray.push(this.msgContainer);
    app.stage.addChild(this.msgContainer);
    resources.send_2.sound.play();
}

/**************
***character***
**************/

let Character = function(config){
    this.bgColor = config.bgColor;
    this.txtColor= config.txtColor;
    this.align = config.align;
    this.sound = config.sound;
}

//s is for speak
Character.prototype.s = function(txt){
    newMsg = new Message(txt, this.align, this.bgColor, this.txtColor, this.sound);
    newMsg.speak = true;
    newMsg.alpha = 0.9;
    newMsg.setup();
    Q.fqueue.push(newMsg.draw.bind(newMsg));//bind method lets this function work in ticker
}

//t is for think 
Character.prototype.t = function(txt){
    newMsg = new Message(txt, this.align, this.bgColor, this.txtColor, this.sound);
    newMsg.setup();
    Q.fqueue.push(newMsg.draw.bind(newMsg));
}

Character.prototype.panic = function(txt){
    newMsg = new Message(txt, this.align, this.bgColor, this.txtColor, this.sound);
    newMsg.setup();
    Q.fqueue.push(newMsg.panic.bind(newMsg));
}

//Me - black
M = new Character({bgColor:0x000000, txtColor:0xffffff, align: 'left', sound: 2});
//Player - white 
P = new Character({bgColor:0xffffff, txtColor:0x000000, align: 'right', sound: 3});
//Text - gray
T = new Character({bgColor:0x888888, txtColor:0xffffff, align: 'left', sound: 1});
//Grandmother
Gm = new Character({bgColor:0xbf9f48, txtColor:0xffffff, align: 'left', sound: 4});
//Vet
V = new Character({bgColor:0x177748, txtColor:0xffffff, align: 'left', sound: 1});
//Friend
F = new Character({bgColor:0x004d47, txtColor:0xffffff, align: 'left', sound: 2});
//Girlfriend
Gf = new Character({bgColor:0xb15647, txtColor:0xffffff, align: 'left', sound: 4});
//Assistant
A = new Character({bgColor:0x6b503c, txtColor:0xffffff, align: 'left', sound: 2});

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
    this.color = 0xffffff;
    this.alpha = 0.9;
    this.n;
    this.length = 320;

    this.textMetrics;
    this.gradientShow = [false];
    this.gradientHide = [false];

    this.button = [];
    this.text = [];
    this.option = [];
    this.speech = [];
  
    this.box = new Graphics();
    this.box.beginFill(this.color, this.alpha);
    this.box.drawRoundedRect(0, 0, this.length, 30, 10);
    this.box.endFill();

    this.tail = new Graphics();
    this.tail.beginFill(this.color, this.alpha);
    this.tail.moveTo(0, 0);
    this.tail.lineTo(10, 10);
    this.tail.lineTo(0, 10);
    this.tail.lineTo(0, 0);
    this.tail.endFill();

    for(var i = 0; i<3; ++i) {
        //new option
        this.option[i] = new Container();
        this.option[i].position.set((360 - this.length)/2, 500 + 40*i);
        app.stage.addChild(this.option[i]);
        //text container button
        this.button[i] = new Sprite(this.box.generateCanvasTexture());
        this.button[i].interactive = false;
        this.button[i].buttonMode = true;
        this.option[i].addChild(this.button[i]);
        //add tail
        this.speech[i] = new Sprite(this.tail.generateCanvasTexture());
        this.speech[i].position.set(this.length, 12);
        this.option[i].addChild(this.speech[i]);
        //add text
        this.text[i] = new Text(' ', this.style);
        //this.text[i].x = 300/2;
        this.text[i].y = 7;
        this.option[i].addChild(this.text[i]);
        this.option[i].visible = false;
    }
}

Choice.prototype.show = async function(){
    Q.holdQueue = true;
    for(var i=0;i<this.n;++i){
        await sleep(this.interval);
        this.option[i].visible = true;
        this.option[i].alpha = 0;
        this.gradientShow[i] = true;
    }
    await sleep(this.interval);
    for(var i=0;i<this.n;++i){
        this.button[i].interactive = true;
    }
}

Choice.prototype.hide = async function(){
    for(var i = 0; i<this.n; ++i){
        this.button[i].interactive = false;
        this.button[i].off('pointerdown');
    }
    for(var i = 0; i<this.n; ++i) {
        this.gradientHide[i] = true;
        await sleep(this.interval);
        this.option[i].visible = false;
    }
    Q.holdQueue = false;
}

Choice.prototype.t = async function(obj) {    
    Q.fqueue.push(
        function(){
            var labels = Object.keys(obj); //get the keys and make an array of them
            this.n = labels.length;

            for(var i = 0; i < this.n; ++i) {
                this.speech[i].visible = false;
                this.text[i].text = labels[i];
                this.textMetrics = TextMetrics.measureText(labels[i], this.style);
                this.text[i].x = this.length/2 - this.textMetrics.width/2;
                this.button[i].on('pointerdown', (
                    function(callback,message){
                        return function(){callback(message);};
                    }
                )(obj[labels[i]], labels[i]));
            }
        }.bind(this)
    );
    Q.fqueue.push(
        this.show.bind(this)
    );
}

Choice.prototype.s = async function(obj) {
    Q.fqueue.push(
        function(){
            var labels = Object.keys(obj);
            this.n = labels.length;
    
            for(var i = 0; i < this.n; ++i) {
                this.speech[i].visible = true;
                this.text[i].text = labels[i];
                this.textMetrics = TextMetrics.measureText(labels[i], this.style);
                this.text[i].x = this.length/2 - this.textMetrics.width/2;
                this.button[i].on('pointerdown', (
                    function(callback,message){
                        return function(){callback(message);};
                    }
                )(obj[labels[i]], labels[i]));
            }
        }.bind(this)
    );
    Q.fqueue.push(
        this.show.bind(this)
    );
}

C = new Choice();

