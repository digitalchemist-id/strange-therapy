//timeline = 11 June 15th Wed

async function start_vet2(){
    await sleep(4000);
    resources.room_high.sound.play();
	await sleep(2000);
    app.stage.addChildAt(bg_vet_dark, 0);
    app.stage.addChildAt(vet_stand, 1);
    app.stage.addChildAt(vet_dog, 1);
    app.stage.addChildAt(vet_vet_stand, 1);
    app.stage.addChildAt(vet_vet_side, 1);
    vet_vet_side.visible = true;
    vet_vet_stand.visible = false;
	blackout.visible = false;

	V.s("His body");
	V.s("If you take a look at it");
	V.s("I gave him this shot a couple of days ago");
	V.s("But it didn't spread to the body");
	V.s("It's still lingering like a lump")
	V.s("It means his body won't properly take nutrition in anymore");
	V.s("Even water...");
    Q.wait(1000);
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
    Q.do(function(){
        vet_vet_side.visible = false;
        vet_vet_stand.visible = true;
    });
	V.s("His conditions have much deteriorated from last visit");
	V.s("I'm afraid to say at this point...");
	V.s("Any sort of treatment is meaningless");
	V.s("His organs are beyond repairs");
	V.s("I'm sorry");
    Q.wait(1000);
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
            Q.wait(1000);
            C.hide();
            vet2_2();
        },
        "...": function(msg) {
            P.s(msg);
            V.s("...");
            Q.wait(2000);
            C.hide();
            vet2_2();
        }
    });
}

function vet2_2(){
	V.s("I'd say it'd be a miracle if he made it past this weekend");
	V.s("You need to be prepared");
    Q.wait(1000);
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
            if($.this_happens){
                V.s("As I said...");
            }
            V.s("Every single pets and pet owners eventually go through this");
            V.s("Process of dying");
            V.s("Process of losing");
            V.s("No one's reponsible for that process");
            V.s("Instead, you're the one who saved him");
            V.s("You're the one who gave him life");
            C.hide();
            vet2_3();
        },
        "This is all YOUR fault": function(msg) {
        	$.rude_to_vet = true;
            $.never_learn = true;
            P.s(msg);
            P.s("You said he could be cured");
            P.s("I did everything you told me to do");
            P.s("You told me he just needed to be fed");
            P.s("That was a lie");
            P.s("You have no idea how much I sacrificed for him...");
            P.s("You needed to do everything you can to cure him instead of just waiting");
            Q.wait(1000);
            V.s("I'm sorry but...")
            V.s("That's not the case");
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
    Q.wait(2000);
	V.s("What remains from this point is");
	V.s("Very painful stuff");
	V.s("To relieve the amount of potential pain you both suffer");
	V.s("You might want to consider about other options...");
	Q.wait(3000);
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
	V.s("I'm talking about euthanasia-");
	V.s("Putting him down");
    V.s("It's an option a lot of people end up choosing");
    V.s("Even those who love their pets very much");
    Q.wait(1000);
	C.s({
        "That's not gonna happen": function(msg) {
            P.s(msg);
            P.s("I could... never...");
            V.s("I understand");
            V.s("The choice is entirely yours");
            C.hide();
            vet2_5();
        },
        "How does it work...?": function(msg) {
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
	V.s("And it will cost -----");
    Q.wait(1000);
	C.s({
        "If it'll make him comfortable...": function(msg) {
            P.s(msg);
            P.s("I...");
            V.s("You should take your time to consider");
            V.s("Spend rest of the time with him");
            C.hide();
            vet2_5();
        },
        "I don't think I can afford that...": function(msg) {
            P.s(msg);
            V.s("I understand");
            V.s("You should take your time to consider");
            V.s("Spend rest of the time with him");
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
        Q.wait(3000);
        V.s("...")
		V.s("I remember when you first visited here with him");
		V.s("You came here to check if he's just lost or abandoned");
		V.s("He was already an old dog back then - 10 years old at least");
		V.s("Now he's even older");
        Q.wait(1000);
        V.s("It could be something he already had way back then");
		V.s("Something innate");
        V.s("It must be hard for you but...");
		V.s("I think he was lucky to have you");
		V.s("And I think he thinks the way I do too");
		V.s("What happens now is... what must happen");
		V.s("Don't...");
        Q.wait(1000);
        V.s("Take it too hard");
	}
	Q.do(end_vet2);
}

function end_vet2(){
    Q.wait(4000);
	Q.do(clearMsg);
	Q.do(function(){
        app.stage.removeChild(bg_vet_dark);
        app.stage.removeChild(vet_stand);
        app.stage.removeChild(vet_dog);
        app.stage.removeChild(vet_vet_stand);
        app.stage.removeChild(vet_vet_side);
        resources.room_high.sound.stop();
		blackout.visible = true;
	});
	Q.do(start_home4);
}