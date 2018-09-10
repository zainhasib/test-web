var buttonOne = document.querySelector('#btn-one');
var buttonTwo = document.querySelector('#btn-two');
var buttonThree = document.querySelector('#btn-three');
var buttonFour = document.querySelector('#btn-four');
var toast = document.querySelectorAll('.toast');
var section = document.querySelector('section');
var sectionForm = document.querySelector('.section-form');
var formBody = document.querySelector('.form-body');
var textSubmit = document.querySelector('#text-submit');
var toastText = document.querySelector('#toast-text');

buttonOne.addEventListener('click', function () {
    toast[1].style.visibility = "hidden";
    toast[0].style.visibility = "visible";
    setTimeout(function() {
        toast[0].style.visibility = "hidden";
    }, 2000);
});

buttonTwo.addEventListener('click', function () {
    toast[0].style.visibility = "hidden";
    toast[1].style.visibility = "visible";
    setTimeout(function() {
        toast[1].style.visibility = "hidden";
    }, 2000);

});

var i=69;

buttonThree.addEventListener('click', function () {
    console.log(String.fromCharCode(65+4));
    var sectionItem = document.createElement("div");
    sectionItem.classList.add("section-item");
    var btnFive = document.createElement("button");
    btnFive.innerHTML = String.fromCharCode(i);
    sectionItem.appendChild(btnFive);
    section.appendChild(sectionItem);
    i++;
});

buttonFour.addEventListener('click', () => {
    sectionForm.style.visibility = "Visible";
    formBody.style.transitionDuration = "0.2s";
    sectionForm.style.transitionDuration = "0.2s";
    formBody.style.height = "200px";
    formBody.style.width = "500px";
});

textSubmit.addEventListener('click', (e) => {
    sectionForm.style.visibility = "hidden";
    formBody.style.transitionDuration = "0s";
    sectionForm.style.transitionDuration = "0s";
    formBody.style.height = "0px";
    formBody.style.width = "0px";
    console.log(toastText.value);
    toast[0].style.visibility = "visible";
    toast[0].innerHTML = toastText.value;
    setTimeout(function() {
        toast[0].style.visibility = "hidden";
        toast[0].innerHTML = "HELLO SALONI BAKA";
    }, 2000);
});