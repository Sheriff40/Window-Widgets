 
var boxes = document.querySelectorAll(".box");
var icons = document.querySelectorAll(".icons");



// For Stacking the box elements on top of each other

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


// Moving the boxes using arrows

icons.forEach(function(value)
{
    value.addEventListener("click",handle2);  
});


//Stores original position of the boxes
var boxWidth = [];
var boxHeight = [];
var boxTop = [];
var boxLeft = [];
boxes.forEach(function(value){
    boxWidth.push(value.style.width);
 
    boxHeight.push(value.style.height);
    boxTop.push(value.style.top);
    
    boxLeft.push(value.style.left);
})

function handle2()
{
    if(this.classList.contains("fa-caret-left"))
    {
        this.parentNode.parentNode.style.left= parseInt(this.parentNode.parentNode.style.left) - 30 + "px";
    }
    else if(this.classList.contains("fa-caret-right"))
    {
        this.parentNode.parentNode.style.left= parseInt(this.parentNode.parentNode.style.left) + 30 + "px";
    }
    else if(this.classList.contains("fa-caret-up"))
    {
        this.parentNode.parentNode.style.top= parseInt(this.parentNode.parentNode.style.top) - 30 + "px";
    }
    else if(this.classList.contains("fa-caret-down")){
        this.parentNode.parentNode.style.top= parseInt(this.parentNode.parentNode.style.top) + 30 + "px";
    }
}


// Droppable property for the boxes

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
  

//Variables for peforming window operations

var closeButton = document.querySelectorAll(".fa-times");
var maximizeButton1 = document.querySelectorAll(".window-maximize-1");
var maximizeButton2 = document.querySelectorAll(".window-maximize-2");
var minimizeButton = document.querySelectorAll(".fa-minus");
var navbar = document.querySelectorAll(".navbar");

//For Closing the window

closeButton.forEach(function(value){
    value.addEventListener("click",function(){
        this.parentNode.parentNode.style.display = "none";
        this.style.color = "blue";
        this.previousElementSibling.previousElementSibling.style.display = "block";
    });
})


//For Maximizing the window

maximizeButton1.forEach(function(value){
    value.addEventListener("click",function(){
        this.parentNode.parentNode.style.width = "95vw";
        this.parentNode.parentNode.style.height = "100vh";
        this.parentNode.parentNode.style.top = "0";
        this.parentNode.parentNode.style.left = "0";
        this.style.display = "none";
        this.nextElementSibling.style.display = "block";
        this.parentNode.previousElementSibling.style.display = "none";
        this.nextElementSibling.nextElementSibling.style.display = "block";
    });
})

//For Resizing the window
maximizeButton2.forEach(function(value,index){
    var i = index;
    value.addEventListener("click",function(){
        this.parentNode.parentNode.style.width = boxWidth[i];
        this.parentNode.parentNode.style.height = boxHeight[i];
        this.parentNode.parentNode.style.top = boxTop[i];
        this.parentNode.parentNode.style.left = boxLeft[i];
        this.style.display = "none";
        this.previousElementSibling.style.display = "block";
        this.parentNode.previousElementSibling.style.display = "block";
        this.nextElementSibling.style.display = "block";
    });
})

//For minimizing the window

minimizeButton.forEach(function(value,index){
    var i = index;
    value.addEventListener("click",function(){
        this.parentNode.parentNode.style.width = "150px";
        this.parentNode.parentNode.style.height = "20px";
        this.parentNode.parentNode.style.top = "90%";
        this.parentNode.parentNode.style.left = ((i*200) + "px");
        this.parentNode.previousElementSibling.style.display = "none";
        this.style.display = "none";
    });
})