class ImageAR {
    constructor(markerUrl, newId, image) {
      this.textNr = 0;
      this.image = image
      this.createImage(markerUrl, newId, this.image.link)
    }
    
    nextText() {
      this.textNr++
      if (this.textNr >= this.image.text.length) this.textNr = 0;
      this.aText.setAttribute("value",this.image.text[this.textNr])
    }
  
    change(newImage) {
      this.image = newImage
      this.textNr = 0
      this.aImage.setAttribute("src",this.image.link)
      this.aText.setAttribute("value",this.image.text[this.textNr])
    }
  
    createImage(markerUrl, newId, imageLink) {
      this.marker = document.createElement('a-marker');
      this.scene = document.getElementById("scene");
      this.marker.setAttribute("type", "pattern");
      this.marker.setAttribute("preset", "custom");
      this.marker.setAttribute("id",newId)
      this.marker.setAttribute("url", markerUrl);
      this.marker.setAttribute("smooth","true")
      this.marker.setAttribute("smoothCount","10")
      this.marker.setAttribute("smoothTolerance",".01")
      this.marker.setAttribute("smoothThreshold","5")
  
      this.aText = document.createElement('a-text');
      this.aText.setAttribute("value",this.image.text[this.textNr])
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
  