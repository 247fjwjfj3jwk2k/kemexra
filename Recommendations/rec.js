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
top:0,
behavior:"smooth"

})
}
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// botton validation
//catch to elements
//1-mail

    let mail=document.querySelector("#name");
    
//to make focus in mail
window.onload=function(){
  //built in fun
    mail.focus();
}


     //retake value from local storage:
  //------------------------------===============================================================================
  //retake mail value
    if(window.localStorage.getItem("mail")){
mail.value=window.localStorage.getItem("mail");}
//retake rate value
let savedrate=window.localStorage.getItem("selector");
//to make sure savedrate we take value from 1 to 5
console.log(savedrate);
if(savedrate){
    let radiobuttons=document.getElementsByName("rate");
    //to make sure that radio buttons we take node list of 5 input items
    console.log(radiobuttons);
    radiobuttons.forEach(radio=>
        {
        if(radio.value===savedrate){
            radio.checked=true;
        }
    }
    )};
//=================================================================================================

    document.forms[0].onsubmit=
    function(e){
let mailvalid=false;
let ratevalid=false;
///to take the  input of rate
let selector=document.querySelector("input[name='rate']:checked");
console.log(selector);
//to make sure that selector catch checked input
//we should write in inside when submit  bec to sure if checked or not:
if(mail.value.includes("@gmail.com"))
{mailvalid=true;}
else{alert("please enter valid mail that contain@gmail.com:")}
//if checked return nonr null value
if(selector!=null){ratevalid=true;}
else{alert("you should choose one to rate:");}

if(mailvalid==false||ratevalid==false){e.preventDefault();}
else {window.localStorage.setItem("mail",mail.value);
    window.localStorage.setItem("selector",selector.value)
 alert("successfully");
    }
}



