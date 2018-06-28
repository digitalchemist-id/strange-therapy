//timeline = last
//choose multiple rude options in the intro to end up here
//I don't want to talk to you and I don't want to let you play this game again

function kicked_out(){
	M.s("...");
	M.s("Dear player");
	M.s("When I said characters");
	M.s("I was also including myself");
	M.s("Maybe you were just trying to be funny");
	M.s("Or you just didn't care cuz it's just a game-");
	M.s("You know, just spamming with the first option without even reading");
	M.s("But you don't seem to be the type who needs a therapy - either strange or not");
	M.s("And to tell you the truth, I'm not even a real therapist");
	M.s("So there's no real reason for you to be here anymore");
	M.s("Good bye");
	Q.wait(1000);
	C.s({
        "Heyyyy! I'm sorry! let me in!": function(msg) {
            P.s(msg);
            P.s("LET ME IN!!!!!!");
            P.s("Forgive me!!!!!!");
            C.hide();
            kicked_out_1();
        },
        "What about the game? I haven't even got to play it!": function(msg) {
            P.s(msg);
            P.s("There's no game without a player! Why did you even make this if you're not gonna let people play?");
            M.s("You had your game");
            M.s("You just don't have it anymore");
            M.s("How cruel");
            C.hide();
            kicked_out_1();
        },
        "What a terrible game": function(msg){
        	P.s("It WAS a waste of time, after all");
        	C.hide();
        }
    });
}

function kicked_out_1(){
	M.s("Time is unforgiving");
	M.s("So are the consequences of your choices");
	M.s("We all learn it the hard way");
	M.s("Please make your choices more wisely next time");
}