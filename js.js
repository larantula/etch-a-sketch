//declare container
const container = document.querySelector("#container");
//const newGame = document.querySelector(".newGame");
const sizePrompt = document.querySelector(".sizePrompt")



//create a 16x16 grid
for (i = 0; i < (Math.pow(16, 2)); i++){
    let grid = document.createElement("div");
    grid.classList.add("grid");
    document.getElementById("container").appendChild(grid);
    grid.addEventListener(`mouseover`, (e) => {
        grid.style.backgroundColor = "#AA0000";
    });
}

/*
sizePrompt.addEventListener(`click`, (e) => {
    gridAmount = prompt("How many squares per row/column?");   
   
   
   if (gridAmount> 100){
       alert("Too big, guy. Refresh and do less than 100")
   } else {
    window.location.reload();

    for (i = 0; i < (Math.pow(gridAmount, 2)); i++){
        let grid = document.createElement("div");
        grid.classList.add("grid");
        document.getElementById("container").appendChild(grid);
        grid.addEventListener(`mouseover`, (e) => {
            grid.style.backgroundColor = "#AA0000";
        });
    }

   }
   */








//add a reset button

/*
newGame.addEventListener(`click`, (e) => {
    grid.style.backgroundColor = "#FFFFFF";
})
*/







