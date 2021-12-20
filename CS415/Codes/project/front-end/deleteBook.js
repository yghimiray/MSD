
window.onload = function () {
    let bookDiv = document.getElementById('deleteById-Div');
    const div = document.createElement('div');

    document.getElementById('deletebyID-btn').onclick = async function (event) {
        event.preventDefault();
        bookDiv.innerHtml = '';
        div.innerHTML = '';
        const bookId = document.getElementById('id-delete').value;
        await fetch('http://localhost:6500/books/' + bookId,{
          method:'DELETE',
          headers: {
            'Content-type': 'application/json',
        },

        })
            .then(response => response.json())
            .then(book => {
                alert("Successfully Deleted. See booklist for the changes.")
            }).catch(error => {
                bookDiv.innerHtml = "";
                attachError()
                // alert("No Such Book Found. Try Again !")
            })

    }




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