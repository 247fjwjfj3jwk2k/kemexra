let btn3 =document.getElementById("btn_3");
window.onscroll=function(){if (window.scrollY >= 100) {

        btn3.style.position = "fixed";
            btn3.style.bottom = "20px";
            btn3.style.right = "20px";
            btn3.style.display="block";
}
else{
    btn3.style.display="none";
}


}
btn3.onclick=function(){
window.scrollTo({
right:0,
top:0,
behavior:"smooth"

})
console.log(this.scrollTo());

}
// botton validation

    let mybtn5=document.querySelector("button")
    let mail=document.querySelector("#name");




      // save mail
    // add current mail to local storage
  
    if(window.localStorage.getItem("mail")){
mail.value=window.localStorage.getItem("mail");}
    document.forms[0].onsubmit=
    function(e){
let mailvalid=false;
let ratevalid=false;
let selector=document.querySelector("input[name='rate']:checked");

if(mail.value.includes("@gmail.com"))
{mailvalid=true;}
else{alert("please enter mail that contain@gmail.com:")}
if(selector!=null){ratevalid=true;}
else{alert("you should choose one to rate:");}

if(mailvalid==false||ratevalid==false){e.preventDefault();}
else {window.localStorage.setItem("mail",mail.value);
 
    }
}
