const db = require("./db/connection");
const express = require("express");
const startInquirer = require("./lib/departments");
const { connected } = require("process");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencode({extended: false}));
app.use(express.json());

app.use((req, res) => {
    res.status(404).end();
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        startInquirer();
    })
})