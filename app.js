const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const morgan = require('morgan')
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//third-party middleware
app.use(expressEjsLayouts);
app.use(morgan('dev'));

//built-in middleware
app.use(express.static('public'));

//application  level middleware
app.use((req, res, next) => {
    console.log('hai')
    next()
})

app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Ajay',
            email: 'ajay@gmail.com'
        },
        {
            nama: 'agung',
            email: 'agung@gmail.com'
        },
        {
            nama: 'joko',
            email: 'joko@gmail.com'
        },
    ]
    res.render('index', {
        nama: 'ajay', 
        title: 'home',
        mahasiswa,
        layout: 'layouts/main-lay',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-lay',
        title: 'About'})
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'layouts/main-lay',
        title: 'Contact'})
});

app.get('/produk/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
})

app.use((req, res) => {
    res.status(404);
    res.send('404');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



