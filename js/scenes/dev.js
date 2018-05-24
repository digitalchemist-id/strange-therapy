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
        'Choice 1 again': function(msg) {console.log("clicked 1 this time!"); choice.hide(); blank(msg);},
        'Choice 2!!!!! again!': function(msg) {console.log("clicked 2 this time!"); choice.hide(); blank(msg);},
        'Choice 3 and there again': function(msg) {console.log("clicked 3 this time!"); choice.hide(); blank(msg);}
    });
}

function blank(msg){
    P.t(msg);
    M.t('blank enter');
}