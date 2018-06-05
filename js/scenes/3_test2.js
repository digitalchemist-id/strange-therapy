//timeline = 3, June 13th
//Introduction to Chemical Processes class 

function start_test2(){	

	//clock ticking
	Q.wait(1000);
	//T.t("2016 Spring Semester Intoduction to Chemical Processes finals");
	T.t("Question #4 ii)");
	
	T.t("Consider a simple reaction taking place in a reactor to make desired product C");
	T.t("A + B → C");
	T.t("And a little side reation involving reactant A and byproduct D, because nothing in life works the way we intend them to");
	T.t("A → D");
	T.t("In this reactor fractional conversion of A is 0.8, and fractional yield of C from A is 0.4");
	T.t("What is the value of fractional selectivity of C from A?")

	P.t("Okay");
	P.t("Here we go again...");

	if(!$.destiny) {
		P.t("...");
		P.t("conversion...");
		P.t("yield...");
		P.t("and selectivity");
		P.t("I can't help but to think that they are connected to each other somehow...");
		P.t("But how...?");
	} else {
		P.t("conversion of A means how much of A went through reaction out of all the A fed to reactor");
		P.t("yield of C from A means how much of A was spent to make C out of all the A fed to reactor");
		P.t("selectivity of C from A means how much of A was spent to make C out of all the A that went through reaction");
	}
	P.t("Conversion of A is 0.8 and yield of C from A is 0.4");
	P.t("So selectivity of C from A must be...");

	C.s({
        "0.5": function(msg) {
        	$.test1_correct = true;
        	C.hide();
        	test2_after();
        },
        "0.32": function(msg) {
        	$.test1_correct = false;
        	C.hide();
        	test2_after();
        },
        "0.2": function(msg) {
        	$.test1_correct = false;
        	C.hide();
        	test2_after();
        }
    });
}

function test2_after(){

}