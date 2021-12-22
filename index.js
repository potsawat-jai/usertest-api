// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
import Router from "./routes/routes.js";
 
// init express
const app = express();
 sda
// use express json
app.use(express.json());
 
// use cors
app.use(cors());
 
// use router
app.use(Router);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`)); 