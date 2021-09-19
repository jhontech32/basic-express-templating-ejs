const express = require('express');
const app = express()
const port = 3000

// const pagesDir = __dirname + '/pages'

// Gunakan view enginew EJS
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.sendFile('index.html', { root: pagesDir })
    const makanans = [
        { id: 1, nama: "nasi goreng", qty: 2 },
        { id: 2, nama: "soto madura", qty: 10 },
        { id: 3, nama: "sate", qty: 5 }
    ]
    res.render('index', { makanans })
})

app.get('/user/:id', (req, res) => {
    res.send(`anda sedang berada di user dengan id ${req.params.id}`)
})

app.get('/about', (req, res) => {
    // res.sendFile('about.html', { root: pagesDir })
    res.render('about')
})

app.get('/contact', (req, res) => {
    // res.sendFile('contact.html', { root: pagesDir })
    res.render('contact')
})

app.use('/', (req, res) => {
    res.send('404 Not found !!')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost/${port}`)
})