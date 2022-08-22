let gameData = {
    playername: "Rooki",
    levelCompleted: 5,
    score: 84,
    items: ["hat", "umnrella", "katana"],
};

let gameDataJSON = JSON.stringify(gameData);

localStorage.setItem("gameData", gameDataJSON);

loadedData = localStorage.getItem("gameData");
let data = JSON.parse(loadedData);

console.log(data.items);
