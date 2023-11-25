// const greeting = new Promise((resolve, reject) => {
//     resolve()
//     console.log('hello world')
// })

// greeting
// .then((greet) => {
//     console.log('solved')
// })
// .catch((err) => {
//     console.log('error')
// })

function greet(name){
        new Promise((resolve, reject) => {
            resolve()
            console.log(`Hello, ${name}!`)
        })
}

greet('paresh')