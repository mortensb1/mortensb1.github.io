let mouseX
let mouseY

let touchstartX = 0
let touchendX = 0

let images = [
  {link: "Images/Cat.jpg", text: ["Dette er en kat", "Den er gul"]}, 
  {link: "Images/Monumental_Figure.jpg", text: ["Dette er en gris", "Den er pink"]}, 
  {link: "Images/abstrakt.jpg", text: ["Dette er et abstrakt billede", "Den er farver"]}, 
  {link: "Images/autumn.jpg", text: ["Dette er et maleri", "Den er forskellige farver"]}, 
  {link: "Images/VanGogh.jpg", text: ["Dette er Starry night", "Den er blaa"]}
]

function updateText(event) {
  image1.nextText();
  image2.nextText();
  mouseX = event.clientX;
  mouseY = event.clientY;

}

function changeImage() {
  image1.change(images[Math.floor(Math.random() * images.length)])
  image2.change(images[Math.floor(Math.random() * images.length)])
}

function swipeMouse(event) {
  if (10 < event.clientX - mouseX || -10 > (event.clientX - mouseX)) {
    changeImage()

  }
}
    
function swipeFinger() {
  if (touchendX < touchstartX || touchendX > touchstartX) {
    changeImage()
  }
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  swipeFinger()
})

setTimeout(()=> {
  image1 = new ImageAR("Marker/chat.patt", "Gris", images[0])
  image2 = new ImageAR("Marker/pattern-marker.patt", "Cat", images[1])
  let mark = document.querySelector(`#Gris`)

  mark.addEventListener("markerFound", () => {
      showConfetti()
  })
},1)

function showConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: 0.5, y: 0.6 }
  });
}