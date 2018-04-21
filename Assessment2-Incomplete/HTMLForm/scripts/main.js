
var messages=[];

    function submit(){
//first name is filled out
        var firstName = getValue('firstName');
    console.log(firstName);
   if(firstName.length==0){
    messages.push("First Name is required");
   }
   //last name is filled out
        var lastName = getValue('lastName');
    console.log(lastName);
   if(lastName.length==0){
    messages.push("Last Name is required");
   }
    
  //email is filled out
var email = getValue('emailAddress');
    console.log(email);
   if(email.length==0){
    messages.push("Email is required");
  }else{
    console.log("Email filled");
  }
  
  //email has @
  var p2_valid=email.indexOf('@')>-1;
   console.log(p2_valid);
  if(p2_valid==false){
    messages.push("Valid Email is required");
  }else{
    console.log("Valid Email filled");
  }
  
    
  //a #finding is selected
  var finding = getValue('finding');
    console.log(finding);
   if(finding.length==0){
    messages.push("Recommendation is required");
  }else{
    console.log("Recommendation Selected.");
  }

  // #need is filled out.
  var finding = getValue('finding');
  console.log(finding);
 if(finding.length==0){
  messages.push("Recommendation is required");
}else{
  console.log("Recommendation Selected.");
}

  //accept terms and conditions
  var terms = getValue("terms");
  console.log("terms");
     if (terms.checked === false) {
    messages.push("Accepting Terms is required");
  }else{
    console.log("Terms Accepted.");
  }
}

var btn = document.getElementById('btnSubmit');
btn.addEventListener('click', submit);

function getValue(x) {
    return document.getElmentById(x).value;
}