function main() {
    let confirm = document.getElementById('mainResult').innerHTML;
    if (confirm == "You Lost The Game !") {
        alert("Game Over !");
    } else {


        let x;

        do {
            x = Math.floor(Math.random() * 100 / 7.6);
        } while (x == 0);

        let currentTT = parseInt(document.getElementById('result').innerHTML);
        let total = currentTT + x;
        document.getElementById('result').innerHTML = total;

        if (total < 21) {
            document.getElementById('mainResult').innerHTML = "GENARATE ANOTHER CARD ."
        } else if (total == 21) {
            document.getElementById('mainResult').innerHTML = "You Are Won!"
            alert("congratulations :)");
            document.getElementById('btn-res').style.display = "block";
        } else if (total > 21) {
            document.getElementById('mainResult').innerHTML = "YOU LOST THE GAME !"
            alert("Lost The Game :(");
            document.getElementById('btn-res').style.display = "block";
        }

        var img = document.createElement("img");
        img.src = "images/" + x + ".png";
        img.height = 250;
        document.body.appendChild(img);
    }
}
function restart() {
    location.reload();
}