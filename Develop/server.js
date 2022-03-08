const fs = require("fs")
const express = require('express');
const path = require("path")
const PORT = 3001;
const app = express();


// app.get('/', (req, res) => {
//   res.send(
   
//   );
// });

// app.get('11-Portfolio\11-Portfolio\Develop\public\notes.html', (req, res) => {
//   res.json({
//   });
// });
app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))

app.get(`/notes`, (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"))
})


app.get(`/api/notes`, (req, res) => {
  fs.readFile("./db/db.json", (err, data)=> {
    if (err){
      console.log(err)
    }
    
    else {
      res.send(data)
    }
  })
})

app.get(`*`, (req, res) => {
res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.listen(PORT, ()=>{
  console.log("listening on port", PORT)
})