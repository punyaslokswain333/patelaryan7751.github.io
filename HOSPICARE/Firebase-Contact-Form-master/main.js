// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
apiKey: "AIzaSyBC68Ro-7v9iadpGNIRU2ZKgbGL4qJyspA",
    authDomain: "hospicare-f1c30.firebaseapp.com",
    databaseURL: "https://hospicare-f1c30.firebaseio.com",
    projectId: "hospicare-f1c30",
    storageBucket: "hospicare-f1c30.appspot.com",
    messagingSenderId: "467763068387",
    appId: "1:467763068387:web:5b9eb2a0141cc2125434d6",
    measurementId: "G-YS3HN5H0J1"
 
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.requestPermission().then(function(){
    console.log("granted");
    
      getRegisterToken();
       
   
    
}).catch(function(err){
    console.log("user denied");
});
function getRegisterToken(){
    

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then((currentToken) => {
  if (currentToken) {
      
      var cordiRef = firebase.database().ref(`fcm/${currentToken}`);
    var data={
        fcmtoken:currentToken
        
    }
    cordiRef.set(data).then(function(){
      console.log(currentToken);
    sendTokenToServer(currentToken);
         
    });
  }else {
    // Show permission request.
    console.log('No Instance ID token available. Request permission to generate one.');
    // Show permission UI.
    
    setTokenSentToServer(false);
  
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  
  setTokenSentToServer(false);
});
}
  function setTokenSentToServer(sent) {
    window.localStorage.setItem('sentToServer', sent ? '1' : '0');
  }
function sendTokenToServer(currentToken) {
    if (!isTokenSentToServer()) {
      console.log('Sending token to server...');
      // TODO(developer): Send the current token to your server.
      setTokenSentToServer(true);
    } else {
      console.log('Token already sent to server so won\'t send it again ' +
          'unless it changes');
    }

  }
function isTokenSentToServer() {
    return window.localStorage.getItem('sentToServer') === '1';
  }


// Reference messages collection
var messagesRef = firebase.database().ref('messages');


