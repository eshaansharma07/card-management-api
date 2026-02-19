require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());
app.use(express.static("public"));

// MongoDB Connect
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// Schema
const cardSchema = new mongoose.Schema({
    title:String,
    description:String
});

const Card = mongoose.model("Card",cardSchema);

// ADD CARD
app.post("/cards",async(req,res)=>{

    const {title,description} = req.body;

    const newCard = new Card({
        title,
        description
    });

    await newCard.save();

    res.json({message:"Card Added"});
});

// GET ALL CARDS
app.get("/cards",async(req,res)=>{

    const cards = await Card.find();

    res.json(cards);
});

// DELETE CARD
app.delete("/cards/:id",async(req,res)=>{

    await Card.findByIdAndDelete(req.params.id);

    res.json({message:"Deleted"});
});

// PORT FIX FOR RAILWAY
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Server Running");
});
