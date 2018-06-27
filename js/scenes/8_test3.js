//timeline = 8 June 15th Wed
//engineering mathematics

async function start_test3(){	


	await sleep(3000);
	blackout.visible = false;
	//clock ticking
	Q.wait(500);
	T.t("Question #2-2");
	T.t("Find Laplace transform of f(t) when");
	T.t("f(t) = sinh²(t)");

	if($.test3_studied) {
		P.t("Laplace transform of f is L(f)");
		P.t("L(f') = sL(f) - f(0)");
		P.t("f'(t) = 2sinh(t)cosh(t)");
		P.t("sinh(2t) = 2sinh(t)cosh(t)");
		P.t("L(sinh(at)) = a/(s² - a²)");
		P.t("sinh(0) = 0");
		P.t("So L(f) must be equal to...");
	} else {
		P.t("I like this question");
		P.t("It's short and simple");
		P.t("...");
		P.t("Anyway... the answer");
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
		resources.cellphone.sound.play();
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
		P.t("Yessssss");
		P.t("Yesssssssssssssssss");
		P.t("FINALLY");
	} else {
		P.t("I'm not so sure if I care anymore");
		P.t("This semester already feels so over to me");
	}
}

function end_test3(){
	Q.wait(2000);
	Q.do(clearMsg);
	Q.do(start_metro2);
	Q.do(function(){
		blackout.visible = true;
	});
}