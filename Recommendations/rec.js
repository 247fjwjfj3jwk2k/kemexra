let mailInput = document.getElementById("name");
let btn3 = document.getElementById("btn_3");

//   استرجع الايميل والنجوم من ذاكرة المتصفح
window.onload = function() {
    // استرجاع الايميل
    mailInput.value = localStorage.getItem("mail");

    // استرجاع النجمة المحفوظة وتفعيلها
    let savedRate = localStorage.getItem("userRate");
    if (savedRate) {
        document.querySelector(`input[value="${savedRate}"]`).checked = true;
    }
};
//where!!
// 2. عند الضغط على
//       Submit
// احفظ الايميل والنجوم في ذاكرة المتصفح
document.forms[0].onsubmit = function(e) {
    let selectedStar = document.querySelector("input[name='rate']:checked");

    if (selectedStar) {
        localStorage.setItem("mail", mailInput.value);      // حفظ الايميل
        localStorage.setItem("userRate", selectedStar.value); // حفظ رقم النجمة
        alert("savedd succeefully !");
    } else {
        alert("please select stars first !");
        e.preventDefault(); // منع إرسال الفورم
    }
};

window.onscroll = function() {
    btn3.style.display = (window.scrollY >= 100) ? "block" : "none";
};

btn3.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

