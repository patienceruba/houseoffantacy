document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#sub').onsubmit = function(event) {
        let pass = document.querySelector("#pass").value;
        let pass1 = document.querySelector("#pass1").value;
        
       if(pass.length>=8){
             if (pass != pass1) {
                alert("Passwords don't match!");
                event.preventDefault(); // Prevent form submission
                return false; // Prevent default form submission
            } else {
                alert("Successfully signed up");
                return true; // Allow form submission
            }
       }
       else{
        alert("Password must be greater than 8 digit")
       }
    }
});
