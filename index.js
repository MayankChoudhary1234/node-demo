// run with -
// npm start

// console.log('node app successfull')

const express = require('express');
const app = express();
const portNumber = 9090;

app.listen(portNumber, () => {
    console.log('Deloitte node app started!');
    console.log(`Go to http://localhost:${portNumber} to view the app.`)
});

app.get('/' , (request, response) => {
    console.log('Welcome');
    response.send('Welcome to Deloitte node app...')
});

app.get('/home' , (request, response) => {
    console.log('Home');
    response.send('Welcome to the Home...')
});

app.get('/contact' , (request, response) => {
    console.log('contact');
    response.send('7037915851...')
});

app.get('/about' , (request, response) => {
    console.log('about');
    response.send('About...')
});