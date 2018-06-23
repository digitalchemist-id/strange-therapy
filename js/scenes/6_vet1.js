//timeline = 6 June 12th Sun
//I was full of both hope and desperation
//he seemed really okay and vet told me first step for him recover was to eat
//So I thought that could happen and I tried...

async function start_vet1() {
	
	//loader
	await sleep(1000);
	blackout.visible = false;
	
	P.t("He...");
	P.t("He doesn't seem too bad");
	P.t("What a relief...");
	P.t("I was so worried...");
	Q.wait(1000);
	V.s("You're...");
	V.s("He's your dog right?");
	P.s("Yes");
	P.s("I've come to pick him up");
	V.s("Your grandma said you were busy");
	V.s("Yet you're here so early");
	V.s("Did you come because you were so worried?");
	C.s({
        "That's none of your business": function(msg) {
            $.rude_to_vet = true;
            P.s(msg);
            V.s("Hm");
            V.s("Okay...");
            Q.wait(1000);
            V.s("Now about your dog...");
            C.hide();
            vet1_about()
        },
        "Is he okay?": function(msg) {
            P.s(msg);
            C.hide();
            vet1_about()
        },
        "I just had to come": function(msg) {
            P.s(msg);
            V.s("I understand");
            Q.wait(1000);
            V.s("About him...");
            C.hide();
            vet1_about()
        }
    });
}

function vet1_about(){
	V.s("He had lost a lot of weight");
	V.s("You heard that his liver is... not good right?");
	P.s("Dysfunctional?");
	V.s("Yes");
	V.s("If you see here...");
	V.s("Do you see that his sclera- the white part if his eyes");
	V.s("Do you see how it's colored?");
	V.s("Like yellow");
	P.s("...");
	P.s("I see it");
	P.t("How...");
	P.t("I could I not see things like that?");
	V.s("It got severe");
	V.s("He wasn't like this Friday");
	P.s("...");
	V.s("If you take a close look beneath his fur...");
	V.s("Like this...");
	V.s("All yellow");
	V.s("Do you see it?");
	P.t("Oh god...");
	V.s("His gums too");
	V.s("This is called jaundice");
	V.s("It's a very common symptom of liver dysfunction");
	C.s({
        "What causes the dysfunction...?": function(msg) {
            P.s(msg);
            V.s("There can be many causes");
            V.s("Could be aging");
            V.s("Could be Inflammation of organs");
            V.s("Could be presense of stones...");
            V.s("Worst case, it could be tumor");
            V.s("...A cancer");
            P.t("A cancer");
            P.t("...");
            P.t("Is it worse than aging?");
            C.hide();
            vet1_about_2();
        },
        "Can he be...": function(msg) {
            P.s(msg);
            Q.wait(1000);
            V.s("Cured?");
            P.s("Yes");
            V.s("Well...");
            V.s("He can");
            P.t("Whew...");
            C.hide();
            vet1_about_2();
        },
        "...": function(msg) {
            P.s(msg);
            C.hide();
            vet1_about_2();
        }
    });
}

function vet1_about_2(){
    V.s("Usually what causes jaundice for dogs");
    V.s("Can be eliminated through a surgery");
    V.s("He has to go through X-rays, ultrasounds and other stuff like that to find out what exactly causes his symptom");
    V.s("With your consent, that is");
    V.s("But right now...");
    V.s("There are other issues");
    P.s("What kind of other issues?");
    V.s("The reason he had to be hospitalized");
    V.s("is because he was dehydrated and malnourished");
    V.s("He was injected with Ringer's solution overnight");
    V.s("He's better now");
    V.s("But he's currently very weak");
    V.s("He's lost a lot of weight as I told you");
    V.s("And he's also old");
    V.s("His body won't be able to handle any kind of treatment or surgery at this state");
    V.s("He has to eat and regain some weight");
    V.s("That's the first step");
    //he takes out a can and feeds him
    //P.s("Oh thank god he's eating");
    //V.s("...");
    V.s("It'll be hard for him to digest dry dog food");
    V.s("I'll give you a few of this can");
    V.s("You need to keep this refrigerated");
    Q.wait(1000);
    V.s("Feed him 4 times a day");
    V.s("Soak his dog food with water for about half an hour");
    V.s("Mix two spoonful of this can with swollen dog food, and microwave the mixture before you feed him");
    V.s("And make sure that he get to drink often");
    V.s("Did you get that?");
    P.s("I got that");
    P.s("I can do that");
    V.s("Do you have any questions?");

    C.s({
        "He's gonna be okay right?": function(msg) {
        	$.desperate = true;
            P.s(msg);
            P.s("He's gonna eat and");
            P.s("Get surgery and all that...");
            P.s("Then he's gonna be healthy again right?");
            V.s("We can only hope for the best");
            V.s("It is possible that he refuses food");
            V.s("Keep giving him food even if he does that");
            Q.wait(1000);
            V.s("He's gonna be alright");
            V.s("Just think about getting him to eat properly");
            V.s("Your role is also important in his curing");
            V.s("Staying positive while taking care of him is the best you can do for now");

            C.hide();
            end_vet1();
        },
        "How much will... treatment cost?": function(msg) {
        	$.realistic = true;
            P.s(msg);
            V.s("X-ray and ultrasound each cost about");
            V.s("      ");
            V.s("Surgery cost will vary");
            V.s("from      to      ");
            P.s("...");
            V.s("Hey");
            V.s("All this potential cost makes you worry, I understand that...");
            V.s("But only few worst cases require all those procedures");
            V.s("Instead of worrying, just focus on getting him fed for now");
            V.s("If you can do that properly, things can turn out to be much better than expected");
            V.s("Your role of staying positive is also very important in his curing");
            P.s("I understand");
            C.hide();
            end_vet1();
        },
        "No. I'm fine": function(msg) {
            P.s(msg);
            C.hide();
            end_vet1();
        }
    });
}



function end_vet1(){
	Q.wait(2000);
	Q.do(clearMsg);
	Q.do(start_home2);
	Q.do(function(){
		blackout.visible = true;
	});
}