// Function to update rotation dynamically
function updateRotation(x, y, z,id) {
    var pigModel = document.querySelector(`#${id}`);
    pigModel.setAttribute('rotation', `${x} ${y} ${z}`);
}

function jump(x,y,z,id) {
    var picture = document.querySelector(`#${id}`);
    picture.setAttribute('position', `${x} ${y} ${z}`)
}

let height = 0
let up = true
setInterval(() => {
    if (up && height < 1) {
        height += 0.05
    } else if (height > 0) {
        up = false
        height -= 0.05
    } else {
        up = true
    }
    jump(0,0,-height,"VanGogh")
}, 30)

setTimeout(()=> {
    findMark("markerVan")
},10)

function findMark(id) {
    let mark = document.querySelector(`#${id}`)
    mark.addEventListener("markerFound", () => {
        let pos = getScreenPosition(mark)
        showConfetti()
    })
}

function showConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.6 }
    });
}

function getScreenPosition(marker) {
    let marker3DPos = marker.object3D.position
    console.log(marker3DPos)
}