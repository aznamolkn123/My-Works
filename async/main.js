// assembling a program
// prepare food
// seat guests
// setup stage
// register guests
// start the program

// setupStage(); // 6
// registerGuest(); // 3
// prepareFood(); // 5
// seatGuest(); // 5 
// startProgram(); // 15

// synchronous
// how do we return the result of asynchrnous operation
// return statment only works with synchronous
console.log("start");

// "stage"
function setupStage(cb) {
    console.log("setupStage");
    setTimeout(() => {
        console.log("stage setup completed");
        cb({ mic: 2, chair: 10 })
    }, 6000)
}

setupStage((stage) => {
    console.log(stage);
});

//  "guestArray"
function registerGuest() {
    console.log("registerguest");
    setTimeout(() => {
        console.log("guest registered")
    }, 3000)
}

//food
function prepareFood() {
    console.log("preparefood");

    setTimeout(() => {
        console.log("food prepared")
    }, 7000)
}

//allGuestSeated
function seatGuest() {
    console.log("guest seated");
    setTimeout(() => {
        console.log("guest seated")
    }, 4000)
}

function startProgram() {

}

registerGuest();
prepareFood();
seatGuest(); 