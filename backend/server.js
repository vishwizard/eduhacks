const express = require('express');
    const app = express();
    PORT = process.env.PORT || 3000;

    app.use(express.json());

    app.get("/", (req,res)=>{
        res.send("OK Tested");
    })

    app.listen(PORT, ()=>{
        console.log("Listening on Port : " + PORT);
    })