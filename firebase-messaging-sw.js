importScripts('https://www.gstatic.com/firebasejs/4.3.0/firebase-app.js');
importScripts('firebase-messaging.js');

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

const messaging= firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){
    const title='Hello World';
    const options={
      body: payload.data.message,
      
    };
    return self.registration.showNotification(title,options);
    
});