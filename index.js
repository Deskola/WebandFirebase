firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("logout_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("signup_div").style.display = "none"

    var user = firebase.auth().currentUser;
    if (user != null) {
      var userEmail = user.email;
      document.getElementById('user_param').innerHTML = "User " + userEmail
    }
  } else {
    // No user is signed in.
      document.getElementById("logout_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
      document.getElementById("signup_div").style.display = "block"
  }
});


function login() {
	var email = document.getElementById('email_field').value;
	var password = document.getElementById('password_field').value;

	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...

	  window.alert('Error: '+ errorMessage)
	});
}

function logout(){
  firebase.auth().signOut();

}

function signup(){
  var useremail = document.getElementById('new_email_field').value;
  var userpassword = document.getElementById('new_password_field').value;
  var userconfpassword = document.getElementById('conf_password_field').value;

  // window.alert(useremail +" "+userpassword+" "+userconfpassword)
  
  if(userpassword === userconfpassword) 
  {
    firebase.auth().createUserWithEmailAndPassword(useremail, userpassword).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...

      window.alert('Error: '+ errorMessage)
    });
  
  }else
  {
    window.alert("Email or password not correct")
  }

}