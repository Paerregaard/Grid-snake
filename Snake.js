var xDir = 0, yDir = 0, xLast, yLast, snakeHeadX, snakeHeadY;
var snakeLength = 1; 


function headStartingLocation(x,y) {
    snakeHeadX = x;
    snakeHeadY = y;
}

function move() {
    if (collision() == false) {

        //Rykker slangen 
        snakeHeadX += xDir;
        snakeHeadY += yDir;

        //Gør at man ikke kan rykke ind i sig selv
        if (snakeLength > 1) {
            xLast = xDir;
            yLast = yDir;
        }
        //Hvis collision af true er gameOver true
    } else {
        gameOver = true;
        
    }
    eatApple();
    //gør at den næste firkant blive til en slange
    grid[snakeHeadX][snakeHeadY].snakeCounter = snakeLength;

}

function collision() {
    //Først tjekker vi om slangen skal til at gå ud fra banen
    if (snakeHeadX + xDir < 0 || snakeHeadX + xDir > rows - 1 || snakeHeadY + yDir < 0 ||
             snakeHeadY + yDir > collums - 1) {
        return (true);
        //Herefter tjekke vi om slangen går ind i sig selv eller en wall
    } else if (grid[snakeHeadX + xDir][snakeHeadY + yDir].wall == true ||
             grid[snakeHeadX + xDir][snakeHeadY + yDir].snakeCounter > 0) {
        return (true);
        //Hvis ingen af overstående er sande har slangen ikke ramt ind i noget
    }
    return (false);

}


function eatApple() {
    if (grid[snakeHeadX][snakeHeadY].apple == true) {
        //Hvis der er et æble bliver slangen længere og der spawner et nyt æble
        snakeLength++;
        eaten = true;
        newApple();
        grid[snakeHeadX][snakeHeadY].apple = false;
        score++;
        document.getElementById('score').innerHTML = "Score: "+ score;
    }

}