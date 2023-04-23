const express = require('express')
const app = express()

app.get("/", (req,res) => {
    console.log("Root");
    res.send("hello root");
})


app.get('/employee',(req,res) =>{
    var emp1 = {
        fname:'ashiq',
        lname:'a',
        emp_type:'CEO',
        salary:'6b'
    }
    res.send("update")
})

app.listen(3000,() => {
    console.log("Server is listening at 3000");
})