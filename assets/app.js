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

// Button for adding flights
$("#add-flight-btn").on("click", function(event) {
    event.preventDefault();
    
})