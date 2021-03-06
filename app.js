

const canvas=document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn= document.getElementById("jsSave");
const callBtn= document.getElementById("jsCall");
const practice2= document.getElementById("practice");


const INIITAL_COLOR = "black";
const CANVAS_SIZE = 700; 

canvas.width=CANVAS_SIZE;
canvas.height=CANVAS_SIZE;

ctx.fillStyle="white";
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);

ctx.strokeStyle = "INIITAL_COLOR";
ctx.fillStyle="INIITAL_COLOR"
ctx.lineWidth = 2.5;
ctx.font = '50px serif';




let painting = false;
let filling = false;

function stopPainting(){
    painting = false;

}
function startPainting(){
    painting=true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        // console.log("creating path in ",x,y);
        ctx.beginPath();
        ctx.moveTo(x,y);
    
    } else{
        // console.log("creating line in ",x,y);
        ctx.lineTo(x,y);
        ctx.stroke();
        ctx.strokeText("Hello", 50,50,50);
          
    }
}

function handleColorClick(event){
    // console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle =color;
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    // console.log(event.target.value);
   const size = event.target.value;
   ctx.lineWidth=size;
   
}

function handleModeClick(){
    if(filling===true){
        filling=false;
        mode.innerText = "Fill";
    }else{
        filling = true;
        mode.innerText = "Paint";
        ctx.fillStyle=ctx.strokeStyle;
    }

}

function handleCanvasClick(){
    if(filling){
      ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
     
    }
}


function handleCM(event){
    // console.log(event);
    event.preventDefault();

}

function handleSaveClick(){
    const image = canvas.toDataURL();
    // console.log(image);
    const link = document.createElement("a");
    link.href =image;
    link.download = "PaintJS[EXPORT]";
    link.click();
    // console.log(link);
}

// function previewFile(){
//    const preview = document.querySelector('img');
//    const file = document.querySelector('input[type=file]').files[0];
//    let img = document.createElement("img"); 
//    const reader = new FileReader();   
//     reader.addEventListener("load", function(){
//         preview.src=reader.result;

//    }, false);

//    if (file){
//     console.log('33');
//     reader.readAsDataURL(file);
    
//    }
// }


function handleCallClick() {
   
    const x = document.createElement("Input");
    x.setAttribute("type", "file");
    // x.reader.readAsDataURL();
    document.body.appendChild(x);
        
    console.log(x);

}






if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);     
    canvas.addEventListener("mouseleave", stopPainting);    
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}  

// console.log(colors);
// console.log(Array.from(colors));
Array.from(colors).forEach(color=>color.addEventListener("click",handleColorClick));

if(range){

    range.addEventListener("input", handleRangeChange);
}

if(mode){

    mode.addEventListener("click", handleModeClick);
}

if(saveBtn){

    saveBtn.addEventListener("click", handleSaveClick);
}



if(callBtn){
    console.log("hi");
    callBtn.addEventListener("click", handleCallClick);
}


