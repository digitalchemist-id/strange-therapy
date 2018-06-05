//timeline = 7 June 15th
//engineering mathematics test

function start_test3(){	

	//clock ticking
	Q.wait(1000);
	T.t("Question #2-2");
	T.t("Find Laplace transform of f(t) when");
	T.t("f(t) = sinh²(t)");

	if(/*studied*/) {
		P.t("Laplace transform of f is L(f)");
		P.t("L(f') = sL(f) - f(0)");
		P.t("f'(t) = 2sinh(t)cosh(t)");
		P.t("sinh(2t) = 2sinh(t)cosh(t)");
		P.t("L(sinh(at)) = a/(s² - a²)");
		P.t("sinh(0) = 0");
	} else {
		P.t("I like this question");
		P.t("It's short and simple");
		P.t("Anyway...");
	}

	P.t("So L(f) must be equal to...");
	
	C.s({
        "2s/(s² - 4)": function(msg) {
        	$.test1_correct = false;
        	C.hide();
        	test3_after();
        },
        "2/s(s² - 4)": function(msg) {
        	$.test1_correct = true;
        	C.hide();
        	test3_after();
        },
        "2/(s² - 4) + s": function(msg) {
        	$.test1_correct = false;
        	C.hide();
        	test3_after();
        }
    });
}

function test3_after(){

}