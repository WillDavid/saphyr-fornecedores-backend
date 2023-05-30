import passwordsModels from '../models/passwordsModels.js'

const getAllPasswords = async (req, res) => {
    const list = await passwordsModels.getAllPasswordsModel()
    return res.status(200).json(list)
}

const postNewPassword = async (req, res) => {
    await passwordsModels.postNewPasswordModel(req.body)
    return res.status(201).send('Senha adicionada')
}

const deletePassword = async (req, res) => {
    await passwordsModels.deletePasswordModel(req.params.id)
    return res.status(200).send('Senha Deletada')
}

const updatePassword = async (req, res) => {
    await passwordsModels.updatePasswordModel(req)
    return res.status(200).send('Atualizado com Sucesso!')
}

export default {getAllPasswords, postNewPassword, deletePassword, updatePassword}
