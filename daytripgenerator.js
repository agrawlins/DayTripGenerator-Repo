"use strict"

//Select random destination
function selectRandomDestination(){
    let destinationOptions = ["London", "Edinburgh", "Dublin", "Stockholm", "Copenhagen", "Paris", "Madrid", "Lisbon", "Rome", "Venice", "Vienna", "Berlin"];
    let destinationSelection = destinationOptions[Math.floor(Math.random * destinationOptions.length)];
    console.log(`Your current destination is ${destinationSelection}.`)
    return destinationSelection;
}
let randomDestination = destinationSelection;
confirmRandomDestination();
    //Allow re-selection of destination
    function confirmRandomDestination(choice){
    let confirmChoice = prompt(`Do you want to go to ${choice}? \n ('Y' or 'N')`)
    if(confirmChoice === "Y"){
        console.log(`You're all set to go to ${choice}!`);
    }else if(confirmChoice === "N") {
        selectRandomDestination();
    }else{
        console.log("Please answer with 'Y' or 'N'.");
        confirmRandomDestination(choice);
    }
}
//Select random restaurant
    //Allow re-selection of restaurant

//Select random mode of transportation
    //Allow re-selection of transportation

//Select random form of entertainment
    //Allow re-selection of entertainment

//Allow confirmation of day trip itinerary selection
    //Display completed trip in the console

//REMEMBER; FUNCTIONS HAVE 'ONE' JOB!!!