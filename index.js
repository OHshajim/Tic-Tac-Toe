const boxes = document.querySelectorAll(".box")
const Rbox = document.getElementById("R-btn")
let turnO = true;
const winPattarns = [
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
    })
   



    Rbox.addEventListener("click", function () {
        box.innerText = "";
        box.disabled = false;
    })
}


