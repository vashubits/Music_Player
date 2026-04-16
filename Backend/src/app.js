const express = require('express')
const authRouter = require('./routes/auth.route')
const cookieParser = require('cookie-parser')
const app = express()
const cors = require('cors')
const multer = require('multer')
const homeRouter = require('./routes/musics.route')
const authMiddleware = require('./middleware/auth.middleware')
const musicRouter = require('./routes/upload.route')


const upload = multer({storage:multer.memoryStorage()})
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use('/api/auth', authRouter)
app.use('/api',homeRouter)
app.use('/api/music',authMiddleware,upload.single('file'), musicRouter)

module.exports = app