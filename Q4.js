const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: 'One man army', author: 'George Orwell', year: 1949 },
    { title: 'Love Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'Author1', author: 'F. Scott Fitzgerald', year: 1925 },
];

books.sort((a, b) => a.title.localeCompare(b.title))

books.map((book) =>{
    console.log(book.title)
})