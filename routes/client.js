const express = require('express');
const router = express.Router();
const{signIn,createClient}=require("../controller/client");

router.post("/signup", createClient);
router.post("/signin",signIn);

module.exports=router;