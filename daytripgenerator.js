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
    let confirmChoice = prompt(`Your current destination is ${choice}. Do you want to go to ${choice}? \n ('Y' or 'N')`)
    if(confirmChoice === "Y"){
        console.log(`You're all set to go to ${choice}!`);
    }else if(confirmChoice === "N") {
        confirmRandomRestaurant(selectRandomRestaurant());
    }else{
        console.log("Please answer with 'Y' or 'N'.");
        confirmRandomRestaurant(choice);
        }
    }
//Select random mode of transportation
    //Allow re-selection of transportation

//Select random form of entertainment
    //Allow re-selection of entertainment

//Allow confirmation of day trip itinerary selection
    //Display completed trip in the console

//REMEMBER; FUNCTIONS HAVE 'ONE' JOB!!!