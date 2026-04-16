const express = require('express')
const router = express.Router()
const allAlbum = require('../controller/musics.controller')


router.get('/artist',allAlbum.findAlbum)
router.get('/music',allAlbum.findSomemusic)
router.post('/:id/musics',allAlbum.findMusic)



module.exports = router