const express = require('express'),
    app = express(),
    path = require('path');

app.listen(process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.json(req.headers);
});
