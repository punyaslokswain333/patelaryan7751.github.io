var installButton = document.querySelector('#installapp');
function openCreatePostModal() {
  
  if(defferedPrompt){
    defferedPrompt.prompt();
    defferedPrompt.userChoice.then(function(choiceResult){
      console.log(choiceResult.outcome);
      if(choiceResult.outcome=== 'dismissed'){
            console.log('user cancelled installation');
      } else{
          document.querySelector('#installapp').style.display = 'none';
         document.querySelector('#text').style.display = 'none';
        console.log('user added the app');
      }

    });
    defferedPrompt=null;
  }
}



installButton.addEventListener('click', openCreatePostModal);
