var firebaseConfig = {
      apiKey: "AIzaSyDtReXSntmRWbmY3q5LMm9_nFHs8pv7QCQ",
      authDomain: "letschat-web-app---1-b72b8.firebaseapp.com",
      projectId: "letschat-web-app---1-b72b8",
      storageBucket: "letschat-web-app---1-b72b8.appspot.com",
      messagingSenderId: "1007860363056",
      appId: "1:1007860363056:web:42456d0c52fc2faf7622f5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      

      
      });});}
getData();
