import Greivous from './pictures/grievous.gif'

const Aboutme = () => {
    return ( 
        <div className="aboutme">
        
        <h1> WELL, hello there. We meet again...</h1>
        <img src={Greivous} alt="A" />
        <h2>thats not what i look like...</h2>
        <br /> 
        <br />
        <br />
        <br />
        <h2>or is it..hmmmmmm </h2>
        {/* insert image of me */}
        <br/>

        <div className="content"> 
        <body> 
            So my name is Shumail Zaidi, I'm currently training in the jedi arts, not sure if I wanna be a sith or jedi yet though. But more seriously, I generally don't like talking about school because 
            it normally becomes a main focal point of a conversation (and then work when you start working) and people might only remember me by what I study
            which I'm not a huge fan of. But since you don't know me, I will give a little bit about my schooling then to the fun stuff. 
        </body>

        <br/>

        <body>
            
            I am currently doing my Masters at the University of Florida (UF) in Coastal & Oceanographic Engineering.
            I did my undergrad at UF as well, in Civil Engineering with a focus in Computer Science. I was going to put what I spent my time doing
            so far in undergrad on the website, but I figured it would be better if you checked my LinkedIn out :).. I will pause here to give you a moment to look at it then we can resume the conversation. 
        
        </body>

        <br/>
        <br/>
        <h2>Welcome back! :)</h2>
        <br/>

        <body>
            So your first question is probably, concrete is heavy, it probably sunk, how did you get it to float? Well, the short answer is the density of our concrete was less than that of water (water is 62.4lb/pcf, our concrete was like 60 I think). 
            But if you want a more detailed answer, you'll have to interview and I would happily explain it all :). The last thing I want to say about my schooling is that I really did learn a lot while spending my with these design teams and organizations.
            While it may not have been 100% technically relevant to Civil, Coastal Engineering, or Computer Science. I learnt a lot about working on a team, one where everyone gets a long and another where half the team is divided, what it really means to 
            be a leader. I know that I wouldn't be the Engineer I am today without having gone through all those experiences and I'm very grateful to have gone through them even if it meant making a lot of sacrifices. 
        </body>
        <br/>

        <body>
            Your next question is probably why CS? And simply put, I like the challenge and the material has always interested me since I took my first programming class in undergrad. It was MATLAB, which I know gets a bad rep, but it was my first exposure to CS and 
            learning of what you can do with the power of programming really stood out to me. (My MATLAB professor's research seemed really cool which initially peaked my interest). I've since learned how to use Python (moreso just exposed to it at this point), C++, Java (currently 
            building up to be my strongest language), FORTRAN (used this for a modelling class I took in Fall 2021), & HTML:JavaScript:CSS (learned from this project). 
        </body>
        <br/>

        <body>
            The first thing you should know about me is that I ramble quite a bit. I can talk a lot if I don't have a like certain goal of when to stop in mind. I wasn't expecting this about page to be this long but alas here we are. Thanks for making it this far! 
            My favourite question to ask people is what they do for fun so that I could also get exposure to many different things there are in life. This question led to some of my numerous hobbies. I learnt to roller blade, longboard/skateboard, surf, boulder
            (currently something I'm into, it is pretty fun), explore hikes more, paint, & learn to cook! I've gotten into photography and editing, but that isn't something I've comitted to really. But I do like to play video games and watch anime when I'm not 
            outside doing something which I will go over in the Fun Section :). 
        </body>
        <br/>

        <body>
            Thanks for swinging by and giving me your time! I hope to meet you fellow stranger at an interview :) 
        </body>
        <br/>

        <body>
        Feel free to reach out to me about any questions :) 
        </body>


        </div>
        </div>

     );
}
 
export default Aboutme;