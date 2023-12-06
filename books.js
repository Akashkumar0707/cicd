const express = require("express");
const app = express();

app.get('/', (req,res) => {
    res.send("This is the resturant service");
})

app.listen(8787, () => {
    console.log("up and running! -- this is our resturant service");
})