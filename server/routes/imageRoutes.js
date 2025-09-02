import express from 'express'
import { generateImage, getUserGenerations, getGeneration } from '../controllers/imageController.js'
import userAuth from '../middlewares/auth.js'

const imageRouter = express.Router()

// Existing route
imageRouter.post('/generate-image', userAuth, generateImage)

// Add these missing routes
imageRouter.get('/user-generations', userAuth, getUserGenerations)
imageRouter.get('/:id', userAuth, getGeneration)

export default imageRouter