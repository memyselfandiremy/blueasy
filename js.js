/* formulaire*/

const form = document.getElementById('contactform');
const messageError = document.getElementById('messageerreur');

// fonction click
form.addEventListener('submit', async function(event) {
    event.preventDefault();


    // formater les donnees du formulaire en json
    let data = new FormData(form);
    console.log(data);

    //fetch en attente
    let response = await fetch(form.getAttribute('action'), {
        method: 'POST',
        body: data
    });

    // network error
    if (response.ok === false) {
        messageError.innerHTML = "Network Error" + await response.status;
    } else {

        messageError.innerHTML = await response.json();
    }
});




/* filtre images*/
filterSelection('all')

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}