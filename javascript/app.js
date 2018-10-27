 <script src="https://code.jquery.com/jquery.js"></script>

 // Brandon's API Key //
 var config = {
    apiKey: "AIzaSyB-yn2hKaTB88WNIA0iFJVsiEX4pCjzrkg",
    authDomain: "timesheet-c2025.firebaseapp.com",
    databaseURL: "https://timesheet-c2025.firebaseio.com",
    projectId: "timesheet-c2025",
    storageBucket: "",
    messagingSenderId: "308067301942"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var userRef = database.ref("/user");
