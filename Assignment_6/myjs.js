var validPwd11=false;
var validUserName11=false;
var validEmail11=false;

$(document).ready(function () {
    $("#error").hide()
    $("#errorUserName").hide();
    $("#errorPassword").hide();
    
    $("#user_name").change(function () {
        var validUserName = /^[a-zA-Z0-9_]+$/;
        var userName = $('#user_name').val();
        if ((userName.toLowerCase().match(validUserName))) {
            $("#errorUserName").hide();
            validUserName11=true;
            return true;
        }

        else {
            errorUserName.textContent = "Please enter valid User Name. User Name must contain letters, Numbers and/or underscore(_)"
            errorUserName.style.color = "red"
            $("#errorUserName").show();
            validUserName11=false;
            return false;
        }
    });

    $("#password").change(function () {
        var validPassword = /^[a-zA-Z0-9_#!%@$^&]{4,8}$/;
        var password = $('#password').val();
        if ((password.match(validPassword))) {
            if (password.length > 4 && password.length<=8) {
                console.log("length checked");
                $("#errorPassword").hide();
                validPwd11 = true;
                return true;
            }
        }

        else {
            errorPassword.textContent = "Please enter valid Password. Length should be in between 5 to 8."
            errorPassword.style.color = "red"
            $("#errorPassword").show();
            validPwd11 = false;
            return false;
        }
    });

    $("#email").change(function () {
        var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(northeastern.edu)$/;
        var email = $('#email').val();
        if ((email.toLowerCase().match(validEmail))) {
            $("#error").hide();
            validEmail11=true;
            return true;
        }

        else {
            error.textContent = "Please enter valid email address. Domain should be northeastern.edu"
            error.style.color = "red"
            validEmail11=false;
            $("#error").show();
            return false;

        }
    });

    $("#submit").click(function () {
        var onSubmitEmail = $('#email').val();
        var onSubmituserName = $('#user_name').val();
        var onSubmitPassword = $('#password').val();
        if (onSubmitEmail == '' || onSubmitEmail == null) {
            alert('Please enter Email');
            return false;
        }
        else if (onSubmituserName == '' || onSubmituserName == null) {
            alert('Please enter User Name');
            return false;
        }
        else if (onSubmitPassword == '' || onSubmitPassword == null) {
            alert('Please enter Password');
            return false;
        }

        console.log(validEmail11);
        console.log(validUserName11);
        console.log(validPwd11);
        if (validPwd11 && validEmail11 && validPwd11){
        localStorage.setItem("user_name", onSubmituserName);
        window.location.href = 'calculator.html';
        }
    })



});
