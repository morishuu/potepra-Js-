


var topscreen=document.getElementById('topscreen');
var Flag=0; //演算子か数字かの判別用　0:数字　1:演算子
topscreen.innerHTML = 0;

function clickNumber(button){
    let singleNumber= button.innerHTML;
    if(topscreen.innerHTML == 0 && Flag == 1){
       topscreen.innerHTML +=`${singleNumber}`;
       Flag = 0;
    } else if(topscreen.innerHTML == 0){
    topscreen.innerHTML= singleNumber;
    Flag = 0;
    } else {topscreen.innerHTML +=`${singleNumber}`};
    Flag = 0;
}

function click00(button){
  if (topscreen.innerHTML == 0 && Flag == 0){
    topscreen.innerHTML = 0;
    Flag = 0;
  } else {topscreen.innerHTML += button.innerHTML;
}}

function clickDot(button){
    if (Flag == 0){
   topscreen.innerHTML += button.innerHTML;
     Flag=1 ;
    } else {
      clickDot(button).disabled = true;
    }}

function clickCal(button){
    let cal= button.innerHTML;
    if(topscreen.innerHTML == 0){
      topscreen.innerHTML = 0;
      Flag = 0;
    } else {if(Flag == 0){
      topscreen.innerHTML += `${cal}`;
      Flag = 1;
    } else {
      topscreen.innerHTML = topscreen.innerHTML.slice(0,-1);
       topscreen.innerHTML += `${cal}`;
       Flag =1;
}}}
  
function clickAC(button){
    topscreen.innerHTML=0;
    Flag = 0;
}

function clickE(button){
    topscreen.innerHTML= eval(topscreen.innerHTML);
    Flag = 0;
  
}

        
    
