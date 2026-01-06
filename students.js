
let students = JSON.parse(localStorage.getItem("students")||"[]");
function render(){
 let t="<tr><th>Name</th><th>Class</th><th>Action</th></tr>";
 students.forEach((s,i)=>{
  t+=`<tr><td>${s.name}</td><td>${s.class}</td>
  <td><button onclick='del(${i})'>Delete</button></td></tr>`;
 });
 document.getElementById("tbl").innerHTML=t;
}
function addStudent(){
 let n=prompt("Student Name");
 let c=prompt("Class");
 if(n) students.push({name:n,class:c,fees:0});
 localStorage.setItem("students",JSON.stringify(students));
 render();
}
function del(i){ students.splice(i,1); localStorage.setItem("students",JSON.stringify(students)); render();}
render();
