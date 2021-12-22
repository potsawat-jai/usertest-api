import express from "express";
import { showUsers } from "../controller/User.js";
 
// import function from controller
 
// init express router
const router = express.Router();
 
// Get All Product
router.post('/Admin', showUsers);

export default router;