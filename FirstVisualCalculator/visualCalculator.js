var dord=document.querySelector("#dord");
var bes=document.querySelector("#bes");
var plus=document.querySelector("#plus");
var equal=document.querySelector("#equal");
var reqem=document.querySelectorAll(".reqem");
var ekran =document.querySelector("#ekran");
var vur=document.querySelector("#vur");
var bol=document.querySelector("#bol");
var cix=document.querySelector("#cix");
var sil=document.querySelector("#sil");
var emel;
var a;
var b;
ekran.innerHTML="O";

for(var i=0;i<reqem.length;i++){
    reqem[i].addEventListener("click",function(){
        if(!isNaN(Number(ekran.value))){
        ekran.innerHTML+=Number(this.value);
        }else{
        ekran.innerHTML="";
        ekran.innerHTML+=Number(this.value);
        
        }
        
    })
    
}
function pluss(){
  a=Number(ekran.value);
  ekran.innerHTML="+";
  emel="+";
}

plus.addEventListener("click",function(){
  pluss();
 
})


function vurr(){
  a=Number(ekran.value);
  ekran.innerHTML="*";
  emel="vur";
}
vur.addEventListener("click",function(){
  vurr();
})

function boll(){
     a=ekran.value;
    ekran.innerHTML="/";
    emel="bol";
}

bol.addEventListener("click",function(){
   boll();
})

function cixx(){
    a=ekran.value;
    ekran.innerHTML="-";
    emel="cix";
}
cix.addEventListener("click",function(){
    cixx();
})

function equall(){
    if(emel=="+"){
    b=Number(ekran.value);
    ekran.innerHTML=a+b;
   }else if(emel=="vur"){
       b=Number(ekran.value);
       console.log(b);
       ekran.innerHTML=Number(a*b);
   }else{
       if(emel=="bol"){
           b=Number(ekran.value);
           ekran.innerHTML=Number(a/b);
       }else if(emel=="cix"){
           b=Number(ekran.value);
           ekran.innerHTML=Number(a-b);
       }
   }
}
equal.addEventListener("click",function(){
   equall();  
})

sil.addEventListener("click",function(){
    ekran.innerHTML="O";
})
