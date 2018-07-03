//timeline = 8 June 15th Wed
//engineering mathematics

async function start_test3(){	
	await sleep(5000);
	resources.room_low.sound.play();
	resources.clock.sound.play();

	await sleep(2000);
	blackout.visible = false;
	bg_test.visible = true;
	//clock ticking
	Q.wait(500);
	T.t("Question #2-2");
	T.t("Find Laplace transform of f(t) when");
	T.t("f(t) = sinh²(t)");
	Q.wait(1000);
	if($.test3_studied) {
		P.t("Laplace transform of f is L(f)");
		P.t("L(f') = sL(f) - f(0)");
		P.t("f'(t) = 2sinh(t)cosh(t)");
		P.t("sinh(2t) = 2sinh(t)cosh(t)");
		P.t("L(sinh(at)) = a/(s² - a²)");
		P.t("sinh(0) = 0");
		P.t("So L(f) when f(t) = sinh²(t) must be equal to...");
	} else {
		P.t("I like this question");
		P.t("It's short and simple");
		P.t("...");
		P.t("Except for the fact that I have to answer it");
	}
	
	C.s({
        "2s/(s² - 4)": function(msg) {
        	$.test3_correct = false;
        	C.hide();
        	test3_after();
        },
        "2/s(s² - 4)": function(msg) {
        	$.test3_correct = true;
        	$.test1_correct++;
        	C.hide();
        	test3_after();
        },
        "2/(s² - 4) + s": function(msg) {
        	$.test3_correct = false;
        	C.hide();
        	test3_after();
        }
    });
}

function test3_after(){
	Q.do(function(){
		resources.clock.sound.stop();
	});
	Q.wait(1000);
	
	//alarm ringing
	A.s('Time\'s up!');

	A.s('Everyone turn your tests in!');
	//turns test in 
	Q.wait(2000);

	P.t("Another one down");
	P.t("Now there's only one left");
	if($.test3_correct){
		P.t("Yes");
		P.t("Yesssssssssss");
		P.t("FINALLY");
	} else {
		P.t("I'm not so sure if I care anymore");
		P.t("This semester already feels so over to me");
	}
	Q.do(end_test3);
}

function end_test3(){
	Q.wait(2000);
	Q.do(clearMsg);
	Q.do(start_metro2);
	Q.do(function(){
		resources.room_low.sound.stop();
		blackout.visible = true;
		bg_test.visible = false;
	});
}