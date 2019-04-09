var config = {
    apiKey: "AIzaSyCh5tABZJoUknY_gghZx7y1zKZ21ZVD2Bc",
    authDomain: "transportation-scheduler-34f37.firebaseapp.com",
    databaseURL: "https://transportation-scheduler-34f37.firebaseio.com",
    projectId: "transportation-scheduler-34f37",
    storageBucket: "transportation-scheduler-34f37.appspot.com",
    messagingSenderId: "939336460846"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var destination = "";
var airline = "";
var date = "";
var departureTime = "";

// Button for adding flights
$("#add-flight-btn").on("click", function(event) {
    event.preventDefault();

    // Grabs user input
     destination = $("#destination-name-input").val().trim();
     airline = $("#airline-input").val().trim();
     date = $("#date-input").val().trim();
     departureTime = $("#departure-time-input").val().trim();

    //var newFlight = {
       // destination: newDestination,
       // airline: newAirline,
       // date: newDate,
        //departureTime: newDepartureTime 
    //};
    
    // Uploads flight data to the database
     database.ref().push({
        destination: destination,
        airline: airline,
        date: date,
        departureTime: departureTime,
     });
    

     console.log(destination);
     console.log(airline);
     console.log(date);
     console.log(departureTime);

     alert("Searching Flight");

     // Clears all of the text-boxes
     $("#destination-name-input").val("");
     $("#airline-input").val("");
     $("#date-input").val("");
     $("#departure-time-input").val("");
});

// Create Firebase event for adding flight info
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

// Create new row
var newRow = $("<tr>").append(
    $("<td>").text(destination),
    $("<td>").text(airline),
    $("<td>").text(date),
    $("<td>").text(departureTime),
);

// Append new row to the table
$("#flight-table > tbody").append(newRow);


});