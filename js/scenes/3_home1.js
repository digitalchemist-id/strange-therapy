//timeline = 3 June 8th - 10th Wed - Fri

async function start_home1() {
	//loader
	await sleep(4000);
	resources.room.sound.play();
	await sleep(2000);
    app.stage.addChildAt(bg_home, 0);
    app.stage.addChildAt(home_dog_bed, 1);
	app.stage.addChildAt(home_bed_pet, 1);
    app.stage.addChildAt(home_bed_lookdown, 1);
	app.stage.addChildAt(home_bed_lookside, 1);
	app.stage.addChildAt(home_chair, 1);
	app.stage.addChildAt(home_grandma, 1);
	home_bed_pet.visible = false;
	home_bed_lookdown.visible = false;
	home_bed_lookside.visible = false;
	home_dog_bed.visible = false;
	home_grandma.visible = false;
	blackout.visible = false;
	Q.wait(1000);

	P.s("I'm home!");
	Q.wait(1000);
	Q.do(function(){
		resources.dog_whine.sound.play();
	});
	Q.wait(2500);
	P.s("Oh..");
	Q.wait(2000);
	P.s("It's been so long!");
	P.s("I missed you too");

	Q.wait(500);
	Q.do(function(){
		resources.door_open.sound.play();
	});
	Q.wait(4500);
	Q.do(function(){
		home_bed_lookside.visible = true;
	});
	Q.wait(1000);
	Q.do(function(){
		home_dog_bed.visible = true;
	});
	Q.wait(300);
	Q.do(function(){
		home_bed_lookside.visible = false;
		home_bed_lookdown.visible = true;
	});
	Q.wait(1000);
	P.s("...");
	Q.wait(1500);
	Q.do(function(){
		home_bed_lookdown.visible = false;
		home_bed_pet.visible = true;
	});
	P.s("Huh?");
	P.s("How did you lose so much weight?");
	P.s("Last time I saw you...");

	Q.wait(1000);
	Gm.s("Who is it?");
	Q.wait(2000);
	Q.do(function(){
		home_grandma.visible = true;
	});
	Q.wait(500);
	Q.do(function(){
		home_bed_pet.visible = false;
		home_bed_lookside.visible = true;
	});
	Gm.s("Oh it's you");
	Gm.s("Welcome!");
	Gm.s("It's been so long")
	Gm.s("But without a phonecall or even a text...");
	P.s("Hi grandma");
	P.s("I wasn't planning to come but...");
	P.s("I found out that I had time to visit");
	P.s("How have you been?");
	Gm.s("Just same as always");
	Gm.s("How have YOU been?");
	P.s("Busy as hell...");
	P.s("Busier than ever actaully");
	P.s("But my semester ends soon");
	P.s("It ends in about a week");
	Gm.s("That's great");
	Q.wait(500);
	Q.do(function(){
		home_bed_lookside.visible = false;
		home_bed_lookdown.visible = true;
	});
	Q.wait(1000);
	P.s("Grandma...");
	P.s("How has he lost so much weight?");
	Q.wait(1000);
	Q.do(function(){
		home_bed_lookdown.visible = false;
		home_bed_lookside.visible = true;
	});
	Q.wait(500);
	P.s("Has he not been eating again?");
	Gm.s("It seemed not to, I guess");
	P.s("But I don't think I saw him get this skinny");
	P.s("Have you been feeding him something other than his food again?");
	Gm.s("Hey, you're the one who's responsible for it");
	Gm.s("I'm the one who's helping you");
	P.s("I know that...");
	P.s("And I really appreciate that");
	P.s("But...");
	Gm.s("It seemed not its usual energetic state recently");
	Gm.s("Maybe you should take it to a vet");
	C.s({
        "Oh come on, he's not sick": function(msg) {
        	P.s(msg);
        	Q.do(function(){
				home_bed_lookside.visible = false;
				home_bed_pet.visible = true;
			});
        	P.s("He's just... not very appetitive for now");
        	P.s("He has lost and gained weight before");
        	P.s("He will regain his appetite and his weight, too");
        	Q.do(function(){
				home_bed_pet.visible = false;
				home_bed_lookside.visible = true;
			});
        	Gm.s("Well... I still think you should take it to a vet");
        	Gm.s("You know it's an old dog");
        	P.s("Grandma...");
        	Gm.s("If you're too busy I can take it this Friday");
        	P.s("Will you do that?");
        	Gm.s("I always take it to the mountain on Fridays");
        	Gm.s("I'll just visit the vet's office on the way home");
        	P.s("Thanks grandma");
        	P.s("He'll be okay");
        	Q.do(function(){
				home_bed_lookside.visible = false;
				home_bed_pet.visible = true;
			});
        	P.s("You're okay, right?");
        	P.s("You should really start eating your food, not staring at ours");
        	C.hide();
        	home1_1();
        },
        "You've been feeding him things you shouldn't": function(msg) {
        	$.rude = true;
        	P.s(msg);
        	P.s("I asked you - please only feed him his food");
        	P.s("He won't eat his food if you feed him something-");
        	Gm.s("Are you raising your voices against me?");
        	Gm.s("You asked me - and I told you");
        	Gm.s("This thing was always your responsibility");
        	P.s("Is not giving him some of our food so hard?");
        	Gm.s("Hey, whenever there's food");
        	Gm.s("He's always there in my way");
        	Gm.s("And who's the one who takes care of him while you're not here?");
        	P.s("Okay");
        	P.s("I'm sorry grandma");
        	P.s("I'm sorry");
        	P.s("I've been so busy for the past couple of weeks...");
        	Gm.s("Of course");
        	Gm.s("I can always take care of him while you're in school");
        	Gm.s("But you're a college student now. You should learn how to be thankful");
        	P.s("I am...");
        	Gm.s("So you're not gonna take it to a hospital?");
        	P.s("I'll try to feed him");
        	P.s("He'll be okay...");
        	Q.do(function(){
				home_bed_lookside.visible = false;
				home_bed_pet.visible = true;
			});
        	P.s("You're okay, right?");
        	P.s("You should really start eating your food, not staring at ours");
        	C.hide();
        	home1_1();
        },
        "Hmm... Maybe I really should": function(msg) {
        	$.careful = true;
        	Q.do(function(){
				home_bed_lookside.visible = false;
				home_bed_pet.visible = true;
			});
        	P.s(msg);
        	P.s("He has lost and gained weight before");
        	P.s("But there's no harm being careful");
        	Gm.s("Didn't you say you were very busy?");
        	Gm.s("I can take it to see a vet if you want");
        	Q.do(function(){
				home_bed_pet.visible = false;
				home_bed_lookside.visible = true;
			});
        	P.s("Oh will you do that for me?");
        	Gm.s("I always take it to the mountain on Fridays");
        	Gm.s("I'll just visit the vet's office on the way home");
        	P.s("Thanks grandma");
        	P.s("He'll be okay");
        	Q.do(function(){
				home_bed_lookside.visible = false;
				home_bed_pet.visible = true;
			});
        	P.s("You're okay, right?");
        	P.s("You should really start eating your food, not staring at ours");
        	C.hide();
        	home1_1();
    	}
    });
}

function home1_1() {
	Q.wait(3000);
	Q.do(clearMsg);
	Q.do(function(){
		resources.room.sound.stop();
		home_grandma.visible = false;
		app.stage.removeChild(home_bed_lookside);
		app.stage.removeChild(home_bed_pet);
		app.stage.removeChild(home_dog_bed);
		app.stage.removeChild(home_chair);
		app.stage.removeChild(home_grandma);
		blackout.visible = true;
	});
	Q.wait(4000);
	Q.do(function(){
		app.stage.addChildAt(home_grandma, 1);
		app.stage.addChildAt(home_cushion, 1);
		app.stage.addChildAt(home_desk_look, 1);
		app.stage.addChildAt(home_desk_study, 1);
		app.stage.addChildAt(home_desk_front, 1);
		app.stage.addChildAt(home_books, 1);
		app.stage.addChildAt(home_chair, 1);
		resources.room.sound.play();
		home_desk_look.visible = false;
		home_desk_front.visible = false;
		blackout.visible = false;
	});
	Q.wait(4500);
	P.t("Wait...");
	Q.do(function(){
		home_desk_study.visible = false;
		home_desk_front.visible = true;
	});
	P.t("It's already 8 o'clock?");
	P.t("So...");
	P.t("Counting for the 100th time")
	P.t("I've only got 15 hours until the next exam");
	P.t("Taking out time to eat, sleep, take a shower, get to school and et cetera...");
	P.t("That's like less than 6 hours");
	P.t("And the time is ticking as I have this simulation going on my head");
	P.t("tick-tock-tick-tock");
	Q.wait(1000);
	P.t("...");
	P.t("I wonder if what I do for the next few hours will have any impact on the result at all");
	P.t("I mean... It's a final exam right?");
	P.t("That means it tests for what I've learned through this whole semester");
	P.t("Will few hours of studying and reviewing even matter?");
	P.t("I really doubt that");
	P.t("Like REALLY");

	P.t("But maybe I just think the way I want to");
	P.t("just because I want to give myself an excuse to be lazy");
	P.t("Hmm...");

	C.t({
	    "What happens is pretty much already decided": function(msg) {
	    	$.destiny = true;
	    	P.t(msg);
	    	P.t("I mean, what's the point of hanging on everything so tight?");
	    	P.t("What will happen is... what's gotta happen");
	    	P.t("I probably won't have to torture myself trying not to waste a single minute");
	    	C.hide();
	    	home1_2();
	    },
	    "It's the process of struggling that has meaning": function(msg) {
	    	$.struggle = true;
	    	P.t(msg);
	    	P.t("How I spend next few hours might not have huge impact on this semester's result");
	    	P.t("But even if that's true");
	    	P.t("I will regret so much for not making every minute count if I mess it up");
	    	P.t("I want to try my best with what I have left");
	    	P.t("That being... 15 hours and still ticking");
	    	Q.do(function(){
				home_desk_front.visible = false;
				home_desk_study.visible = true;
			});
	    	C.hide();
	    	home1_2();
	    },
	    "Stop being lazy and get to work, mortal!": function(msg) {
	    	$.straightforward = true;
	    	P.t(msg);
	    	Q.do(function(){
				home_desk_front.visible = false;
				home_desk_study.visible = true;
			});
	    	P.t("What am I even thinking about?");
	    	P.t("There is a test tomorrow, so I study today");
	    	P.t("Nothing ever gets in between");
	    	P.t("That's the way it's always been");
	    	P.t("and that's the way it'll always be");
	    	C.hide();
	    	home1_2();
	    }
	});
}

function home1_2(){
	Q.wait(500);
	Q.do(function(){
		resources.door_open.sound.play();
	})
	Q.wait(3000);
	Q.do(function(){
		home_grandma.visible = true;
	})
	Q.wait(1000);
	Q.do(function(){
		home_desk_study.visible = false;
		home_desk_front.visible = false;		
		home_desk_look.visible = true;
	})
	if($.rude){
		Gm.s("Hey");
		P.s("Yes?");
		P.s("Did you come back from a walk?");
		Gm.s("Yes");
		Gm.s("With your dog");
		Gm.s("And I also visited vet's office");
		P.s("What?");
		Gm.s("I took him to a vet");
		P.s("...");
		P.s("I told you that wasn't necessary");
	} else {
		Gm.s("Sweetie");
		Gm.s("Are you studying?");
		if($.destiny){
			P.s("Uhh... I was");
		} else {
			P.s("Yeah");
		}
		P.s("You're coming from the vet's office right?");
	}
	P.s("What did he say?");
	Gm.s("About that...");
	Gm.s("I was about to tell you");
	Gm.s("That it's not good");
	Q.wait(1000);
	C.s({
	    "What...?": function(msg) {
	    	P.s(msg);
	    	C.hide();
	    	home1_3();
	    },
	    "How...?": function(msg) {
	    	P.s(msg);
	    	C.hide();
	    	home1_3();
	    },
	    "No...": function(msg) {
	    	P.s(msg);
	    	C.hide();
	    	home1_3();
	    }
	});
}

function home1_3(){
	Gm.s("The vet said something about its sugar and other stuff being low");
	Gm.s("I didn't understand much of the details but");
	Gm.s("I told you it's an old dog");
	P.s("How is he...");
	P.s("I mean...");
	P.s("Is it serious?");
	P.s("Where is he?");
	P.s("I need to see him");
	Gm.s("It's on the sofa");
	Gm.s("I don't know if it's serious");
	Gm.s("He didn't say anything about serious");
	Gm.s("He said to come back later so you should take it and hear for yourself");
	P.s("Come back when...?");
	Gm.s("Anytime after tomorrow");
	Gm.s("Some test results must be ready");
	Q.wait(3000);
	P.s("But I...");
	Q.wait(1000);
	P.s("I have to leave tomorrow morning...")
	P.s("I have to leave tomorrow morning to take a test");
	P.s("I have to stay there for a while because I have to attend classes and take the tests...");
	Q.wait(1000);
	Gm.s("What are you gonna do about him then?");
	Q.wait(1000);
	C.s({
        "...": function(msg) {
        	P.s(msg);
        	P.s("What... should I do?");
        	Gm.s("How long will it take?");
        	P.s("What?");
        	Gm.s("For how long will you be busy?");
        	P.s("It'll be all over in 6 days...");
        	Gm.s("I can take care of him meanwhile");
        	Gm.s("Don't worry about him");
        	Gm.s("You have a job to do don't you?");
        	P.s("I...");
        	C.hide();
        	home1_4();
    	},
        "I'll come back in 6 days...": function(msg) {
        	P.s(msg);
        	P.s("In 6 days...");
			P.s("It'll be over");
			P.s("I'll be home right away");
			P.s("I'll take him to the vet when I get here");
			Q.wait(1000);
			P.s("Can you take care of him instead of me meanwhile?");
			Gm.s("Okay");
        	C.hide();
        	home1_4();
     	},
        "He'll be okay": function(msg) {
        	$.denial = true;
        	P.s(msg);
        	P.s("Don't worry about him");
        	P.s("It's probably just lack of nutrition");
        	P.s("He'll eat again when he gets hungry");
        	P.s("I'll take him to hospital next week to hear the results");
        	Gm.s("If you say so...");
        	C.hide();
        	home1_4();
     	}
    });	
}

function home1_4(){
	Q.wait(1000);
	Gm.s("Just keep in mind");
	Gm.s("That we have to be ready for what's coming");
	Gm.s("You know he won't live forever");

	C.s({
        "He can get better": function(msg) {
        	P.s(msg);
        	P.s("He's not-");
        	C.hide();
        	home1_5();
    	},
        "He WILL get better": function(msg) {
        	P.s(msg);
        	P.s("He's NOT-");
        	C.hide();
        	home1_5();
     	},
        "Grandma...": function(msg) {
        	P.s(msg)
        	C.hide();
        	home1_5();
     	}
    });	
}


function home1_5(){

	Gm.s("So you're leaving tomorrow morning?");
	Gm.s("You'll have breakfast right?");
	P.s("No... I have to leave early");
	Gm.s("Okay");
	Gm.s("Good night");
	P.s("Good night");
	Q.wait(1500);
	Q.do(function(){
		home_grandma.visible = false;
	});
	Q.wait(500);
	Q.do(function(){
		resources.door_close.sound.play();
	});
	Q.wait(3000);
	Q.do(function(){
		home_desk_look.visible = false;
		home_desk_front.visible = true;
	});
	Q.wait(2000);
	if(!$.denial){
		P.t("Oh...");
		Q.wait(1000);
		P.t("Why am I so stupid?");
		P.t("The last time I saw him-");
		P.t("I just thought he had lost a bit of weight");
		P.t("Why didn't I ever even think of the possiblity that he could be sick?");
		Q.wait(3000);
		Q.do(function(){
			home_desk_front.visible = false;
			home_chair.x = 30;
		});
		Q.wait(500);
		Q.do(function(){
			home_bed_lookdown.visible = true;
		});
		P.t("No...");
		P.t("I don't even know how bad he is yet...");
		P.t("For now from what I've heard");
		P.t("It could just be lack of nutrition");
		if(!$.careful){
			P.t("It's gotta be");
		}
		Q.wait(1000);
		P.t("If he regains his appetite and gain some weight");
		P.t("He can get better");
		Q.wait(3000);
		Q.do(function(){
			home_bed_lookdown.visible = false;
		});
		Q.wait(500);
		Q.do(function(){
			resources.door_open.sound.play();
		});
		Q.wait(3500);
		P.t("I'm sorry I can't keep your side...");
		P.t("I promise");
		P.t("I will take full care of you once it's over");
		P.t("I promise");
	}
	Q.do(end_home1);
}

function end_home1() {
	Q.wait(4000);
	Q.do(clearMsg);
	Q.do(function(){
		app.stage.removeChild(bg_home);
		app.stage.removeChild(home_chair);
		app.stage.removeChild(home_grandma);
		app.stage.removeChild(home_cushion);
		app.stage.removeChild(home_bed_lookdown);
		app.stage.removeChild(home_desk_look);
		app.stage.removeChild(home_desk_study);
		app.stage.removeChild(home_desk_front);
		app.stage.removeChild(home_books);
		app.stage.removeChild(home_chair);
		resources.room.sound.stop();
		blackout.visible = true;
	});
	Q.do(start_test2);
}
