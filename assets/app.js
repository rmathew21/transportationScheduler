let config = {
    apiKey: "AIzaSyCh5tABZJoUknY_gghZx7y1zKZ21ZVD2Bc",
    authDomain: "transportation-scheduler-34f37.firebaseapp.com",
    databaseURL: "https://transportation-scheduler-34f37.firebaseio.com",
    projectId: "transportation-scheduler-34f37",
    storageBucket: "transportation-scheduler-34f37.appspot.com",
    messagingSenderId: "939336460846"
  };
  firebase.initializeApp(config);

let database = firebase.database();

let name = "";
let destination = "";
let firstTrain = "";
let frequency = "";

// Button for adding train
$("#add-flight-btn").on("click", function(event) {
    event.preventDefault();

    // Grabs user input
     name = $("#train-name-input").val().trim();
     destination = $("#destination-input").val().trim();
     firstTrain = $("#first-train-input").val().trim();
     frequency = $("#frequency-input").val().trim();

    
    
    // Uploads train data to the database
     database.ref().push({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
     });
    
     // sanity check
     console.log(name);
     console.log(destination);
     console.log(firstTrain);
     console.log(frequency);

     // Still need to figure out modal
     var modal = document.getElementById('myModal');
     var btn = document.getElementById("myBtn");
     var span = document.getElementsByClassName("close")[0];

     btn.onclick = function() {
       modal.style.display = "block";
     }

     span.onclick = function() {
       modal.style.display = "none";
     }

     window.onclick = function() {
       if (event.target === modal) {
         modal.style.display = "none";
       }
     }

     // Clears all of the text-boxes
     $("#train-name-input").val("");
     $("#destination-input").val("");
     $("#first-train-input").val("");
     $("#frequency-input").val("");
});

// Create Firebase event for adding flight info
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    // Storing changes into variables
    let trainName = childSnapshot.val().name;
    let trainDestination = childSnapshot.val().destination;
    let trainFirst = childSnapshot.val().time;
    let trainFrequency = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(trainDestination);
    console.log(trainFirst);
    console.log(trainFrequency);

    

// Create new row
let newRow = $("<tr>").append(
    $("<td>").text(name),
    $("<td>").text(destination),
    $("<td>").text(firstTrain),
    $("<td>").text(frequency),
);

let firstTrainMath = moment(trainFirst, "HH:mm ").subtract(1, "years");
let currentTime = moment().format("HH:mm ");
console.log("Current Time:" + currentTime);

let timeDifference = moment().diff(moment(trainFirst), "minutes");
let timeLeft = timeDifference % trainFrequency;
let minutesAway = trainFrequency - timeLeft;
let nextArrival = moment().add(minutesAway, "minutes").format("HH:mm ");

// Append new row to the table

$("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFrequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td><td>");

});