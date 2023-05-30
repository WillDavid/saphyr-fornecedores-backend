import admin from 'firebase-admin'
import { v4 as uuidv4 } from 'uuid';

admin.initializeApp({
    credential: admin.credential.cert("serviceAccountKey.json")
});


const getAllPasswordsModel = async (req,res) => {
    let response = []
    await admin.firestore()
        .collection('passwords')
        .get()
        .then( (snapshot) => {
            const passwords = snapshot.docs.map( doc => ({
                ...doc.data(), 
                uid: doc.id
            }))

            response = passwords
        })
    return response
}

const postNewPasswordModel = async (req, res) => {
    const password = req
    const id = uuidv4()
    admin.firestore().collection('passwords').doc(id).set(password)
}


const deletePasswordModel = async (req, res) => {
    admin.firestore().collection('passwords').doc(req).delete()
}

const updatePasswordModel = async (req, res) => {
    admin.firestore().collection('passwords').doc(req.params.id).set(req.body)
}


export default { getAllPasswordsModel, postNewPasswordModel, deletePasswordModel, updatePasswordModel}