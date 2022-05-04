var eaten = false;


    //Funktion der laver et ny æble i et tilfældigt felt hvor der ikke er slange eller mure 
    function newApple() {
        //Variable der holder styr på hvor langt vi er noget i listen
        var counter = 0;
        //Liste som kommer til at indenholde alle de de valide felter. Det er en 2d arrayliste, hver række indeholder x og y kordinat
        var availableSquareList = []

        //For loop som kører alle søjlerne igennem
        for ( i = 0; i < collums; i++) {

             //For hver søjle skal vi også kører alle rækkerne igennem. På denne måde tjekker vi alle firkanterne.
            for ( j = 0; j < rows; j++) {
                //Tjekker om der er en mur eller slange i den bestemte firkant
                if (grid[i][j].wall == false && grid[i][j].snakeCounter == 0) {
                    //Hvis firkanten ikke er slange eller mur sætter vi dens kordinater ind i availableSquareList og lægger 1 til counter
                    availableSquareList[counter] = []
                    availableSquareList[counter][0] = i;
                    availableSquareList[counter][1] = j;
                    counter++;
                }
            }
        }
        //Efter vi har lavet listen over alle forskellige firkanter det kan være vælger vi en tilfældig en.

        var rand = Math.floor(Math.random() * counter);

        //Denne random værdi sætter vi ind i availableSquareList og få at finde den besteme firkant
        var x = availableSquareList[rand][0];
        var y = availableSquareList[rand][1];
        

        //Denne firkant er nu et æble
        grid[x][y].apple = true;

    }

   