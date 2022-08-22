// create an empty object to hold the JSON data
let room = {};

// create a new xhr object

let xhr = new XMLHttpRequest();

// use xhr to load the JSON file
xhr.open("GET", "room.json", true);

// tell chr that it's a text file
xhr.responseType = "text";

// create an `onload` callback function that will handle the file loading

xhr.onload = (event) => {
    if (xhr.status === 200) {
        // copy the JSON file into the room object
        rooms = JSON.parse(xhr.responseText);
        console.log("JSON data loaded");

        console.log(rooms.livingRoom.contents);

        // check whether the closet's light is on
        if (rooms.closet.light.on === false) {
            console.log("The closet light is off");
        }
    }
};

xhr.send();

let gameData = {
    playername: "Rooki",
    levelCompleted: 5,
    score: 84,
    items: ["hat", "umbrella", "katana"],
};

let gameDataJSON = JSON.stringify(gameData);

localStorage.setItem("gameData", gameDataJSON);

loadedData = localStorage.getItem("gameData");
let data = JSON.parse(loadedData);

data.items;
