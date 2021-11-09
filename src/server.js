import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    return res.send("/")
});
app.get("/login", (req, res) => {
    return res.send("login here.");
});

app.listen(PORT, () => console.log(`Server listening on port htt://localhost:${PORT}`));