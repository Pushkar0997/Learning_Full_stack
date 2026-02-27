import express from 'express'

import { people } from './data.js'

const app = express()


app.get('/api', (req, res) => {
  console.log(req.query)
  res.json(people)
})

app.listen(8000, () => console.log('listening 8000'))

