

//a) Create a TypeScript interface IBook, which should encapsulate information about a book, including:
interface IBook{
    title: string;
    readonly author: string;
    published?: Date;
    pages?: number;
}


//b) Create a function that takes an IBook instance and test it with an object instance.

let ibook: IBook;

const testBook = function(){
    let book_obj = {
        title: 'Mourning Sun',
        author: "UNKNOWN",
        published: new Date(Date.now()),
        pages: 250
    };

    ibook = book_obj;
    console.log(JSON.stringify(ibook));
}
testBook();

/*
c) Given the example above, explain what is meant by the term Duck Typing, when TypeScript interfaces are discussed.

Duck-typing is when you are able to compare one object with other objects by checking 
that both objects have the same type matching names or not. So if a an object meets the same
requirements as an instance of an Interface, then they are the "same".
Thereby the saying: “If it walks like a duck, and it quacks like a duck, then it must be a duck.”
*/

//d) Change the interface to make published and pages become optional - Verify the new behaviour.
//e) Change the interface to make author readonly - Verify the new behaviour.
const  ibook2: IBook = {
    title: "New one",
    author: "Readonly Author"
}
console.log(JSON.stringify(ibook2));



//f) Create a class Book and demonstrate the "Java way" of implementing an interface.

class Book implements IBook{
    constructor(
    private _title: string,
    private readonly _author: string,
    private _published: Date,
    private _pages: number,
    ){}
   
    get title(){return this._title};
    set title(title: string){this._title = title};
    get author(){return this._author};
    get published(){return this._published};
    set published(published: Date){this._published = published};
    get pages(){return this._pages};
    set pages(pages: number){this._pages = pages};

    getTitle(){return this._title};
    getAuthor(){return this._author};
    getPublished(){return this._published};
    getPages(){return this._pages};
    setTitle(title: string){this._title = title};
    setPublished(published: Date){this._published = published};
    setPages(pages: number){this._pages = pages};
}

let book1 = new Book('book1','author1',new Date(Date.now()),250);
console.log(book1);
book1.setPages(200)
book1.setTitle('New title');
console.log(book1);
