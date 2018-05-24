/***************
****Messages****
***************/

let Message = function(txt, align, bgColor, txtColor) {
    this.txt = txt;
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
}

Message.prototype.setup = function() {
    this.msgContainer.position.set(this.xPos, this.yPos);

    let txtBox = new Graphics();
    txtBox.beginFill(this.bgColor, 0.5);
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

    msgArray.push(this.msgContainer);
}

Message.prototype.draw = function() {
    //console.log('draw called ' + this.textMetrics.height);
    queue += Math.floor(this.textMetrics.width/1.8) + 60;
    //console.log(queue);
    pushHeight = this.textMetrics.height + 25;
    pushCount = this.textMetrics.height + 24; // - 1 to prevent pushing further
    this.msgContainer.position.y = 250;
    app.stage.addChild(this.msgContainer);
}

/**************
***character***
**************/

let Character = function(config){
    this.bgColor = config.bgColor;
    this.txtColor= config.txtColor;
    this.align = config.align;
}

//s is for speak - to be implemented
Character.prototype.s = function(txt){
    newMsg = new Message(txt, this.align, this.bgColor, this.txtColor);
    newMsg.setup();
    fqueue.push(newMsg.draw.bind(newMsg));//bind method lets this function work in ticker
}

//t is for think 
Character.prototype.t = function(txt){
    newMsg = new Message(txt, this.align, this.bgColor, this.txtColor);
    newMsg.setup();
    fqueue.push(newMsg.draw.bind(newMsg));
}

M = new Character({bgColor: 0xffffff, txtColor:0x000000, align: 'left'});
P = new Character({bgColor: 0x008888, txtColor:0xffffff, align: 'right'});

/************
***choices***
************/

let Choice = function(){
    this.textMetrics;
    this.interval = 300;
    this.gradientShow = [false];
    this.gradientHide = [false];

    this.button = [];
    this.text = [];
    this.option = [];

    this.Box = new Graphics();
    this.Box.beginFill(0x888888, 0.25);
    this.Box.drawRoundedRect(0, 0, 300, 30, 10);
    this.Box.endFill();

    this.style = new TextStyle ({
        fontFamily : 'Arial',
        fontSize: 14,
        fill : 0xffffff,
        wordWrap: true,
        wordWrapWidth: 300 
    });

    for(var i = 0; i<3; ++i) {
        //new option
        this.option[i] = new Container();
        this.option[i].position.set(30, 500 + 40*i);
        app.stage.addChild(this.option[i]);
        //text container button
        this.button[i] = new Sprite(this.Box.generateCanvasTexture());
        this.button[i].interactive = false;
        this.button[i].buttonMode = true;
        this.option[i].addChild(this.button[i]);
        //add text
        this.text[i] = new Text(' ', this.style);
        this.text[i].x = 300/2;
        this.text[i].y = 8;
        this.option[i].addChild(this.text[i]);
        this.option[i].visible = false;
    }
}

Choice.prototype.show = async function(){
    holdQueue = true;
    for(var i=0;i<3;++i){
        await sleep(this.interval);
        this.button[i].interactive = true;
        this.option[i].visible = true;
        this.option[i].alpha = 0;
        this.gradientShow[i] = true;
    }
}

Choice.prototype.hide = async function(){
    for(var i = 0; i<3; ++i) {
        this.gradientHide[i] = true;
        this.button[i].off('pointerdown');
        await sleep(this.interval);
        this.option[i].visible = false;
    }
    holdQueue = false;
}

Choice.prototype.t = async function(obj) {
    await sleep(3*this.interval); //prevent crashing between choices. This soltion makes impossible to add messages after choice in a function but...
    
    var labels = Object.keys(obj);

    for(var i = 0; i<3; ++i) {
        this.text[i].text = labels[i];
        this.textMetrics = TextMetrics.measureText(labels[i], this.style);
        this.text[i].x = 300/2 - this.textMetrics.width/2;
        this.button[i].on('pointerdown', (
            function(callback,message){
                return function(){callback(message);};
            }
        )(obj[labels[i]], labels[i]));
    }
    fqueue.push(this.show.bind(this)); //I don't understand this part yet.
}

choice = new Choice();