const express = require('express')
const api = require('./api')
const middleware = require('./middleware')
const bodyParser = require('body-parser')


const port = process.env.PORT || 3000
const app = express()
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())
app.use(middleware.cors)
app.get('/', api.handleRoot)
app.get('/products', api.listProducts)
app.get('/products/:id', api.getProduct)
app.put('/products/:id', api.editProduct)
app.delete('/products/:id', api.deleteProduct)
app.post('/products', api.createProduct)

app.get('/orders', api.listOrders)
app.get('/orders/', api.createOrder)
app.get('/orders/', api.editOrder)
app.get('/orders/', api.deleteOrder)
app.listen(port, () => console.log(`Server listening on port ${port}`))