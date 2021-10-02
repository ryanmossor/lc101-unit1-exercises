// const date = new Date();

// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, pageCount, checkoutCount, discardStatus) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.pageCount = pageCount;
        this.checkoutCount = checkoutCount;
        this.discardStatus = discardStatus;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor (title, author, copyrightDate, isbn, pageCount, checkoutCount, discardStatus) {
        super(title, author, copyrightDate, isbn, pageCount, checkoutCount, discardStatus);
    }

    updateCheckoutCount(count) {
        this.checkoutCount += count;
    }

    updateDiscardStatus() {
        if (this.copyrightDate < new Date().getFullYear() - 5) {
            this.discardStatus = true;
        }
    }
}

class Novel extends Book {
    constructor (title, author, copyrightDate, isbn, pageCount, checkoutCount, discardStatus) {
        super(title, author, copyrightDate, isbn, pageCount, checkoutCount, discardStatus);
    }

    updateCheckoutCount(count) {
        this.checkoutCount += count;
    }

    updateDiscardStatus() {
        if (this.checkoutCount > 100) {
            this.discardStatus = true;
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel ('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, false);
let shuttleManual = new Manual ('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, false);

// Code exercises 4 & 5 here:
console.log(prideAndPrejudice);
console.log(shuttleManual);

shuttleManual.updateDiscardStatus();
console.log(shuttleManual);

prideAndPrejudice.updateCheckoutCount(5);
console.log(prideAndPrejudice);