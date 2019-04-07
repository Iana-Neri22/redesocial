$(document).ready(function(){

  $("#signUpButton").click(function(){
    window.location = "create-account.html"
  })

  $("#signInButton").click(signInEmail)

  $("#signInButtonGoogle").click(signInGoogle)

})

function signInEmail(event){
    const email = $("#signInEmail").val()
    const password = $("#signInPassword").val()
    event.preventDefault();

    firebase.auth().signInWithEmailAndPassword(email, password).then(function(response) {''
    window.location= `timeline.html?id=${response.user.uid}`;
  })

  .catch(function(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage)
    });
  }

function signInGoogle(){
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(response) {
    if(response.additionalUserInfo.isNewUser){
      window.location = `form-profile.html?id=${response.user.uid}`;
    }else{window.location = `timeline.html?id=${response.user.uid}`}
  })
  .catch(function(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    alert(errorCode, errorMessage, email, credential)
  });
}

//function signInFacebook(){}

