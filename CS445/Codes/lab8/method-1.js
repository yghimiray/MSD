const { Observable } = rxjs;

window.onload = function () {
    document.getElementById("listBtn").onclick = function () {
        let totalEmp = document.getElementById("len").value;
        let observable = Observable.create(observer=>{
            fetch("https://randomuser.me/api/?results=" + totalEmp)
            .then(response=> response.json())
            .then(data=> {
                observer.next(data.results)
            })
        });
        
     
        observable.subscribe(data => {
            const empDiv = document.getElementById("divId");
            empDiv.innerHTML = "";
            data.forEach(element => {
                let template = `
                    <div > 
                    ${element.name.first} ${element.name.last}
                    </div>

                    <div > 
                    <h3>Location</h3>
                    <p>${element.location.street.number} ${element.location.street.name}</p>
                    <p>${element.location.city}, ${element.location.state} ${element.location.country} ${element.location.postcode}</p>
                    </div>
                  `;
                const div = document.createElement('div');
                div.classList = 'row border-top';
                div.innerHTML = template;
                empDiv.appendChild(div);
            });

        })

    }
}