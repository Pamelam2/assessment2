function update() {

  var messages=[];
  
  var firstName =getValue("firstName");
  if(firstName.length==0){
    messages.push("First Name is required ");
    document.getElementById("firstName").classList.add("invalid");
  }else{
    console.log("first Name filled");
  }
  
  var lastName = getValue("lastName");
  if (lastName.length==0){
    messages.push(" Last Name is required ");
    document.getElementById("lastName").classList.add("invalid");
  }else{
    console.log("last Name filled");
  }
  
  var emailAddress = getValue("emailAddress");
  if (emailAddress.length==0){
    messages.push(" Email is required ");
    document.getElementById("emailAddress").classList.add("invalid");
  }else{
    console.log("Email is filled");
  }

  if (emailAddress.indexOf('@') == -1) {
    messages.push('Email is missing "@" ');
    document.getElementById("emailAddress").classList.add("invalid");
  }else{
    console.log("Email has @");
  }
  
  if (emailAddress.indexOf('.com') == -1) {
    messages.push('Email is missing .com ');
    document.getElementById("emailAddress").classList.add("invalid");
  }else{
    console.log("Email has .com");
  }
//below not working yet
  var finding = getValue("finding");
  if (finding.length==0){
    messages.push('How did you find us is required.');
    document.getElementById("finding").classList.add("invalid"); 
  }

  var need = getValue("need");
  if (need.length==0){
    messages.push("Why you need this blender is required. ");
    document.getElementById("need").classList.add("invalid");
  }else{
    console.log("Email is filled");
  }

  var terms = getValue("terms");
  if (terms.checked === false){
    messages.push('Accepting Terms required.');
    document.getElementById("termslabel").classList.add("invalid"); 
  }
  

  for(var i=0; i<messages.length; i++){
    document.getElementById("messages").innerHTML=messages;
  }
/*
  var user={
    firstname:firstName,
    lastname:lastName,
    email: emailAddress,
    fullname: function(){
      return this.firstname + " "+ this.lastname;
    }
  };
  
//console.log(user);
  console.log(user.fullname());
*/
    
if(messages.length!=0){
  var string = new Date();
}else{
  alert("Successfully submitted on "+ new Date());
}


}



 function reset(){

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