// Function to update rotation dynamically
function updateRotation(x, y, z,id) {
    var pigModel = document.querySelector(`#${id}`);
    pigModel.setAttribute('rotation', `${x} ${y} ${z}`);
}

function jump(x,y,z,id) {
    var picture = document.querySelector(`#${id}`);
    picture.setAttribute('position', `${x} ${y} ${z}`)
}

// Example: Change the rotation after 3 seconds
// setTimeout(function() {
//     console.log("hej")
//     updateRotation(90, 0, 0); // Change rotation to 0 90 0
// }, 100);

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