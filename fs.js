const fs = require('fs');

// const first = fs.readFileSync('./data/first.txt', 'utf-8')
// const second = fs.readFileSync('./data/second.txt', 'utf-8')

// console.log(first);

// const title = 'este es el contenido se ha añadido'

// fs.writeFileSync('./data/fourth.txt', title, {
//     flag: "a"
// })
fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    error 
    ? console.log(error)
    : console.log(data)
})