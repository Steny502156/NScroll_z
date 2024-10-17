const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'contact_form_db'
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected');
});

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Route to handle form submission
app.post('/submitForm', (req, res) => {
    const { full_name, phone_number, email, message } = req.body;

    // Insert into MySQL
    const sql = 'INSERT INTO contacts (full_name, phone_number, email, message) VALUES (?, ?, ?, ?)';
    db.query(sql, [full_name, phone_number, email, message], (err, result) => {
        if (err) {
            throw err;
        }
        console.log('Record inserted successfully');
        res.send('Form submitted successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
