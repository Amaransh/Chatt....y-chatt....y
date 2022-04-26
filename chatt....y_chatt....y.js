const firebaseConfig = {
  apiKey: "AIzaSyCnByohvS2QkMcHPXVLGwZjCLNFAaEN7l0",
  authDomain: "chatty-chatty-79ceb.firebaseapp.com",
  databaseURL: "https://chatty-chatty-79ceb-default-rtdb.firebaseio.com",
  projectId: "chatty-chatty-79ceb",
  storageBucket: "chatty-chatty-79ceb.appspot.com",
  messagingSenderId: "1068334741638",
  appId: "1:1068334741638:web:3c3e0707b19db63a297907"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  function addroom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : ("adding room name")
    })
    localStorage.setItem("room_name", room_name);
    window.location = "chatt....y_chaatt....y_chat.html"
  }
  
  function logout()
  {
    window.location = "chatty.html"
  }