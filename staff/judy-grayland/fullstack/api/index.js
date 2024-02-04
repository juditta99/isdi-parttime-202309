require('../api.3/node_modules/.pnpm/dotenv@16.4.1/node_modules/dotenv/lib/main').config()

const mongoose = require('mongoose')
const express = require('express')

const cors = require('./utils/cors')

const {
  registerUserHandler,
  authenticateUserHandler,
  retrieveUserHandler,
  retrievePostsHandler,
  retrieveFavPostsHandler,
  createPostHandler,
  toggleLikePostHandler,
  toggleFavPostHandler,
} = require('./handlers')

// antes de montar el server, conectamos con mongoose
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    const server = express()

    server.get('/', (req, res) => res.send('hello world'))

    const jsonBodyParser = express.json()

    // sacamos los headers a una función en utils
    server.use(cors)

    // sacamos todos los endpoints a funciones en handlers

    server.post('/users', jsonBodyParser, registerUserHandler)

    server.post('/users/auth', jsonBodyParser, authenticateUserHandler)

    server.get('/users', retrieveUserHandler)

    server.get('/posts', retrievePostsHandler)

    server.get('/posts/favs', retrieveFavPostsHandler)

    server.post('/posts', jsonBodyParser, createPostHandler)

    server.patch('/posts/:postId/likes', toggleLikePostHandler)

    server.patch('/posts/:postId/favs', toggleFavPostHandler)

    //le decimos al servidor que escuche en el puerto 8000, y que cuando arranque, nos envíe un chivato - un console.log
    server.listen(process.env.PORT, () =>
      console.log(`server running on port ${process.env.PORT}`)
    )
  })
  .catch((error) => console.error(error))
