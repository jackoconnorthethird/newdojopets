var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const path = require('path');


app.use(express.static(__dirname + '/public/dist/public'));



require('./server/config/mongoose');
require('./server/config/routes')(app);

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function () {
    console.log('listening at port 8000');
})