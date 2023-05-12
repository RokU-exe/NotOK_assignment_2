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


var rangeInput = document.getElementById("input-min", "input-max");

function priceFilter(){
    var minInput = rangeInput[0];
    var maxInput = rangeInput[1];

    console.log(minInput);
    console.log(maxInput)
}





