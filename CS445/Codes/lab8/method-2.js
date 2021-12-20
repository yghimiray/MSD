const { from } = rxjs;
const { map, filter } = rxjs.operators;

window.onload = function () {
    document.getElementById("listBtn").onclick = function () {
        const empDiv = document.getElementById("divId");
        empDiv.innerHTML = "";

        let totalEmp = document.getElementById("len").value;
        let fetchResult = await fetch('https://randomuser.me/api/?results=' + totalEmp)
            .then(response => response.json())
            .then(json => json.results);


        let observer = from(fetchResult)
            .pipe(
                map(user => {
                    user.fullName = user.name.first + " " + user.name.last;
                    user.firstAddress = user.location.street.number + ' ' + user.location.street.name;
                    user.lastAddress = user.location.city + ' ' + user.location.state + ' ' + user.location.country + ' ' + user.location.postcode;
                    return user;
                })
            )
            .subscribe(user => {
                let template = `     
                             ${user.fullName}
                </div>
                
                <h3>Location</h3>
                <p>${user.firstAddress}</p>
                <p>${user.lastAddress}</p>
                </div>     
                `;
                const div = document.createElement('div');
                div.classList = 'row border-top';
                div.innerHTML = template;
                empDiv.appendChild(div);

            });

    }
}