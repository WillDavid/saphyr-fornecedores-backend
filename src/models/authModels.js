import admin from 'firebase-admin'



const loginModel = async (req, res) => {
    const {email, password} = req.body
    await admin.auth().createUser({
        email: email,
        password: password,
    })
}


export default {
    loginModel
}