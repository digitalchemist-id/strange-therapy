function dev(){

    M.s('dev enter');
    P.s('hello');
    M.s('welcome');
    P.t('man this stinks');

    choice.s({
        'choice 1': function(msg) {console.log("clicked 1!"); choice.hide(); dev2(msg);},
        'choice 2': function(msg) {console.log("clicked 2!"); choice.hide(); dev2(msg);},
        'choice 3 and this text is reallllly long': function(msg) {console.log("clicked 3!"); choice.hide(); dev2(msg);}
    });
}

function dev2(msg){
    P.s(msg);
    M.t('Oh you clicked that')
    M.t('dev2 enter');

    choice.t({
        'Choice 1 again': function(msg) {console.log("clicked 1 this time!"); choice.hide(); P.s(msg); blank();},
        'Choice 2!!!!! again!': function(msg) {console.log("clicked 2 this time!"); choice.hide(); P.s(msg); blank();},
        'Choice 3 and there again': function(msg) {console.log("clicked 3 this time!"); choice.hide(); P.s(msg); blank();}
    });
}

function blank(){
    fqueue.push(clearMsg);
    dev3();
}

async function dev3(){
    await sleep(3000);

    M.s('welcome to dev3');
    M.s('Now I\'m ready to start writing');
}
