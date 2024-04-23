import express from 'express'


const app=express()


app.get("/user",(request,response)=>{
   return response.json({msg:"buscando"})
})

app.get("/user/:id",(request,response)=>{
    const data=Number(request.params.id)
    return response.json({msg:"buscando",data})
 })

app.post("/user",(request,response)=>{
    return response.json({msg:"criando"})
 })

 app.put("/user",(request,response)=>{
    return response.json({msg:"atualizando"})
 })

 app.delete("/user",(request,response)=>{
    return response.json({msg:"deletando"})
 })


 app.listen(8080)