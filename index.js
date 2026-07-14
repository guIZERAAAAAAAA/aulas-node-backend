import express from 'express'
import bancoDeDados from './repository/index.js'



// server ou app

////////////////////////////////////////Exercicio 1 SOMAR /////////////////////////////////////
const app = express()
app.use(express.json())

//somar 
app.post("/api/v1/ex1", (req, res) => {

    const { num1, num2 } = req.body
    const resultado = Number(num1) + Number(num2)
//validações quanto ao numero informado po
    res.status (200).send({message : resultado })
    //    res.send (200).send({message : resultado})
})

////////////////////////////////////////////////
const app = express ( )
app.use ( express.json())

app.post("/api/v1/ex2", (req, res) => {

    const { num1, num2 } = req.body

    const resultado = Number(num1) + Number(num2)

    res.status (200).send({message : resultado })

})
 













//subtrair 
app.post("/api/v1/subtrair", (req,res ) => {
    const { num1, num2 } = req.body
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





/////////////////////////////////////////
// // server ou app
// const app = express()
// //- path params - router

// // app.put("/api/pessoa/:id", (req, res) => {
// //     const id = req.params.id

//  const pessoa = bancoDeDados.find(it => it.id == id ) 

// if (!pessoa){
//     res.send({ message : "Pessoas não encontrada "})
//     return
// } 

//    res.send({pessoa})

// })

// app.put("/api/pessoa/",(req,res) => {
// //const name = req.query.id
// //const name = req.query.name pode ser assim mais o debaixo é melhor 
//  const { id , name } = req.query

// //if(id == || name == null ) { ( pode ser assim mas tem outro jeito )
// if( !id || !name ) {
//     res.send({message: " Favor informar id e name " })
//     return
// }


// bancoDeDados.push({id, name })
// res.send({message: "pessoa criada com sucesso " })
// })


// ////////////////////////////////////////////////////////////////////



// app.listen(3000, () => {
//     console.log("Servidor escutando na porta 3000")
// })

//     ////////////////////////////////////////////////////////

