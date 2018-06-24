//timeline = last
//Now you've told me about loss
//tell me about life, love, hope
//life: what happened after?
//love: how I met him. And How It didn't matter
//hope: about wisdom and to heal you and to be healed..
//I know that I won't forgive myself
//consequences of your choices are very unforgiving, nor is time 
//If love could could have saved him
//he would have lived forever
//You had fewer options 
//I made you choose the things I couldn't
//I also made you choose the things I wouldn't
//(replay) You're not special

async function start_metro3(){	

	await sleep(3000);
	blackout.visible = false;

	M.s("He passed away 2 days after that");
	
	C.s({
        "[Sob]": function(msg) {
            P.s(msg);
            C.hide();
        },
        "": function(msg) {
            P.s(msg);
            C.hide();
        },
        "": function(msg) {
            P.s(msg);
            C.hide();
        }
    });
}