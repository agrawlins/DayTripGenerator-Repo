"use strict"

//Select random destination
function selectRandomDestination(){
    let destinationOptions = ["London", "Edinburgh", "Dublin", "Stockholm", "Copenhagen", "Paris", "Madrid", "Lisbon", "Rome", "Venice", "Vienna", "Berlin"];
    let i = Math.floor(Math.random() * destinationOptions.length);
    let destinationSelection = destinationOptions[i];
    return destinationSelection;
}
selectRandomDestination();
confirmRandomDestination(selectRandomDestination());

    //Allow re-selection of destination
function confirmRandomDestination(choice){
    let confirmChoice = prompt(`Your current destination is ${choice}. Do you want to go to ${choice}? \n ('Y' or 'N')`)
    if(confirmChoice === "Y"){
        console.log(`You're all set to go to ${choice}!`);
    }else if(confirmChoice === "N") {
        confirmRandomDestination(selectRandomDestination());
    }else{
        console.log("Please answer with 'Y' or 'N'.");
        confirmRandomDestination(choice);
    }
}

//Select random restaurant
function selectRandomRestaurant(){
    let restaurantOptions = ["McDonald's", "Burger King", "Chic-fil-A", "Wendy's", "Captain D's"];
    let i = Math.floor(Math.random() * restaurantOptions.length);
    let restaurantSelection = restaurantOptions[i];
    return restaurantSelection;
}
selectRandomRestaurant();
confirmRandomRestaurant(selectRandomRestaurant());
    //Allow re-selection of restaurant
function confirmRandomRestaurant(choice){
    let confirmChoice = prompt(`It looks like you're going to eat at ${choice}. Do you want to eat at ${choice}? \n ('Y' or 'N')`)
    if(confirmChoice === "Y"){
        console.log(`You're going to eat at ${choice}!`);
    }else if(confirmChoice === "N") {
        confirmRandomRestaurant(selectRandomRestaurant());
    }else{
        console.log("Please answer with 'Y' or 'N'.");
        confirmRandomRestaurant(choice);
    }
}
//Select random mode of transportation
function selectRandomTransport(){
    let transportOptions = ["plane", "jetpack", "train", "car", "motorcycle", "bike"];
    let i = Math.floor(Math.random() * transportOptions.length);
    let transportSelection = transportOptions[i];
    return transportSelection;
}
selectRandomTransport();
confirmRandomTransport(selectRandomTransport());
    //Allow re-selection of transportation
function confirmRandomTransport(choice){
    let confirmChoice = prompt(`You're going to ride a ${choice}. Do you want to ride a ${choice}? \n ('Y' or 'N')`)
    if(confirmChoice === "Y"){
         console.log(`You're going to ride a ${choice}!`);
    }else if(confirmChoice === "N") {
        confirmRandomTransport(selectRandomTransport());
    }else{
        console.log("Please answer with 'Y' or 'N'.");
        confirmRandomTransport(choice);
    }
}
//Select random form of entertainment
function selectRandomEntertainment(){
    let entertainmentOptions = ["an opera", "a movie theater", "a museum", "an art exhibit", "a bowling alley", "a skating rink", "a shooting range"];
    let i = Math.floor(Math.random() * entertainmentOptions.length);
    let entertainmentSelection = entertainmentOptions[i];
    return entertainmentSelection;
}
selectRandomEntertainment();
confirmRandomEntertainment(selectRandomEntertainment());
    //Allow re-selection of entertainment
function confirmRandomEntertainment(choice){
    let confirmChoice = prompt(`You're going to ${choice}. Do you want to go to ${choice}? \n ('Y' or 'N')`)
    if(confirmChoice === "Y"){
         console.log(`You're going to ${choice}!`);
    }else if(confirmChoice === "N") {
        confirmRandomEntertainment(selectRandomEntertainment());
    }else{
        console.log("Please answer with 'Y' or 'N'.");
        confirmRandomEntertainment(choice);
    }
}
//Allow confirmation of day trip itinerary selection
function confirmItinerary(destination, restaurant, transportation, entertainment){
    let destination = confirmRandomDestination(selectRandomDestination());
    let restaurant = confirmRandomRestaurant(selectRandomRestaurant());
    let transportation = confirmRandomTransport(selectRandomTransport());
    let entertainment = confirmRandomEntertainment(selectRandomEntertainment());
    let confirmChoice = prompt(`Destination: ${destination} \n Restaurant: ${restaurant} \n Transportation: ${transportation} \n Entertainment: ${entertainment} \n \n Are you happy with your itinerary? \n ('Y' or 'N')`);
    if(confirmChoice === "Y"){
         console.log(`You're all set! Have fun in ${destination}!`);
    }else if(confirmChoice === "N") {
        let redoChoice = prompt("Which part of your itinerary would you like to change?")
        confirmRandomEntertainment(selectRandomEntertainment());
    }else{
        console.log("Please answer with 'Y' or 'N'.");
        confirmRandomEntertainment(choice);
    }
}
    //Display completed trip in the console

//REMEMBER; FUNCTIONS HAVE 'ONE' JOB!!!