

window.onload = function () {

    document.getElementById('update-search-btn').onclick = async function (event) {
        event.preventDefault();
        const bookId = document.getElementById('id-update').value;
        await fetch('http://localhost:6500/books/' + bookId)
            .then(response => response.json())
            .then(book => {
                document.getElementById('isbn-update').value = book.ISBN;
                document.getElementById('title-update').value = book.title;
                document.getElementById('fee-update').value = book.overdue_fee;
                document.getElementById('publisher-update').value = book.publisher;
                document.getElementById('date-update').value = book.datePublished;
                document.getElementById('update-btn').dataset.id = book._id;
            })
    }


    document.getElementById('update-btn').onclick = function (event) {
        event.preventDefault();
        const updateId = this.dataset.id;
        // const updateId = document.getElementById('id-update').value;
        updateBook(updateId);
        document.getElementById('update-form').reset();
    }

    async function updateBook(updateId) {
        await fetch('http://localhost:6500/books/' + updateId, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                _id: updateId,
                ISBN: document.getElementById('isbn-update').value,
                title: document.getElementById('title-update').value,
                overdue_fee: document.getElementById('fee-update').value,
                publisher: document.getElementById('publisher-update').value,
                datePublished: document.getElementById('date-update').value
            })
        }).then(response => response.json())
            .then(book => {
                alert("Book's information successfully ! Please visit booklist to see the changes.")
                document.getElementById('update-form').reset();
                document.getElementById('update-btn').dataset.id = "";
            }).catch(err => {
                alert("This BookID doesn't exists ! Try with existing ID again.")
                document.getElementById('update-form').reset();
                document.getElementById('update-btn').dataset.id = '';
            })
    };



};