import Obi from './pictures/hello-there.gif'

const Fun = () => {
    return ( 
        <div className="FUNtime">
            <img src={Obi} alt="A" />
            <h2>Looks like you came to learn about fun</h2>
                <br/>
              <body>
                  So I'm not sure if I can rank both of these categories by order of most favourite but I will try 
                  and see. 
              </body>

              <br/>

                <div class="row">

                    <div class="column">
                    Current Favourite Video Games
                    <li>Frost Punk</li>
                    <li> Skyrim </li>
                    <li> Stardew Valley</li>
                    <li> Lego Star Wars the Complete Saga </li>
                    <li> Overwatch (I don't play competitive, ruins the fun for me) </li>
                    <li> </li>
                    <li> </li>
                    <li> </li>
                    </div>

                     <div class="column">
                    Current Favourite Animes
                    <ol>
                        <li>Gintama</li>
                        <li>One Piece</li>
                        <li>Code Geass</li>

                    </ol>
                    </div>

                </div>

        </div>
     );
}
 
export default Fun;