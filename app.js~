var config = {
    apiKey: "AIzaSyB-yn2hKaTB88WNIA0iFJVsiEX4pCjzrkg",
    authDomain: "timesheet-c2025.firebaseapp.com",
    databaseURL: "https://timesheet-c2025.firebaseio.com",
    projectId: "timesheet-c2025",
    storageBucket: "",
    messagingSenderId: "308067301942"
  };
  firebase.initializeApp(config);



    // Create a variable to reference the database
    var database = firebase.database();

    // Initial Variables (SET the first set IN FIREBASE FIRST)
    // Note remember to create these same variables in Firebase!
    var name = "";
    var age = "";
    var phone = "";

    // Click Button changes what is stored in firebase
    $("#click-button").on("click", function(event) {
      // Prevent the page from refreshing
      event.preventDefault();

      // Get inputs
      name = $("#name-input").val().trim();
      age = $("#age-input").val().trim();
      phone = $("#phone-input").val().trim();

      // Change what is saved in firebase
      database.ref().set({
        name: name,
        age: age,
        phone: phone
      });
    });