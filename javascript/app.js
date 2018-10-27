 // Brandon's API Key //

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB-yn2hKaTB88WNIA0iFJVsiEX4pCjzrkg",
    authDomain: "timesheet-c2025.firebaseapp.com",
    databaseURL: "https://timesheet-c2025.firebaseio.com",
    projectId: "timesheet-c2025",
    storageBucket: "timesheet-c2025.appspot.com",
    messagingSenderId: "308067301942"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

    var name = "";
    var role = "";
    var startDate = "";
    var monthlyRate = "";

    $("#click-button").on("click", function(event) {
      event.preventDefault();

      name = $("#name-input").val().trim();
      role = $("#role-input").val().trim();
      startDate = $("#startDate-input").val().trim();
      monthlyRate = $("#monthlyRate-input").val().trim();

      database.ref().push(({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate
      });
    });