
window.onload = function () {

document.getElementById('add-btn').onclick = function(event){
    event.preventDefault();
        addBook();
    document.getElementById('add-form').reset();
}
    


    async function addBook() {
        await fetch('http://localhost:6500/books/', {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                _id: document.getElementById('id').value,
                ISBN: document.getElementById('isbn').value,
                title: document.getElementById('title').value,
                overdue_fee: document.getElementById('fee').value,
                publisher: document.getElementById('publisher').value,
                datePublished: document.getElementById('date').value
            })
        }).then(response => response.json())
            .then(book => {
                alert("A new book added successfully ! Please visit booklist to see the addition.")
                document.getElementById('add-form').reset();
            }).catch(err =>{
                alert("This BookID already exists ! Try with another ID again.")
                document.getElementById('add-form').reset();
            })
    };



};