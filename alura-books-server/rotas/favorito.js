const { Router } = require('express')
const { getFavoritos, postFavorito, deleteFavorito } = require('../controladores/favoritos')

const router = Router()

router.get('/', getFavoritos)
router.get('/:id', getFavoritos)

router.post('/', postFavorito)

router.delete('/:id', deleteFavorito)

module.exports = router