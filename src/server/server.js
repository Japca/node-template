const express = require('express')
const server = express()

const port = process.env.PORT || 3000

server.use(express.static('public'))

if(process.env.NODE_ENV !== 'procuction') {
   const webpackMiddleware = require('webpack-dev-middleware')
   const webpack = require('webpack')
   const webpackConfig = require('../../webpack.config')
   server.use(webpackMiddleware(webpack(webpackConfig)))
} else {
  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
  })
 }

 
server.listen(port, () => console.log(`Garage player server stared on port: ${port}`))

