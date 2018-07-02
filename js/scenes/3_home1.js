//timeline = 3 June 8th - 10th Wed - Fri
//How did he lose so much weight?
//Does what I do matter or not?
//Granma takes him to vet and says he's sick

async function start_home1() {
	//loader
	await sleep(1000);
	blackout.visible = false;

	P.s("I'm home!");
	//dog greets me
	P.s("Oh..");
	//I greet him
	P.s("Yes, I missed you too");
	P.s("...");
	P.s("Huh?");
	P.s("How did you lose so much weight?");
	P.s("Last time I saw you...");
	//Grandma comes to check
	Gm.s("Who is it?");
	Gm.s("Oh it's you");
	Gm.s("Welcome!");
	Gm.s("It's been so long")
	Gm.s("But to come without a phonecall or even a text...");
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
	Q.wait(1000);
	P.s("Grandma...");
	P.s("How has he lost so much weight?");
	P.s("Has he not been eating again?");
	Gm.s("It seemed not to, I guess");
	P.s("But I never saw him get this skinny");
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
        	$.denial = true;
        	P.s(msg);
        	P.s("He's just... not very appetitive for now");
        	P.s("He has lost and gained weight before");
        	P.s("He will regain his appetite and his weight, too");
        	Gm.s("Well... I think you still should take it to a vet");
        	Gm.s("You know it's an old dog");
        	P.s("Grandma...");
        	Gm.s("If you're too busy I can take it this Friday");
        	P.s("Will you do that?");
        	Gm.s("I always take it to a walk on Fridays");
        	Gm.s("I'll just visit the vet's office on the way home");
        	P.s("Thanks grandma");
        	P.s("He'll be okay");
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
        	Gm.s("Raising your voices against me again?");
        	Gm.s("You asked me - and I told you");
        	Gm.s("This thing was always your responsibility");
        	P.s("Is it so hard not giving him some of our food?");
        	Gm.s("Hey, whenever I'm eating something");
        	Gm.s("He's always there in my way");
        	P.s("But I asked you please - multiple times!");
        	Gm.s("And who takes care of him when you're neglecting your responsibilty?");
        	P.s("That's because-");
        	Gm.s("Because you're busy. Ha of course");
        	Gm.s("Compare to this old, nothing in her hands-");
        	P.s("Okay")
        	P.s("I'm sorry grandma");
        	P.s("I'm sorry");
        	C.hide();
        	home1_1();
        },
        "Hmm... Maybe I really should": function(msg) {
        	$.careful = true;
        	P.s(msg);
        	P.s("He has lost and gained weight before");
        	P.s("But there's no harm being careful");
        	Gm.s("Didn't you say you were very busy?");
        	Gm.s("I can take it to see a vet if you want");
        	P.s("Oh will you do that for me?");
        	Gm.s("I always take it to a walk on Fridays");
        	Gm.s("I'll just visit the vet's office on the way home");
        	P.s("Thanks grandma");
        	P.s("He'll be okay");
        	P.s("You're okay, right?");
        	P.s("You should really start eating your food, not staring at ours");
        	C.hide();
        	home1_1();
    	}
    });
}

function home1_1() {
	Q.wait(2000);
	Q.do(clearMsg);

	P.t("Wait...");
	P.t("It's already 8 o'clock?");
	P.t("So...");
	P.t("Counting for the 100th time")
	P.t("I've only got 15 hours until the next exam");
	P.t("Taking out time to eat, sleep, take a shower, get to school and et cetera...");
	P.t("That's like less than 6 hours");
	P.t("And the time is ticking as I have this simulation going on my head");
	P.t("tick-tock")
	P.t("...");
	P.t("I wonder if what I do for the next few hours will have any impact on the result at all");
	P.t("I mean... It's a final exam right?");
	P.t("That means it tests for what I've learn in this whole semester");
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
	    	P.t("I probably won't have to torture myself trying to not waste a single minute");
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
	    	C.hide();
	    	home1_2();
	    },
	    "Stop being lazy and get to work, mortal!": function(msg) {
	    	$.straightforward = true;
	    	P.t(msg);
	    	P.t("What am I even thinking about?");
	    	P.t("There is a test tomorrow, ergo I study today");
	    	P.t("Nothing ever gets in between");
	    	P.t("That's the way it's always been");
	    	P.t("and that's the way it'll always be");
	    	C.hide();
	    	home1_2();
	    }
	});
}

function home1_2(){
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
		P.s("Yeah");
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
	Gm.s("I don't know");
	Gm.s("He didn't say anything about serious");
	Gm.s("He said to come back later so you should take him and hear for yourself");
	P.s("Come back when...?");
	Gm.s("Anytime after tomorrow");
	Gm.s("Some test results must be ready");

	P.s("I...");
	Q.wait(1000);
	P.s("I have to leave tomorrow morning...")
	P.s("I have to leave tomorrow morning to take a test");
	P.s("I have to stay there for a while because I have to attend classes and take the tests...");
	Q.wait(1000);
	P.s("In 6 days...");
	P.s("It'll be over")
	P.s("I'll be home right away");
	P.s("I'll take him to the vet when I get here");
	P.s("Can you take care of him instead of me meanwhile?");

	Gm.s("Okay");
	Gm.s("But you know this right?");
	Gm.s("We have to be ready for what's coming");

	C.s({
        "He can get better": function(msg) {
        	P.s(msg);
        	P.s("He's not-");
        	C.hide();
        	home1_4()
    	},
        "He WILL get better": function(msg) {
        	P.s(msg);
        	P.s("He's NOT-");
        	C.hide();
        	home1_4()
     	},
        "Grandma...": function(msg) {
        	P.s(msg)
        	C.hide();
        	home1_4()
     	}
    });	
}


function home1_4(){

	Gm.s("So you're leaving tomorrow morning?");
	Gm.s("You'll have breakfast right?");
	P.s("I will");
	Gm.s("Okay");
	Gm.s("Good night");
	P.s("Good night");

	//Grandma leaves
	Q.wait(1000);
	P.t("Oh...");
	Q.wait(1000);
	P.t("I should have known...");
	P.t("Why was I so stupid?");
	P.t("Why am I so careless?");
	P.t("I should have known the last time I saw him");
	P.t("I just thought he had lost a bit of weight");
	P.t("Why didn't I take him to a vet?");
	P.t("Why didn't I ever even think of the possiblity");
	P.t("That he could be sick?");
	P.t("I am...");
	P.t("So irresponsible...");
	P.t("So terrible...");

	P.t("No...");
	P.t("It's not...");
	P.t("Why am I crying?");
	P.t("I don't even know how bad he is yet...");
	P.t("For now from what I've heard");
	P.t("It could just be lack of nutrition");
	if(!$.careful){
		P.t("It's gotta be");
	}
	Q.wait(1000);
	P.t("If he regains his appetite");
	P.t("And gain some weight");
	P.t("He can get better");
	Q.wait(1000);
	P.t("I promise...");
	P.t("I will take full care of you");
	P.t("I promise");
	P.t("Please take care...");

	if(!$.denial){
		P.t("Please hold on...");
	}
	Q.do(end_home1);
}

function end_home1() {
	Q.wait(2000);
	Q.do(clearMsg);
	Q.do(start_test2);
	Q.do(function(){
		blackout.visible = true;
	});
}
