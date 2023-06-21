import supplierModels from '../models/suppliersModels.js'

const getAllSuppliers = async (req, res) => {
    const list = await supplierModels.getAllSuppliers()
    return res.status(200).json(list)
}

const newSupplier = async (req, res) => {
    await supplierModels.newSupplier(req.body)
    return res.status(201).send('Senha adicionada')
}

const deleteSupplier = async (req, res) => {
    await supplierModels.deleteSupplier(req.params.id)
    return res.status(200).send('Senha Deletada')
}

const updateSupplier = async (req, res) => {
    await supplierModels.updateSupplier(req)
    return res.status(200).send('Atualizado com Sucesso!')
}

export default {getAllSuppliers, newSupplier, deleteSupplier, updateSupplier}
