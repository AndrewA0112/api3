const express = require('express')

const productsRouter = require('../products/products-router.js')
const suppliersRouter = require('../suppliers/suppliers-router.js')

const server = express()

// global middleware
server.use(express.json())

server.use('/products', productsRouter)
server.use('/suppliers', suppliersRouter)


// route handlers

server.get('/', (req, res) => {
    res.status(200).json({ message: 'api running!'})
});

server.get('/clients', (req, res) => {
    
})

module.exports = server;