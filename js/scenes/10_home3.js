//timeline = 10 June 15th Wed
//when I returned from test 3, I found out that he threw up everything I fed him
//I kept trying to make him eat.
//suddenly he screams with pain
//And I immediately take him to vet...

async function start_home3(){
	await sleep(2000);
	resources.room.sound.play();
	await sleep(2000);
    app.stage.addChildAt(bg_home, 0);
    app.stage.addChildAt(home_chair, 1);
	blackout.visible = false;

	P.s("I'm home!");
	Q.wait(1000);
	Q.do(function(){
		resources.door_open.sound.play();
	});
	Q.wait(1500);
	Q.do(function(){
		resources.door_close.sound.play();
	});
	Q.wait(2000);
	P.t("Huh?");
	P.t("Where did he...?");
	Q.wait(3000);
	P.s("Oh Hi. There you were");
	P.s("Hiding between the bed again?");
	P.s("You should take rest on your pillow, not this cramped hole");
	P.s("Come on here buddy");
	Q.wait(2000);
	P.s("Hey");
	P.s("That's a lot of dump you took there");
	P.s("You forgot how to use your pad?");
	P.s("You were just too lazy right?");
	P.s("Hmm");
	P.s("It's okay");
	P.s("I'll just go clean it up");
	Q.wait(3000);
	P.s("...");
	Q.wait(2000);
	P.s("Wait...");
	Q.do(function(){
		resources.room.sound.stop();
	});
	Q.wait(1000);
	P.t("This isn't-");
	Q.wait(1000);
	P.s("Is this vomit...?");
	P.s("You threw up?");
	P.s("This is...");
	P.s("This is more than what you ate yesterday...");
	Q.wait(2000);
	P.s("Oh no...");
	Q.wait(1000);
	P.s("No... No... No... No...");
	P.s("No... No... No.......");
	Q.wait(2000);
	if($.room_panicked){
		P.panic("It's okay right?");
		P.panic("It's just nothing");
		P.panic("Of course you can throw up");
		P.panic("This can happen time to time");
		P.panic("You've thrown up before you were sick");
		P.panic("You just need to eat again right?");
		P.panic("I'll just prepare more food so you can eat again");
	} else {
		P.s("It's okay right?");
		P.s("It's just nothing");
		P.s("Of course you can throw up");
		P.s("This can happen time to time");
		P.s("You've thrown up before you were sick");
		P.s("You just need to eat again right?");
		P.s("I'll just prepare more food so you can eat again");
	}
	Q.wait(2000);
	P.s("Oh no...");
	P.s("First I'll...");
	P.s("I'll clean this up and...");
	P.s("And I'll prepare so you can eat");
	//leave room
	Q.wait(1000);
	Q.do(function(){
		resources.door_open.sound.stop();
	});
	Q.wait(2500);
	Q.do(function(){
		resources.dog_pain.sound.play();
	});
	Q.wait(2000);
	P.s("What's wrong??");
	P.s("WHAT'S HAPPENING???");
	P.s("Oh no");
	P.s("No... No...");
	P.s("It's okay...");
	P.s("It's okay....");
	P.s("I should...");
	P.s("I should...");
	C.s({
        "Panic": function(msg) {
            C.hide();
            home3_panic();
        },
        "Not panic": function(msg) {
            C.hide();
            home3_not_panic();
        }
    });
}	

function home3_panic(){
	P.panic("This is not happening");
	P.panic("Take him to hospital");
	P.panic("Is he gonna die?");
	P.panic("Was he like this when I was gone?");
	P.panic("What about the test tomorrow?");
	P.panic("I never saw this coming");
	P.panic("Of course you saw this coming");
	P.panic("But I thought he was eating alright");
	P.panic("What are you doing?");
	P.panic("I'm trying to settle him down");
	P.panic("Will he settle down?");
	P.panic("What the hell is going on?");
	P.panic("What will happen to me? to him?");
	P.panic("I don't wanna think");
	P.panic("But you can't stop thinking");
	P.panic("Stop that");
	P.panic("Oh my god...");
	P.panic("Do something Just do something");
	P.panic("This is so painful");
	Q.do(clearMsg);
	Q.do(function(){
		blackout.visible = true;
	});
	Q.wait(400);
	P.panic("Take him to hospital");
	Q.wait(300);
	P.panic("No");
	Q.do(function(){
		blackout.visible = false;
	});
	P.panic("He is in way more pain that I am");
	P.panic("I can't...");
	P.panic("STOP THINKING AND DO SOMETHING");
	P.panic("I shouldn't have done that");
	P.panic("I wish I could rewind time");
	P.panic("He is gonna die");
	P.panic("He's NOT gonna die")
	P.panic("I couldn't cure him");
	P.panic("I let him die");
	P.panic("SHUT UP");
	P.panic("Did you really think just feeding him would magically cure him? How stupid");
	P.panic("I thought you didn't believe in magic");
	P.panic("Please stop all this pain");
	Q.do(clearMsg);
	Q.do(function(){
		blackout.visible = true;
	});
	Q.wait(800);
	P.panic("Take him to hospital");
	Q.wait(600);
	P.panic("What?");
	Q.do(function(){
		blackout.visible = false;
	});
	P.panic("Take him to hospital right now");
	P.panic("How am I...");
	P.panic("Go right now before it's too late");
	P.panic("I'm right");
	P.panic("Take him to hostipal");
	P.t("Hospital... right now");
	Q.do(end_home3);
}

function home3_not_panic(){
	P.t("The first step...");
	P.t("I remember...");
	P.t("No...");
	P.t("");
	Q.do(home3_panic);
}

function end_home3(){
	Q.wait(3000);
	Q.do(clearMsg);
	Q.do(function(){
		app.stage.removeChild(bg_home);
		app.stage.removeChild(home_chair);
		resources.dog_pain.sound.stop();
		blackout.visible = true;
	});
	Q.do(start_vet2);
}