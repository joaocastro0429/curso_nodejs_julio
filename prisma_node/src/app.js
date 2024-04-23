const express =require('express')


const app=express()

app.get("/",(request,response)=>{
    return response.send("Hello world")

})

app.get("/user/:nome/sobrenome/:sobrenome",(request,response)=>{

    return response.send({
        nome:request.params.nome,
        sobrenome:request.params.sobrenome

    })
})

app.listen(8080,()=>{
    console.log("Servidor rodando")
})