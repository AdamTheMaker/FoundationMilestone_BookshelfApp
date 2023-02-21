// this will house the books and bookshelf functionality

//book class
class Book {
    constructor(author, language, subject, title) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
    }

    render() {
        const listing = document.createElement('li');

        const binding = document.createElement('div');
        binding.classList.add('book');
        
        const infoButton = document.createElement('button')
        infoButton.textContent = 'Info';
        infoButton.classList.add('moreInfo')
        infoButton.addEventListener('click', function() {
            window.alert(`Title: ${this.title}\nAuthor: ${this.author}\nLanguage: ${this.language}\nSubject: ${this.subject}`);
        }.bind(this)); 

        const bookTitle = document.createElement('h3');
        bookTitle.textContent = this.title;

        const bookAuthor = document.createElement('h4');
        bookAuthor.textContent = ` b. ${this.author}`;
        
        const favButton = document.createElement('button');
        favButton.textContent = 'favorite';
                 
        binding.append(bookTitle);
        binding.append(bookAuthor);
        binding.append(infoButton)
        binding.append(favButton);
        listing.append(binding);

        return listing;

    }
}


//code used to test and console out functions to ensure code was working
// const testBook = new Book(bookData[1].author, bookData[1].language, bookData[1].subject, bookData[1].title)
// console.log(testBook)

class Bookshelf {
    constructor() {
        this.shelf = [];
    }
    
    addBook(book) {
        this.shelf.push(book);
    }

    addStack(newStack) {
        newStack.map(nextBook => {
            let builtBook = new Book(nextBook.author, nextBook.language, nextBook.subject, nextBook.title);
            this.shelf.push(builtBook)
        })
    }
   
    shelfStocker() {
        this.shelf.map((element) => document.querySelector('.books').append(element.render()))
    }
    
    // These features are not needed for the final but may impliment anyway if I decide to

    // sortAtoZ() {
    //     this.shelf.sort((a, b) => a.title.localeCompare(b.title));
    // }

    // search(query) {
    //     const matchingBooks = this.shelf.filter((book) => {
    //         let matchTitle = book.title.toLowerCase().includes(query.toLowerCase());
    //         let authorString = book.author.join(' ');
    //         let matchAuthor = authorString.toLowerCase().includes(query.toLowerCase());
    //         let subjectString = book.subject.join(" ");
    //         let matchSubject = subjectString.toLowerCase().includes(query.toLowerCase());
    //         return matchTitle || matchAuthor || matchSubject;
    //     });
    //     const bookList = document.querySelector('.books');
    //     bookList.innerHTML = "";
    //     matchingBooks.forEach((book) =>{
    //         const bookElement = book.render();
    //         bookList.appendChild(bookElement);
    //     })
    // }
    
}