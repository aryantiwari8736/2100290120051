const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;


app.listen(PORT,()=>{
console.log(`your server is running on ${PORT}`);

})