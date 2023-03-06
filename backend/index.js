const mysql = require('mysql')
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const port = 3300

const db = mysql.createPool({
  server: 'localhost',
  database: 'jameshop',
  user: 'root',
  password: ''
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

// SELECT ALL FROM PRODUCTS
app.get('/', (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    res.send(result)
  })
})

// POST PRODUCT
app.post('/api/insert', (req, res) => {
  const itemName = req.body.name;
  const itemPrice = req.body.name;
  const itemCategory = req.body.name;
  const itemPhoto = req.body.name;
  // db.query("SELECT * FROM products", (err, result) => {
  //   res.send(result)
  // })
  res.send(itemName)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})