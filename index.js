//fetching display
let display = document.getElementById('display');
//fetching buttons;
let buttons = document.querySelectorAll('#button');
//variables
var opeand1 = 0;
var operand2 = null;
var operator = null;
for(var i = 0; i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
    let value = this.getAttribute('data-value');
     display.innerText += value;
     if(value =='+'){
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
        operator = '+';

     }
    else if(value =='-'){
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
        operator = '-';

     }
    else if(value =='/'){
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
        operator = '/';

     }
     else if(value =='*'){
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
        operator = '*';

     }
     else if(value =='%'){
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
        operator = '%';

     }
     else if(value =='Del'){
  var currentValue = display.textContent; 
  display.innerText = currentValue.substring(0, currentValue.length - 4);

     }
     else if(value =='AC'){
        display.innerText = "";
       

     }
     else if( value == '='){
        operand2 = parseFloat(display.textContent);
        display.innerText="";
        let calcultae = operand1+operator+operand2;
        let result = eval(calcultae);
        display.innerText = result;
     }
    });
}