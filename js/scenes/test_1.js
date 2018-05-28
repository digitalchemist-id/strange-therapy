//timeline = 1
//this is my Organic Chemistry 1 finals

function start_test_1(){
	$ = {}; //So this is an object. /ncase

	bg.visible = true;
	//clock ticking

	T.t('Question #10 c)')
	T.t('Of the following compounds');
	T.t('which has higher boling point?');
	Q.fqueue.push(function(){
		bunny.visible = true;
	}

	);
	
	T.t('1. pentane');
	T.t('2. 2,2-dimethylpropane');

	choice.t({
		'1. pentane': function(msg) {
			P.t('is it...');
			P.t(msg + '?');
			$.test_1_is_correct = true;
			choice.hide();
			after_test_1();
		},
        '2. 2,2-dimethylpropane': function(msg) {
        	P.t('is it...');
        	P.t(msg + '?');
        	$.test_1_is_correct = false;
        	choice.hide();
        	after_test_1();
        },
        'dimethyl... what?': function(msg) {
        	P.t(msg);
        	P.t('I\'m pretty sure I don\'t know what this question is talking about');
        	P.t('I\'ll go with 2. 2,2-dimethylpropane because I like the way it sounds');
        	P.t('If it sounds the way I think it does, that is');
        	$.test_1_is_correct = false;
        	choice.hide();
        	after_test_1();
        }
	});

}

function after_test_1(){

	
	//alarm ringing
	A.s('Time\'s up!');

	Q.do(function(){
		resources.cellphone.sound.play();
	});
	Q.wait(1000);

	A.s('Everyone turn your tests in!');
	//turns test in 
	Q.wait(2000);

	P.t('Oh');
	if($.test_1_is_correct){
		P.t('That didn\'t go so bad');
		P.t('Actually, it was better than I expected');
	} else {
		P.t('That did\'t go so well');
	}

}