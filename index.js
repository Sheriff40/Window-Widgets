var boxes = document.querySelectorAll(".box");
var icons = document.querySelectorAll(".icons");

icons.forEach(function(value)
{
    value.addEventListener("click",handle2);
   
});


boxes.forEach(function(value){
    
     value.addEventListener("click",handle);
   
})
  
function handle()
{
    boxes.forEach(function(value){
      value.style.zIndex = 0;
     });
     this.style.zIndex = 1;      
}

function handle2()
{
    if(this.classList.contains("fa-caret-left"))
    {
        this.parentNode.style.left= parseInt(this.parentNode.style.left) - 30 + "px";
    }
    else if(this.classList.contains("fa-caret-right"))
    {
        this.parentNode.style.left= parseInt(this.parentNode.style.left) + 30 + "px";
    }
    else if(this.classList.contains("fa-caret-up"))
    {
        this.parentNode.style.top= parseInt(this.parentNode.style.top) - 30 + "px";
    }
    else if(this.classList.contains("fa-caret-down")){
        this.parentNode.style.top= parseInt(this.parentNode.style.top) + 30 + "px";
    }
    
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
function handle3(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    ev.target.appendChild(document.getElementById(data));
  }
  

