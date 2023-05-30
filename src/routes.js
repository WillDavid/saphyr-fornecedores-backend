import express from 'express'
import passwords from './controllers/passwordsControllers.js'
import admin from 'firebase-admin'


const routes = express.Router()

routes.get('/listOfPasswords',  passwords.getAllPasswords)
routes.post('/newPassword', passwords.postNewPassword)
routes.delete('/password/delete/:id', passwords.deletePassword)
routes.put('/password/update/:id', passwords.updatePassword)

routes.post('/login', async (req, res) => {
    const {email, password} = req.body

    console.log(req.body)   

    try {
        const user = await admin.auth().getUserByEmail(email);
        const token = await admin.auth().createCustomToken(user.uid);

        
        res.status(200).json({ message: 'Login successful', token });
    } catch (error ) {
        res.status(200).json({ message: 'aaaaaaaaaaa' });
    }
})


export default routes
