const express = require('express');
const pool = require('../module/pool');
const router = express.Router();

router.get('/', (req,res) => {
    const queryText = `SELECT * FROM "calculator" ORDER BY "id" DESC LIMIT 10`

    pool.query(queryText)
    .then(results => {
        res.send(results.rows)
    })
    .catch(error => {
        console.log('SELECT * FROM "calculator" error',error);
        res.sendStatus(500)
    })
});

router.post('/', (req,res) => {
    console.log('this is req.body--', req.body );
    
    const queryText = 'INSERT INTO "calculator" (first_value, second_value, result, operation) VALUES ($1, $2, $3, $4);'

    const queryItem = [Number.parseFloat(req.body.firstValue), Number.parseFloat(req.body.secondValue), Number.parseFloat(req.body.result), req.body.operation]

    console.log('============================')
    console.log(queryItem);
    

    pool.query(queryText, queryItem)
    .then( () => {
        res.sendStatus(201)
    })
    .catch( (error) => {
        console.log('INSERT INTO "calculator" error', error);
        res.sendStatus(500)
    })
})

module.exports = router;