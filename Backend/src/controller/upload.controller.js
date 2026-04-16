const ImageKit = require("@imagekit/nodejs")
const musicModel = require('../model/music.model')
const albumModel = require('../model/album.model')



async function uploadMusic(req, res) {
  try {
    const imagekit = new ImageKit({
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY
    })

    const user = req.user
    const file = req.file

    if (req.user.role !== 'artist') {
      return res.status(403).json({ message: "Only artist can upload music" })
    }

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" })
    }

    const response = await imagekit.files.upload({
      file: file.buffer.toString('base64'),
      fileName: file.originalname,
      folder: '/Music_Player/Music'
    })

    await musicModel.create({
      uri: response.url,
      musicName: req.body.musicName,
      userId: user.id
    })

    res.status(200).json({
      message: "Upload successful"
    })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}



async function createAlbum(req, res) {
  const albumName  = req.body.albumName
  const file = req.file
 

  const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
  })

  if (req.user.role !== 'artist') {
    return res.status(403).json({ message: "Only artist can create album" })
  }

  

  if (!file) {
    return res.status(400).json({ message: "No file uploaded" })
  }

  try {
    const response = await imagekit.files.upload({
      file: file.buffer.toString('base64'),
      fileName: file.originalname,
      folder: '/Music_Player/Album'
    })

    await albumModel.create({
      uri: response.url,
      albumName,
      userId: req.user.id
    })

    res.status(200).json({
      message: "album create successfull"
    })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}



module.exports = { uploadMusic, createAlbum }