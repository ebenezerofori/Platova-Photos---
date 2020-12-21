const express = require('express');
const path = require('path');




const PORT = process.env.PORT || 3000;
const app = express();

// vendor / public paths
//app.use(express.static(path.join(__dirname, '/public/')));

//app.set('views', './src/views');
//app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


console.log('Starting app in dev mode...');
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {

        console.log(`Server Running On Port ${PORT}`);
    }
});
