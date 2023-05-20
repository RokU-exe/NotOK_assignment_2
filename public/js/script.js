function checkAll(checkBox){
    var checkBoxes = document.querySelectorAll('input.check-option');
    for(let i = 0; i < checkBoxes.length; i++){
        checkBoxes[i].checked =  checkBox.checked;
    }

    filterSelection();
}

function filterSelection(){  
    const vendors = ["uniqlo", "gearVN", "dyson"];

    for(let i = 0; i < vendors.length; i++){
      var checkBox = document.getElementById(vendors[i]);
      var product = document.getElementsByClassName(vendors[i]);

      for(let i = 0; i < product.length; i++){
        if (checkBox.checked == true){
          product[i].style.display = "flex";
        } else {
          product[i].style.display = "none";
        }
      }
    }
}



function priceFilter(){
   var minInput = document.getElementById('input-min');
   var maxInput = document.getElementById('input-max');

   
   console.log(minInput);
   console.log(maxInput)
}


var count = 2;

function validate ()
{
   var user = document.login.username.value;
   var password = document.login.password.value;
   var valid = false;
   var usernameArray = ["yuki"]
   var passwordArray = ["123"]
   for (var i = 0; i < usernameArray.length; i++)

if (user == usernameArray[i])
if (password == passwordArray [i])
{
   valid = true;
   break;
}

if(valid)
{
   alert("Login was successful");
   window.location = "wwww.google.ie"
   return false ;
}
var again = "tries";
if (count ==1)
{
   again = "try"
}
if(count >= 1)
{
   alert("Wrong password or username")
   count--;
}
}

