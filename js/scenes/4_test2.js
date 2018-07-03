//timeline = 4, June 11th Sat

async function start_test2(){	
	//loader
	await sleep(1000);
	resources.room_low.sound.play();
	resources.clock.sound.play();

	await sleep(1000);
	blackout.visible = false;
	bg_test.visible = true;

	//clock ticking
	Q.wait(1000);
	//T.t("2016 Spring Semester Intoduction to Chemical Processes finals");
	T.t("Question #4 i)");
	
	T.t("Consider a simple reaction taking place in a reactor to make desired product C");
	T.t("A + B → C");
	T.t("And a little side reation involving reactant A and byproduct D, because nothing in life works the way we intend to");
	T.t("A → D");
	T.t("In this reactor fractional conversion of A is 0.8, and fractional yield of C from A is 0.4");
	T.t("What is the value of fractional selectivity of C from A?");

	P.t("Okay");
	P.t("Here we go again...");

	if($.destiny) {
		P.t("...");
		P.t("conversion...");
		P.t("yield...");
		P.t("and selectivity");
		P.t("I can't help but to think that they are connected to each other somehow...");
		P.t("But how...?");
	} else {
		P.t("The keywords of this problem seem to be conversion, yield and selectivity");
		P.t("conversion of A means how much of A went through reaction out of all the A fed to reactor");
		P.t("yield of C from A means how much of A was spent to make C out of all the A fed to reactor");
		P.t("selectivity of C from A means how much of A was spent to make C out of all the A that went through reaction");
	}
	P.t("Conversion of A is 0.8 and yield of C from A is 0.4");
	P.t("So selectivity of C from A must be...");

	C.t({
        "0.2": function(msg) {
        	$.test2_correct = false;
        	P.t(msg);
        	C.hide();
        	test2_after();
        },
        "0.32": function(msg) {
        	$.test2_correct = false;
        	P.t(msg);
        	C.hide();
        	test2_after();
        },
        "0.5": function(msg) {
        	$.test2_correct = true;
        	$.test2_correct++;
        	P.t(msg);
        	C.hide();
        	test2_after();
        }
    });
}

function test2_after(){

	Q.do(function(){
		resources.clock.sound.stop();
	});
	Q.wait(1000);
	
	//alarm ringing
	A.s('Time\'s up!');

	A.s('Everyone turn your tests in!');
	//turns test in 
	Q.wait(2000);

	if($.test2_correct){
		P.t("That made sense");
		P.t("I think I did alright here");
	} else {
		P.t("Hmm");
		P.t("Did I get that right?");
		P.t("I have a feeling that I did");
	}
	Q.wait(1000);
	P.t("Whew...");
	P.t("Back to my room I guess");
	if(!$.destiny){
		P.t("There's no time to waste");
	}
	Q.do(end_test2);
}

function end_test2(){
	Q.wait(2000);
	Q.do(clearMsg);
	Q.do(start_room);
	Q.do(function(){
		resources.room_low.sound.stop();
		blackout.visible = true;
		bg_test.visible = false;
	});
}