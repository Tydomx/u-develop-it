// importing express
const express = require('express');
// adding PORT designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();
// adding Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// GET test route
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});





// Default response for any other request (Not Found) [Catch all route]
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});