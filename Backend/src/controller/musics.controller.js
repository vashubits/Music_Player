const albumModel = require('../model/album.model')
const musicModel = require('../model/music.model')

async function findAlbum(req, res) {
  try {
    const response = await albumModel.find()
    res.send(response)
  } catch (error) {
    res.status(500).send({ message: "Error fetching albums" })
  }
}

async function findMusic(req, res) {
  try {
    const id = req.params.id
    console.log(id)

    const response = await musicModel.find({ userId: id })
    console.log(response)
    res.send(response)

  } catch (error) {
    res.status(500).send({ message: "Error fetching music" })
  }
}

async function findSomemusic(req, res) {
  try {
    const response = await musicModel.find().limit(10)
    res.send(response)

  } catch (error) {
    res.status(500).send({ message: "Error fetching some music" })
  }
}

module.exports = { findAlbum, findMusic, findSomemusic }