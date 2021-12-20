window.onload = function () {
    refreshUser();
    document.getElementById("refresh").onclick = refreshUser;
    
}

function refreshUser() {
    fetchData('https://randomuser.me/api');
   
}



async function fetchData(URL) {
    let response = await fetch(URL);
    let jsonObj = await response.json();
    let element = jsonObj.results[0];
    let firstName = element.name.first;
    let lastName = element.name.last;
    let email = element.email;
    let phone = element.cell;
    let image = element.picture.large;

    let response1 = await fetch(URL);
    let jsonObj1 = await response1.json();
    let element1 = jsonObj1.results[0];
    let firstName1 = element1.name.first;
    let lastName1 = element1.name.last;
    let email1 = element1.email;
    let phone1 = element1.cell;
    let image1 = element1.picture.large;

    let response2 = await fetch(URL);
    let jsonObj2 = await response2.json();
    let element2 = jsonObj2.results[0];
    let firstName2 = element2.name.first;
    let lastName2 = element2.name.last;
    let email2 = element2.email;
    let phone2 = element2.cell;
    let image2 = element2.picture.large;

    document.getElementById("name").innerHTML = firstName+" "+lastName;
    document.getElementById("cell").innerHTML = phone;
    document.getElementById("email").innerHTML = email;
    document.getElementById("profileImg").src = image;

    document.getElementById("name1").innerHTML = firstName1+" "+lastName1;
    document.getElementById("cell1").innerHTML = phone1;
    document.getElementById("email1").innerHTML = email1;
    document.getElementById("profileImg1").src = image1;

    document.getElementById("name2").innerHTML = firstName2+" "+lastName2;
    document.getElementById("cell2").innerHTML = phone2;
    document.getElementById("email2").innerHTML = email2;
    document.getElementById("profileImg2").src = image2;

}

