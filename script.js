let board = document.getElementById("board");

for (let i = 1; i <= 8; i++) {
    const boxContainer = document.createElement("div");
    boxContainer.className = "boxContainer";


    for (let j = 1; j <= 8; j++) {
        const box = document.createElement("div");
        box.className = "box";

        if (i % 2 === 0) {
            if (j % 2 === 0) {
                box.style.backgroundColor = "white";
            }
            else {
                box.style.backgroundColor = "black";
            }
        }
        else {
            if (j % 2 === 0) {
                box.style.backgroundColor = "black";
            }
            else {
                box.style.backgroundColor = "white";
            }
        }
        boxContainer.append(box);
    }
    board.append(boxContainer);
}