/*
 * Implement all your JavaScript in this file!
 */

 var addFlag = false;
 var subFlag = false;
 var multFlag = false;
 var divFlag = false;
 var field = $("#display");


 var operators;
 var operator;
 var total = 0;
 var equalsFlag = false;
 var currentNum = false;


$("#button0").click(function(){

    if(field.length ==" " && total !=0){
        $("#display").val('0');
    }else if(operators){
        $("#display").val('0');
        operators = false;        
    }else{
        var text0 = $("#display").val();
        $("#display").val(text0 + '0');
    }

    currentNum = true;
    equalsFlag = false;

  
});
$("#button1").click(function(){
    if($("#display").length ==" " && total !=0){
        $("#display").val('1');
    }else if(operators){
        $("#display").val('1');
        operators = false;        
    }else{
        var text0 = $("#display").val();
        $("#display").val(text0 + '1');
    }
    currentNum = true;
    equalsFlag = false;
 });
 $("#button2").click(function(){
    
    if($("#display").length ==" " && total !=0){
        $("#display").val('2');
    }else if(operators){
        $("#display").val('2');
        operators = false;        
    }else{
        var text0 = $("#display").val();
        $("#display").val(text0 + '2');
    }
    currentNum = true;
    equalsFlag = false;
 });
 $("#button3").click(function(){
    
    if($("#display").length ==" " && total !=0){
        $("#display").val('3');
    }else if(operators){
        $("#display").val('3');
        operators = false;        
    }else{
        var text0 = $("#display").val();
        $("#display").val(text0 + '3');
    }
    currentNum = true;
    equalsFlag = false;
 });
 $("#button4").click(function(){
    
    if($("#display").length ==" " && total !=0){
        $("#display").val('4');
    }else if(operators){
        $("#display").val('4');
        operators = false;        
    }else{
        var text0 = $("#display").val();
        $("#display").val(text0 + '4');
    }
    currentNum = true;
    equalsFlag = false;

 });
 $("#button5").click(function(){
     if($("#display").length ==" " && total !=0){
        $("#display").val('5');
    }else if(operators){
        $("#display").val('5');
        operators = false;        
    }else{
        var text0 = $("#display").val();
        $("#display").val(text0 + '5');
    }
    currentNum = true;
    equalsFlag = false;
 });
 $("#button6").click(function(){
    if($("#display").length ==" " && total !=0){
        $("#display").val('6');
    }else if(operators){
        $("#display").val('6');
        operators = false;        
    }else{
        var text0 = $("#display").val();
        $("#display").val(text0 + '6');
    }
    currentNum = true;
    equalsFlag = false;
 });
 $("#button7").click(function(){
    
    if($("#display").length ==" " && total !=0){
        $("#display").val('7');
    }else if(operators){
        $("#display").val('7');
        operators = false;        
    }else{
        var text0 = $("#display").val();
        $("#display").val(text0 + '7');
    }
    currentNum = true;
    equalsFlag = false;
 });
 $("#button8").click(function(){   
    if($("#display").length ==" " && total !=0){
        $("#display").val('8');
    }else if(operators){
        $("#display").val('8');
        operators = false;        
    }else{
        var text0 = $("#display").val();
        $("#display").val(text0 + '8');
    }
    currentNum = true;
    equalsFlag = false;
 });
 $("#button9").click(function(){
    if($("#display").length ==" " && total !=0){
        $("#display").val('9');
    }else if(operators){
        $("#display").val('9');
        operators = false;        
    }else{
        var text0 = $("#display").val();
        $("#display").val(text0 + '9');
    }
    currentNum = true;
    equalsFlag = false;
 });

 $("#addButton").click(function(){
    var outP;
   operators = true;
    

   if($("#display").val() == ''){
     $("#output").text('Please enter a numerical value!');
   }else if(total == 0){
       total = parseInt($("#display").val());
       outP = total.toString();
       currentNum =false;
   }else if(subFlag && operator == '-'){
      console.log(total);
      total =  total - parseInt($("#display").val()); 
      outP = total.toString();
      subFlag = false;
      $("#display").val(total);   
   }else if( multFlag && operator == 'x'){
    total =  total * parseInt($("#display").val());  
    outP = total.toString();
    multFlag = false;
    $("#display").val(total);
   }else if (divFlag && operator == '/'){
    total =  total / parseInt($("#display").val());
    outP = total.toString();
    $("#display").val(total);
    divFlag = false;
   }else if (currentNum  && operator == '+' && !equalsFlag && !addFlag){
       total = total + parseInt($("#display").val());
       outP = total.toString();
       $("#display").val(total);
   }

   $("#output").text(outP);
   currentNum =false;
   addFlag  = true;
   operator = '+';
 });




 $("#subtractButton").click(function(){
    var outP;
    operators = true;
    
    
  
    if($("#display").val() == ''){
        $("#output").text('Please enter a numerical value!');
      }else if(total == 0){
          total = parseInt($("#display").val());
          outP = total.toString();
          currentNum =false;
      }else if(addFlag && operator == '+'){
         console.log(total);
         total =  total + parseInt($("#display").val());   
         outP = total.toString();
         addFlag = false;
         $("#display").val(total);   
      }else if(multFlag  && currentNum == 'x'){
       total =  total * parseInt($("#display").val());
       outP = total.toString();
       $("#display").val(total);
       multFlag = false;
      }else if (divFlag && currentNum == '/'){
       total =  total / parseInt($("#display").val());   
       outP = total.toString();
       $("#display").val(total);
       divFlag = false;
      }else if(currentNum  && operator == '-' && !equalsFlag && !subFlag){
          console.log('test');
          total = total - parseInt($("#display").val());
          outP = total.toString();
          $("#display").val(total);
      }
   
      $("#output").text(outP);
     currentNum = false; 
     subFlag = true;
     operator = '-';
 });
 $("#multiplyButton").click(function(){
    var outP;
    operators = true;
    
    
  
    if($("#display").val() == ''){
        $("#output").text('Please enter a numerical value!');
      }else if(total == 0){
          total = parseInt($("#display").val());
          outP = total.toString();
          currentNum =false;
      }else if(addFlag && operator == '+'){
         console.log(total);
         total =  total + parseInt($("#display").val());  
         outP = total.toString();
         addFlag = false;
         $("#display").val(total);   
      }else if(subFlag && operator == '-'){
       total =  total - parseInt($("#display").val());  
       outP = total.toString();
       $("#display").val(total);
       subFlag= false;
      }else if (divFlag && opeartor == '/'){
       total =  total / parseInt($("#display").val());   
       outP = total.toString();
       $("#display").val(total);
       divFlag = false;
      }else if(currentNum && operator == 'x' && !equalsFlag && !multFlag){
          console.log('test');
          total = total * parseInt($("#display").val());
          outP = total.toString();
          $("#display").val(total);
      }
   
      $("#output").text(outP);
      multFlag = true;
      currentNum = false;
      operator = 'x';
    
 });
 $("#divideButton").click(function(){
    var outP;
    operators = true;
    
   
  
    if($("#display").val() == ''){
        $("#output").text('Please enter a numerical value!');
      }else if(total == 0){
          total = parseInt($("#display").val());
          outP = total.toString();
          currentNum =false;
      }else if(addFlag && operator == '+'){
         console.log(total);
         total =  total + parseInt($("#display").val()); 
         outP = total.toString();
         $("#display").val(total);  
         addFlag  = false; 
      }else if(multFlag && operator == 'x'){
       total =  total * parseInt($("#display").val()); 
       outP = total.toString();
       $("#display").val(total);
       multFlag = false;
      }else if (subFlag && operator == '-'){
       total =  total - parseInt($("#display").val());  
       outP = total.toString();
       $("#display").val(total);
       subFlag = false;
      }else if(currentNum && operator == "/" && !equalsFlag && !divFlag){
          total = total / parseInt($("#display").val());
          outP = total.toString();
          $("#display").val(total);
      }
   
      $("#output").text(outP);
    currentNum = false;
    divFlag = true;
    operator = '/';
 });
 $("#clearButton").click(function(){
    $("#display").val('');
    $("#output").text('');
    operators = false;
    addFlag = false;
    subFlag = false;
    multFlag = false;
    divFlag = false;
    operator = '';
    total = 0;

 });
 $("#equalsButton").click(function(){
     equalsFlag = true;
    

      if($("#display").val() == ''){
          $("#output").text('Please enter a numerical value!')
      }else if(operator == '+' && !operators){
          total = total + parseInt($("#display").val());
          $("#output").text(total.toString());
          $("#display").val(total);
          addFlag = false;
      }else if(operator == '-' && !operators){
          total = total - parseInt($("#display").val());
          $("#output").text(total.toString());
          $("#display").val(total);
          subFlag =false;
      }else if(operator == 'x' && !operators){
          total = total * parseInt($("#display").val());
          $("#output").text(total.toString());
          $("#display").val(total);
          multFlag = false;
      }else if(operator == '/' && !operators){
        total = total / parseInt($("#display").val());
        $("#output").text(total.toString());
        $("#display").val(total);
        divFlag = false;
      }else if(equalsFlag){
          
      }
      
   
    
     
 });
