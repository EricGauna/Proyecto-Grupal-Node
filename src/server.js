require("dotenv").config();
const cors = require("cors");
const express =require("express");
const fileUpload = require("express-fileupload");

const { PORT } = process.env;

/* const { 

} */

// Cotrollers 



// Middlewares

const {
    handle404,
    handleErrors
} =require("./Middlewares")


const app = express();

app.use(express.json());
app.use(fileUpload());

// Endpoints:








app.use(handle404);

app.use(handleErrors);

app.listen(PORT, () =>{
    console.log("Server listening on port:",` ${PORT}`);
} );



