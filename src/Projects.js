const Projects = () => {
   

  return (
    <div className="prorec">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <h1> The Stuff That Really Matters </h1>
        <br /><br /><br />

        <h3> Current Project: Salahti</h3>
          <body>
            Sorry I am a little late, but here is the update!
            <br/><br/>
            This project is currently working to be developed for Andriod and iOS. I'm using Android Studio on my Windows to figure out the Android 
            part of the app, but I am acquiring my brothers old Mac so I should be able to use Android Studio to get it up on iOS (but that's a problem
            for later, focusing on android for now). Before I discuss the app, I think it needs a little context. In Islam, we are required to pray 5 times 
            a day, and at times it can be difficult to remember to pray within the given time frame as we get caught up with other things of the world. 
            <br/><br/>
            So the app's purpose is to allow users to keep themselves and their friends/family members accountable for their prayers. Users will be 
            allowed to make group chats with people they pick and anonymously nudge other users in their group if they haven't marked that they prayed.
            There will be an in-app messaging service to allow users to communicate with their group members and provide motivation and such. The app will 
            use Location Services to determine where the user is in the world to determine correctly what time their prayers are at and how much time they have
            left. Lastly, I hope to include an achievement section to help users keep track of their progression and motivate them to keep it up. 
            <br/><br/>
            As of right now, these are all the features I want to include, but as I work on it I come up with new ideas to potentially include and 
            how to change it around. Stay tuned! 
            <br/><br/>
            I'm currently using Android Studio for the front-end development and setting things up, and I am using Firebase for the back-end like handling
            user authentification, in-app messaging, and location services. When I have more to disucss about the project development then I will write that
            up, but for now I will present the idea. I am currently wrapping up the user authentification as well as most of the general layout of the app. 

            <br/><br/>
            For the next update, lets shoot to have this updated on March 28, 2022. (I'm going to be out for 2.5ish weeks travelling otherwise I would have 
            done a month from now.)

          </body>
          
        <br /><br ></br><br />
        
      <h3>The Website you see now</h3>
        <body>
        So this was my first major project I've done. I didn't have any experience with HTML,CSS, or JavaScript
        before hand so it was all pretty new to me. It was definitely fun seeing what I could make and learning about the 
        different features. Though, I don't think I really need a lot of them for this website like letting people add stuff
        and deleting things they may need or having different click events. I thought about maybe having people submit 
        recipes they liked so everyone could see but I am kind of more excited to start my next project which will be pretty
        time consuming.  
        </body>
        <br />
        <br />
        <br />
        <h3>FORTRAN Modelling The Shallow Water Equations</h3>
        <body>
        This is was an interesting project with a lot of ups and downs. For my Numerical modelling class, which primarily focused 
        on modelling estuaries, we had to take a deep dive into the Navier-Stokes Equations which resulted in the dissection of a 
        few other equations to explain how the model worked. The equations near the end of our semester focused on the 1D Shallow Water Equations (Euler's Equations)
        to model the flow through a channel (I won't go much in depth about the coastal part). I would say that 40% of the project was understanding the 
        equations and how to code it and the other 60% was actually coding it. While this wasn't a typical CS project, I learned a lot about good coding practices. 
        Once I figured out how to code in FORTRAN and how I needed to use the equations there was a big shift in resolving why my outputs weren't correct 
        (i.e. numbers were going to infinity or just wouldn't compute). There were some major decisions made initially which would affect the run time significantly,
        such as iterating to solve each of the 6 equations that needed solving effectively and how to store and access this information quickly. I spent a majority of my
        time debugging my code and my partner's code to help resolve most of the issues that arrived (there was an instance where the professor needed to provide some guidance because 
        I couldn't figure it out for the life of me). As stressful as the project was I definitely learned a lot about coding from this project. For readability, I'll provide it in a list below. 
        <br/>
        <br/>
        <ol>
        <li>
          <strong>Organising Code: </strong>I realised that structuring your code in a way to make it easier to follow along makes it easier for when you're trying to debug.
        </li>
        <li>
          <strong>Commenting Code:</strong> I always knew this was important, but it makes looking at your own or someone else's code easier to troubleshoot. It also makes picking up where the other left off without having to waste too much time
        figuring out whats happening.
        </li>
        <li>
          <strong>Debugging: </strong> I can't say I ever truly learned how to debug well, but this project definitely helped a lot in sitting down and looking at the code line by line to see where it breaks or where it decides to do 
        something funny. But not even just debugging my own code, but someone elses where you aren'y familiar with what they did so you have to look at everything. This project being math equations didn't 
        help make this easier (that also could have been issue, which sometimes it was), but I learned a lot of patience with this too in trying to track things down. 
        </li>
        <li>
          <strong>Runtime: </strong> I always read about why runtime is important and I understand why it is, but it never fully dawned upon me how much memory and long running codes can be if it isn't done right. For our first project, I sort of
        got an idea of runtime but I didn't want to sacrifice accuracy (the project was done through a program called Delft3D so I didn't see any code), but with this project I saw why it's important. My partner's code took about 
        10+ minutes to run before I looked at it and I was able to knock it down substantially to run in a matter of a 15-20 seconds. This was because I changed his code to run from O(n^2) to O(n) by re-working how the calculations were done. 
        We both saw the runtime drop and everything from my Data structures book made more sense about Big O notation and runtimes. 
        </li>
        </ol>

        </body>

        <br /><br /><br />

        <h3>Sudkou</h3>
          <body>
          So this project is currently in progress that I've put on the side for the website and the upcoming project. 
          But also I started reading the Data Structures & Algorithms textbook to get a better foundation so that's why
          this project was also put on hold. Currently the goal is to create a sudoku board that is already solved and then 
          reveal only certain numbers for the user to try and solve it. I want to create different difficulties, just reveal 
          less numbers when I get to that point. Its definitely a heavy logic based problem to ensure no numbers are in the same
          column or row as well as the same 3x3 square. Currently I have 2D array to set the board up, but when I revisit it 
          I think I might try to see if any other data structure will work better. It's a good challenge and I want to get back to it. Hopefully soon!
        
          </body>

        <br /><br /><br />

        <h3>Tic Tac Toe</h3>
        <body>
          This one isn't too crazy. I think I need to fine tune it a little for it to be perfect but it does work. 
          This was to get back into the groove of things when I first restarted programming after some time. 
        </body>

        <br /><br /><br /><br /><br /><br />

        
    </div>
  );
}
 
export default Projects;