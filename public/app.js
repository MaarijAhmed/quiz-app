
    function checkQ1(){
    var score = 0;
    var rightawnser = document.getElementById('q1-awnser-1');
    var awnser2 = document.getElementById('q1-awnser-2');
    var awnser3 = document.getElementById('q1-awnser-3');
    var awnser4 = document.getElementById('q1-awnser-4');
   if (rightawnser.checked  == true) {
       alert("Q1 awnser : "+"right")
       score++
   }
   else {
       alert("Q1 awnser : " + 'wrong')
   }
}



function checkQ2(){
    var rightawnser = document.getElementById('q1-awnser-1');
    var awnser_2 = document.getElementById('q1-awnser-2');
    var awnser_3 = document.getElementById('q1-awnser-3');
    var awnser_4 = document.getElementById('q1-awnser-4');
   if (rightawnser.checked  == true) {
       alert("Q2 awnser : "+"right")
       score++
   }
   else {
       alert("Q2 awnser : " + 'wrong')
   }
}




function checkQ3() {
    var q3_rightawnser = document.getElementById('q3-awnser-2');
    var awnser_2 = document.getElementById('q3-awnser-1');
    var awnser_3 = document.getElementById('q3-awnser-3');
    var awnser_4 = document.getElementById('q3-awnser-4');
   if (q3_rightawnser.checked  == true) {
       alert("Q3 awnser : "+"right")
       score++
   }
   else {
       alert("Q3 awnser : " + 'wrong')
   }
}



function checkQ4() {
    var q4_rightawnser = document.getElementById('q4-awnser-2');
    var awnser_2 = document.getElementById('q3-awnser-1');
    var awnser_3 = document.getElementById('q3-awnser-3');
    var awnser_4 = document.getElementById('q3-awnser-4');
    if (q4_rightawnser.checked == true) {
        alert ("q4 awnser : "+"right")
    }
    else {
        alert ("q4 awnser : "+ 'wrong')
    }
}