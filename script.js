function oscaremily(){
  var password=document.getElementById("quizQ");
  var passwordText=password.value.toUpperCase();
  if(passwordText == "BARBIE") {
    return true;
  }
  alert("that is incorrect!");
  return false;
}