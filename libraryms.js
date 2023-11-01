class LibraryItem {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.checkedOut = false;
    }
    // Method to check out the item
    checkOut() {
      if (!this.checkedOut) {
        this.checkedOut = true;
        console.log(`${this.title} by ${this.author} has been checked out.`);
      } else {
        console.log(`${this.title} is already checked out.`);
      }
    }
    // Method to return the item
    return() {
      if (this.checkedOut) {
        this.checkedOut = false;
        console.log(`${this.title} has been returned.`);
      } else {
        console.log(`${this.title} is already in the library.`);
      }
    }
  }
  class Book extends LibraryItem {
    constructor(title, author, isbn, pageCount) {
      super(title, author, isbn);
      this.pageCount = pageCount;
    }
    // Method to display book details
    displayDetails() {
      console.log(`Book: ${this.title} by ${this.author}`);
      console.log(`ISBN: ${this.isbn}`);
      console.log(`Page Count: ${this.pageCount}`);
    }
  }
  class DVD extends LibraryItem {
    constructor(title, director, releaseYear, duration) {
      super(title, director, releaseYear);
      this.duration = duration;
    }
    // Method to display DVD details
    displayDetails() {
      console.log(`DVD: ${this.title} directed by ${this.author}`);
      console.log(`Release Year: ${this.releaseYear}`);
      console.log(`Duration: ${this.duration} minutes`);
    }
  }
  class Student {
    constructor(name, studentID) {
      this.name = name;
      this.studentID = studentID;
      this.checkedOutItems = [];
    }
    // Method to check out an item
    checkOutItem(item) {
      if (item instanceof LibraryItem) {
        item.checkOut();
        this.checkedOutItems.push(item);
      } else {
        console.log("Invalid item to check out.");
      }
    }
    // Method to return an item
    returnItem(item) {
      if (item instanceof LibraryItem) {
        item.return();
        const index = this.checkedOutItems.indexOf(item);
        if (index !== -1) {
          this.checkedOutItems.splice(index, 1);
        }
      } else {
        console.log("Invalid item to return.");
      }
    }
    // Method to display checked-out items
    displayCheckedOutItems() {
      console.log(`${this.name}'s Checked Out Items:`);
      this.checkedOutItems.forEach((item) => {
        console.log(`- ${item.title}`);
      });
    }
    }