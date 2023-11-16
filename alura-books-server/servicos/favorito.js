const fs = require('fs')

const livros = JSON.parse(fs.readFileSync('favoritos.json'))

function getTodosFavoritos(){
    return livros
}

function deletaFavoritoId(id) {
    const livrosFiltrados = livros.filter(livro => livro.id != id)
    fs.writeFileSync('favoritos.json', JSON.stringify(livrosFiltrados))
}

function adicionaFavoritoId(id) {
    const livrosAll = JSON.parse(fs.readFileSync('livros.json'))
    
    const livroInserido = livrosAll.find(livro => livro.id === id)
    const novaListaFavoritos = [...livros, livroInserido]
    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoId,
    adicionaFavoritoId
}