const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res) =>{
    res.send('hai');
});

PORT = 3030
app.listen(3030, () => console.log(`Listening on port ${PORT}`));