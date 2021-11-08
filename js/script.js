
const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create a 2D context to render the animation
let l = canvas.getContext('2d');

/*
x and y: coordinates of the centre of the circle
vx and vy: the respective speeds/ displacement in each direction
*/
let x = Math.floor(Math.random() * innerWidth);
let y = Math.floor(Math.random() * innerHeight);

// Predefined trajectory
let vx = 2;
let vy = 3;
/*
For random paths
let vx = Math.floor(Math.random() * 2);
let vy = Math.floor(Math.random() * 4);
*/
let radius = 20;

move();

// Create a function to define the animation
function move() {
    requestAnimationFrame(move);

    // Clear the specified pixels in the canvas
    l.clearRect(0, 0, innerWidth, innerHeight);

    // Create the circle
    l.beginPath();
    l.strokeStyle = "black";
    l.arc(x, y, radius, 0, Math.PI * 2, false);
    l.stroke();

    // Conditionals to ensure that the ball bounces off from the edges, to stay within the frame
    if (radius + x > innerWidth || x - radius < 0)
    // turn around in the other direction
        vx =  -1*vx;

    if (y + radius > innerHeight || y - radius < 0)
        vy = -1*vy;

    x += vx;
    y += vy;

}
