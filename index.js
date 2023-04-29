const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000 ;

app.use(cors())


const categories = require('./Data/categories.json')

app.get('/', (req, res) => {
    res.send('Dragon is runnig')
  })
  
  app.get('/categories', (req , res) =>{
    res.send(categories)
  })

  app.listen(port, () => {
    console.log(`Dragon API is running on port ${port}`)
  })