var nameError = document.getElementById('name_error')
var passwordError = document.getElementById('password_error')
var subError = document.getElementById('sub_error')
var repatepasswordError = document.getElementById('reppass_error')
var phoneError = document.getElementById('phone_error')
var EmaildError = document.getElementById('email_error')
var signError = document.getElementById('sign_error')

function validatename() {
    var name = document.getElementById('contact-name').value;
    
    if(name.length == 0){
        nameError.innerHTML ='Name is required';
return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML ='write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-sharp fa-solid fa-badge-check"></i>';
    return true;
}

function validatepassword() {
    var password = document.getElementById('password').value;
    
    if(password.length == 0){
        passwordError.innerHTML ='Password is required';
return false;
    }
    if(!password.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        passwordError.innerHTML ='write correct password';
        return false;
    }
    passwordError.innerHTML = '<i class="fa-sharp fa-solid fa-badge-check"></i>';
    return true;
}

function validatereppassword() {
    var repatepassword = document.getElementById('repassword').value;
    
    if(repatepassword.length == 0){
        repatepasswordError.innerHTML ='password is required';
return false;
    }
    if(!repatepassword.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        repatepasswordError.innerHTML ='write full password';
        return false;
    }
    repatepasswordError.innerHTML = '<i class="fa-sharp fa-solid fa-badge-check"></i>';
    return true;
}
function validatephone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0){
        phoneError.innerHTML='phone no is required';
        return false ;
    }
    if(phone.length !== 10){
        phoneError.innerHTML='phone no shoud be 10 digits';
        return false ;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='only digits please';
        return false ;
    }


 phoneError.innerHTML='<i class="fa-sharp fa-solid fa-badge-check"></i>';
 return true; 
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length == 0){
        EmaildError.innerHTML = 'Email is required';
        return false ;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        EmaildError.innerHTML = 'Email is Invalid';
        return false ;
    }
     else EmaildError.innerHTML='<i class="fa-sharp fa-solid fa-badge-check"></i>';
    return true; 
}
function validateForm() {
    if(!validatename() || !validatepassword()){
        subError.innerHTML = 'please fix error to login';
        return false ;
    }
    
}
function validateformsign(){
    if(!validateEmail() || !validatepassword() || validatereppassword() || validatephone()){
        signError.innerHTML = 'please fix error to sign';
        return false ;
    }
}