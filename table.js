let students =
[
{id:1 , name:"jessica" , role:"analyst"},
{id:2 , name:"jessy" , role:"develper"},
{id:3 , name:"jasooca" , role:"designer"}

];
let table=document.getElementById("table");
for( let i=0; i<students.length;i++)
{
  let row ="<tr><td>" + students[i].id +"</td><td>" + students[i].name +"</td><td>"+ students[i].role+ "</td></tr>"; 
  table.innerHTML += row;
}

