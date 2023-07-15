import express from "express";
const app = express();

app.get("/", (_req, res) => {
    res.send("Hello, World")
});

const port = 8080;
app.listen(port, () => {
    console.log(`Application started: listening on port ${port}`);
});