const { Router } = require("express")
const { getLivros, getLivro, postLivro, patchLivro, deletaLivro } = require("../controlers/livro")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deletaLivro)

module.exports = router