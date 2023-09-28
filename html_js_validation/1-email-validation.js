const errorEmail = document.getElementById('error');
const validateEmail = () => {
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const email = document.getElementById('email').value;
    if (email.match(mailformat)) {
        errorEmail.innerText = '';
        return true;
    } else {
        errorEmail.innerText = 'Email is not valid';
        return false;
    }

}