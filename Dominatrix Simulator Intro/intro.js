var storyContent = ﻿{"inkVersion":17,"root":[["^This is a quick test for the script that runs the game's introduction.","\n","^At this point you have chosen either 'male' or 'female'.","\n","^Which would you choose?","\n",["ev",{"^->":"0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":2},{"s":["^male",{"->":"$r","var":true},null],"c":["ev",{"^->":"0.6.c.$r2"},"/ev",{"temp=":"$r"},{"->":"0.6.s"},[{"#n":"$r2"}],"\n","\n","ev","str","^boy","/str","/ev",{"temp=":"player_name","re":true},{"->":"0.g-0"},{"#f":7}]}],["ev",{"^->":"0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":2},{"s":["^female",{"->":"$r","var":true},null],"c":["ev",{"^->":"0.7.c.$r2"},"/ev",{"temp=":"$r"},{"->":"0.7.s"},[{"#n":"$r2"}],"\n","\n","ev","str","^girl","/str","/ev",{"temp=":"player_name","re":true},{"->":"0.g-0"},{"#f":7}]}],{"g-0":["^Good. Now we can begin...","\n",["ev","str","^Introduction","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":"Introduction"},"\n",{"#f":7}]}],{"#f":7}]}],"done",{"Introduction":[["^How did you get in here?","\n","^...","\n","^Did Yukiko let you in?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^I've told that girl not to interrupt me","\n","^when I'm playing with my toys. ",{"#":"03"},{"#":"pause"},"\n",{"->":".^.^.^.g-0"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Just another curious guest, hrm? ",{"#":"pause"},"\n",{"->":".^.^.^.g-0"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Nevermind. It's not important. ",{"#":"pause"},"\n",{"->":".^.^.^.g-0"},{"#f":7}]}],{"g-0":["^Well, you can't stay here.","\n","^Only the willing may stay in my presence.","\n","^And you're not ready yet.","\n",{"#":"pause"},"\n",["^Do you know who you are?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Then you're luckier than most.","\n","^Even so... everyone who comes here gets a new name eventually.","\n",{"->":".^.^.^.^.^.g-1"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Of course you don't.","\n","^No one does when they first arrive.","\n","^I'll have to call you something.","\n",{"->":".^.^.^.^.^.g-1"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Cat got your tongue?","\n","^I'll have to call you something.","\n",{"->":".^.^.^.^.^.g-1"},{"#f":7}]}],["ev","str","^distracted","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->t->":"PayAttention"},"\n",{"->":".^.^.^"},{"#":"pause"},"\n",{"->":".^.^.^.^.^.g-1"},{"#f":7}]}],{"#f":7,"#n":"ask_where"}],{"#f":7}],"g-1":["^Hrm... For now, ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^ will do.","\n","^I expect you to respond to ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^ from now on.","\n","^Until you earn a new name, that is.","\n","^Do you understand?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Good ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^. I am pleased you understand.","\n",{"->":".^.^.^.^.g-2"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Let's try this again. Your name is now ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^.","\n","^Everyone who meets you will refer to you as ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^.","\n","^One day, if you're good enough, you may earn a new name.","\n","^But for now, your name is ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^.","\n",{"->":".^.^.^.^.g-2"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Well, perhaps you're a little overwhelmed.","\n","^That's to be expected.","\n","^Just remember your name is ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^ until I decide to change it. ",{"#":"pause"},"\n",{"->":".^.^.^.^.g-2"},{"#f":7}]}],{"#f":7}],"g-2":["^I'm going to have to send you away soon.","\n","^But first, let me have a good look at you.","\n",["^Come here.","\n",["ev","str","^come","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^There's a good ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^.","\n",{"->":".^.^.^.^.^.g-3"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Don't be shy. ",{"->":".^.^.^"},"\n",{"->":".^.^.^.^.^.g-3"},{"#f":7}]}],{"#f":7,"#n":"inspection"}],{"#f":7}],"g-3":["^I'm always curious about our new guests.","\n","^I rarely take the time to inspect them personally","\n","^when they first arrive.","\n","^This is a bit of an unexpected treat.","\n","^You don't mind, do you?","\n",["ev","str","^yes","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^That's unfortunate.","\n","^Honestly, I don't even know why I bother asking. ",{"#":"circles around player"},"\n",{"->":".^.^.^.^.circle_player"},{"#f":7}]}],["ev","str","^no","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^Mmm... I think someone might be enjoying this. ",{"#":"circles around player"},"\n",{"->":".^.^.^.^.circle_player"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n","^That's alright. It's not like you have a choice anyway. ",{"#":"circles around player"},"\n",{"->":".^.^.^.^.circle_player"},{"#f":7}]}],{"#f":7}],"circle_player":["^Stand up straight.","\n","^Push your shoulders back and arch your back","\n","^so that pretty little bottom of yours stands out.","\n","^Mmmmm... lots of delicious flesh to work with.","\n","^Strong bones and muscles.","\n","^You'll need to be flexible, as well.","\n","^Yes... hrm... there is so much here to work with.","\n",{"#":"stops in front of player"},"\n","^Well, off to Yukiko with you.","\n","^Time to start preparing you.","\n",{"#":"snaps fingers"},"\n","^Bye for now ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^.","\n",["end",{"#f":7,"#n":"g-4"}],{"#f":7}]}],{"#f":3}],"PayAttention":[[["G>",["ev","visit",5,"%","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"nop",{"s0":["pop","^Look at me When I'm speaking to you, ",["G>","ev",{"VAR?":"player_name"},"out","/ev","G<",null],"^.","\n",{"->":".^.^.35"},null],"s1":["pop","^I expect your eyes on me at all times,","\n","^unless I tell you otherwise.","\n",{"->":".^.^.35"},null],"s2":["pop","^Did I give you permission to look elsewhere?","\n",{"->":".^.^.35"},null],"s3":["pop","^Didn't anyone ever teach you to look at people","\n","^when they're speaking to you?","\n",{"->":".^.^.35"},null],"s4":["pop","^Pay attention to me when you're in my presence.","\n",{"->":".^.^.35"},null],"#f":5}],"G<",null],"\n",["ev","str","^paying_attention","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n",{"->":".^.^.^.g-0"},{"#f":7}]}],["ev","str","^timeout","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":".^.^.^.^"},"\n",{"->":".^.^.^.g-0"},{"#f":7}]}],{"g-0":["^Where was I? Oh yes...","\n","ev","void","/ev","->->",{"#f":7}]}],{"#f":3}],"global decl":["ev","str","^girl","/str",{"VAR=":"player_name"},"/ev","end",null],"#f":3}],"listDefs":{}};