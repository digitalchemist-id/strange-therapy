//timeline = 1
//this is my Organic Chemistry 1 finals

function start_test1(){
	resources.bgm.sound.stop();	

	//clock ticking
	Q.wait(1000);
	T.t('2016 Spring Semester Organic Chemistry 1 finals')
	T.t('Question #10 c)')
	T.t('Of the following compounds');
	T.t('which has higher boling point?');
	
	T.t('1. pentane');
	T.t('2. 2,2-dimethylpropane');

	C.t({
		'1. pentane': function(msg) {
			P.t('is it...');
			P.t(msg + '?');
			$.test_1_is_correct = true;
			C.hide();
			after_test1();
		},
        '2. 2,2-dimethylpropane': function(msg) {
        	P.t('is it...');
        	P.t(msg + '?');
        	$.test_1_is_correct = false;
        	C.hide();
        	after_test1();
        },
        'dimethyl... what?': function(msg) {
        	P.t(msg);
        	P.t('I\'m pretty sure I don\'t know what this question is talking about');
        	P.t('I\'ll go with 2,2-dimethylpropane because I like the way it sounds');
        	P.t('If it sounds the way I think it does, that is');
        	$.test_1_is_correct = false;
        	C.hide();
        	after_test1();
        }
	});

}

function after_test1(){


	Q.do(function(){
		resources.cellphone.sound.play();
	});
	Q.wait(1000);
	
	//alarm ringing
	A.s('Time\'s up!');

	A.s('Everyone turn your tests in!');
	//turns test in 
	Q.wait(2000);

	P.t('Oh');

	if($.test_1_is_correct){
		P.t('That didn\'t go so bad');
		P.t('Actually, it was better than I expected');
	} else {
		P.t('That did\'t go so well');
		P.t('Let\'s just forget about it quickly and prepare for the next one quick');
	}

	P.t('My first semester with a major');
	P.t('It have been a tough one');
	P.t('I had to work hard to catch up');
	P.t('And FINALLY now it\'s almost over');
	P.t('Just 3 more finals');
	P.t('And a few essays and projects to go');
	//
	P.t('Uh... Haven\'t got to sleep properly in weeks');
	P.t('Man, I\'m just really looking forward to the summer break');

	P.t('So...');
	P.t('Next test is...');
	P.t('Oh it\'s tomorrow');
	P.t('Basic Computer Methods');
	P.t('I\'d better hurry now');
	P.t('No time to waste');

	Q.do(end_test1);

}

async function end_test1(){
	await sleep(2500);
	clearMsg();
	start_room1();
}