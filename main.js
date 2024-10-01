function createImage(imageUrl, newId, newText, imageLink) {
    marker = document.createElement('a-marker');
    scene = document.getElementById("scene");
    marker.setAttribute("type", "pattern");
    marker.setAttribute("preset", "custom");
    marker.setAttribute("id",newId)
    marker.setAttribute("url", imageUrl);
    marker.setAttribute("smooth","true")
    marker.setAttribute("smoothCount","10")
    marker.setAttribute("smoothTolerance",".01")
    marker.setAttribute("smoothThreshold","5")

    aText = document.createElement('a-text');
    aText.setAttribute("value",newText)
    aText.setAttribute("rotation","270 270 90")
    aText.setAttribute("position","0 0 1.2")
    aText.setAttribute("align","center")
    marker.appendChild(aText)

    aImage = document.createElement('a-image');
    aImage.setAttribute("rotation","90 180 0")
    aImage.setAttribute("position","0 0 0")
    aImage.setAttribute("scale","2 2")
    aImage.setAttribute("src",imageLink)
    marker.appendChild(aImage)

    scene.appendChild(marker)
}
function updateRotation(x, y, z, id) {
    var pigModel = document.querySelector(`#${id}`);
    pigModel.setAttribute('rotation', `${x} ${y} ${z}`);
}

function jump(x, y, z, id) {
    var picture = document.querySelector(`#${id}`);
    picture.setAttribute('position', `${x} ${y} ${z}`)
}

setInterval(() => {
}, 30)

setTimeout(()=> {
    createImage("Marker/chat.patt", "test", "Maleri", "Images/Monumental_Figure.jpg")

    let mark = document.querySelector(`#test`)

    mark.addEventListener("markerFound", () => {
        showConfetti()
    })
},10)

function showConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.6 }
    });
}