const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI('AIzaSyAfjTbxg1nFrxUKnodnJXwn3HKQDYizhbs');
console.log(genAI);
const app = express();
PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("OK Tested");
})

app.post("/generate", async (req, res) => {
    try {
        const { prompt } = req.body;
        console.log(prompt);
        const model = genAI.getGenerativeModel({ model: "text-embedding-004" });
        const result = await model.embedContent(prompt);
        const embedding = result.embedding;
        res.json({ embedding: embedding.values });
    }
    
catch(error){
    console.error(error);
    res.status(500).send("Error Generating Response");
}});

app.listen(PORT, () => {
    console.log("Listening on Port : " + PORT);
})