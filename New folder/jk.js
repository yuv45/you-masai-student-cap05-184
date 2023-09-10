


javascript
document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get the email entered by the user
  var email = document.getElementById("email").value;
  
  // Perform password reset logic here (e.g., send reset link to email)
  // You can make an AJAX request to your server or use any other method to handle the password reset process
  
  // Reset the form
  document.getElementById("forgotPasswordForm").reset();
  alert("Password reset instructions have been sent to your email!");
});
