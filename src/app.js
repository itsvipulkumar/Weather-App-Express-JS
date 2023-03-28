const express = require("express");
const path = require("path")
const app = express();
const port = process.env.PORT || 3000;
const pathname = path.join(__dirname, "../public")


app.use(express.static(pathname));
app.get("/", (req, res) => {
    res.send("Welcome to this app")
})

app.get("/about", (req, res) => {
    res.send("Welcome to this about app")
})

app.get("*", (req, res) => {
    res.send("Error Page")
})

app.listen(port, () => [
    console.log("Server is running at 3000")
]);