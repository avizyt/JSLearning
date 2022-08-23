function resolveAfter2Sec() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolved");
        }, 2000);
    });
}

async function asyncCall() {
    console.log("calling");
    const res = await resolveAfter2Sec();
    console.log(res);
}

asyncCall();
