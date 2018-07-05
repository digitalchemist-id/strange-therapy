//timeline = 0

function start_intro(){

	resources.twilight.sound.play();
    resources.room.sound.play();

    Q.wait(1000);

	M.s("Hi!");
	M.s("Welcome to strange therapy");

	C.s({
        "Uh... What is this?": function(msg) {
            P.s(msg);
            P.s("I thought I was gonna play a game");
            M.s("It is a game");
            M.s("But it's also a therapy...");
            C.hide();
            intro_1();
        },
        "Uh... Who are you?": function(msg) {
            P.s(msg);
            M.s("Why, I'm your therapist of course");
			M.s("I'm also someone who made this game");
            M.s("A game, a therapy...");
            C.hide();
            intro_1();
        },
        "Uh... Where am I?": function(msg) {
            P.s(msg);
            M.s("You're currently in a therapy session");
            M.s("A therapy, a game...");
            C.hide();
            intro_1();
        }
    });
}

function intro_1(){
	M.s("An interactive story, a visual novel, a simulator, whatever you'd like to call it");
	M.s("I personally want you to think that it's something kinda like a therapy");
	P.s("Hmmm...");
	M.s("You'll get what you came here for in a minute");
	M.s("Before that, let's just get to know each other before you play this thing!");
	M.s("You know, chat a little like they do in other therapies");
	C.s({
        "Just gimme my game!": function(msg) {
        	$.rude_to_me = 1;
            P.s(msg);
            P.s("I didn't click this thing to 'get to know you'");
            M.s("Oh...");
            M.s("Please be a little more patient");
            M.s("Say...");
            C.hide();
            intro_2();
        },
        "Alright. Nice to meet you": function(msg) {
            $.rude_to_me = 0;
            P.s(msg);
            M.s("Nice to meet you too");
            C.hide();
            intro_2();
        },
        "Tell me more about this thing": function(msg) {
            $.rude_to_me = 0;
            P.s(msg);
            M.s("Before we get more into it...");
            C.hide();
            intro_2();
        }
    });
}

function intro_2(){
	M.s("What do you think of the music?");
	M.s("I added it to a game cuz, what's a therapy without a good piano piece playing in the background?");
	C.s({
        "It's okay, I guess": function(msg) {
            P.s(msg);
            P.s("Nothing wrong with it");
            M.s("That's cool");
            C.hide();
            intro_3();
        },
        "I love it!": function(msg) {
            P.s(msg);
            P.s("What's the name of the music?");
            M.s("It's ----------- by --------");
            M.s("You can check more of his stuff out later in his soundcloud account");
            C.hide();
            intro_3();
        },
        "It kinda disturbs me...": function(msg) {
        	$.music_off = true;
            P.s(msg);
            M.s("Oh really?");
            M.s("Hm... Let me just turn it off then");
            Q.wait(1000);
            Q.do(function(){resources.twilight.sound.stop();});
            Q.wait(1000);
            M.s("There");
            P.s("Much better now");
            C.hide();
            intro_3();
        }
    });
}


function intro_3(){
	P.s("So...");
    Q.wait(500);
    P.s("Umm...");
	P.s("What's this therapy about?");
	M.s("This therapy");
	M.s("It's something about loss, love, life and hope");
	C.s({
        "That's a lot to cover in a flash game": function(msg) {
            $.flashgame = true;
            P.s(msg);
            M.s("IT'S NOT FLASH");
            M.s("This was written with html5 and javascript - with help from pixijs library. They're totally different from flash");
            P.s("Pfff, Whatever");
            P.s("Looks pretty flash to me");
            M.s("Anyway...");
            C.hide();
            intro_4();
        },
        "That's a lot to cover in a web game": function(msg) {
            $.webgame = true;
            P.s(msg);
            M.s("Well...");
            M.s("Let's say I tried");
            C.hide();
            intro_4();
        },
        "That's a lot to cover in a therapy": function(msg) {
        	$.therapy = true;
            P.s(msg);
            M.s("I know right?");
            M.s("Let's just say at least I tried");
            C.hide();
            intro_4();
        }
    });
}

function intro_4(){
	if($.flashgame){
		M.s("To be a little more precise, this WEB game is about my personal experience");
	} else if($.webgame){
		M.s("To be a little more precise, this game is about my personal experience");
	} else {
		M.s("To be a little more precise, this therapy is about my personal experience");
	}
	M.s("You're gonna play as me and go through what happened to me years ago");
	M.s("What happened... or what could have happened");
	P.s("I thought therapists listen, not talk");
	M.s("That's why I named this 'strange' therapy");

	C.s({
		"Strange or not, it'd better be worth my time": function(msg) {
        	$.rude_to_me++;
            P.s(msg);
            M.s("...");
            C.hide();
            intro_5();
        },
        "Makes sense": function(msg) {
            P.s(msg);
            P.s("Hmm...");
            P.s("Does it...?");
            M.s("Why not?");
            C.hide();
            intro_5();
        },
        "'Strange', huh": function(msg) {
            P.s(msg);
            M.s("That's right");
            M.s("There's nothing wrong with being strange");
            C.hide();
            intro_5();
        }     
    });
}

function intro_5(){
	Q.wait(2500);
	M.s("While you're playing this game...");
	M.s("You'll have to make choices, like you're doing right now");
	M.s("Some of them are easy, but some are going to be not-so-easy");
	M.s("Not only will it affect what happens, But also your interaction with other characters");
	M.s("This game is going to make them count");
	C.s({
        "I'll do whatever I want": function(msg) {
        	$.rude_to_me++;
            P.s(msg);
            P.s("I'm the player here anyways");
            C.hide();
            if($.rude_to_me > 2){
				kicked_out();
			} else {
                M.s("Hm");
				intro_6();
			}
        },
        "I'll be on guard": function(msg) {
            P.s(msg);
            M.s("That's great");
            C.hide();
            intro_6();
        },
        "I'll see what happens": function(msg) {
            P.s(msg);
            M.s("You'll see soon enough");
            C.hide();
            intro_6();
        }
    });
}

function intro_6(){
    Q.wait(1000);
	M.s("Shall we begin then?");
	P.s("Yeah, I'm ready");
	P.s("Let's get to it");
	M.s("Let's go back to 2 years ago");
	M.s("You were getting used to college life - and caffein");
    M.s("It was near the end of a semester, and you were just another crazy kid taking one test and another");
	M.s("So ready and excited for the summer break");
    Q.do(end_intro);
}

function end_intro(){
	Q.wait(3000);
	Q.do(function(){
        resources.twilight.sound.stop();
        resources.room.sound.stop();
        blackout.visible = true;
    });
	Q.do(clearMsg);
	Q.do(start_test1);
}