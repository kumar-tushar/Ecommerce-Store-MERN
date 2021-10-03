const express=require("express");

const app=express();

const port=8000;

app.get("/", (req, res)=>{ res.send('Homepage') });
app.get("/login", (req, res)=>{ res.send('Login Page') });
app.get("/signup", (req, res)=>{ res.send('SignUp Page') });

app.listen(port, ()=>{ console.log(`Example app listening at http://localhost:${port}`)});
