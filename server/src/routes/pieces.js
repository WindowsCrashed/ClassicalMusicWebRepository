import express from 'express'
import { createPiece, getPieces, getPieceById, updatePiece, deletePiece } from '../controllers/pieces.js'

const router = express.Router()

router.get('/', getPieces)

router.get('/:id', getPieceById)

router.post('/', createPiece)

router.patch('/:id', updatePiece)

router.delete('/:id', deletePiece)

export default router;