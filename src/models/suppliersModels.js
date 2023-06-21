import admin from 'firebase-admin'
import { v4 as uuidv4 } from 'uuid';

admin.initializeApp({
    credential: admin.credential.cert("serviceAccountKey.json")
});


const getAllSuppliers = async (req,res) => {
    let response = []
    await admin.firestore()
        .collection('suppliers')
        .get()
        .then( (snapshot) => {
            const suppliers = snapshot.docs.map( doc => ({
                ...doc.data(), 
                uid: doc.id
            }))

            response = suppliers
        })
    return response
}

const newSupplier = async (req, res) => {
    const supplier = req
    const id = uuidv4()
    admin.firestore().collection('suppliers').doc(id).set(supplier)
}


const deleteSupplier = async (req, res) => {
    admin.firestore().collection('suppliers').doc(req).delete()
}

const updateSupplier = async (req, res) => {
    admin.firestore().collection('suppliers').doc(req.params.id).set(req.body)
}


export default { getAllSuppliers, newSupplier, deleteSupplier, updateSupplier}