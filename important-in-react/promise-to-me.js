const event = new Promise((resolve, reject) => {
    let name = "avijit";
    if (name == "Avijit") {
        resolve(name);
    } else {
        reject("Name was not Avijit: " + name);
    }
});

// Every promise object gas two function as props
// resolve() and reject()

// and every promise is successfully resolve will provided by then() and if rejected by will provided by catch().

event
    .then((name) => {
        console.log(name);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Promes complete...");
    });
