const { getTodosLivros, getLivroId, insereLivro, editaLivro, deletaLivro } = require('../servicos/livro')

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)){
            const livro = getLivroId(id)
            res.send(livro)
        }else{
            res.status(422)
            res.send('Insira um id valido')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        if(req.body.nome && req.body.id){
            insereLivro(livroNovo)
            res.status(201)
            res.send('Livro inserido com sucesso')
        }else{
            res.status(422)
            res.send("Preencha todos os campos")
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function pathLivro(req, res) {
    try{
        const id = req.params.id

        if(id && Number(id)){
            const body = req.body
            editaLivro(body, id)
            res.send('Item modificado com sucesso')
        }else{
            res.status(422)
            res.send('Insira um id valido')
        }
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res){ 
    try{
        const id = req.params.id

        if(id && Number(id)){
            deletaLivro(id)
            res.send('Livro deletado com sucesso')
        }else{
            res.status(422)
            res.send('Insira um livro ID valido')
        }
        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    pathLivro,
    deleteLivro
}