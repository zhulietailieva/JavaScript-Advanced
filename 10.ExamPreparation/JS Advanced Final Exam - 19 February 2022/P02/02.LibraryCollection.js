class LibraryCollection{
    constructor(capacity){
        this.capacity=capacity;
        this.books=[];
    }
    addBook(bookName,bookAuthor){
        if(this.capacity==this.books.length){
            throw new Error("Not enough space in the collection.");
        }
        let book={
            bookName:bookName,
            bookAuthor:bookAuthor,
            paid:false
        };
        this.books.push(book);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
    payBook(bookName){
        if(!this.books.find(book=>book.bookName==bookName)){
            throw new Error(`${bookName} is not in the collection.`);
        }
        let currBook=this.books.find(book=>book.bookName==bookName);
        if(currBook.paid){
            throw new Error(`${bookName} has already been paid.`);
        }
        currBook.paid=true;
        return `${bookName} has been successfully paid.`;
    } 
    removeBook(bookName){
        if(!this.books.find(book=>book.bookName==bookName)){
            throw new Error(`${bookName} is not in the collection.`);
        }
        let currBook=this.books.find(book=>book.bookName==bookName);
        if(!currBook.paid){
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        this.books=this.books.filter(book=>book.bookName!=bookName);
        return `${bookName} remove from the collection.`;
    }
    getStatistics(bookAuthor){
        let res;
        if(bookAuthor==undefined){
             res=`The book collection has ${ this.capacity-this.books.length } empty spots left.\n`;
                let sorted=this.books.sort((a,b)=>a.bookName.localeCompare(b.bookName));
            for (const book of sorted) {
            let paid=book.paid?"Has Paid":"Not Paid";
            res+=`${book.bookName} == ${book.bookAuthor} - ${paid}.\n`
            }   
        return res.trim();
        }
        if(!this.books.find(book=>book.bookAuthor==bookAuthor)){
            throw new Error(`${bookAuthor} is not in the collection.`);
        }
        let bookByAuthor=this.books.find(book=>book.bookAuthor==bookAuthor);
        let paid=bookByAuthor.paid?"Has Paid":"Not Paid";
        return `${bookByAuthor.bookName} == ${bookByAuthor.bookAuthor} - ${paid}.`;
    }
}
// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));
// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics("Miguel de Cervantes"));