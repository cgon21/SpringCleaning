let selectedObject = null;

function setup() {
    createCanvas(windowWidth, windowHeight);
    tempObjects = [
        { id: 1, img: loadImage('temp.png'), x: 100, y: 100, w: 100, h: 100 },
        { id: 2, img: loadImage('temp.png'), x: 300, y: 200, w: 100, h: 100 }
    ];
}

function draw() {
    background(255);
    for (let obj of tempObjects) {
        image(obj.img, obj.x, obj.y, obj.w, obj.h);
    }
}

function mousePressed() {
    for (let obj of tempObjects) {
        if (mouseX > obj.x && mouseX < obj.x + obj.w && mouseY > obj.y && mouseY < obj.y + obj.h) {
            selectedObject = obj.id;
            sessionStorage.setItem('selectedObject', JSON.stringify(obj)); // Store object details
            window.location.href = 'chat.html'; // Redirect to chat page
            return;
        }
    }
}
