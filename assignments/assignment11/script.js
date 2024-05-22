class Book {
    constructor(title, author, yearPublished, description, genre, imgSrc) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.description = description;
        this.genre = genre;
        this.imgSrc = imgSrc;
    }

    // Returns the basic card displayed on the page by default
    get section() {
        const card = document.createElement("section");

        const title = document.createElement("h3");
        title.innerHTML = this.title;
        card.append(title);

        const img = document.createElement("img");
        img.src = this.imgSrc;
        img.alt = `${this.title} image`;
        card.append(img);

        // Pulls up the modal with details and image when card is clicked on
        card.onclick = () => {
            const modal = document.getElementById("dialog");
            modal.style.display = "block";

            const content = document.getElementById("dialog-content");
            content.innerHTML = "";
            content.append(this.expandedSection);
            const image = document.createElement("img");
            image.src = this.imgSrc;
            image.alt = `${this.title} image`;
            content.append(image);
        };

        return card;
    }

    // Returns the expanded section with each detail as a paragraph
    get expandedSection() {
        const section = document.createElement("section");
        section.append(this.paragraph("Title", this.title));
        section.append(this.paragraph("Author", this.author));
        section.append(this.paragraph("Year Published", this.yearPublished));
        section.append(this.paragraph("Description", this.description));
        section.append(this.paragraph("Genre", this.genre));
        return section;
    }

    paragraph(title, info) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}</strong>: ${info}`;
        return p;
    }
}

// array of books
const books = [];
books.push(new Book(
    "Redwall", "Brian Jacques", 1986, 
    "A quest to recover a legendary lost weapon by bumbling young apprentice monk, mouse Matthias.",
    "Children's fantasy", "images/redwall.jpg"
));
books.push(new Book(
    "The Gunslinger", "Stephen King", 1982,
    "In the first book of this series, Stephen King introduces readers to one of his most enigmatic heroes, Roland of Gilead, The Last Gunslinger.",
    "Fantasy", "images/gunslinger.jpg"
));
books.push(new Book(
    "Ender's Game", "Orson Scott Card", 1985,
    'Andrew "Ender" Wiggin thinks he is playing computer simulated war games; he is, in fact, engaged in something far more desperate.',
    "Science Fiction", "images/endersgame.jpg"
));
books.push(new Book(
    "Moneyball", "Michael Lewis", 2003,
    "Billy Beane, general manager of MLB's Oakland A's and protagonist of Michael Lewis's Moneyball, had a problem: how to win in the Major Leagues with a budget that's smaller than that of nearly every other team.",
    "Nonfiction", "images/moneyball.jpg"
));

// Create a section for each entry in books and display on page
const content = document.getElementById("cards");
books.forEach((book) => {
    content.append(book.section);
});

document.getElementById("dialog-x").onclick = () => {
    dialog.style.display = "none";
};