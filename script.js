function validate(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

if(email=="ade@gmail.com" && password=="0000")
{
    alert("login successful");
    return false;
}
else{
    alert("login failed");
}

}