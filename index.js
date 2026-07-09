import express from 'express'

// server ou app
const app = express()

//somar 
app.get("/api/v1/somar", (req, res) => {

    const { num1, num2 } = req.query
    const resultado = Number(num1) + Number(num2)
//validações quanto ao numero informado 
    res.status (200).send({message : resultado })
    //    res.send (200).send({message : resultado})
})


//subtrair 

app.get("/api/v1/subtrair", (req,res ) => {
    const { num1, num2 } = req.query 
    const resultado = Number(num1) - Number(num2)
    res.status (200).send ({message : resultado })
})


//mult


app.get ("/api/v1/multiplicasao" ,(req,res) => {
const { num1, num2 } = req.query
const resultado = Number(num1) * (num2) 
res.status (200).send ({message : resultado })})  




//div 


app.get ("/api/v1/divisao" ,(req,res) => {
const { num1, num2 } = req.query
const resultado = Number(num1) / (num2) 
res.status (200).send ({message : resultado })})  


app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000")
})

