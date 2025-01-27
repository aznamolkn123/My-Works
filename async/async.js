function setupStage(num, cb) {
    console.log("setupStage");
    setTimeout(() => {
        console.log("stage setup completed");
        if (num === 10) {
            cb(new Error("stage setup failed"), null);
        } else {
            cb(null, { mic: 2, chair: 10 });

        }
    }, 2000);
}

setupStage(11, (err, data) => {
    if (err) {
        console.log("error happend");
        console.log(err);

    } else {
        console.log(data);
    }
})


