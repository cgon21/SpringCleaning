function setup() {
    noCanvas();
    const selectedObj = JSON.parse(sessionStorage.getItem('selectedObject'));
    const imgContainer = document.getElementById('imageContainer');
    imgContainer.innerHTML = `<img src="temp.png" style="width: auto; height: 50vh; position: relative; top: -10vh;">`;

    if (!selectedObj) {
        window.location.href = 'game.html'; // Redirect back if no object is selected
    }
}

function goBack() {
    window.location.href = 'game.html';
}

function removeObjectAndGoBack() {
    let remainingObjects = JSON.parse(sessionStorage.getItem('remainingObjects')) || [];
    remainingObjects = remainingObjects.filter(obj => obj.id !== JSON.parse(sessionStorage.getItem('selectedObject')).id);
    sessionStorage.setItem('remainingObjects', JSON.stringify(remainingObjects));
    window.location.href = 'game.html';
}
