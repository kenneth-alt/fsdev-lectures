import express from 'express';
import { getAllDrinks } from './data.js'

export const testRouter = express.Router();

testRouter.get('/', (request, response) => {
    response.send('test router is working\nHoorayyy!\n')
})

testRouter.get('/drinks', (request, response) => {
    const drinks = getAllDrinks()
    response.send(drinks)
})