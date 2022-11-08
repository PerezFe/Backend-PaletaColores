import express from "express";


const app  = express();

app.set("port", process.env.PORT || 4001);
app.listen(app.get("port"),()=>{
    console.log("Conectado en el puerto "+ app.get("port"))
})

//----------- middlewares --------------

console.log("hola mundo")

//-------------- rutas: nombre de dominio -------------------
// http://localhost:4000/

