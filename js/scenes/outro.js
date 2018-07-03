//timeline = last
//Now you've told me about loss
//tell me about life, love, hope

async function start_outro(){	

	await sleep(3000);
	resources.room.sound.play();
	resources.twilight.sound.play();
	await sleep(3000);
	blackout.visible = false;
	//config

	if($.music_off){
		P.s("This music...");
		M.s("Oh yeah");
		M.s("You said you didn't like it");
		M.s("I'll just turn it off again");
		Q.wait(2000);
		Q.do(function(){
			resources.twilight.sound.stop();
		});
		Q.wait(2000);
		P.s("So...");
		M.s("So...");
		P.s("After that?");
		M.s("After that...");
	}
	M.s("He passed away 2 days after that");
	
	C.s({
        "*Sob*": function(msg) {
            P.s(msg);
            P.s("That's so sad...");
            P.s("Let me just-");
            P.s("*Sniff*");
            M.s("Take your time");
            C.hide();
            outro_thoughts();
        },
        "C'mon...": function(msg) {
            P.s(msg);
            P.s("That's the end of the story?");
            P.s("I was expecting...");
            M.s("What were you expecting?");
            P.s("I donno");
            P.s("I was expecting... more");
            M.s("Huh");
            M.s("And I thought THIS was long enouogh");
            C.hide();
            outro_thoughts();
        },
        "Well... it had to happen": function(msg) {
            P.s(msg);
            M.s("I guess it did");
            C.hide();
            outro_thoughts();
        }
    });
}

function outro_thoughts(){
	Q.wait(1000);
	M.s("So what do you think?");
	M.s("I mean, of the story");
	C.s({
        "It was quite terrifying": function(msg) {
            P.s(msg);
            P.s("Terrifyingly sad");
            P.s("I don't wanna imagine anything like that happening to me");
            M.s("Indeed...");
            C.hide();
            outro_questions();
        },
        "It was so terrible": function(msg) {
            P.s(msg);
            P.s("My hands shook as I went on and made the choices");
            P.s("I never wanna play anything like this again");
            M.s("Well, thank you for making this far");
            M.s("I agree that there are certain things in life that happening for once - and only once - is enough");
            M.s("Whether it be a terrible experience or just terrible storytelling");
            C.hide();
            outro_questions();
        },
        "It was terrific... in a way": function(msg) {
            P.s(msg);
            P.s("I don't mean what happened but");
            P.s("The way you put it together into a story");
            P.s("And the way I was involved...");
            P.s("'In a way'");
            M.s("I'm not sure if I even know what terrific means exactly");
            M.s("But if you meant to compliment, you have my gratitude");
            C.hide();
            outro_questions();
        }
    });
}

function outro_questions(){
	C.s({
        "Is this what really happened?": function(msg) {
        	$.outro_what_happened_asked = true;
            P.s(msg);
            C.hide();
            outro_questions_what_happened();
        },
        "How did I do on the tests?": function(msg) {
        	$.outro_tests_asked = true;
            P.s(msg);
            C.hide();
            outro_questions_tests();
        },
        "So this game is over?": function(msg) {
        	$.outro_game_over_asked = true;
            P.s(msg);
            C.hide();
            outro_questions_game_over();
        }
    });
}

function outro_questions_what_happened(){
	P.s("This game you made me play");
    P.s("You said it was what happened to you");
    P.s("Or what could have happened");
    P.s("But what happened? like REALLY");
    P.s("Were my choices as good as yours... or other way around?");
    M.s("That's an interesting question");
    M.s("About my choices...");
    M.s("They don't matter. Remember that you're the player in this game-");
    M.s("So I won't mention them");
    P.s("Awww...");
    P.s("Whatever. You're the boss here");
    M.s("And if you ask me if this is about what REALLY happened");
    M.s("Like REAAAAAAAAALLY");
    M.s("Yes... and no");
    P.s("Oh c'mon");
    P.s("Don't be like that");
    M.s("Hm");
    M.s("If you'd let me continue-");
    M.s("This game is based on my memory");
    M.s("And a four page document log I happened to write the night after his death...");
    M.s("AND some other archived files");
    M.s("I wanted this experience to be as accurate as possible");
    M.s("Because it'd be also as cruel");
    M.s("But I don't REALLY remember everthing correctly");
    M.s("I had to rewrite the script several times because I found out later that what I thought had happened-");
    M.s("Was not really what had happened");
    M.s("So... they can be inaccurate");
    P.s("That's understandable");
    P.s("I won't criticize you for that");
    M.s("I also made decisions about what to put in the game and what to not");
    M.s("For example, my parents - who were living overseas at the time");
    M.s("I didn't put them in the story, even though they played a role like supporting me financially");
    M.s("I left out several extra tests between test 2 and test 3");
    M.s("So few options that would make this game extra boring and long were sacrificed for the storytelling issues");
    M.s("This game has enough boredom and length already");
    P.s("Huh");
    M.s("Even though you generally had fewer choices than I did-");
    M.s("I also I made you choose the things I wouldn't");
    M.s("And the things I couldn't");
    M.s("So yes... and no");
    M.s("How else would I put it for a game that makes you play my story?");
    P.s("Yeah, what a game");
    M.s("What a game");
    if($.outro_game_over_asked && $.outro_tests_asked) {
    	C.s({
	        "Let's move on": function(msg) {
	            P.s(msg);
	            C.hide();
	            outro_move_on();
	        }
	    });
    } else if($.outro_game_over_asked){
    	C.s({
	        "How did I do on the tests?": function(msg) {
	        	$.outro_tests_asked = true;
	            P.s(msg);
	            C.hide();
	            outro_questions_tests();
	        },
	        "Let's move on": function(msg) {
	            P.s(msg);
	            C.hide();
	            outro_move_on();
	        }
	    });
    } else if($.outro_tests_asked) {
    	C.s({
	        "So this game is over?": function(msg) {
	        	$.outro_game_over_asked = true;
	            P.s(msg);
	            C.hide();
	            outro_questions_game_over();
	        }
	    });
    } else {
    	C.s({
	        "How did I do on the tests?": function(msg) {
	        	$.outro_tests_asked = true;
	            P.s(msg);
	            C.hide();
	            outro_questions_tests();
	        },
	        "So this game is over?": function(msg) {
	        	$.outro_game_over_asked = true;
	            P.s(msg);
	            C.hide();
	            outro_questions_game_over();
	        }
	    });
    }
}

function outro_questions_tests(){
	M.s("You wanna know about THAT?");
	P.s("Yeah. I'm kinda curious");
	P.s("How many did I get right?");
	M.s("If you insist...");
	M.s("Hmmm... Let's see");
	switch($.test_correct){
		case null:
		case 0:
			P.s("Umm...");
			P.s("You got all of them wrong");
			P.s("Zero");
			M.s("What?");
			M.s("Man... I thought I could get lucky...");
			M.s("But I guess not");
			break;
		case 1:
			M.s("You got one right");
			P.s("Man...");
			M.s("You asked for it");
			P.s("I guess you can't get lucky twice");
			break;
		case 2:
			M.s("You got half of them right");
			M.s("That's two");
			P.s("Not bad");
			P.s("I did alright");
			P.s("Right?");
			M.s("Right.");
			break;
		case 3:
			M.s("You got three out of four right");
			M.s("Which is impressive");
			P.s("I nailed it!");
			M.s("Great job");
			P.s("Oh I'm flattered");
			break;
		case 4:
			M.s("You got all four right");
			P.s("Thought so");
			M.s("Are you from a chemistry background? Or...");
			P.s("Come on");
			P.s("For real?");
			M.s("Okay... Nevermind");
			break;
	}
	P.s("But seriously, I can't believe you made me solve chemistry puzzles");
	P.s("What kind of game makes you do that?");
	P.s("You should make a game that players want to play, not a game that you wanna make");
	P.s("I thought that was like, Game Dev 101");
	P.s("Who'd wanna play games with chemistry puzzles except for some wierd geek?");
	M.s("I know right?");
	M.s("I'll take that into consideration when I work on my next project");

	if($.outro_game_over_asked && $.outro_what_happened_asked) {
		C.s({
	        "Let's move on": function(msg) {
	            P.s(msg);
	            C.hide();
	            outro_move_on();
	        }
	    });
    } else if($.outro_game_over_asked){
    	C.s({
	        "Is this what really happened?": function(msg) {
	        	$.outro_what_happened_asked = true;
	            P.s(msg);
	            C.hide();
	            outro_questions_what_happened();
	        },
	        "Let's move on": function(msg) {
	            P.s(msg);
	            C.hide();
	            outro_move_on();
	        }
	    });
    } else if($.outro_what_happened_asked) {
    	C.s({
	        "So this game is over?": function(msg) {
	        	$.outro_game_over_asked = true;
	            P.s(msg);
	            C.hide();
	            outro_questions_game_over();
	        }
	    });
    } else {
    	C.s({
	        "Is this what really happened?": function(msg) {
	        	$.outro_what_happened_asked = true;
	            P.s(msg);
	            C.hide();
	            outro_questions_what_happened();
	        },
	        "So this game is over?": function(msg) {
	        	$.outro_game_over_asked = true;
	            P.s(msg);
	            C.hide();
	            outro_questions_game_over();
	        }
	    });
    }
}

function outro_questions_game_over(){
    P.s("I thought you said this games was about loss, life, love and hope");
    P.s("While you could argue that the story did contain a little bit of all four-");
    P.s("It was mostly about your loss");
    P.s("What happened to life, love and hope?");
    M.s("About that...");
    M.s("You have a few more stories to hear");
    P.s("Woah...");
    P.s("Don't tell me I've only finished a quater of this game");
    P.s("Have I??");
    M.s("No");
    M.s("Don't worry. This game is not THAT long-");
    M.s("It's almost over");

    if($.outro_what_happened_asked && $.outro_tests_asked) {
    	C.s({
	        "Let's move on, then": function(msg) {
	            P.s(msg);
	            C.hide();
	            outro_move_on();
	        }
    	});
    	outro_move_on();
    } else if($.outro_what_happened_asked){
	    M.s("But before we move on, feel free to ask me if there's anything more you wanna ask");
	    	C.s({
	        "How did I do on the tests?": function(msg) {
	        	$.outro_tests_asked = true;
	            P.s(msg);
	            C.hide();
	            outro_questions_tests();
	        },
	        "Let's move on": function(msg) {
	            P.s(msg);
	            C.hide();
	            outro_move_on();
	        }
	    });
    } else if($.outro_tests_asked) {
	    M.s("But before we move on, feel free to ask me if there's anything more you wanna ask");
	    	C.s({
	        "Is this what really happened?": function(msg) {
	        	$.outro_what_happened_asked = true;
	            P.s(msg);
	            C.hide();
	            outro_questions_what_happened();
	        },
	        "Let's move on": function(msg) {
	            P.s(msg);
	            C.hide();
	            outro_move_on();
	        }
	    });
    } else {
	    M.s("But before we move on, feel free to ask me if there's anything more you wanna ask");
	    	C.s({
	        "Is this what really happened?": function(msg) {
	        	$.outro_what_happened_asked = true;
	            P.s(msg);
	            C.hide();
	            outro_questions_what_happened();
	        },
	        "How did I do on the tests?": function(msg) {
	        	$.outro_tests_asked = true;
	            P.s(msg);
	            C.hide();
	            outro_questions_tests();
	        },
	        "Let's move on": function(msg) {
	            P.s(msg);
	            C.hide();
	            outro_move_on();
	        }
	    });
    }
}

function outro_move_on(){
	M.s("Okay");
	M.s("Please, tell me what you wanna hear");
	outro_move_on_choose();
}

function outro_move_on_choose(){
	if($.hope_asked_again){
		if($.life_told && $.love_told){
			C.s({
		        "Tell me about hope": function(msg) {
		            P.s(msg);
		            C.hide();
		            outro_hope();
		        }
		    });
		} else if($.life_told){
			C.s({
		        "Tell me about love": function(msg) {
		            $.love_told = true;
		            P.s(msg);
		            C.hide();
		            outro_love();
		        }
		    });
		} else if($.love_told){
			C.s({
		        "Tell me about life": function(msg) {
		        	$.life_told = true;
		            P.s(msg);
		            C.hide();
		            outro_life();
		        }
		    });
		} else {
			C.s({
		        "Tell me about life": function(msg) {
		        	$.life_told = true;
		            P.s(msg);
		            C.hide();
		            outro_life();
		        },
		        "Tell me about love": function(msg) {
		            $.love_told = true;
		            P.s(msg);
		            C.hide();
		            outro_love();
		        }
		    });
		}
	} else if($.hope_asked) {
		if($.life_told && $.love_told){
			C.s({
		        "Tell me about hope": function(msg) {
		            P.s(msg);
		            C.hide();
		            outro_hope();
		        }
		    });
		} else if($.life_told){
			C.s({
		        "Tell me about love": function(msg) {
		            $.love_told = true;
		            P.s(msg);
		            C.hide();
		            outro_love();
		        },
		        "Tell me about hope": function(msg) {
		            $.hope_asked_again = true;
		            P.s(msg);
		            C.hide();
		            outro_not_hope_again();
		        }
		    });
		} else if($.love_told){
			C.s({
		        "Tell me about life": function(msg) {
		        	$.life_told = true;
		            P.s(msg);
		            C.hide();
		            outro_life();
		        },
		        "Tell me about hope": function(msg) {
		            $.hope_asked_again = true;
		            P.s(msg);
		            C.hide();
		            outro_not_hope_again();
		        }
		    });
		} else {
			C.s({
		        "Tell me about life": function(msg) {
		        	$.life_told = true;
		            P.s(msg);
		            C.hide();
		            outro_life();
		        },
		        "Tell me about love": function(msg) {
		            $.love_told = true;
		            P.s(msg);
		            C.hide();
		            outro_love();
		        },
		        "Tell me about hope": function(msg) {
		            $.hope_asked_again = true;
		            P.s(msg);
		            C.hide();
		            outro_not_hope_again();
		        }
		    });
		}
	} else {
		if($.life_told && $.love_told){
			C.s({
		        "Tell me about hope": function(msg) {
		            P.s(msg);
		            C.hide();
		            outro_hope();
		        }
		    });
		} else if($.life_told){
			C.s({
		        "Tell me about love": function(msg) {
		            $.love_told = true;
		            P.s(msg);
		            C.hide();
		            outro_love();
		        },
		        "Tell me about hope": function(msg) {
		            $.hope_asked = true;
		            P.s(msg);
		            C.hide();
		            outro_not_hope();
		        }
		    });
		} else if($.love_told){
			C.s({
		        "Tell me about life": function(msg) {
		        	$.life_told = true;
		            P.s(msg);
		            C.hide();
		            outro_life();
		        },
		        "Tell me about hope": function(msg) {
		            $.hope_asked = true;
		            P.s(msg);
		            C.hide();
		            outro_not_hope();
		        }
		    });
		} else {
			C.s({
		        "Tell me about life": function(msg) {
		        	$.life_told = true;
		            P.s(msg);
		            C.hide();
		            outro_life();
		        },
		        "Tell me about love": function(msg) {
		            $.love_told = true;
		            P.s(msg);
		            C.hide();
		            outro_love();
		        },
		        "Tell me about hope": function(msg) {
		            $.hope_asked = true;
		            P.s(msg);
		            C.hide();
		            outro_not_hope();
		        }
		    });
		}
	}
}

function outro_life(){
	M.s("About life-");
	M.s("I'll tell you of what happened to me after his death");
	M.s("My parents somehow arranged a cremation for him the day after - grandma must have let them know");
	M.s("His dead body was put in a fruit box");
	M.s("I spent that night with the box next to me");
	P.s("...");
	M.s("It felt very... unreal");
	M.s("The next morning I was picked up by a black sedan");
	M.s("It took me to the cremation site");
	M.s("I followed their procedures");
	M.s("I gave them his body and received his ashes");
	// M.s("That last moment when I handed his body to them");
	// M.s("The moment that I knew would be the last time I see him...");
	// M.s("I remember that moment like a photograph");
	// M.s("He looked like he was the most beautiful doll I've ever seen");
	M.s("After that I went back to my rented room near school instead of my parent's house");
	M.s("Days passed...");
	M.s("And weeks passed");
	M.s("And I just stayed there");
	M.s("Trying to make sense of what had happened...");
	M.s("Going back to my choices and thinking about what would have happened if I chose otherwise...");
	M.s("Criticizing and defending myself...");
	M.s("Knowing that I will never forgive myself for the choices I have made");
	C.s({
        "Don't be so hard on yourself...": function(msg) {
            P.s(msg);
			P.s("That's just... too unforgiving");
			M.s("Time is unforgiving");
			M.s("So are the consequences of our choices");
			M.s("We all learn it the hard way");
			if($.never_learn){
				P.s("Or just never learn it at all...");
				M.s("Sorry?");
				P.s("Nevermind. Please continue");
			} else if($.dont_care) {
				P.s("Or just don't care at all...");
				M.s("Sorry?");
				P.s("Nevermind. Please continue");
			} else {
				P.s("Huh...");
			}
            C.hide();
            outro_life_1();
        },
        "Must have been hard times...": function(msg) {
            P.s(msg);
            M.s("I guess it was");
            C.hide();
            outro_life_1();
        },
        "We all learn it the hard way, don't we?": function(msg) {
            P.s(msg);
            M.s("We sure do");
            C.hide();
            outro_life_1();
        }
    });	
}

function outro_life_1(){
	M.s("After about two months...");
	M.s("I got a call from my old friends");
	M.s("The friends that I didn't have a chance to meet often since I got into college");
	M.s("They wanted to say goodbye to their friends before their enlistment to the military");
	M.s("Conscription still exists in my country, you know");
	M.s("They were getting ready to leave for around two years of military services - away from home, friends and family");
	M.s("I wanted to see them before they leave, too");
	M.s("So I decided to go meet them");
	M.s("Hang out with them");
	M.s("And I did that");
	M.s("And over time I knew I was feeling better");
	M.s("Still guilty - but better");
	M.s("I was able to sleep in my parent's home again");
	M.s("I spent time with my grandma again");
	if($.not_nice_to_gf < 2){
		M.s("My girlfriend returned from LA");
	}
	if(!$.friendship_over){
		M.s("I met my friends from college again");
	}
	P.s("Life went on didn't it?");
	M.s("Life went on");
	M.s("2 years passed since all this happened");
	M.s("I had to get a knee surgery from my childhood injury recently");
	M.s("I had to stay in bed for months so I took off a semester from school");
	M.s("With a lot of time in my hands, I often looked back to two years ago");
	M.s("The dark times... and a story");
	M.s("A story that I've never told anyone about");
	M.s("A story that I've put behind but also keep looking back");
	M.s("So I decided to open up a fake therapy session-");
	M.s("And waited for someone to visit and listen");
	P.s("That person is me?");
	M.s("That person is you");
	M.s("After some retrospection-");
	M.s("While this story of mine doesn't have an end");
	M.s("I wanted to leave something like a milestone");
	M.s("And when I do that I really wanted to tell him... thank you");
	M.s("I'm not sure if you felt the same way but");
	M.s("The most terrible outcome of this story I could possibly think of-");
	M.s("Was returning home and finding out that he had died while I was away for the tests");
	M.s("I already failed to keep his side once. That happening would make it way more than twice");
	M.s("So... thank you for not letting that happen");
	M.s("Thank you for giving me some time to say goodbye");
	M.s("Thank you for giving me... your death");
	M.s("Thank you for reminding me of the simple wisdom - that whatever you gain, you must lose one day");
	C.s({
        "What about the experiences?": function(msg) {
            P.s(msg);
            P.s("I don't think we just lose everything we gain");
            P.s("Experiences remain and affect us on how we behave");
            P.s("They kind of makes us who we are");
            M.s("Hmm");
            M.s("You do have a point");
            M.s("Speaking of which - I think that's kind of why I made this game");
            M.s("For the experiences");
            M.s("I mean, how often do you get to be forced to choose somebody else's life-choices?");
            P.s("Um-hum");
            Q.wait(1000);
            C.hide();
            outro_move_on_choose();
        },
        "What about the feelings?": function(msg) {
            P.s(msg);
            P.s("Even if we eventually lose everything we gain");
            P.s("The feelings we go through - happiness, sadness, pain, love...");
            P.s("I'd say they remain");
            P.s("And they kind of makes us who we are");
            M.s("Hmm");
            M.s("You do have a point");
            M.s("Speaking of which - I think that's kind of why I made this game");
            M.s("For the feelings");
            M.s("I mean, how often do you get to be forced to choose somebody else's life-choices?");
            P.s("Um-hum");
            Q.wait(1000);
            C.hide();
            outro_move_on_choose();
        },
        "How touching...": function(msg) {
            P.s(msg);
            P.s("That's quite a life lesson you got there");
            M.s("Um-hum");
            M.s("Speaking of lessons - think that's kind of why I made this game");
            M.s("I mean, how often do you get to be forced to choose somebody else's life-choices?");
            P.s("Yeah. You really don't");
            Q.wait(1000);
            C.hide();
            outro_move_on_choose();
        }
    });
}

function outro_love(){
	M.s("For this one-");
	M.s("Instead of telling you about love itself, I'll tell you about how I met him");
	M.s("You may have been already told, but I only spent 2 years of life with him");
	if($.rude_to_vet){
		P.s("I don't remember having been told");
		M.s("That's okay. Someone could have told you if you had made different choices");
	} else {
		P.s("Yeah. The vet said something about it");
	}
	M.s("I was a highschool senior, and I was studying for college entrance test in the school library in a weekend");
	P.s("Tests again?");
	P.s("Why is your life so full of tests?");
	M.s("I'd love to know why");
	M.s("Anyway, I took a break and went out to drink some water from a purifier");
	M.s("Then I saw a dog climbing down the stairs from the roof floor");
	M.s("I still don't know how it got in to library building in the first place");
	P.s("And he climbed up the stairs to roof floor?");
	P.s("How high was the builing?");
	M.s("It was like, 5 stories tall");
	P.s("That's a mystery...");
	M.s("I didn't know what to do so I told a friend about him");
	M.s("He didn't know what to do so together we asked the adults");
	M.s("And they didn't know either");
	M.s("So me and my friend took him outside school");
	M.s("We tried everywhere - a police box, animal hospital");
	M.s("Nobody seemed to know what should be done about him");
	M.s("The vet told me that he was an unregistered dog, and that by the looks of it he was probably abandoned");
	M.s("I searched if there's anything like an animal shelter or animal protect facility that exists near me");
	M.s("And I ended up calling some government organization - a ward office - for help");
	M.s("I was really busy preparing for college entrance so I knew I wouldn't be able to take care of him");
	M.s("They said they'll come pick him up later that night, so in the meantime I took him home and gave him something to eat");
	M.s("Later when they came to pick him up with a truck");
	M.s("I carried him downstairs and they told me to put him in a really small, dirty looking cage");
	M.s("I was kind of scared of what would happen to him... but I tried to do as they said");
	M.s("But I couldn't");
	M.s("When I tried to force him into the cage he just held on to the ground with such huge amount of force-");
	M.s("That two male adults tried to push and pull him in but he didn't even budge");
	P.s("Was he big?");
	M.s("He was medium-sized");
	M.s("He was around 14kg when he was healthy");
	M.s("He was much skinnier by the time. I still wonder where all that power came from");
	P.s("So he chose you as his companion!");
	M.s("You could interpret it that way");
	M.s("But now I know he's just awfully afraid of small containers. He'd never let anyone make him get inside one of those");
	M.s("Anyway...");
	M.s("I just couldn't watch him getting forced in, with all that resistance");
	M.s("So I said I'll just take care of him");
	M.s("I asked my parents about him and they said they'll help me take care of him while they're home");
	M.s("He had been my family since then");
	M.s("And in less than 2 years he became something important in my life");
	M.s("Love can build from such a coincidence don't you think?");
	//drink tea or sth
	P.s("Hmm....");
	Q.wait(1000);
	M.s("The process of losing him");
	M.s("Made me realise I loved him more than I thought I did");
	M.s("We all suck at losing something precious to us right?");
	M.s("To put it down in a sentence-");
	M.s("About how much I loved him");
	M.s("And how much I miss him");
	M.s("I think this saying goes really well");
	M.s("If love could have saved him, he would have lived forever");
	Q.wait(1000);
	outro_move_on_choose();
}

function outro_not_hope(){
	M.s("Hmp");
	M.s("About hope...");
	M.s("Although I did make an option so you could choose, I'll have to ask you to save it for the last");
	P.s("What?");
	M.s("You'll get it eventually");
	M.s("Please choose other options first - and then hope");
	P.s("That's kinda wierd but...");
	P.s("Okay");
	outro_move_on_choose();
}

function outro_not_hope_again(){
	M.s("You went for the hope again?");
	M.s("I asked you to save it for the last");
	M.s("It's important for the storytelling");
	M.s("Was it just make a mistake?");
	M.s("Or did you wanna see how the system works...?");
	P.s("I just clicked it because you gave me an option");
	P.s("If it was so important why did you leave an option for it?");
	M.s("I thought you'd listen");
	M.s("But fine. I'll just take it away from you now");
	outro_move_on_choose();
}

function outro_hope(){
	M.s("Finally, for the hope");
	M.s("Well...");
	Q.wait(500);
	M.s("He didn't come back to life");
	Q.wait(1000);
	P.s("Uhhh...");
	P.s("That's hope?");
	M.s("No, that's the not-hope");
	M.s("And this not-hope is important because");
	M.s("Some things that won't happen");
	M.s("Just will not happen");
	M.s("I could cry hundreds of night in grief and pray thousands of days wishing that none of this would have happened");
	M.s("But you can't go back to fix what already had happened");
	P.s("Er...");
	P.s("I think when most people do that - crying or praying");
	P.s("I know it's hard to take in and all but");
	P.s("Don't they usually know what's impossible's just impossible?");
	M.s("You're right");
	M.s("But here's what I think");
	M.s("Everyone handle grief in different ways");
	M.s("But I think denial and compensation are essential parts when it comes to coping with grief");
	M.s("I wanna go back to the time when it happened-");
	M.s("If that's impossible, I just wanna see him again");
	M.s("Just for minutes or seconds - I wanna see him again");
	M.s("If that's impossible too, tell me he's gone somewhere over the rainbows and clouds");
	M.s("Somewhere heavenly - away from the all the pain and agony");
	M.s("Tell me I'll see him again when the time comes...");
	M.s("We all settle at one point or another");
	M.s("Finding out the not-hopes");
	M.s("And finding out the point to settle that make sense to us somehow");
	M.s("I think it's an important part of recovering");
	M.s("And it takes time");
	P.s("So basically what you're saying is... that wounds heal with time?");
	P.s("And that's the hope you found?");
	M.s("Not exactly");
	M.s("I do think that the wounds heal with time for most people");
	M.s("The rate they do might vary but in my experience, they all did");
	M.s("But saying that to a person going through a grief...");
	M.s("I don't think it gives them much hope");
	M.s("I think it's kind of similar to saying that eating makes hunger go away to someone who's starving");
	M.s("While it's true - it doesn't really help");
	M.s("So I thought about it");
	M.s("I thought about... if I can go back in time and tell something to myself from two years ago");
	M.s("Say something to make him feel better and give him hope");
	M.s("What could I say?");
	M.s("What would I liked to have heard?");
	Q.wait(500);
	M.s("I still haven't found the answer");
	M.s("But here's what I'm gonna say anyways");
	Q.do(function(){
		resources.room.sound.stop();
		resources.twilight.sound.stop();
	});
	Q.wait(3000);
	M.s("I am here");
	Q.wait(3000);
	M.s("Dear player");
	M.s("I am here");
	M.s("You are here as well");
	M.s("We've never been through what each other have been through");
	M.s("But as you played through my game");
	M.s("Maybe, maybe this made you feel what I felt");
	M.s("And as you tried to understand me...");
	M.s("Maybe there's someone who's willing understand your pain, too");
	M.s("Someone... who you haven't let try yet");
	Q.wait(2000);
	M.s("You know by now that I'm not a therapist");
	M.s("I'm not even close - counselor, psychiatrist - none of those");
	M.s("I'm just someone who's bad at listening and even worse at talking");
	M.s("If this made you feel that talking to someone could make you feel better, please don't hesitate to get some real help");
	Q.wait(2000);
	M.s("Thank you for playing my game");
	Q.wait(1000);
	Q.do(function(){
		resources.door_open.sound.play();
	});
	Q.wait(1000);
	Q.do(function(){
		resources.door_close.sound.play();
	});
	Q.do(end_outro);
}

function end_outro(){
	Q.wait(2000);
	Q.do(clearMsg);
	// Q.do(function(){
	// 	blackout.visible = true;
	// });
}