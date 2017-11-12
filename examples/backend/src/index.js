const app = require('express')()

app.get('/', (req, res) => {
  return res.json({success: true, message: 'Hello world'})
})

module.exports={path: '/', handler: app}