fetch('http://example.com/movies.json').then(function f(response) {
    return response.json();
}).then(function f(value){
    console.log(value);
});

