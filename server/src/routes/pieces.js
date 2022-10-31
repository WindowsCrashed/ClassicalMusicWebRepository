import express from 'express'
import { createPiece, getPieces, getPieceById, getPiecesByFilter, updatePiece, deletePiece } from '../controllers/pieces.js'

const router = express.Router()

router.get('/', getPieces)

router.get('/piece/:id', getPieceById)

router.get('/search', getPiecesByFilter)

router.post('/', createPiece)

router.patch('/:id', updatePiece)

router.delete('/:id', deletePiece)

export default router;