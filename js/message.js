/***************
****Messages****
***************/

var Message = function(txt, align, bgColor, txtColor) {
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

let character = function(config){
    this.bgColor = config.bgColor;
    this.txtColor= config.txtColor;
    this.align = config.align;
}

//s is for speak
character.prototype.s = function(txt){
    newMsg = new Message(txt, this.align, this.bgColor, this.txtColor);
    newMsg.setup();
    fqueue.push(newMsg.draw.bind(newMsg));
}

//t is for think - to be implemented
character.prototype.t = function(txt){
    newMsg = new Message(txt, this.align, this.bgColor, this.txtColor);
    newMsg.setup();
    fqueue.push(newMsg.draw.bind(newMsg));
}

M = new character({bgColor: 0xffffff, txtColor:0x000000, align: 'left'});
P = new character({bgColor: 0x008888, txtColor:0xffffff, align: 'right'});

/*************
***choices****
*************/

