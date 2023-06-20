import express from 'express'
import passwords from './controllers/passwordsControllers.js'
import auth from './controllers/authController.js'


const routes = express.Router()

routes.get('/listOfPasswords',  passwords.getAllPasswords)
routes.post('/newPassword', passwords.postNewPassword)
routes.delete('/password/delete/:id', passwords.deletePassword)
routes.put('/password/update/:id', passwords.updatePassword)


routes.post('/login', auth.login)


export default routes
