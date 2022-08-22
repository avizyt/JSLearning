let room = {
    door: "open",
    light: "on",
    contents: ["carpet", "mouse", "katana"],
};

// console.log(Object.keys(room));

Object.keys(room).forEach((key) => {
    let val = room[key];
    console.log("key: " + key + ", val: " + val);
});
