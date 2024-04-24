var eng = +prompt("Enter your eng mask")
var math = +prompt("Enter your math mask")
var isl = +prompt("Enter your isl mask")
var urdu = +prompt("Enter your urdu mask")
var total = eng + math + isl + urdu
var paer = (total / 500) * 100
var grade;
if(paer>= 80 && paer <=101){
    grade ='A+'
}
else if (paer>= 70){
    grade = 'A'
}
else if (paer>= 60){
    grade = 'B'
}
else if (paer>= 50){
    grade = 'D'
}
else  {
    grade = 'F'
}
document.write(
   `<table border ='2px'> 
   <tr>
   <th> English</th>
   <th>Math</th>
   <th>Isl</th>
   <th>Urdu</th>
   <th>Percent</th>
   <th>Grade</th>
   
   </tr> 

   <tr>
   <td>${eng}</td>
   <td>${math}</td>
   <td>${isl}</td>
   <td>${urdu}</td>
   <td>${paer.toFixed(2)}</td>
   <td>${grade}</td>
   </tr>
   </table> ` 
)