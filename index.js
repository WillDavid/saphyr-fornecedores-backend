import express from 'express'
import admin from 'firebase-admin'

const app = express()



admin.initializeApp({
  credential: admin.credential.cert("serviceAccountKey.json")
});

app.get('/listOfPasswords', (request, response) => {
    console.log('Get List of Passwords')
    admin.firestore()
        .collection('passwords')
        .get()
        .then( (snapshot) => {
            const passwords = snapshot.docs.map( doc => ({
                ...doc.data(), 
                uid: doc.id
            }))

            response.json(passwords)
        })
    
})



app.listen(3000, () => console.log('API REST foi iniciado em 3000'))