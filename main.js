let mouseX
let mouseY

let touchstartX = 0
let touchendX = 0

let images = [
  {link: "Images/Mona Lisa.jpg", text: ["Mona Lisa (1503)", "Den er malet af Leonardo Da Vinci"]}, 
  {link: "Images/Monumental_Figure.jpg", text: ["Dette er en gris", "Den er pink"]}, 
  {link: "Images/abstrakt.jpg", text: ["Dette er et abstrakt billede", "Den er farver"]}, 
  {link: "Images/autumn.jpg", text: ["Dette er et maleri", "Den er forskellige farver"]}, 
  {link: "Images/VanGogh.jpg", text: ["Dette er Starry night", "Den er blaa"]}
]

let markerlinks = [
  "pattern-marker.patt", "pattern-AR.patt", "chat.patt"
]

function updateText(event) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].nextText();
  }
  mouseX = event.clientX;
  mouseY = event.clientY;

}

function changeImage() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].change(images[Math.floor(Math.random() * images.length)])
  }
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
  markers = []
  for (let i = 0; i < markerlinks.length; i++) {
    markers.push(new ImageAR("Marker/"+markerlinks[i], String(Math.random(0,100)), images[i]))
  }
  console.log(markers)
  // markers = [
  //   new ImageAR("Marker/chat.patt", "Gris", images[2]),
  //   new ImageAR("Marker/pattern-marker.patt", "Cat", images[1]),
  //   new ImageAR("Marker/pattern-AR.patt", "Mat", images[0])
  // ]

  // let mark = document.querySelector(`#Gris`)
  // mark.addEventListener("markerFound", () => {
  //     showConfetti()
  // })
},1)

setTimeout(()=> {

},4000)

function showConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: 0.5, y: 0.6 }
  });
}