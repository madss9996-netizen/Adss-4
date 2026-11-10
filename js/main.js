// var x = "Mohamed adss";

// var y = x.length; 

// var y = x.indexOf("med");  ?\

// var y = x.lastIndexOf("m");  

// var y = x.indexOf("a");

// var y = x.includes("a");

// var y = x.charAt("4");

// var y = x.slice("4.8");

// var z = x.replace("Mohamed" , "alii");

// alert(z);



function validetData() {
    var user = document.getElementById("user").value;

    var email = document.getElementById("email").value;

    var password = document.getElementById("password").value;

    var confirmPassword = document.getElementById("confirmPassword").value;

    var result = document.getElementById("result");


    result.setAttribute("class","alert alert-danger text-center");


    if (user == "" && email == "" && password == "" && confirmPassword == "") {
        result.innerHTML = "Enter Data";
        return false;
    }

    else if (user.length < 3 || user.length > 15) {
        result.innerHTML = "Enter 3-15 chartacter in name";
        return false;
    }

    else if (email.indexOf("@ , 1") == -1 || email.indexOf(".com") == -1) {

        result.innerHTML = "Enter valid email";
        return false;
    }

    else if (password == "") {

        result.innerHTML = "Enter password";
        return false;

    }

    else if (password.length < 8) {
        result.innerHTML = "week password";
        return false;
    }

    else if (confirmPasswor = !password) {
        result.innerHTML = "matched password"
        return false;
    }


}

