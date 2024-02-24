const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
// Import the connection module
const con = require('./connection');
app.get("/",(req,res)=>{
    con.query('SELECT * FROM mock_data', (err, rows) => {
        if (err) throw err;
        console.log('Data received from Db:');
        
        res.send(rows);
    });
})

app.get("/cw",(req,res)=>{
    con.query("SELECT UID, Name, Score, Country, TimeStamp FROM mock_data WHERE YEARWEEK(TimeStamp, 1) = YEARWEEK(CURRENT_DATE(), 1) ORDER BY Score DESC LIMIT 200;", (err, rows) => {
        if (err) throw err;
        console.log('Data received from Db:');
        
        res.send(rows);
    });
})
app.get("/lw/:country", (req, res) => {
    con.query("SELECT * FROM  mock_data WHERE Country = ? AND Date_and_time >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) ORDER BY Score DESC LIMIT 200;", [req.params.country], (err, rows) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Internal Server Error'); // Send an error response to the client
            return;
        }
        
        console.log('Data received from Db:');
        console.log(rows);
      
        res.status(200).send(rows); // Send the retrieved data to the client
    });
});

app.get("/:id", (req, res) => {
    con.query("SELECT * FROM (SELECT UID, RANK() OVER (ORDER BY total_score DESC) AS ranking FROM (SELECT UID, SUM(Score) AS total_score FROM mock_data GROUP BY UID) AS player_scores) AS ranked_players WHERE UID = ?", [req.params.id], (err, rows) => {
        if (err) throw err;
        console.log('Data received from Db:');
       
        res.send(rows);
    });
});



 


app.listen(8000, () => {
    console.log('Server is running on port 8000');
    });

 



 