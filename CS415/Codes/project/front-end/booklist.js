
window.onload = function () {
    let bookDiv = document.getElementById('bookDiv');

    
    displayBooks();


    async function displayBooks() {
        const books = await fetch('http://localhost:6500/books/', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
        }).then(response => response.json());
        books.forEach(book => {
            attachBook(book);
        });
    };


   function attachBook(book) {
        bookDiv.innerHtml = "";
              
        let bookTemplate = ` 
        <div class="col">
            <h1> ${book.title}</h1>
            <img src="./images/book.jpg" alt="Book" style="width:150px;height:150px;">
            <p style="font-size:20px; word-spacing: 10px">ID: ${book._id} ISBN: ${book.ISBN} Overdue-Fee-$: ${book.overdue_fee} Publisher: ${book.publisher} Published-on:     ${book.datePublished}     </p>
        </div>
`

            const div = document.createElement('div');
            div.classList = 'row border-top';
            div.innerHTML = bookTemplate;
            bookDiv.appendChild(div);

    };




    
};