const fs = require('fs');

const livros = JSON.parse(fs.readFileSync('livros.json'))

function getAllLivros() {
    return livros
}

function getLivroId(id) {
    return livros.filter( livro => livro.id === id )[0]
}

function postNewLivro(novoLivro) {
    fs.writeFileSync('livros.json', JSON.stringify([...livros, novoLivro]))
}

function editaLivro(edicao, id) {
    let livrosAtuais = livros
    const indice = livrosAtuais.findIndex(livro => livro.id === id)

    const chanceContent = {...livrosAtuais[indice], ...edicao}

    livrosAtuais[indice] = chanceContent

    fs.writeFileSync('livros.json', JSON.stringify(livrosAtuais))
}

function apagaLivro(id) {
    const livrosFiltro = livros.filter(livro => livro.id !== id)
    fs.writeFileSync('livros.json', JSON.stringify(livrosFiltro))
}

module.exports = {
    getAllLivros,
    getLivroId,
    postNewLivro,
    editaLivro,
    apagaLivro
}