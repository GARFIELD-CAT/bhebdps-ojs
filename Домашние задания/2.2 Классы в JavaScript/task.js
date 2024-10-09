class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(new_state) {
    if (new_state < 0) {
      this._state = 0;
    } else if (new_state > 100) {
      this._state = 100;
    } else {
      this._state = new_state;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; ++i) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    let book = this.findBookBy("name", bookName);
    let bookIndex = this.books.indexOf(book);

    if (bookIndex != -1) {
      return this.books.splice(bookIndex, 1)[0];
    }
    return null;
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark >= 2 && mark <= 5) {
      if (this.marks[subject] === undefined) {
        this.marks[subject] = [];
      }
      this.marks[subject].push(mark);
    }
  }

  getAverageBySubject(subject) {
    if (this.marks[subject] === undefined) {
      return 0;
    } else {
      let marksSum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
      return marksSum / this.marks[subject].length;
    }
  }

  getAverage() {
    let subjects = Object.keys(this.marks);
    let marksSum = subjects.reduce(
      (acc, subject) => acc + this.getAverageBySubject(subject),
      0
    );
    if (subjects.length != 0) {
      return marksSum / subjects.length;
    }
    return 0;
  }
}
