import express from "express";
import bodyParser from "body-parser";
import { chat } from "./src/chat.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.post('/chat/completions', async (req, res) => {
    console.log(req.body);
    res.send(await chat(req.body));
});

app.listen(PORT, () => {
    console.log('Express server is up');
});