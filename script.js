const game = document.getElementById("game");
const newton = document.getElementById("newton");

let newtonPosition = 175; 
const gameWidth = 400; 
const newtonSpeed = 20;

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft" && newtonPosition > 0) {
        newtonPosition -= newtonSpeed;
    } else if (event.key === "ArrowRight" && newtonPosition < gameWidth - 50) {
        newtonPosition += newtonSpeed;
    }
    newton.style.left = newtonPosition + "px";
});

// Function to create falling apples
function createApple() {
    const apple = document.createElement("div");
    apple.classList.add("apple");
    apple.style.left = Math.random() * (gameWidth - 30) + "px";
    game.appendChild(apple);

    let appleFall = setInterval(() => {
        apple.style.top = (parseInt(apple.style.top) || 0) + 5 + "px";

        if (parseInt(apple.style.top) > 450) {
            let appleLeft = parseInt(apple.style.left);
            let newtonLeft = parseInt(newton.style.left);

            if (appleLeft > newtonLeft && appleLeft < newtonLeft + 50) {
                alert("Newton got hit! Game Over.");
                location.reload();
            }

            apple.remove();
            clearInterval(appleFall);
        }
    }, 50);
}

// Generate apples every second
setInterval(createApple, 1000);