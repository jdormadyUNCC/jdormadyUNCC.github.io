document.addEventListener("DOMContentLoaded", function(){
    getDateTime();
});

function scriptTest(){
    alert("Script PopUp");
}

function getDateTime() {
    const currentDate = new Date();
    document.getElementById("date-and-time").innerHTML = currentDate;
}

function greeting(){
    const company = "Jolly Dog";
    let name = document.getElementById("user-name").value;
    let mood = document.getElementById("user-mood").value;
    document.getElementById("greeting").innerHTML = "Hello " + name + ", we at " + company + " are glad you feel " + mood;
}
// TODO: fix function to work with negative
function polygonAlert(){
    let userInput = document.getElementById("polygon-number").value;
    let userInputInteger = parseFloat(userInput);
    let AbsoluteInputInteger = Math.abs(userInputInteger);

    if (AbsoluteInputInteger < 10){
        alert("Please enter a number between 1 and 10!");
    } else if(AbsoluteInputInteger <= 1){
        alert("rounded up, your polygon is a henagon");
    } else if(AbsoluteInputInteger <= 2){
        alert("rounded up, your polygon is a digon");
    } else if(AbsoluteInputInteger <= 3){
        alert("rounded up, your polygon is a trigon");
    } else if(AbsoluteInputInteger <= 4){
        alert("rounded up, your polygon is a tetragon");
    } else if(AbsoluteInputInteger <= 5){
        alert("rounded up, your polygon is a pentagon");
    } else if(AbsoluteInputInteger <= 6){
        alert("rounded up, your polygon is a hexagon");
    } else if(AbsoluteInputInteger <= 7){
        alert("rounded up, your polygon is a septagon");
    } else if(AbsoluteInputInteger <= 8){
        alert("rounded up, your polygon is an octagon");
    } else if(AbsoluteInputInteger <= 9){
        alert("rounded up, your polygon is a nonagon");
    } else if(AbsoluteInputInteger <= 10){
        alert("rounded up, your polygon is a decagon");
    } else alert("please enter a number between 1 and 10!");
}

function displayChoice() {
    let selectedElement = document.getElementById("favorite-dog");
    let selectedValue = selectedElement.options[selectedElement.selectedIndex].value;
    let displayUserChoice = document.getElementById("display-choice");
    displayUserChoice.textContent="Favorite Dog: " + selectedValue;
}

const radioButtons = document.getElementsByName("color");
radioButtons.forEach(radioButton => {
    radioButton.addEventListener("change", () {
        colo
    })
})


/*GET RANDOM ELEMENT
function generateDog(){
    const dogImageElement = document.getElementById("dog-image");
    const randomIndex = Math.floor(Math.random() * dogPicturesArray.length);
    const chosenDog = dogPicturesArray[randomIndex];
    dogImageElement.src = chosenDog;
    
}

/*EVENT LISTENER FOR BUTTON
document.getElementById('display-dog-button').addEventListener('click', generateDog);
*/
/*
const dogPicturesArray = [
    "images/Izza.jpg",
    "images/Izza.jpg",
    "images/Izza.jpg",
];
*/
/*
<h3>Radom Dog Event</h3>
<p>Click the button to see a dog</p>
<button id="display-dog-button">Click Here</button>
<img id="dog-image" src="" alt="A random dog">
*/