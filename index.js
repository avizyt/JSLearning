const axios = require("axios");
const data = axios.get("https://cat-fact.herokuapp.com/facts");
data.then((res) => {
    console.log(res);
})
    .catch((err) => {
        console.log(err.data);
    })
    .finally(() => {
        console.log("Promise resolved...");
    });
// console.log(data);
