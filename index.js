const express = require('express')
const app = express()
//console.log(app)
let port = 3000
app.listen(port,()=>{
    console.log(`Server is Running ${port}`)
})

app.get("/",(req,res) => {
console.log("you contacted root path");
});
app.get("/Search",(req,res) => {
    console.log("you contacted search root path");
    });
app.get("/help",(req,res) => {
console.log("you contacted help root path");
});
    app.get("*",(req,res)=>{
        console.log("path not exist");
    });
    app.post("/home",(req,res) => {
        console.log("you contacted the post route path");
        });


//app.use((req,res)=>{
  //  console.log("request received")
    //let code = ("<button>Clickme</button>")
    //res.send(code)
//})