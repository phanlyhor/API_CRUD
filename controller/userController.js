const db = require('../config/db'); // Import db connection

// Function to get users
const getUser = (req, res) => {
    db.query('SELECT * FROM users', (err, results) => { // Use callback for mysql
        if (err) {
            console.error('Database query error:', err); // Log error for debugging
            return res.status(500).send('server error');
        }
        res.status(200).json({data : results}); // Send query results as JSON
    });
};


// function create

const createUser = (req, res) =>{
    const {username, email, location} = req.body

    if(!username || !email || !location){
        return res.status(400).send('please provide username email and location')
    }

    let sql = 'INSERT INTO users (username, email, location) VALUES (? , ? , ?) '
    const values = [username, email, location];

    db.query(sql , values , (err , result)=>{
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ message: 'Failed to insert data' });
        }
        res.status(200).json({ message: 'successfully', result });
    }) 
}


// function update

const updateUser = (req, res) => {
    const id = req.params.id; // Corrected req.param to req.params
    const { username, email, location } = req.body;

    if (!username || !email || !location) {
        return res.status(400).send('Please provide username, email, and location');
    }

    let sql = 'UPDATE users SET username = ?, email = ?, location = ? WHERE id = ?'; // Fixed SQL syntax
    const values = [username, email, location, id]; // Include id in the values array

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error updating data:', err);
            return res.status(500).json({ message: 'Failed to update data' });
        }
        res.status(200).json({ message: 'Data updated successfully', result });
    });
};


// function for delete user

const deleteUser = (req, res) => {
    const id = req.params.id; // Corrected req.param to req.params

    let sql = 'DELETE FROM users WHERE id = ?;'; // Fixed SQL syntax

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error delete data:', err);
            return res.status(500).json({ message: 'Failed to delete data' });
        }
        res.status(200).json({ message: 'delete successfully', result });
    });
};

module.exports = { getUser , createUser , updateUser , deleteUser};

// {
//     "username" : "testing",
//     "email" : "testing@gmail.com",
//     "location" : "sen sok"
// }