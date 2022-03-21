const express = require("express");
const app = express();

const PORT = process.env.PORT || 5456;

app.use(express.static("client"));

//omitted express.json();

app.use(express.json());

app.listen(PORT, () => {
    console.log("server running on port " + PORT);
});