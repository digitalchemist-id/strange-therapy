//timeline = 11 June 15th Wed
//His organs were far beyond able to recover
//It would be almost a miracle for him to make it past this weekend
//And I was forced to choose between putting him down(euthanize) and waiting for his end, hoping for the best
//It's my fault right?

async function start_vet2(){
	//setup
	await sleep(1000);
	blackout.visible = false;

	V.s("His body");
	V.s("If you take a look at it");
	V.s("I gave him this shot a couple of days ago");
	V.s("But it didn't spread to the body");
	V.s("It's still lingering like a lump")
	V.s("It means his body can't properly intake nutrition anymore");
	V.s("Even water");
	C.s({
        "And what does that mean?": function(msg) {
            P.s(msg);
            V.s("That means");
            C.hide();
            vet2_1();
        },
        "No...": function(msg) {
            P.s(msg);
            C.hide();
            vet2_1();
        },
        "...": function(msg) {
            P.s(msg);
            C.hide();
            vet2_1();
        }
    });
}


function vet2_1(){
	V.s("His conditions have much deteriorated from last visit");
	V.s("I'm afraid to say at this point...");
	V.s("Any sort of treatment is meaningless");
	V.s("His organs are beyond repairs");
	V.s("I'm sorry");
	C.s({
        "How much time does he have?": function(msg) {
            P.s(msg);
            V.s("I'd say...");
            C.hide();
            vet2_2();
        },
        "Why did this happen?": function(msg) {
        	$.this_happens = true;
            P.s(msg);
            P.s("I thought I was taking good care of him");
            P.s("I did everything I could");
            V.s("This always happens");
            V.s("Eventually, it does");
            V.s("We're often just");
            V.s("Not reminded");
            C.hide();
            vet2_2();
        },
        "...": function(msg) {
            P.s(msg);
            C.hide();
            vet2_2();
        }
    });
}

function vet2_2(){
	V.s("I'd say it'd be a miracle");
	V.s("If he made it past this weekend");
	V.s("You need to be prepared");
	C.s({
        "This is all my fault": function(msg) {
        	$.rude_to_vet = false;
            P.s(msg);
            P.s("I should have come here more often");
            P.s("I should have checked for his health more often");
            P.s("And I'd not even visit for weeks just because I think I'm busy and tired...");
            P.s("Hang out with friends and be lazy when I get chance...");
            P.s("And I'd say that I care while I just ditch all my responsiblilties");
            P.s("He could have been saved");
            P.s("I could have save him");
            V.s("That's not the case");
            if($.this_happens){
                V.s("As I said");
            }
            V.s("Every single pets and pet owners eventually go through this process");
            V.s("Process of dying");
            V.s("Process of losing");
            V.s("No one's reponsible for that process");
            V.s("Instead, you're the one who saved him");
            V.s("You're the one who gave him life");
            C.hide();
            vet2_3();
        },
        "This is all your fault": function(msg) {
        	$.rude_to_vet = true;
            P.s(msg);
            P.s("You said he could be cured");
            P.s("I did everything you told me to do");
            P.s("You told me he just needed to be fed");
            P.s("That was a lie");
            P.s("You needed to do everything you can to cure him instead of just waiting");
            V.s("Sorry")
            V.s("But that's not the case");
            V.s("As I told you, he was already too weak last Sunday");
            V.s("He had miraculous chances");
            V.s("And now he doesn't");
            V.s("That's how this case is");
            C.hide();
            vet2_3();
        },
        "...": function(msg) {
            P.s(msg);
            C.hide();
            vet2_3();
        }
    });
}


function vet2_3(){
	V.s("What remains from this point is");
	V.s("Very painful stuff");
	V.s("To relieve the amount of potential pain you both suffer");
	V.s("You might want to consider other options");
	
	C.s({
        "Could you mean...?": function(msg) {
            P.s(msg);
            V.s("Yes");
            C.hide();
            vet2_4();
        },
        "You couldn't mean...": function(msg) {
            P.s(msg);
            V.s("Well...");
            C.hide();
            vet2_4();
        },
        "...": function(msg) {
            P.s(msg);
            C.hide();
            vet2_4();
        }
    });
}

function vet2_4() {
	V.s("I'm talking about euthanasia");
	V.s("Putting him down");
	C.s({
        "That's not happening": function(msg) {
            P.s(msg);
            P.s("I could... never...");
            V.s("I understand");
            V.s("The choice is entirely yours");
            C.hide();
            vet2_5();
        },
        "How does it work?": function(msg) {
        	P.s(msg);
        	P.s("Euthanaisa...");
            C.hide();
            vet2_euthanasia();
        },
        "...": function(msg) {
            P.s(msg);
            V.s("I'll leave it to you to think about it");
            V.s("The choice is entirely yours");
            C.hide();
            vet2_5();
        }
    });
}

function vet2_euthanasia() {
	V.s("There are several ways");
	V.s("We use most common two-step methods");
	V.s("Which we first inject target with a sedative");
	V.s("Then he will sleep and lose consciousness slowly");
	V.s("After that, when you're ready...");
	V.s("Second injection will be administered");
	V.s("And his heart will slowly stop");
	V.s("The process will take about 20 to 30 minutes");
	V.s("And it will cost         ");
	C.s({
        "If it'll make him comfortable...": function(msg) {
            P.s(msg);
            P.s("I...");
            P.s("I'll consider");
            V.s("You should take your time");
            C.hide();
            vet2_5();
        },
        "I don't think I can afford that...": function(msg) {
            P.s(msg);
            V.s("I understand");
            V.s("You should take your time to consider");
            C.hide();
            vet2_5();
        },
        "...": function(msg) {
            P.s(msg);
            V.s("You should take your time to consider");
            V.s("Spend rest of the time with him");
            C.hide();
            vet2_5();
        }
    });
}

function vet2_5(){
	if(!$.rude_to_vet){
		V.s("Hey...");
		V.s("I remember when you first visited here with him");
		V.s("Just to check if he's just lost or abandoned");
		V.s("You were wearing your highschool uniform");
		V.s("And his hair was all cut very carelessly");
		V.s("He was already an old dog back then - 10 years old at least");
		V.s("Now he's older ");
		V.s("It must be hard for you but...");
		V.s("I think he was lucky to have you");
		V.s("And I think he thinks the way I do too");
		V.s("What happens now is... what must happen");
		V.s("You did a good job");
	}
	Q.do(end_vet2);
}

function end_vet2(){
	Q.do(clearMsg);
	Q.do(function(){
		blackout.visible = true;
	});
	Q.do(start_home4);
}