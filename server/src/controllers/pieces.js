import model from '../models/piece.js'

export const getPieces = async (req, res) => {
    const pieces = await model.find()
    res.send(pieces.sort()) 
} 

export const getPieceById = async (req, res) => {
    const { id } = req.query

    try {
        const piece = await model.findById(id)

        if (!piece) return res.status(204).json()
        
        res.send(piece)
    } catch (error) {
        console.log(error)
    }
}

export const getPiecesByFilter = async (req, res) => {
    const { composer, name, catalog, key }  = req.query    

    try {
        const pieces = await model.find({
            composer: new RegExp(composer, "i"),
            name: new RegExp(name, "i"),
            catalog: new RegExp(catalog, "i"),
            key: new RegExp(key, "i")
        }).sort('composer')

        if (pieces.length === 0) return res.status(204).json()   

        res.send(pieces)
    } catch (error) {
        console.log(error)
    }
}

export const createPiece = async (req, res) => {
    const piece = req.body
    
    try {
        if (await model.findOne(piece) != null) return res.send(422).json()
        
        await model.create(piece)
        res.send(piece)
    } catch (error) {
        console.log(error)
    }   
}

export const updatePiece = async (req, res) => {
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
