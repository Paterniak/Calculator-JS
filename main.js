function dodawanie(){
    var number1=parseInt(document.getElementById("button1").value);
    var number2=parseInt(document.getElementById("button2").value);
    var score1=number1+number2;
         document.getElementById("score").innerHTML=score1;
                  }
 function odejmowanie(){
     var number1=parseInt(document.getElementById("number1").value);
    var number2=parseInt(document.getElementById("number2").value);
    var score1=number1-number2;
         document.getElementById("score").innerHTML=score1;
 }
 function mnozenie(){
     var number1=parseInt(document.getElementById("number1").value);
    var number2=parseInt(document.getElementById("number2").value);
    var score1=number1*number2;
         document.getElementById("score").innerHTML=score1;
 }
 function dzielenie(){
    
     var number1=parseInt(document.getElementById("number1").value);
    var number2=parseInt(document.getElementById("number2").value);
    var score1=number1/number2;
         document.getElementById("score").innerHTML=score1;
 }
 