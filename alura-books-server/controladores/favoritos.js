const { getTodosFavoritos, adicionaFavoritoId, deletaFavoritoId } = require("../servicos/favorito")

function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id
        adicionaFavoritoId(id)
        res.status(201)
        res.send('Livro inserido com sucesso')
    }catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorito(req, res){ 
    try{
        const id = req.params.id

        if(id && Number(id)){
            deletaFavoritoId(id)
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
    getFavoritos,
    postFavorito,
    deleteFavorito,
}