const path = require('path')

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRouter = require('./Routes/admin');
const shopRouter = require('./Routes/shop');
app.use(bodyParser.urlencoded({ extended: 'false' }));


app.use('/admin', adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, './', 'Views', '404.html'))
})

app.listen(3000);