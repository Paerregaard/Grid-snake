const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');









var gameOver = false


var score = 0


//Kalder funktionerne og sætter slangens startlocation
makeGrid()
headStartingLocation(8,8)




//Hardcoding af hvor væggende er med deres koordinater
wall(12,12)
wall(12,11)
wall(12,10)
wall(12,9)
wall(12,7)
wall(12,6)
wall(12,5)
wall(12,4)

wall(4,12)
wall(4,11)
wall(4,10)
wall(4,9)
wall(4,7)
wall(4,6)
wall(4,5)
wall(4,4)

wall(14,2)
wall(14,14)

wall(2,2)
wall(2,14)

//Kalder functionen efter væggende sådan at væg og æble ikke er på samme firkant.
newApple()

//Starter spillet, tegner griddet, kalder move funktionen og sætter eaten = false
setInterval(function () {
    drawGrid()
    
    if (gameOver == false ){
    move()
    eaten = false
//Restart game teksten
    } else {
      ctx.font = "50px Arial"
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.fillText("You died, press R to restart.", 350, canvas.height/2);
      
      
    }
  
    

//Framerate opdatere hver 200ms
}, 200); 


//Controls
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38' && yLast != 1) {
      xDir = 0
      yDir = -1
        // up arrow
    }
    else if (e.keyCode == '40' && yLast != 1) {
      xDir = 0
      yDir = 1
        // down arrow
    }
    else if (e.keyCode == '37' && xLast != 1) {
      xDir = -1
      yDir = 0
       // left arrow
    }
    else if (e.keyCode == '39' && xLast != 1) {
      xDir = 1
      yDir = 0

       // right arrow
    } 
    else if (e.keyCode == "82" && gameOver == true) {
      // Alle ting bliver resettet/kaldt igen og spillet starter forfra.
      gameOver = false 
      eaten = false
      snakeLength = 1
      xDir = 0
      yDir = 0 
      score = 0
      document.getElementById('score').innerHTML = "Score: "+ score;
      headStartingLocation(9,9)
      for (i = 0; i < collums; i++) {
        for ( j = 0; j < rows; j++) {
            grid[i][j].snakeCounter = 0;
            grid[i][j].apple = false;


        }
    } newApple();
    } 
} 

