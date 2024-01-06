const express = require("express")
const app = express()
const mysql = require("mysql")

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '02022006',
    database: 'tarefas'
})

app.use(express.json())

connection.connect((err)=>{
    if(err){console.error(err)
    }else{
        console.log("Conectado ao banco de dados")
    }
    app.listen(3000,()=>console.log("Servidor rodando"))
})

app.get("/tarefas",(req,res)=>{
    const sql = "SELECT * FROM confg_tarefas "
    connection.query(sql,(erro,resultado)=>{
        if(erro){console.error("Erro na solicitacao",erro)
    }else{
        res.json(resultado)
        console.log("Tarefas carregadas com sucesso")
    }
    })
})

app.post("/tarefas",(req,res)=>{
    tarefa = req.body
    console.log(req.body)
    const sql = `INSERT INTO confg_tarefas (titulo_tarefa,filtro_tarefa,dias_tarefa) VALUES(?,?,?)`
    connection.query(sql,[tarefa.titulo_tarefa,tarefa.filtro_tarefa,tarefa.dias_tarefa],(erro,resultado)=>{
        if(erro){console.error("Deu erro na adicao da tarefa",erro)
        }else{
            res.status(201).send("Tarefa adicionada com sucesso")
            console.log("Tarefa adicionada com sucesso")
        }
    })
})

app.delete("/tarefas/:id",(req,res)=>{
    let id = req.params.id
    sql = "DELETE FROM confg_tarefas WHERE id_tarefa = ?"
    connection.query(sql,id,(erro)=>{
        if(erro){console.log("Erro na remocao de uma tarefa",erro)}else{
            res.status(200).send("Tarefa deletada com sucesso")
            console.log("Tarefa deletada com sucesso")
        }
    })
})

app.put("/tarefas/:id",(req,res)=>{
    const sql = "UPDATE confg_tarefas SET titulo_tarefa=?,filtro_tarefa=?,dias_tarefa=? WHERE id_tarefa = ?"
    connection.query(sql,[req.body.titulo_tarefa,req.body.filtro_tarefa,req.body.dias_tarefa,req.params.id],(erro,resultado)=>{
        if(erro){console.error("Deu erro na atualizacao da tarefa",erro)
        }else{
            res.status(200).send("Tarefa atualizada com sucesso")
            console.log("Tarefa atualizada")
        }
    })
})