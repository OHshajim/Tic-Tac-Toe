const boxes = document.querySelectorAll(".box")
const Rbox = document.getElementById("R-btn")
const text = document.getElementById("h1")
let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

for (const box of boxes) {
    box.addEventListener("click", function () {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
    // win screen
        checkWin()

    })


    // reset button 
    Rbox.addEventListener("click", function () {
        box.innerText = "";
        box.disabled = false;
        text.innerText = "Tic Tac Toe"
    })
}


function checkWin() {
    for (let patterns of winPatterns) {

        let first = boxes[patterns[0]].innerText
        let second = boxes[patterns[1]].innerText;
        let third = boxes[patterns[2]].innerText;

        if (first == "" && second == "" && third == "")return ;
            if (first === second && second === third) {
                console.log("win");
                text.innerText = `Winner is ${first}`
                disabledBoxes();

            }
    }
}

function disabledBoxes(){
    for (const box of boxes) {
        box.disabled = true
    }
}