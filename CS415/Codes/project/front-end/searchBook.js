
window.onload = function () {
    let bookDiv = document.getElementById('searchById-Div');
    const div = document.createElement('div');

    document.getElementById('searchbyID-btn').onclick = async function (event) {
        event.preventDefault();
        bookDiv.innerHtml = '';
        div.innerHTML = '';
        const bookId = document.getElementById('id-search').value;
        await fetch('http://localhost:6500/books/' + bookId)
            .then(response => response.json())
            .then(book => {
                attachBook(book);
            }).catch(error => {
                bookDiv.innerHtml = "";
                attachError()
                // alert("No Such Book Found. Try Again !")
            })

    }



    function attachBook(book) {
        bookDiv.innerHtml = "";

        let bookTemplate = ` 
        <div class="col">
        <h1> Book Found </h1>    
        <h1> ${book.title}</h1>
            <img src="./images/book.jpg" alt="Book" style="width:150px;height:150px;">
            <p style="font-size:20px; word-spacing: 10px">ID: ${book._id} ISBN: ${book.ISBN} Overdue-Fee-$: ${book.overdue_fee} Publisher: ${book.publisher} Published-on:     ${book.datePublished}     </p>
        </div>
`

        // const div = document.createElement('div');
        div.classList = 'row border-top';
        div.innerHTML = bookTemplate;
        bookDiv.appendChild(div);

    };



    function attachError() {
        bookDiv.innerHtml = "";
        div.innerHTML = '';
        let errorTemplate = ` 
        <div class="col">
        <h1>No Such Book Found </h1>    
        </div>
`
        // const div = document.createElement('div');
        div.classList = 'row border-top';
        div.innerHTML = errorTemplate;
        bookDiv.appendChild(div);

    };





};