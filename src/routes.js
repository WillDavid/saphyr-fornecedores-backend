import express from 'express'
import suppliers from './controllers/suppliersControllers.js'

const routes = express.Router()

routes.get('/listAllSuppliers',  suppliers.getAllSuppliers)
routes.post('/newSupplier', suppliers.newSupplier)
routes.delete('/supplier/delete/:id', suppliers.deleteSupplier)
routes.put('/supplier/update/:id', suppliers.updateSupplier)



export default routes
