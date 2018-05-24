function dev(){

    M.t('dev enter');
    P.t('hello');
    P.t('welcome');
    M.t('Hi Ho');
    P.t('don\'t make me do this');
    M.t('do what?');
    P.t('make you read all this long sentence, you know. I\'m gonna go double');
    P.t('You know what');
    P.t('this is messed up');

    choice.t({
        'choice 1': function(message) {console.log("clicked 1!"); choice.hide(); dev2(message);},
        'choice 2': function(message) {console.log("clicked 2!"); choice.hide(); dev2(message);},
        'choice 3': function(message) {console.log("clicked 3!"); choice.hide(); dev2(message);}
    });
}

function dev2(message){
    P.t(message);
    M.t('Oh you clicked that')
    M.t('dev2 enter');

    choice.t({
        'Choice 1 again': function() {console.log("clicked 1 this time!"); choice.hide(); blank();},
        'Choice 2!!!!! again!': function() {console.log("clicked 2 this time!"); choice.hide(); blank();},
        'Choice 3 and there again': function() {console.log("clicked 3 this time!"); choice.hide(); blank();}
    });
}

function blank(){

    M.t('blank enter');
}