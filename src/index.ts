import express, { Express } from 'express'
import { log } from './logger/logger'

const app: Express = express()

app.get('*', (req, res) => {
    console.log(req, res);
})

app.listen(3000, () => {
    log('Listing....')
})