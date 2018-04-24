function update() {

  var messages=[];
  
  var firstName =getValue("firstName");
  if(firstName.length==0){
    messages.push("First Name is required ");
    document.getElementById("firstName").classList.add("invalid");
  }else{
    document.getElementById("firstName").classList.remove("invalid")
  }
  
  var lastName = getValue("lastName");
  if (lastName.length==0){
    messages.push(" Last Name is required ");
    document.getElementById("lastName").classList.add("invalid");
  }else{
    document.getElementById("lastName").classList.remove("invalid");
  }
  
  var emailAddress = getValue("emailAddress");
  if (emailAddress.length==0){
    messages.push(" Email is required ");
    document.getElementById("emailAddress").classList.add("invalid");
  }else{
    document.getElementById("emailAddress").classList.remove("invalid");
  }

  if (emailAddress.indexOf('@') == -1) {
    messages.push('Email is missing "@" ');
    document.getElementById("emailAddress").classList.add("invalid");
  }else{
    document.getElementById("emailAddress").classList.remove("invalid");
  }
  
  if (emailAddress.indexOf('.com') == -1) {
    messages.push('Email is missing .com ');
    document.getElementById("emailAddress").classList.add("invalid");
  }else{
    document.getElementById("emailAddress").classList.remove("invalid");
  }

  var finding = getValue("finding");
  if (finding.length==0){
    messages.push('How did you find us is required.');
    document.getElementById("finding").classList.add("invalid"); 
  }else{
    document.getElementById("finding").classList.remove("invalid");
  }

  var need = getValue("need");
  if (need.length==0){
    messages.push("Why you need this blender is required. ");
    document.getElementById("need").classList.add("invalid");
  }else{
    document.getElementById("need").classList.remove("invalid");
  }

  var terms = getValue("terms");
  if (terms.checked === false){
    messages.push("Accepting Terms and Conditions required. ");
  }
  

  for(var i=0; i<messages.length; i++){
    document.getElementById("messages").innerHTML= messages;
  }

    
if(messages.length!=0){
  var string = new Date();
}else{
  alert("Successfully submitted on "+ new Date());
}


}



 function reset(){
  messages = [];
  document.getElementById("messages").innerHTML= messages;
  var invalidMessages= document.getElementsByClassName("invalid");
  invalidMessages.classList.remove("invalid");
 }


var btn = document.getElementById('btnSubmit');
btn.addEventListener('click', update);

var btn = document.getElementById('btnReset');
btn.addEventListener('click', reset);


function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}