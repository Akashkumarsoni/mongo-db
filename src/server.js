const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/userRoutes');

// To use JSON data
app.use(express.json());
app.use(userRoutes)
const url = 
`mongodb+srv://aakashkumarsoni0786:CrudOperation@123@crud-oprn.a34mk4f.mongodb.net/?retryWrites=true&w=majority&appName=crud-oprn`
mongoose.connect(url).then((conn)=>{
    console.log("Connection stablished");
});

// PORT and HOSTNAME
const port = 1200;
const hostname = 'localhost';

app.listen(port, hostname, ()=>{
    console.log(`Server is up and running on http://${hostname}:${port}`);
})
