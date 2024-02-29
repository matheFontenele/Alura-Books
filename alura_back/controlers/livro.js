const { getAllLivros, getLivroId, postNewLivro, editaLivro, apagaLivro } = require('../servs/livro');


function getLivros(req, res) {
    try {
        const livros = getAllLivros()
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
            } else {
                res.status(422)
                res.send('Livro não encontrado')
            }
        } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const novoLivro = req.body
            if(req.body.nome) {
                postNewLivro(novoLivro)
                res.status(201)
                res.send('Tome mais um livro')
            }else{
                res.status(422)
                res.send('insere o negocio certo man')
            }
        } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try{
        const id = req.params.id
            if(id && Number(id)){
                const body = req.body
        
                editaLivro(body, id)
                res.send('editaivos')
            }else{
                res.status(422)
                res.send('Livro não encontrado')
            }
    }catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deletaLivro(req, res) {
    try{
        const id = req.params.id
            if(id && Number(id)){
                apagaLivro(id)
                res.send('deletaivos')
            }else{
                res.status(422)
                res.send('Livro não encontrado')
            }
    }catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deletaLivro
}