function generator()
{
    let container=document.getElementById("container");
    container .innerHTML=" ";
    for( let i=0 ;i<5 ; i++)
    {
        let r =Math.floor(Math.random() * 256);
        let g=Math.floor(Math.random() * 256);
        let b=Math.floor(Math.random() *256);
        let color = "rgb(" + r +"," + g+ "," +b+")";
        let box=document.createElement("div");
        box.style.backgroundColor=color;
        box.style.height="50px";
        box.innerText=color;
        container.appendChild(box);
    }
}