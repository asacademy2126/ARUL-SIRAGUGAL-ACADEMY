
let students = JSON.parse(localStorage.getItem("students")||"[]");
let div=document.getElementById("list");
students.forEach(s=>{
 let b=document.createElement("button");
 b.innerText=s.name+" Present";
 div.appendChild(b);
});
