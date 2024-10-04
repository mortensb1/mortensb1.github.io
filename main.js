let mouseX
let mouseY

class ImageAR {
    constructor(imageUrl, newId, newText, imageLink) {
        this.textArr = newText;
        this.textNr = 0;
        this.createImage(imageUrl, newId, imageLink)
        
    }
    
    nextText() {
        this.textNr++
        if (this.textNr >= this.textArr.length) this.textNr = 0;
        this.aText.setAttribute("value",this.textArr[this.textNr])
    }

    change(newImage) {
        this.aImage.setAttribute("src",newImage)
    }

    createImage(imageUrl, newId, imageLink) {
        this.marker = document.createElement('a-marker');
        this.scene = document.getElementById("scene");
        this.marker.setAttribute("type", "pattern");
        this.marker.setAttribute("preset", "custom");
        this.marker.setAttribute("id",newId)
        this.marker.setAttribute("url", imageUrl);
        this.marker.setAttribute("smooth","true")
        this.marker.setAttribute("smoothCount","10")
        this.marker.setAttribute("smoothTolerance",".01")
        this.marker.setAttribute("smoothThreshold","5")
    
        this.aText = document.createElement('a-text');
        this.aText.setAttribute("value",this.textArr[this.textNr])
        this.aText.setAttribute("rotation","270 270 90")
        this.aText.setAttribute("position","0 0 1.2")
        this.aText.setAttribute("align","center")
        this.marker.appendChild(this.aText)
    
        this.aImage = document.createElement('a-image');
        this.aImage.setAttribute("rotation","90 180 0")
        this.aImage.setAttribute("position","0 0 0")
        this.aImage.setAttribute("scale","2 2")
        this.aImage.setAttribute("src",imageLink)
        this.marker.appendChild(this.aImage)
    
        this.scene.appendChild(this.marker)
    }
}

setInterval(() => {

}, 10)

function updateText(event) {
    image1.nextText();
    image2.nextText();
    mouseX = event.clientX;
    mouseY = event.clientY;

}

function changeImage(event) {
    if (100 < event.clientX - mouseX || -100 > (event.clientX - mouseX)) {
        image1.change("Images/Cat.jpg")
        image2.change("Images/Monumental_Figure.jpg")
    }
}

setTimeout(()=> {
    image1 = new ImageAR("Marker/chat.patt", "Gris", ["Dette er en gris", "Den er pink"], "Images/Monumental_Figure.jpg")
    image2 = new ImageAR("Marker/pattern-marker.patt", "Cat", ["Dette er en cat", "Den er gul"], "Images/Cat.jpg")

    let mark = document.querySelector(`#Gris`)

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