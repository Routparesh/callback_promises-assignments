let task = 'https://jsonplaceholder.typicode.com/todos/1';
let post = 'https://jsonplaceholder.typicode.com/posts/1';

async function fetchData(){
    try {
        let todo = await fetch(task).then((response)=> response.json());
        let newPost = await fetch(post).then((response)=> response.json());   

        Promise.all([todo, newPost])
          .then(([data1, data2]) => {
            // Both requests have completed
            const resultObject = {
              todo: data1,
              post: data2,
            };
        
            console.log(resultObject);
        
            // Now you can work with the combined data object
            return resultObject;
          }) 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


fetchData()