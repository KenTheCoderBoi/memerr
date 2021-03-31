
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAr7lc6boBAUinjs0oSoLW1MSgITiITHYo",
      authDomain: "meme-atob.firebaseapp.com",
      databaseURL: "https://meme-atob-default-rtdb.firebaseio.com",
      projectId: "meme-atob",
      storageBucket: "meme-atob.appspot.com",
      messagingSenderId: "429488617509",
      appId: "1:429488617509:web:9d23fc62185644ae0167cc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
