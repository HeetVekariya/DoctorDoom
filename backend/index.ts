const express = require('express');

console.log("Here");

const app = express();

app.listen(3000, () => {
    console.log("Meowing...");
})