const express = require('express')
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello from Docker!");
});

app.listen(3000, function(){
    console.log('app listening on port 3000');
})