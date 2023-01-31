const ControladorProducts = require('../controllers/products.controllers')

module.exports = (app) =>{
    app.get('/api/obtenerproducto', ControladorProducts.getProduct) 
    app.post('/api/crearproducto', ControladorProducts.createProduct) 
    app.put('/api/editarproducto/:id', ControladorProducts.editProduct)
    app.delete('/api/borrarproducto/:id', ControladorProducts.deleteProduct)
}
