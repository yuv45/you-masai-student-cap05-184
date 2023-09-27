var accountbalance = 5000; //Math.floor(Math.random()*20000)+20000
let mobile = document.getElementById("pay-on-mobile");
let account = document.getElementById("pay-on-account");
let add = document.getElementById("Add money");
let balance = document.getElementById("Balance");

let pop1 = document.getElementById("pop1");
let pop2 = document.getElementById("pop2");
let pop3 = document.getElementById("pop3");
let pop4 = document.getElementById("pop4");

let input1 = document.getElementById("text1");
let input2 = document.getElementById("text2");
let input3 = document.getElementById("text3");
let input4 = document.getElementById("text4");
let input5 = document.getElementById("text5");

function window1() {
  mobile.style.display = "block";
}

function window2() {
  account.style.display = "block";
}

function window3() {
  add.style.display = "block";
}

function window4() {
  balance.style.display = "block";
}

function Back() {
  mobile.style.display = "none";
  account.style.display = "none";
  add.style.display = "none";
  balance.style.display = "none";

  pop1.style.display = "none";
  pop2.style.display = "none";
  pop3.style.display = "none";
  pop4.style.display = "none";
}

let checkbalance = document.getElementById("balance");
checkbalance.textContent = `₹ ${accountbalance}`;
function sendMoneyViaMobile() {
  let total1 = document.getElementById("total1");
  pop4.style.display = "block";
  if (input1.value == 0 && input2.value == 0) {
    alert("Please enter the required field");
  } else {
    mobile.style.display = "none";
    pop4.style.display = "block";
  }
  total1.textContent = `₹${input2.value}`;

  setTimeout(function () {
    new Promise(function (resolve, reject) {
      pop4.style.display = "none";
      document.getElementById("pop1").style.display = "block";
      accountbalance = accountbalance - Number(input2.value);
      console.log(accountbalance);
      resolve("promised");
    });
  }, 4000);
  input1.value = "";
  input2.value = "";
}

function SendMoneyViaAccount() {
  let total2 = document.getElementById("total2");
  if (input3.value == 0 && input4.value == 0) {
    alert("Please enter the required field");
  } else {
    account.style.display = "none";
    pop4.style.display = "block";
  }
  total2.textContent = `₹${input4.value}`;
  setTimeout(function () {
    new Promise(function (resolve, reject) {
      pop4.style.display = "none";
      document.getElementById("pop2").style.display = "block";
      accountbalance = accountbalance - Number(input4.value);
      resolve("promised");
    });
  }, 5000);
  input3.value = "";
  input4.value = "";
}

function AddMoney() {
  let total3 = document.getElementById("total3");
  if (input5.value == 0) {
    alert("Please enter the required field");
  } else {
    add.style.display = "none";
    pop4.style.display = "block";
  }
  total3.textContent = `₹${input5.value}`;
  setTimeout(function () {
    new Promise(function (resolve, reject) {
      pop4.style.display = "none";
      document.getElementById("pop3").style.display = "block";
      accountbalance = accountbalance + Number(input5.value);
      resolve("promised");
    });
  }, 3000);
  input5.value = "";
}
