// function add(a, b) {
//     return new Promise((resolve, reject) => {
//         if (a === 0) {
//             reject("first number is zero")
//         } else {
//             resolve(a + b)
//         }
//     })
// }
// function multippil(c, d,) {
//     return new Promise((resolve, reject) => {
//         resolve(c * d)
//     })
// }

// function dividing(e, f) {
//     return new Promise((resolve, reject) => {
//         resolve(e / f)
//     })
// }

// add(1, 5).then((sum) => {
//     console.log(sum);
//     return multippil(sum, 2);
// }).then((multippil) => {
//     console.log(multippil);
//     return dividing(multippil, 2)
// }).then((dividing) => {
//     console.log(dividing);
// })

// Function definitions:
// 1. setupStage()
// "{ mic: 2, chair: 10 }"
function setupStage() {
    return new Promise((resolve, reject) => {
        console.log("setupStage");
        setTimeout(() => {
            console.log("stage setup completed");
            resolve({ mic: 2, chair: 10 });
        }, 2000)

    })

}
// 2. registerGuest()
// ["tom", "harry", "ann"]
function registerGuest() {
    return new Promise((resolve, reject) => {
        console.log("registerGuest");
        setTimeout(() => {
            console.log("guests registered");
            resolve(["tom", "harry", "ann"]);
        }, 3000)
    })
}
// 3. prepareFood()
// "{rice: 'biriyani', curry: 'chicken', fry: 'beef'}"
function prepareFood() {
    return new Promise((resolve, reject) => {
        console.log("prepareFood");
        setTimeout(() => {
            console.log("food prepared");
            resolve({ rice: "biriyani", curry: "chicken", fry: "beef" });
        }, 5000)
    })
}
// 4. seatGuest()
// true
function seatGuest() {
    return new Promise((resolve, reject) => {
        console.log("seatGuest");
        setTimeout(() => {
            console.log("guests seated");
            resolve(true);
        }, 4000)
    })
}
// 5. startProgram
function startProgram(stage, guests, food, seated) {
    console.log("\n--- All preparations done, starting the program ---");
    console.log("Stage:", stage);
    console.log("Guests:", guests);
    console.log("Food:", food);
    console.log("Guests seated:", seated);
    console.log("Program started!");
}
//chaining 
// setupStage((stage) => {
//     console.log("Stage setup:", stage);
//     return registerGuest(stage)
// }).then((guests) => {
//     console.log("Guests registered:", guests);
//     return prepareFood(guests)
// }).then((food) => {
//     console.log("Food prepared:", food);
//     return seatGuest(food)
// }).then((seated) => {
//     console.log("Guests seated:", seated);
//     return startProgram(stage, guests, food, seated);
// })

Promise.all([setupStage(), registerGuest(), prepareFood(), seatGuest()])
    .then(([stage, guests, food, seated]) => {
        startProgram(stage, guests, food, seated);
    })