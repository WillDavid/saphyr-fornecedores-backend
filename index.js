import express from 'express'
import admin from 'firebase-admin'
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


admin.initializeApp({
  credential: admin.credential.cert("serviceAccountKey.json")
});

app.get('/listOfPasswords', (req, res) => {
    admin.firestore()
        .collection('passwords')
        .get()
        .then( (snapshot) => {
            const passwords = snapshot.docs.map( doc => ({
                ...doc.data(), 
                uid: doc.id
            }))

            res.json(passwords)
        })
})

app.get('/password/:id', (req, res) => {
    console.log(req.params.id)
    admin.firestore()
        .collection('passwords')
        .doc(req.params.id)
        .get()
        .then( (snapshot) => {
            console.log(snapshot);

            res.json(snapshot.data())
        })
})

app.post('/newPassword', (req, res) => {
    // console.log(req)
    const password = req.body
    console.log(password)
    const id = uuidv4()
    admin.firestore()
        .collection('passwords')
        .doc(id)
        .set(password)
    res.status(200).send("Senha adicionada")
})

app.put('/password/update/:id', (req, res) => {
    const id = req.params.id
    const password = req.body
    admin.firestore()
        .collection('passwords')
        .doc(id)
        .set(password)
    res.status(200).send("Senha atualizada")
})

app.delete('/password/delete/:id', (req, res) => {
    const id = req.params.id
    admin.firestore()
        .collection('passwords')
        .doc(id)
        .delete()
    res.status(200).send("Senha deletada com sucesso!")
})
app.listen(3500, () => console.log('API REST foi iniciado em 3500'))