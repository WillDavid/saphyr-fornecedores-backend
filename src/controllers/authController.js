import authModels from '../models/authModels.js'


const login = async (req, res) => {
    await authModels.loginModel(req)
    return res.status(200).send('Logado com Sucesso!')
}

export default {login}


