import model from '../models/piece.js'

export const getPieces = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    
    const pieces = await model.find()
    res.send(pieces.sort()) 
} 

export const getPieceById = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    
    const { id } = req.params

    try {
        const piece = await model.findById(id)

        if (!piece) return res.status(204).json()   

        res.send(piece)
    } catch (error) {
        console.log(error)
    }
}

export const createPiece = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    const piece = req.body

    try {
        await model.create(piece)
        res.send(piece)
    } catch (error) {
        console.log(error)
    }   
}

export const updatePiece = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    
    const { id } = req.params

    try {
        const piece = await model.findById(id)

        if (!piece) return res.status(204).json()   

        const { composer, name, catalog, key } = req.body

        if (composer) piece.composer = composer
        if (name) piece.name = name
        if (catalog) piece.catalog = catalog
        if (key) piece.key = key

        piece.save()

        res.send(piece)
    } catch (error) {
        console.log(error)
    }
}

export const deletePiece = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    
    const { id } = req.params
    
    try {
        const piece = await model.findById(id)

        if (!piece) return res.status(204).json()   

        await model.deleteOne(piece)

        res.send(piece)
    } catch (error) {
        console.log(error)
    }
}
