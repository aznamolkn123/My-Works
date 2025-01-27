console.log("start");

let stageData, guestList, foodData;
// Function definitions:

// 1. setupStage()
// "{ mic: 2, chair: 10 }"
function setupStage(stage) {
    return new Promise((resolve, reject) => {
        console.log("setupStage")
        setTimeout(() => {
            console.log("stage setup completed");
            resolve(stage)
        }, 2000);
    })

}

// 2. registerGuest()
// ["tom", "harry", "ann"]
function registerGuest(guests) {
    return new Promise((resolve, reject) => {
        console.log("registerGuest");
        setTimeout(() => {
            console.log("guests registered");
            resolve(guests)
        }, 3000);
    })
}



// 3. prepareFood()
// "{rice: 'biriyani', curry: 'chicken', fry: 'beef'}"
function prepareFood(food) {
    return new Promise((resolve, reject) => {
        console.log("prepareFood");
        setTimeout(() => {
            console.log("food prepared");
            resolve(food)
        }, 5000);
    })
}

// 4. seatGuest()
// true
function seatGuest(seated) {
    return new Promise((resolve, reject) => {
        console.log("seatGuest");
        setTimeout(() => {
            console.log("guests seated");
            resolve(seated)
        }, 4000);
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

// Callback chain to ensure sequential execution:
setupStage({ mic: 2, chair: 10 })
    .then((stage) => {
        console.log("Stage setup:", stage);
        stageData = stage;
        return registerGuest(["tom", "harry", "ann"])
    }).then((guests) => {
        console.log("Guests registered:", guests);
        guestList = guests;
        return prepareFood({ rice: "biriyani", curry: "chicken", fry: "beef" })
    }).then((food) => {
        console.log("Food prepared:", food);
        foodData = food;
        return seatGuest(true)
    }).then((seated) => {
        console.log("Guests seated:", seated);
        // Finally, start the program with all the gathered data
        startProgram(stageData, guestList, foodData, seated);
    })
