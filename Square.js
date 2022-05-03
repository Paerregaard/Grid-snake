var grid = [];
var collums = 17;
var rows = 17;

class Square {

    constructor(x, y) {
        this.strokeWeigth = 1
        this.x = x
        this.y = y
        this.color = "green"
        this.width = 40
        this.snakeCounter = 0
        this.wall = false
        this.apple = false
    }

     draw() {
        
        ctx.beginPath();
        ctx.fillStyle = "black"
        ctx.fillRect(this.x, this.y, this.width, this.width);
        ctx.beginPath();
        if (this.snakeCounter == snakeLength) {
    
            ctx.fillStyle = "blue"


            //Hvis snakeCounter er større end 0 er det en slange og har en anden blå farve
        } else if (this.snakeCounter > 0) {

            ctx.fillStyle = "deepskyblue"

            //Hvis æble er sand er firkanten rød
        } else if (this.apple == true) {

            ctx.fillStyle = "red" 


        } else if (this.wall == true) {

            ctx.fillStyle = "grey" 
        
            
        } else {

            ctx.fillStyle = this.color;

        }
       
        ctx.fillRect(this.x + this.strokeWeigth, this.y + this.strokeWeigth, this.width - this.strokeWeigth * 2, this.width - this.strokeWeigth * 2);

        //Hver gang firkantens draw bliver kaldt trækker vi 1 fra snake så det ligner slangen rykker sig og at den ikke bare bliver længere
        if (this.snakeCounter > 0 && eaten == false && gameOver == false) {
           this.snakeCounter--;
        }
    }
}
function makeGrid() {
    for (i = 0; i < collums; i++) {
        grid[i] = []
        for (j = 0; j < rows; j++) {
            grid[i][j] = new Square(i * 40, j * 40);

        }
    }

}

// Tegner alle firkanterne
function drawGrid() {
    for (i = 0; i < collums; i++) {
        for (j = 0; j < rows; j++) {
            grid[i][j].draw();
        }
    }
}


