var storyContent = ﻿{"inkVersion":17,"root":[["\n","\n","\n","\n","^<blockquote><i>NOTE: This is a quick test for the script that runs the game's introduction.</i></blockquote>","\n","^<blockquote><i>Two nude statues kneel before you with outstretched hands, one male and one female. Which would you choose?</i></blockquote>","\n",[["ev","str","^Touch the male statue","/str",{"VAR?":"player_name"},"str","^boy","/str","!=","/ev",{"*":".^.c","flg":5},{"c":["^ You touch the male statue.","\n","\n","^<blockquote><i>The male statue disappears and you now have hands with thick masculine fingers. The missing statue's hands.</i></blockquote>","\n",["G>",["ev",{"VAR?":"player_name"},"str","^none","/str","==","/ev",{"->":".^.b","c":true},{"b":["^<blockquote><i>The door at the end of the hall cracks open...</i></blockquote>","\n",{"->":".^.^.^.3"},null]}],[{"->":".^.b"},{"b":["^<blockquote><i>The female statue reappears.</i></blockquote>","\n",{"->":".^.^.^.3"},null]}],"nop","G<",null],"\n","ev","str","^boy","/str","/ev",{"temp=":"player_name","re":true},{"->":".^.^.^"},{"->":"0.g-0"},{"#f":7}]}],["ev","str","^Touch the female statue","/str",{"VAR?":"player_name"},"str","^girl","/str","!=","/ev",{"*":".^.c","flg":5},{"c":["^ Female","\n","\n","^<blockquote><i>The female statue disappears and you now have hands with slender feminine fingers. The missing statue's hands.</i></blockquote>","\n",["G>",["ev",{"VAR?":"player_name"},"str","^none","/str","==","/ev",{"->":".^.b","c":true},{"b":["^<blockquote><i>The door at the end of the hall cracks open...</i></blockquote>","\n",{"->":".^.^.^.3"},null]}],[{"->":".^.b"},{"b":["^<blockquote><i>The male statue reappears.</i></blockquote>","\n",{"->":".^.^.^.3"},null]}],"nop","G<",null],"\n","ev","str","^girl","/str","/ev",{"temp=":"player_name","re":true},{"->":".^.^.^"},{"->":"0.g-0"},{"#f":7}]}],["ev","str","^Open the door.","/str",{"VAR?":"player_name"},"str","^none","/str","!=","/ev",{"*":".^.c","flg":5},{"c":["^ You open the door.","\n","\n",{"->":"0.g-0"},{"#f":7}]}],{"#f":7,"#n":"options"}],{"g-0":["^<blockquote><i>You have just stepped into a darkened room with a storm thundering outside. Lighting flashes and you see a devilish figure locked in a sexual exchange with two other figures, moaning filling your ears. The lightning flashes again, filling your eyes with a new, this time, tortuous exchange. Again, it flashes, and you find those same figures in a new embrace - each scene wildly different from one another. Without warning, the storm abates, the lightning ceases, and before you stands a Demoness.</i></blockquote>","\n","^<blockquote><i>She looks at you for a moment and then challenges you...</i></blockquote>","\n",["ev","str","^Introduction","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":"demo_intro"},"\n",{"#f":7}]}],{"#f":7}]}],"done",{"set_kink":[{"temp=":"state"},{"temp=":"kink"},["G>",["ev",{"VAR?":"state"},{"VAR?":"no"},"==","/ev",{"->":".^.b","c":true},{"b":["ev",{"VAR?":"kinks_no"},{"VAR?":"kink"},"+",{"temp=":"kinks_no","re":true},"/ev","ev",{"VAR?":"kinks_maybe"},{"VAR?":"kink"},"-",{"temp=":"kinks_maybe","re":true},"/ev","ev",{"VAR?":"kinks_yes"},{"VAR?":"kink"},"-",{"temp=":"kinks_yes","re":true},"/ev",{"->":".^.^.^.4"},null]}],["ev",{"VAR?":"state"},{"VAR?":"maybe"},"==","/ev",{"->":".^.b","c":true},{"b":["ev",{"VAR?":"kinks_no"},{"VAR?":"kink"},"-",{"temp=":"kinks_no","re":true},"/ev","ev",{"VAR?":"kinks_maybe"},{"VAR?":"kink"},"+",{"temp=":"kinks_maybe","re":true},"/ev","ev",{"VAR?":"kinks_yes"},{"VAR?":"kink"},"-",{"temp=":"kinks_yes","re":true},"/ev",{"->":".^.^.^.4"},null]}],["ev",{"VAR?":"state"},{"VAR?":"yes"},"==","/ev",{"->":".^.b","c":true},{"b":["ev",{"VAR?":"kinks_no"},{"VAR?":"kink"},"-",{"temp=":"kinks_no","re":true},"/ev","ev",{"VAR?":"kinks_maybe"},{"VAR?":"kink"},"-",{"temp=":"kinks_maybe","re":true},"/ev","ev",{"VAR?":"kinks_yes"},{"VAR?":"kink"},"+",{"temp=":"kinks_yes","re":true},"/ev",{"->":".^.^.^.4"},null]}],"nop","G<",null],"\n",{"#f":3}],"isDebug":["ev",0,"/ev","~ret",{"#f":3}],"demo_intro":[["^/scene bedroom.flash1","\n","^/wait 1","\n","^/scene bedroom.flash2","\n","^/wait 1","\n","^/scene bedroombroken.flash3","\n","^/wait 1.5","\n",["^/scene bedroom.intro","\n","^/lock move-approach","\n","^/character goddess","\n","^/perform fake_annoyed","\n",["^Oh... How rude. ",{"#":"100"},"\n","^And I was having so much fun. ",{"#":"101"},"\n","^Ah, well... ",{"#":"102"},"\n","^/perform amused","\n","^How did you get in here? ",{"#":"01"},"\n","^/wait","\n","^Did Mistress Yuki-Onna let you in? ",{"#":"02"},"\n","^/perform unhappy","\n",[["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["^ I've told that girl not to interrupt me",{"#":"03"},"\n","\n","^when I'm playing with my toys. ",{"#":"04"},"\n",{"->":"demo_intro.0.g-1"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["^ No? Another curious guest, then.",{"#":"05"},"\n","\n",{"->":"demo_intro.0.g-1"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":[{"#":"06"},"\n","\n",["G>",["ev","visit",5,"%","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"nop",{"s0":["pop","^It's a simple question. Nod your head for yes. ",{"#":"07"},"\n","^Shake your head for no. ",{"#":"08"},"\n",{"->":".^.^.35"},null],"s1":["pop","^I asked you a question. ",{"#":"09"},"\n",{"->":".^.^.35"},null],"s2":["pop","^Hurry up. I'm waiting. ",{"#":"10"},"\n",{"->":".^.^.35"},null],"s3":["pop","^I don't like it when people make me wait. ",{"#":"11"},"\n",{"->":".^.^.35"},null],"s4":["pop","^What makes you think you can ignore me? Answer me. ",{"#":"12"},"\n",{"->":".^.^.35"},null],"#f":5}],"G<",null],"\n",["G>",["ev","visit",4,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^Did my Yuki let you in? ",{"#":"13"},"\n",{"->":".^.^.29"},null],"s1":["pop","^Did that naughty little maid let you in? ",{"#":"14"},"\n",{"->":".^.^.29"},null],"s2":["pop","^Did a dark-haired maid bring you to me? ",{"#":"15"},"\n",{"->":".^.^.29"},null],"s3":["pop","^Yuki-Onna is disobeying me again. She let you in, didn't she? ",{"#":"16"},"\n",{"->":".^.^.29"},null],"#f":5}],"G<",null],"\n",{"->":".^.^.^"},{"->":"demo_intro.0.g-1"},{"#f":7}]}],["ev","str","^distracted","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->t->":"demo_intro.PayAttention"},{"->":".^.^.^.2.c"},"\n",{"->":"demo_intro.0.g-1"},{"#f":7}]}],{"#f":7,"#n":"ask_entry"}],{"#f":7,"#n":"g-0"}],{"#f":7,"#n":"jump"}],{"g-1":["^/wait","\n","^/perform unhappy","\n","^Well, you can't stay here. ",{"#":"17"},"\n","^Only the truly exceptional may stay in my presence. ",{"#":"18"},"\n","^And you are <i>obviously</i> not exceptional. ",{"#":"106"},"\n","^Are you?",{"#":"107"},"\n",[["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^/perform laugh","\n","^Oh how absolutely delusional you are!","\n","^You are no where near worthy.",{"#":"22"},"\n",{"->":".^.^.^.^.^.g-2"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Now, that is a very honest answer.",{"#":"23"},"\n","^Perhaps I will give you a chance to prove your worth.","\n",{"->":".^.^.^.^.^.g-2"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":".^.^.^.^.^.g-2.ask_exceptional_again"},"\n",{"->":".^.^.^.^.^.g-2"},{"#f":7}]}],["ev","str","^distracted!","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->t->":"demo_intro.PayAttention"},{"->":".^.^.^.^.^.g-2.ask_exceptional_again"},"\n",{"->":".^.^.^.^.^.g-2"},{"#f":7}]}],{"#f":7,"#n":"ask_exceptional"}],{"#f":7}],"g-2":[{"->":".^.ask_exceptional_again.ask_exceptional_continue"},["^Do you think you're exceptional?","\n",{"->":".^.^.^.g-1.ask_exceptional"},["^/perform amused","\n","^/wait","\n","^I bet that turned you on. Didn't it?<br/>Spying on me and my precious pets.","\n",[["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Of course it did.","\n","^I bet you'd like to see more of that, wouldn't you?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Too bad. You haven't earned that privilege yet.","\n",{"->":"demo_intro.0.ask_where"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^No? Well, that's disappointing.","\n",{"->":"demo_intro.0.ask_where"},{"#f":7}]}],{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^No? Well, that's disappointing.","\n","^I don't think you're going to be much fun at all.","\n",{"->":"demo_intro.0.ask_where"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Spying on me turned you on, didn't it?","\n",{"->":".^.^.^"},{"->":"demo_intro.0.ask_where"},{"#f":7}]}],["ev","str","^distracted!","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->t->":"demo_intro.PayAttention"},{"->":"demo_intro.0.g-1.ask_exceptional"},"\n","^/perform bored","\n","^/wait","\n",{"->":"demo_intro.0.ask_where"},{"#f":7}]}],{"#f":7,"#n":"ask_spying"}],{"#f":7,"#n":"ask_exceptional_continue"}],{"#f":7,"#n":"ask_exceptional_again"}],{"#f":7}],"ask_where":["^I bet you have no idea where you are, do you?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^/perform laugh","\n","^You think you know where you are?","\n","^You have no clue.","\n",{"->":".^.^.^.^.g-3"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^/perform agreement","\n","^Of course you don't.","\n","^You're just a tiny little mouse stuck in a maze.","\n","^You may never find your way out again.","\n",{"->":".^.^.^.^.g-3"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^/perform annoyed","\n","^Well... do you have any idea where you are?","\n",{"->":".^.^.^"},{"->":".^.^.^.^.g-3"},{"#f":7}]}],["ev","str","^distracted!","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->t->":"demo_intro.PayAttention"},{"->":".^.^.^"},"\n",{"->":".^.^.^.^.g-3"},{"#f":7}]}],{"#f":7}],"g-3":["^This is no ordinary house.","\n","^And I am no ordinary woman.","\n",["^/ wait","\n","^Even so. You're here now.","\n","^And that means you'll be staying for a while.","\n",["^That means I'll have to give you your new name.","\n","^Would you like that?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^/perform pleased","\n","^Well, well. I must say I'm pleased.","\n","^I think we are off to a good start.","\n","^Don't you?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Keep this up and I might just take an interest in you.","\n",{"->":"demo_intro.0.g-5"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^/perform annoyed","\n","^Don't pretend to toy with me.","\n","^I am not amused.","\n",{"->":"demo_intro.0.g-5"},{"#f":7}]}],{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^/perform amused","\n","^Too bad.","\n","^Whatever name you had before is gone.","\n",{"->":"demo_intro.0.g-5"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Cat got your tongue? ",{"#":"26"},"\n","^That's alright. For now. ",{"#":"27"},"\n",{"->":"demo_intro.0.g-5"},{"#f":7}]}],["ev","str","^distracted!","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->t->":"demo_intro.PayAttention"},{"->":"demo_intro.0.ask_where"},"\n",{"->":"demo_intro.0.g-5"},{"#f":7}]}],{"#f":7,"#n":"give_name"}],{"#f":7,"#n":"g-4"}],{"#f":7}],"g-5":[["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^ will do. ",{"#":"28"},"\n","^I expect you to respond to ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^ from now on. ",{"#":"29"},"\n","^Until you earn a new name, that is. ",{"#":"30"},"\n","^Do you understand? ",{"#":"31"},"\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->t->":"demo_intro.GoodJob"},"\n","^I am pleased you understand. ",{"#":"32"},"\n",{"->":".^.^.^.^.g-6"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Let's try this again. Your name is now ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^. ",{"#":"33"},"\n","^Everyone who meets you will refer to you as ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^. ",{"#":"34"},"\n","^One day, if you're good enough, you may earn a new name. ",{"#":"35"},"\n","^But for now, your name is ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^. ",{"#":"36"},"\n",{"->":".^.^.^.^.g-6"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Well, perhaps you're a little overwhelmed. ",{"#":"37"},"\n","^That's to be expected. ",{"#":"38"},"\n","^Just remember your name is ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^  ",{"#":"39"},"\n","^until I decide to change it. ",{"#":"40"},"\n",{"->":".^.^.^.^.g-6"},{"#f":7}]}],{"#f":7}],"g-6":["^/wait","\n","^I'm going to have to send you away soon. ",{"#":"41"},"\n","^But first, let me have a good look at you. ",{"#":"42"},"\n",["^/perform amused","\n","^/unlock move-approach","\n","^Come here. ",{"#":"43"},"\n",["ev","str","^move","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->t->":"demo_intro.GoodJob"},"\n",{"->":".^.^.^.^.^.g-7"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["^ Don't be shy.",{"#":"44"},"\n",{"->":".^.^.^"},"\n",{"->":".^.^.^.^.^.g-7"},{"#f":7}]}],["ev","str","^distracted!","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->t->":"demo_intro.PayAttention"},{"->":".^.^.^"},"\n",{"->":".^.^.^.^.^.g-7"},{"#f":7}]}],{"#f":7,"#n":"inspection"}],{"#f":7}],"g-7":["^I'm always curious about our new guests. ",{"#":"45"},"\n","^I rarely take the time to inspect them personally ",{"#":"46"},"\n","^when they first arrive. ",{"#":"47"},"\n","^This is a bit of an unexpected treat. ",{"#":"48"},"\n","^You don't mind, do you? ",{"#":"49"},"\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["^ How unfortunate.",{"#":"50"},"\n","\n","^Honestly, I don't even know why I bother asking. ",{"#":"51"},"\n",{"->":".^.^.^.^.stand_straight"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["^ Mmm... I think someone might be enjoying this.",{"#":"52"},"\n","\n",{"->":".^.^.^.^.stand_straight"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["^ That's alright. It's not like you have a choice anyway.",{"#":"53"},"\n","\n",{"->":".^.^.^.^.stand_straight"},{"#f":7}]}],["ev","str","^distracted!","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->t->":"demo_intro.PayAttention"},{"->":".^.^.^.^.stand_straight"},"\n",{"->":".^.^.^.^.stand_straight"},{"#f":7}]}],{"#f":7}],"stand_straight":[["G>",["ev","visit",3,"%","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^Stand up straight. ",{"#":"54"},"\n",{"->":".^.^.23"},null],"s1":["pop","^Come on. Lift that head a bit for me. ",{"#":"55"},"\n",{"->":".^.^.23"},null],"s2":["pop","^Chin up, little one. Let me inspect you. ",{"#":"56"},"\n",{"->":".^.^.23"},null],"#f":5}],"G<",null],"\n",["ev","str","^pose:raised_chin","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n",{"->":".^.^.^.^.circle_player"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":".^.^.^"},"\n",{"->":".^.^.^.^.circle_player"},{"#f":7}]}],{"#f":7}],"circle_player":[{"->t->":".^.^.^.GoodJob"},"^/perform circle_player","\n","^That's it. ",{"#":"57"},"\n","^Push your shoulders back and arch that lovely spine  ",{"#":"58"},"\n","^Stick that pretty little bottom out. ",{"#":"59"},"\n","^/wait","\n","^Mmmmm... so much delicious flesh to work with. ",{"#":"60"},"\n","^Strong bones and muscles. ",{"#":"61"},"\n","^You'll need to be flexible, as well. ",{"#":"62"},"\n","^Oh yes... there is much here we can work with. ",{"#":"63"},"\n","^/wait for:circle_player","\n","^/perform pleased","\n",["^That's enough. ",{"#":"64"},"\n","^You might just prove useful one day, ",{"#":"65"},"\n","^but you'll need much more training first. ",{"#":"66"},"\n","^Off to Mistress Yuki-Onna with you. ",{"#":"67"},"\n","^I'm sure she can show you the ropes, so to speak. ",{"#":"68"},"\n","^/perform snap_fingers ",{"#":"69"},"\n","^/scene void","\n","^/character domina-echo-voice","\n","^Bye for now, ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^. ",{"#":"70"},"\n","^/wait 2","\n",{"->":"demo_tutorial"},{"#f":7,"#n":"g-8"}],{"#f":7}]}],{"GoodJob":[["G>",["ev","visit",4,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^There's a good ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^. ",{"#":"71"},"\n",{"->":".^.^.29"},null],"s1":["pop","^What a good little ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^. ",{"#":"72"},"\n",{"->":".^.^.29"},null],"s2":["pop","^That's my ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^. ",{"#":"73"},"\n",{"->":".^.^.29"},null],"s3":["pop","^Aren't you the sweetest little thing. ",{"#":"74"},"\n",{"->":".^.^.29"},null],"#f":5}],"G<",null],"\n","ev","void","/ev","->->",{"#f":3}],"PayAttention":[[["G>",["ev","visit",5,"%","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"nop",{"s0":["pop","^Look at me when I'm speaking to you, ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^. ",{"#":"75"},"\n",{"->":".^.^.35"},null],"s1":["pop","^I expect your eyes on me at all times, ",{"#":"76"},"\n","^unless I tell you otherwise. ",{"#":"77"},"\n",{"->":".^.^.35"},null],"s2":["pop","^Did I give you permission to look elsewhere? ",{"#":"78"},"\n",{"->":".^.^.35"},null],"s3":["pop","^Didn't anyone ever teach you to look at people ",{"#":"79"},"\n","^when they're speaking to you? ",{"#":"80"},"\n",{"->":".^.^.35"},null],"s4":["pop","^Pay attention to me when you're in my presence. ",{"#":"81"},"\n",{"->":".^.^.35"},null],"#f":5}],"G<",null],"\n",["ev","str","^pay-attention","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n",{"->":".^.^.^.g-0"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":".^.^.^.^"},"\n",{"->":".^.^.^.g-0"},{"#f":7}]}],{"g-0":[["G>",["ev","visit",4,"%","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^Where was I? Oh yes... ",{"#":"82"},"\n",{"->":".^.^.29"},null],"s1":["pop","^That's better. Let's continue. ",{"#":"83"},"\n",{"->":".^.^.29"},null],"s2":["pop","^Good ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^. ",{"#":"84"},"\n",{"->":".^.^.29"},null],"s3":["pop","^Let's try that again. ",{"#":"85"},"\n",{"->":".^.^.29"},null],"#f":5}],"G<",null],"\n","ev","void","/ev","->->",{"#f":7}]}],{"#f":3}],"#f":3}],"demo_tutorial":[["^/scene foyer","\n","^/character yuki","\n","^/equip feather_duster","\n",["G>","ev",{"VAR?":"web"},"/ev",[{"->":".^.b","c":true},{"b":["^<blockquote><i>You are disoriented for a moment as everything turns black and the scene around you changes.</i></blockquote>","\n","^<blockquote><i>You stand inside a large Victorian foyer with a sweeping staircase and several sets of doors leading off of it. The room is fairly well lit, but all of the doors are shrouded in shadows. Before you stands a lithe, young woman dressed in a maid's uniform. Beaming a bright smile, she greets you...</i></blockquote>","\n",["ev","str","^Tutorial","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n",{"->":".^.^.^.^.^.^.start_tutorial"},{"#f":7}]}],{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{"b":[{"->":".^.^.^.^.start_tutorial"},{"->":".^.^.^.6"},null]}],"nop","G<",null],"\n",{"start_tutorial":["^Oh! There you are!","\n","^/perform bounces","\n","^I’ve been waiting for you to get here.","\n","^My name is Mistress Yuki-Onna.","\n","^/perform giggles","\n","^It’s my job to make sure all new arrivals are processed","\n","^and taught the basics of how to behave","\n","^while you’re a guest in Goddess’s home.","\n","^/wait","\n",["^Do you know why you're here?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^I don't see how you'd know that already.","\n","^Someone must have told you.","\n","^/perform sighs","\n","^Well, let's go through the basics at least,","\n","^to make sure you have the right information.","\n","^/wait","\n",{"->":".^.^.^.^.^.house_rules"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Well, duh!","\n","^You're not supposed to know anything.","\n","^That's the fun part!","\n","^/perform claps_hands","\n",{"->":".^.^.^.^.^.house_rules"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Hello-o","\n","^Anybody home?","\n","^/perform cocks_head_to_left","\n",{"->":".^.^.^"},{"->":".^.^.^.^.^.house_rules"},{"#f":7}]}],["ev","str","^distracted","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->t->":".^.^.^.^.^.^.PayAttention"},{"->":".^.^.^"},"\n",{"->":".^.^.^.^.^.house_rules"},{"#f":7}]}],{"#f":7,"#n":"new_guest"}],{"#f":7}],"house_rules":["^You are a guest in what we call the \"Threshold\".","\n","^You could think of it as a house, I suppose. But it's not really...","\n","^Regardless, all guests must follow the rules","\n","^or they will not be allowed to stay.","\n","^/wait","\n","^The rules are simple.","\n","^Answer questions when you are asked them.","\n","^Follow directions when they are given.","\n","^Disobey and be punished.","\n","^Obey and be rewarded.","\n","^See? Simple.","\n","^/wait","\n","^Let's practice!","\n","^/perform waves_feather_duster","\n",["^Is your name ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^You've got it! You answered my question.","\n","^/perform bounces","\n",{"->":".^.^.^.^.^.g-0"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Yes, it is, silly! But good job <i>trying</i> to answer my question!","\n","^/perform wags_feather_duster","\n",{"->":".^.^.^.^.^.g-0"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Come on. You can do it.","\n","^/perform smile","\n",{"->":".^.^.^"},{"->":".^.^.^.^.^.g-0"},{"#f":7}]}],["ev","str","^distracted","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->t->":".^.^.^.^.^.^.PayAttention"},{"->":".^.^.^"},"\n",{"->":".^.^.^.^.^.g-0"},{"#f":7}]}],{"#f":7,"#n":"answering"}],{"#f":7}],"g-0":["^Now let's try obeying.","\n","^Kneel on the floor, ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^.","\n","^/perform point_at_floor","\n",[["ev","str","^pose:kneel","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^You did it! I'm so proud of you!","\n","^/perform bounces","\n",{"->":".^.^.^.^.^.house_description"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Come on. You can do it.","\n","^/perform smile","\n","^Kneel, ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^!","\n","^/perform point_at_floor","\n",{"->":".^.^.^"},{"->":".^.^.^.^.^.house_description"},{"#f":7}]}],{"#f":7,"#n":"obeying"}],{"#f":7}],"house_description":["^Oh yes. I guess I better explain how it all works.","\n","^Goddess has invited lots of Mistresses and Dominas to live here.","\n","^This house is just filled with so many hot and sexy boss ladies!","\n","^If you work real hard and be the best ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^ you can be,","\n","^you might be lucky enough to serve each one!","\n","^/wait","\n","^Before you meet them,","\n","^I have to make sure you know your own limits and desires, though,","\n","^so you are properly prepared for what they offer.","\n",["^Do you know what your limits and desires are?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Oh good! Then it should be easy to answer my questions.","\n",{"->":".^.^.^.^.^.preferences"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^That's okay! I ask good questions, so we can learn together!","\n",{"->":".^.^.^.^.^.preferences"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^You're not going to start breaking the rules are you?","\n","^You have to answer questions when you're asked.","\n",{"->":".^.^.^"},{"->":".^.^.^.^.^.preferences"},{"#f":7}]}],{"#f":7,"#n":"know_preferences"}],{"#f":7}],"preferences":["^Make sure you answer honestly. If you don't, you might encounter unpleasant surprises in the house.","\n","^/perform pouts","\n","^Anything you tell me NO is off the table.","\n","^Goddess doesn't want her guests damaged... too much.","\n","^Whatever you say YES to may become an opportunity for you","\n","^with our Mistresses and Dominas.","\n",["^Are you ready?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Okay! I bet you have a dirty mind. At least I hope so!","\n","^Those are the yummiest. Let's find out!","\n","^/change yuki yuki_with_clipboard","\n","^/perform ready_clipboard","\n",{"->":".^.^.^.^.^.ask_bondage"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Oh too bad. We can't keep playing if you aren't ready.","\n",{"->":".^.^.^"},{"->":".^.^.^.^.^.ask_bondage"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Let's try this again.","\n","^I'm going to ask you to admit your sexual desires to me.","\n","^These are things you might get to explore in the house, if your Mistress or Domina offers it.","\n",{"->":".^.^.^"},{"->":".^.^.^.^.^.ask_bondage"},{"#f":7}]}],["ev","str","^distracted!","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->t->":".^.^.^.^.^.^.PayAttention"},"\n",{"->":".^.^.^"},{"->":".^.^.^.^.^.ask_bondage"},{"#f":7}]}],{"#f":7,"#n":"ready"}],{"#f":7}],"ask_bondage":["^Do you like the idea of being tied up and used?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Mmmm. One of my favorite things to do.","\n","ev",{"VAR?":"bondage"},{"VAR?":"yes"},{"f()":"set_kink"},"pop","/ev","\n","ev",{"VAR?":"sextoy"},{"VAR?":"yes"},{"f()":"set_kink"},"pop","/ev","\n",{"->":".^.^.^.^.ask_discipline"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^How disappointing. Oh well.","\n","ev",{"VAR?":"bondage"},{"VAR?":"no"},{"f()":"set_kink"},"pop","/ev","\n","ev",{"VAR?":"sextoy"},{"VAR?":"no"},{"f()":"set_kink"},"pop","/ev","\n",{"->":".^.^.^.^.ask_discipline"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^I'm waiting. ",{"->":".^.^.^"},"\n",{"->":".^.^.^.^.ask_discipline"},{"#f":7}]}],{"#f":7}],"ask_discipline":["^Are you a naughty little ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^ who needs to be punished now and then?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^I do so love a good spanking. ",["G>","ev",{"VAR?":"discipline"},{"VAR?":"yes"},{"f()":"set_kink"},"out","/ev","G<",null],"\n",{"->":".^.^.^.^.g-1"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Hrmmm. There are lots of other things to play instead. ",["G>","ev",{"VAR?":"discipline"},{"VAR?":"no"},{"f()":"set_kink"},"out","/ev","G<",null],"\n",{"->":".^.^.^.^.g-1"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Making me wait won't earn you a spanking.","\n",{"->":".^.^.^"},{"->":".^.^.^.^.g-1"},{"#f":7}]}],{"#f":7}],"g-1":["^Oh, I know! You're a worthless slut who isn't worthy of attention. Is that it?","\n",[["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Of course you're a dirty little slut. Yum!","\n","^Don't worry. You can grovel for a Mistress or Domina soon.","\n","ev",{"VAR?":"humiliation"},{"VAR?":"yes"},{"f()":"set_kink"},"pop","/ev","\n",{"->":".^.^.^.^.^.ask_worship"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Sigh. Oh well. There are other ways to play with you. ",["G>","ev",{"VAR?":"humiliation"},{"VAR?":"no"},{"f()":"set_kink"},"out","/ev","G<",null],"\n",{"->":".^.^.^.^.^.ask_worship"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^I'm waiting.","\n","^Are you a worthless slut unworthy of attention?","\n",{"->":".^.^.^"},{"->":".^.^.^.^.^.ask_worship"},{"#f":7}]}],{"#f":7,"#n":"ask_humiliation"}],{"#f":7}],"ask_worship":["^Do you dream of worshipping your Goddess' form?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Ooo, you will get lots of chances to worship. ",["G>","ev",{"VAR?":"worship"},{"VAR?":"yes"},{"f()":"set_kink"},"out","/ev","G<",null],"\n",{"->":".^.^.^.^.ask_training"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^A shame. Worshipping is nice. ",["G>","ev",{"VAR?":"worship"},{"VAR?":"no"},{"f()":"set_kink"},"out","/ev","G<",null],"\n",{"->":".^.^.^.^.ask_training"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^You're not paying attention. ",{"->":".^.^.^"},"\n",{"->":".^.^.^.^.ask_training"},{"#f":7}]}],{"#f":7}],"ask_training":["^Do you strive for perfection in service?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["^ It will be so much fun to mold you and shape you into a perfect slave. ",["G>","ev",{"VAR?":"training"},{"VAR?":"yes"},{"f()":"set_kink"},"out","/ev","G<",null],"\n","\n",{"->":".^.^.^.^.g-2"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["^ That's fine. I have plenty of other things to work with. ",["G>","ev",{"VAR?":"training"},{"VAR?":"no"},{"f()":"set_kink"},"out","/ev","G<",null],"\n","\n",{"->":".^.^.^.^.g-2"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["^ I don't like waiting.","\n",{"->":".^.^.^"},"\n",{"->":".^.^.^.^.g-2"},{"#f":7}]}],{"#f":7}],"g-2":[{"->":".^.^.^.set_safeword"},{"#f":7}]}],{"set_safeword":[["^You've been such a good ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^ so far!","\n","^/perform twirls","\n","^I have lots of delicious ideas to work with and share with all the other Mistresses and Dominas.","\n","^Just a little longer...","\n","^We have one more thing to discuss before I can truly make you mine.","\n","^Do you know what a safeword is?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Good. You will need to have a safeword for us to play together.","\n","^It's important we stop when you've had enough","\n","^and I will never be upset with you for using it.","\n",{"->":".^.^.^.ask_safeword"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^When we play, sometimes it can be very rough, sometimes to your limits.","\n","^When you've reached your limits, I want you to use a 'safeword'","\n","^that will tell me it is time to stop and take care of you.","\n","^Having and using a 'safeword' is how we keep you safe.","\n",{"->":".^.^.^.ask_safeword"},{"#f":7}]}],{"ask_safeword":["^We can use 'red', 'stop', 'pineapple', or 'safe word'. Which do you prefer?","\n",["ev","str","^button:'Red'","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","ev","str","^Red","/str","/ev",{"temp=":"player_safeword","re":true},{"->":".^.^.^.^.listen"},{"#f":7}]}],["ev","str","^button:'Stop'","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","ev","str","^Stop","/str","/ev",{"temp=":"player_safeword","re":true},{"->":".^.^.^.^.listen"},{"#f":7}]}],["ev","str","^button:'Pineapple'","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","ev","str","^Pineapple","/str","/ev",{"temp=":"player_safeword","re":true},{"->":".^.^.^.^.listen"},{"#f":7}]}],["ev","str","^button:'Safe Word'","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","ev","str","^Safe Word","/str","/ev",{"temp=":"player_safeword","re":true},{"->":".^.^.^.^.listen"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Speak up and let's stick to the script, shall we?","\n",{"->":".^.^.^"},{"->":".^.^.^.^.listen"},{"#f":7}]}],{"#f":7}],"listen":[["G>",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^So",{"->":".^.^.17"},null],"s1":["pop","^Do",{"->":".^.^.17"},null],"#f":5}],"G<",null],"^ you want your safe word to be \"",["G>","ev",{"VAR?":"player_safeword"},"out","/ev","G<",null],"^\"?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n",{"->":".^.^.^.^.g-0"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":".^.^.^.^.ask_safeword"},"\n",{"->":".^.^.^.^.g-0"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["^ Let's try that again.","\n",{"->":".^.^.^"},"\n",{"->":".^.^.^.^.g-0"},{"#f":7}]}],{"#f":7}],"g-0":["^Great! Says here in my notes, you are ready to serve!","\n","^/change yuki_with_clipboard yuki","\n","^And you know what?","\n","^After all this hard work, I think <i>I</i> deserve a little reward.","\n","^Don't you?","\n","^Before you run off and go get yourself in trouble again,","\n","^you have to practice with me!","\n",{"->":"playtime_yuki"},{"#f":7}]}],{"#f":3}],"PayAttention":[["G>",["ev","visit",5,"%","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"nop",{"s0":["pop","^You're not very good at this yet, are you?","\n","^You're supposed to look at me when I'm talking.","\n",{"->":".^.^.35"},null],"s1":["pop","^Bad ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^! You should look at me when I speak to you.","\n",{"->":".^.^.35"},null],"s2":["pop","^Oh gee. You need a lot of training. Look at me.","\n",{"->":".^.^.35"},null],"s3":["pop","^Didn't anyone ever teach you to look at people","\n","^when they're speaking to you?","\n",{"->":".^.^.35"},null],"s4":["pop","^It's very rude not to look at me when I'm speaking to you.","\n",{"->":".^.^.35"},null],"#f":5}],"G<",null],"\n",["ev","str","^paying_attention","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n",["G>",["ev","visit",4,"%","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^Now... what was I saying? Oh right...","\n",{"->":".^.^.29"},null],"s1":["pop","^Much better. Ahem.","\n",{"->":".^.^.29"},null],"s2":["pop","^Good ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^. You might be teachable after all.","\n",{"->":".^.^.29"},null],"s3":["pop","^Now back to your instructions.","\n",{"->":".^.^.29"},null],"#f":5}],"G<",null],"\n","ev","void","/ev","->->",{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":".^.^.^"},"\n",{"#f":7}]}],{"#f":3}],"#f":3}],"playtime_yuki":["^<<< TODO: insert activities with Yuki here >>>","\n","end",{"#f":3}],"global decl":["ev",{"list":{},"origins":["kink_list"]},{"VAR=":"kink_list"},{"list":{},"origins":["kink_level"]},{"VAR=":"kink_level"},{"list":{}},{"VAR=":"kinks_yes"},{"list":{}},{"VAR=":"kinks_maybe"},{"list":{}},{"VAR=":"kinks_no"},"str","^","/str",{"VAR=":"load_activity"},"str","^none","/str",{"VAR=":"player_name"},"str","^red","/str",{"VAR=":"player_safeword"},1,{"VAR=":"web"},"/ev","end",null],"#f":3}],"listDefs":{"kink_list":{"sextoy":1,"bondage":2,"discipline":3,"humiliation":4,"worship":5,"training":6},"kink_level":{"no":0,"maybe":1,"yes":2}}};