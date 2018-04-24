/*
    Read the comments and follow the instructions
    Total Points available -> 80
    Part 1 - 30 points
    Part 2 - 40 points
    Clean Code and Comments - 10 points
    Total Challenge/Bonus points -> 10
*/


/*========================
    Part 1 Fixing Code - 30
====================================*/


/*
    The code below is broken and not doing what it should.  
    
    Do your best to fix it.
    Look for:
    Wrong selectors
    Misspelling
    Variables used at the wrong time
    Wrong operators
    It uses the HTML in /debugging/index.html  
    Points Available: 30points
*/
$(function () {


    //This is supposed to add an event listener but it's causing an error
    //Fix it please.
    //document.getElementById('btnMake').addEventListener('click', build);
    $('#btnMake').on('click', build);

    function build() {
		
        var firstName = $('#firstName');
        var firstNameValue = firstName.val();
      console.log(firstNameValue); 


        var lastName = $('#lastName');
        var lastNameValue = lastName.val();
      console.log(lastNameValue);

        /*invalid should add a red border around the respective input
            It will also show a hidden error message */
        if (firstNameValue === '') {
            firstName.addClass('invalid');

            var parentDiv = firstName.closest('#input-group');
            var errorSpan = parentDiv.find('.errors');
            errorSpan.show();
        }
        if (lastNameValue === '') {
            lastName.addClass('invalid');

            var parentDiv = lastName.closest('#input-group');
            var errorSpan = parentDiv.find('.errors');
            errorSpan.show();
        }

        
        /*====================================
            I need to create an object, but it's not working
            so I just commented it out.
            Please fix it
        ======================================*/

		
        var userObject = {
            firstName:firstNameValue,
            lastName: lastNameValue,
            fullName: function () {
                return this.firstName + ' ' + this.lastName;
            },
            state: $('#state').val()
        };
		
		console.log(userObject.fullName());
        console.log(userObject);
		

        


    }





});



/*========================
    Part 2 Writing Functions -  10 points each
====================================*/


/*
    Write a JavaScript function that accepts 
    one input parameter and returns the number 
    of characters in the string.
    //Sample
    var foo = getLength('hello world');
    console.log(foo) // Outputs 11
*/




function getLength(x){
  return x.length;
}


console.log('-------------Get Length----------------'); 
var foo = getLength('hello world');
console.log(foo); // Outputs 11
var foo2 = getLength('lorem lorem asldkf asldfkja sdf');
console.log(foo2); // Outputs 31
console.log('-----------------------------'); 



/*
    Write a JavaScript function that computes the sum
    all of the numbers in an array.
    //Sample
    var foo = sumArray([2,5,6]);
    console.log(foo) // Outputs 13
*/

function sumArray(y){
           var total =  0;
            for(var i=0;i<y.length;i++)
              {                  
                if(isNaN(y[i])){
                continue;
                 }
                  total += Number(y[i]);
               }
             return total;
            }




console.log('-------------  SUM ARRAY ----------------'); 
foo = sumArray([2, 5, 6]);
console.log(foo); // Outputs 13

foo = sumArray([2, 5, 6, 2, 5, 6]);
console.log(foo); // Outputs 26

console.log('-----------------------------');



/*
    Write a JavaScript function that converts a decimal
    into a percentage.
    //Sample
    var foo = percentage(.23);
    console.log(foo) //Outputs "23%"
    var foo2 = percentage(.5);
    console.log(foo2) //Outputs "50%"
*/

function percentage(x){
  return (x*100)+"%";
}
  
 
console.log('------------ Percentage-----------------');

foo = percentage(.23);
console.log(foo) //Outputs "23%"

foo2 = percentage(.5);
console.log(foo2) //Outputs "50%"




/*
    Write a JavaScript function that takes a date and adds a 
    number of days to it.
    //Sample
    var d = new Date('1/1/2001');
    var newD = addDays(d, 10);
    console.log(newD);  //outputs Thu Jan 11 2001 00:00:00 GMT-0600 (Central Standard Time)
*/
      
console.log('------------ Add Days-----------------');



/*
Tried and failed. :)
function addDays(a, b){
 var newDate =a.setDate(a.getDate() + b);
    var day = a.getDay();
    var date = a.getDate()+b;
    var month = a.getMonth();
    var year = a.getFullYear();
    var hour = a.getHours();
    var min=a.getMinutes();
    var sec= a.getSeconds();
    //var newDate = day+ " " +month+ ' ' +date + ' ' +year+' '+hour+ ' '+min+' '+sec;
    return newDate.toUTCString();
   
}


function addDays(a, b){
    var newDate = {
        a.getDay(),
        a.getMonth(),
        (a.getDate()+b),
        a.getFullYear(),
        a.getHours(),
        a.getMinutes(),
        a.getSeconds();  
    } 
    return new Date(newDate);
  }

var d = new Date('1/1/2001');
var newD = addDays(d, 10);
console.log(newD); //outputs Thu Jan 11 2001 00:00:00 GMT-0600 (Central Standard Time)
d = new Date('9/10/2001');
newD = addDays(d, 100);
console.log(newD); //outputs Thu Jan 11 2001 00:00:00 GMT-0600 (Central Standard Time)
console.log('-----------------------------');
/*

    Challenge - 
    Write a javascript function to take an array of numbers
    and sorts them in ascending order.
    //Sample
    var array1 = [3, 5, 1, 10];
    console.log(sortArray(array1); //outputs [1,3,5,10]
*/
function sortArray(x) {
   return x.sort(function(a, b){return a-b});
    
}
console.log('------------ Bonus Challenge-----------------');


var array1 = [3, 5, 1, 10];
console.log(sortArray(array1)); //outputs [1,3,5,10]










































































/*
=====================================================================
    Nothing is broken here... here be dragons
    Go away :)
*/
$(function () {
    $('#btnReset').on('click', function () {
        $('#firstName').val('John');
        $('#lastName').val('Doe');
        $('#state').val('OK');
        $('.errors').hide();
        $('.invalid').removeClass('invalid');
    });
});