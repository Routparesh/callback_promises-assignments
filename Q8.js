fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json()
})
.then((post)=>{
    console.log(post)
})