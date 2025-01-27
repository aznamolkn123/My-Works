
function setupStage(cb) {
    console.log("setupStage");
    setTimeout(() => {
        console.log("stage setup completed");
        cb({ mic: 2, chair: 10 })
    }, 6000)
}

//  "guestArray"
function registerGuest(cb) {
    console.log("registerguest");
    setTimeout(() => {
        console.log("guest registered")
        cb(["tom", "harry", "ann"])
    }, 3000)
}
registerGuest((guestArray) => {
    setupStage((stage) => {
        console.log({
            guestArray: guestArray,
            stage: stage

        });
    })
});
