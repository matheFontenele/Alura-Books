const fs = require('fs')

const livros = JSON.parse(fs.readFileSync('livros.json'))

function getTodosLivros(){
    return livros
}

function getLivroId(id){
    const livroFiltrado = livros.filter( livro => livro.id === id )[0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const novaListaLivros = [...livros, livroNovo]

    fs.writeFileSync('livros.json', JSON.stringify(novaListaLivros))
}

function editaLivro(edicoes, id) {
    let livrosAtuais = livros
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = {...livrosAtuais[indiceModificado], ...edicoes}

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync('livros.json', JSON.stringify(livrosAtuais))
}

function deletaLivro(id) {
    const livrosFiltrados = livros.filter(livro => livro.id !== id)
    fs.writeFileSync('livros.json', JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivroId,
    insereLivro,
    editaLivro,
    deletaLivro
}