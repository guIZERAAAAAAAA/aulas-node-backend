import express from "express"
                                                                       //server ou app 
const app = express()
               
// configura uma rota para o metodo HTTP GET na raiz ("/") do aplicativo 


app.get("/api/v1/somar", (req, res ) => {

console.log({ })

const num1 = Number(req.query.num1)
const num2 = Number(req.query.num2)
const resultado = num1 + num2
                                                                       // retorna uma resposta JSON contendo uma mensagem "Hello world"
    res.send({  resultado  })
} )
                                                                       // inicia o servidor express na porta 3000 e define uma função de retorno de chamada
app.listen(3000, () => {
                                                                       // exibe uma mensagem no console quando o servidor estiver ativo 
    console.log("Servidor ouvindo na porta 3000 ")
} )

//////////////////////////////////////////desafio ////////////////////////////////////////////////////////////





