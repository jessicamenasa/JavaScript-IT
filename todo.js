let tasks=[];
function addTask()
{
   let input=document.getElementById("taskinput");
   if(input.value != " " )
   {
    tasks.push(input.value);
    input.value=" ";
    render();
   }

}
function deletetask(index)
{
    tasks.splice(index,1);
    render ();
}
    function render ()
    {
        let list = document.getElementById("tasklist");
        list.innerHTML="";
        for( let i=0 ; i< tasks.length ; i++)
        {
            list.innerHTML += "<li>" + tasks[i] + " <button onclick='deleteTask(" + i + ")'>Delete</button></li>";
        }
    }
