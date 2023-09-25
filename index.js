function alertUser() {
    let search = document.querySelector('#search').value;
    if (search) {
        alert("You Googled:  " + search);
    }
    else {
        alert("Whewwww you feeling lucky?");
    }
}

