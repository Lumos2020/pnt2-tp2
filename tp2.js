const books = [
    {
        id: 1,
        genre: "Terror",
        title: "The Call of Cthulhu and other Weird tales",
        author: "H.P. Lovecraft",
        publishedSince: 1999,
        age: 23 
    },
    {
        id: 2,
        genre: "Fantasy",
        title: "The Lord of the Rings: Fellowship of the ring",
        author: "J.R.R. Tolkien",
        publishedSince: 1990,
        age: 32 
    },
    {
        id: 3,
        genre: "Mistery",
        title: "Mr. Mercedes",
        author: "Stephen King",
        publishedSince: 2005,
        age: 17 
    },
    {
        id: 4,
        genre: "Terror",
        title: "The Mist",
        author: "Stephen King",
        publishedSince: 1995,
        age: 27
    },
    {
        id: 5,
        genre: "Mistery",
        tilte: "Murder on the Orient Express",
        author: "Agatha Christie",
        publishedSince: 2001,
        age: 21
    }
]

console.log(books);


const buscar = () => {
    
    const bookToSearch = document.getElementById("bookId").value;
    
    const bookFind = books.find(book => book.id == bookToSearch)

    bookFind ? console.log(bookFind) : console.log("No se encontró el libro")
}

const bookNames = books.map(book => book.title);

console.log(bookNames);

const bookAges = books.map(book => book.age);

const promedio = (bookAges.reduce((valPrevio, valActual) => valPrevio + valActual, 0))/bookAges.length;

const filteredBooks = books.filter(book => book.genre === "Mistery");

console.log(filteredBooks);