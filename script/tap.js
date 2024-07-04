let tap = document.getElementById("tapp");
let tcount = document.getElementById("tap-count");
let wid = document.getElementById("withdrawal");
let bal = document.getElementById("balance");
let addinput = document.querySelector(".form");
let inputwalletclose = document.getElementById("close");
let cliamedBalance = document.getElementById("cliamedBalance");
let submitBtn = document.getElementById("submitAddress");
let addressinput = document.getElementById("wallet");
let ballanceText = "Ballance";
let i;
let count = 0;
let dollar = 0;
tap.addEventListener("click", () => {
  for (i = 0; i < 1; i++) {
    tcount.innerHTML = count;
    count += 4234;
    //  let ttt = count.subString(3, 0)
    // let whole = ttt + ",";

    if (count > 5000) {
      dollar += parseFloat(0.01);

      bal.innerHTML = ballanceText + ":" + "$" + dollar.toFixed(3);
    }
  }
});

wid.addEventListener("click", () => {
  addinput.style.display = "block";
  cliamedBalance.innerHTML = "$" + dollar.toFixed(2);
});

inputwalletclose.addEventListener("click", () => {
  addinput.style.display = "none";
});
submitBtn.addEventListener("click", () => {
  if (addressinput.value == "") {
    alert("INPUT WALLET ADDRESS");
  } else if (addressinput.value.length < 10) {
    alert("wALLET ADDRESS IS INCORRECT");
  } else {
    addinput.style.display = "none";
    alert("WALLET ADDRESS SUBMITTED SUCCESSFULLY");
  }
});
