var grid = []; //Laver grid til et array 
//Laver griddet 17 * 17
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
        //Tegner først den sorte større firkant
        ctx.beginPath();
        ctx.fillStyle = "black"
        ctx.fillRect(this.x, this.y, this.width, this.width);
        ctx.beginPath();
        //Hvis det er slange hovedet, skal den være blue
        if (this.snakeCounter == snakeLength) {
    
            ctx.fillStyle = "blue"

            //Hvis snakeCounter er større end 0 er det en hale og har en deepskyblue som farve
        } else if (this.snakeCounter > 0) {

            ctx.fillStyle = "deepskyblue"

            //Hvis æble er sand er firkanten rød
        } else if (this.apple == true) {

            ctx.fillStyle = "red" 

            //Hvis wall er sand er firkanten grå
        } else if (this.wall == true) {

            ctx.fillStyle = "grey" 
        
            //Ellers skal alle firkanter være grønne
        } else {

            ctx.fillStyle = this.color;

        }
       // Tegner firkanterne inde for den store sorte, og giver grid fornemmelsen.
        ctx.fillRect(this.x + this.strokeWeigth, this.y + this.strokeWeigth, this.width - this.strokeWeigth * 2, this.width - this.strokeWeigth * 2);

        //Hver gang slangen rykker sig til næste firkant bliver der trukket 1 fra snakeCounter så det ligner slangen rykker sig og at den ikke bare bliver længere
        if (this.snakeCounter > 0 && eaten == false && gameOver == false) {
           this.snakeCounter--;
        }
    }
}
// Bestemmer alle firkanterne
function makeGrid() { 
    for (i = 0; i < collums; i++) {
        grid[i] = []
        for (j = 0; j < rows; j++) {
            // new Square tager square classen og gør det til Square objekter. hermed også instanser af objektet
            grid[i][j] = new Square(i * 40, j * 40); 

        }
    }

}

// Tegner alle firkanterne
function drawGrid() {
    for (i = 0; i < collums; i++) {
        for (j = 0; j < rows; j++) {
            grid[i][j].draw(); // Tegner firkanterne i det multidimensionelle array [i][j]
        }
    }
}



