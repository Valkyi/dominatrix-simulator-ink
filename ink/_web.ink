INCLUDE vars.ink
INCLUDE demo_intro.ink
INCLUDE demo_tutorial.ink
INCLUDE playtime_yuki.ink

VAR web = true

<blockquote><i>NOTE: This is a quick test for the script that runs the game's introduction.</i></blockquote>

<blockquote><i>Two nude statues kneel before you with outstretched hands, one male and one female. Which would you choose?</i></blockquote>

- (options)


+ {player_name != "boy"}[Touch the male statue] You touch the male statue.
    <blockquote><i>The male statue disappears and you now have hands with thick masculine fingers. The missing statue's hands.</i></blockquote>
    {
        - player_name == "none": <blockquote><i>The door at the end of the hall cracks open...</i></blockquote>
        - else: <blockquote><i>The female statue reappears.</i></blockquote>
    }
    ~ player_name = "boy"
    -> options
+ {player_name != "girl"}[Touch the female statue] Female 
    <blockquote><i>The female statue disappears and you now have hands with slender feminine fingers. The missing statue's hands.</i></blockquote>
    {
        - player_name == "none": <blockquote><i>The door at the end of the hall cracks open...</i></blockquote>
        - else: <blockquote><i>The male statue reappears.</i></blockquote>
    }
    ~ player_name = "girl"
    -> options

+ {player_name != "none"}[Open the door.] You open the door.

- <blockquote><i>You have just stepped into a darkened room with a storm thundering outside. Lighting flashes and you see a devilish figure locked in a sexual exchange with two other figures, moaning filling your ears. The lightning flashes again, filling your eyes with a new, this time, tortuous exchange. Again, it flashes, and you find those same figures in a new embrace - each scene wildly different from one another. Without warning, the storm abates, the lightning ceases, and before you stands a Demoness.</i></blockquote>

<blockquote><i>She looks at you for a moment and then challenges you...</i></blockquote>

+ [Introduction] -> demo_intro

