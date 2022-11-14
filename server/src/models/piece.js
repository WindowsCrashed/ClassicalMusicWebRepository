import mongoose from 'mongoose'

const pieceSchema = mongoose.Schema({
    composer: String,
    name: String,
    catalog: String,
    key: String
}, { versionKey: false })

const Piece = mongoose.model('Piece', pieceSchema, 'pieces')

export default Piece