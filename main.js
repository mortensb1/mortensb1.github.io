// Function to update rotation dynamically
function updateRotation(x, y, z) {
    var pigModel = document.querySelector('#image1');
    pigModel.setAttribute('rotation', `${x} ${y} ${z}`);
}

function jump(x,y,z) {
    var picture = document.querySelector('#image1');
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
    jump(0,0,-height)
}, 30)