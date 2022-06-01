// importing inputcheck
const inputCheck = require('./utils/inputCheck');
// importing db/connection
const db = require('./db/connection');
// importing express
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');

// adding PORT designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();



// adding Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);

// // GET test route
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// Default response for any other request (Not Found) [Catch all route]
app.use((req, res) => {
    res.status(404).end();
});


// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

