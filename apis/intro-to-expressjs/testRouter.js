import express from 'express';
import { getAllDrinks, addDrink } from './data.js'


export const testRouter = express.Router();

testRouter.get('/', (request, response) => {
    response.send('test router is working\nHoorayyy!\n')
})

testRouter.get('/drinks', (request, response) => {
    const drinks = getAllDrinks()
    response.send(drinks)
})

testRouter.post('/drinks', (request, response) => {
    const newDrink = request.body;
    addDrink(newDrink)

    response.send('ok')
})