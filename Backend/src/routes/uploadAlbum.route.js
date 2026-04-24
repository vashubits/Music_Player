const express = require('express')  
const router = express.Router()
const { uploadMusic, createAlbum } = require('../controller/music.controller')
const upload = multer({ storage: multer.memoryStorage() })




router.post('/uploadmusic', upload.fields([
    { name: 'musicFile', maxCount: 1 },
    { name: 'imageFile', maxCount: 1 }
  ]),uploadMusic)
router.post('/createalbum', upload.single('imageFile'),createAlbum)


module.exports = router