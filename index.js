import express from 'express'
import bancoDeDados from './repository/index.js'

// server ou app
const app = express()
//- path params - router

app.put("/api/pessoa/:id", (req, res) => {
    const id = req.params.id

 const pessoa = bancoDeDados.find(it => it.id == id ) 

if (!pessoa){
    res.send({ message : "Pessoas não encontrada "})
    return
} 

   res.send({pessoa})

})

app.put("/api/pessoa/",(req,res) => {
//const name = req.query.id
//const name = req.query.name pode ser assim mais o debaixo é melhor 
 const { id , name } = req.query

//if(id == || name == null ) { ( pode ser assim mas tem outro jeito )
if( !id || !name ) {
    res.send({message: " Favor informar id e name " })
    return
}


bancoDeDados.push({id, name })
res.send({message: "pessoa criada com sucesso " })
})


////////////////////////////////////////////////////////////////////


















app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000")
})

    ////////////////////////////////////////////////////////

