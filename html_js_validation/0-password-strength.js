const errorPassword = document.getElementById('error');
function validatePassword(){
    const password = document.getElementById('password').value;

    if(password.length < 8){
        errorPassword.innerText = 'Password must be at least 8 characters';  
        return false;
    }
    if(!/[A-Z]/.test(password)){
        errorPassword.innerText = 'Password must contain at least 1 uppercase letter';
        return false;
    }
    if(!/[a-z]/.test(password)){
        errorPassword.innerText = 'Password must contain at least 1 lowercase letter';
        return false;
    }
    if(!/[0-9]/.test(password)){
        errorPassword.innerText = 'Password must contain at least 1 number';
        return false;
    }
    if(password.search(/[^a-zA-Z0-9]/i) < 0){
        errorPassword.innerText = 'Password must contain at least 1 special character';
        return false;
    }
}
