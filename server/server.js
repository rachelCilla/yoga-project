const PORT = process.env.PORT ?? 8000;  
const express = require('express');
const app = express()
const {v4:uuidv4} = require('uuid'); 
const pool = require('./db');
const cors = require('cors');

app.use(cors());

//GET ALL FAVORITES
app.get('/favorite_poses/:userEmail', async (req, res) => {
   
    const {userEmail} = req.params
    console.log(userEmail)
    try{
        //  In the context of a PostgreSQL query, $1 is a placeholder for a parameter that will be passed to the query when it is executed.
        const favorite_poses= await pool.query('SELECT * FROM favorite_poses WHERE user_email =$1',[userEmail])
        res.json(favorite_poses.rows)
    }catch(err){
        console.log(err)
    }
})

// POST A FAVORITE
app.post('/favorite_poses', async (req, res) => {
    // passing below into the request 
    const {user_email, pose_name, date} = req.body
    // calling uuidv4 to generate a random id
    const id = uuidv4()
    try{
        await pool.query('INSERT INTO favorite_poses (user_email, pose_name, date) VALUES ($1, $2, $3)', [user_email, pose_name, date])
        res.sendStatus(201)
    }catch(err){
        console.log(err)
    }
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); 