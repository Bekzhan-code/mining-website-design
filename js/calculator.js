function numberFormat(number, decimals, dec_point, thousands_sep) {
  // Format a number with grouped thousands
  var i, j, kw, kd, km;

  if (isNaN((decimals = Math.abs(decimals)))) {
    decimals = 2;
  }
  if (dec_point == undefined) {
    dec_point = ".";
  }
  if (thousands_sep == undefined) {
    thousands_sep = " ";
  }

  i = parseInt((number = (+number || 0).toFixed(decimals))) + "";

  if ((j = i.length) > 3) {
    j = j % 3;
  } else {
    j = 0;
  }

  km = j ? i.substr(0, j) + thousands_sep : "";
  kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
  kd = decimals
    ? dec_point +
      Math.abs(number - i)
        .toFixed(decimals)
        .replace(/-/, 0)
        .slice(2)
    : "";

  return km + kw + kd;
}

let input_active = "input_usd";
let period_days = 30;
let coin_selected = "trx";

const input_coins = document.getElementById("input_coins");
const input_usd = document.getElementById("input_usd");

input_coins.addEventListener("input", () => {
  var amount = input_coins.value;
  var rate = Number(document.getElementById(coin_selected).value);
  var usd = amount * rate;

  if (usd >= 7500) {
    percent = 0.05;
    plan = 5;
  } else if (usd >= 2500) {
    percent = 0.045;
    plan = 4.5;
  } else if (usd >= 250) {
    percent = 0.04;
    plan = 4;
  } else if (usd >= 25) {
    percent = 0.03;
    plan = 3;
  } else if (usd >= 1) {
    percent = 0.025;
    plan = 2.5;
  } else {
    percent = 0.02;
    plan = 2;
  }

  var profit = usd * percent * period_days;
  var ghs = usd * 40;

  document.getElementById("result_ghs").innerHTML = numberFormat(ghs, 0);
  document.getElementById("result_profit").innerHTML = numberFormat(
    profit,
    2,
    ","
  );
  document.getElementById("result_plan").innerHTML = plan;
  document.getElementById("input_usd").value = numberFormat(usd, 2, ".", "");

  input_active = "input_usd";
});

input_usd.addEventListener("input", () => {
  var amount = input_usd.value;
  var rate = Number(document.getElementById(coin_selected).value);
  var coins = amount / rate;

  if (amount >= 7500) {
    percent = 0.05;
    plan = 5;
  } else if (amount >= 2500) {
    percent = 0.045;
    plan = 4.5;
  } else if (amount >= 250) {
    percent = 0.04;
    plan = 4;
  } else if (amount >= 25) {
    percent = 0.03;
    plan = 3;
  } else if (amount >= 1) {
    percent = 0.025;
    plan = 2.5;
  } else {
    percent = 0.02;
    plan = 2;
  }

  var profit = amount * percent * period_days;
  var ghs = amount * 40;

  document.getElementById("result_ghs").innerHTML = numberFormat(ghs, 0);
  document.getElementById("result_profit").innerHTML = numberFormat(
    profit,
    2,
    ","
  );
  document.getElementById("result_plan").innerHTML = plan;

  if (coin_selected == "btc") {
    document.getElementById("input_coins").value = numberFormat(
      coins,
      6,
      ".",
      ""
    );
  } else if (coin_selected == "bnb" || coin_selected == "ltc") {
    document.getElementById("input_coins").value = numberFormat(
      coins,
      4,
      ".",
      ""
    );
  } else {
    document.getElementById("input_coins").value = numberFormat(
      coins,
      2,
      ".",
      ""
    );
  }

  input_active = "input_usd";
});

// let period_days = Number(
//   document.querySelector(".calculator__info-profit-selected-day").innerText
// );
// let coin_selected = document
//   .querySelector(".calculator__info-power-coin")
//   .contains("selected").id;

// selectedCoin.addEventListener("click", () => {
//   coinsList.forEach((coin) => {
//     coin_selected = coin.classList.contains("selected").id;
//     console.log(coin_selected);
//   });

// //   fake_input();
// });

// document
//   .querySelector(".calculator__info-profit-selected-day")
//   .addEventListener("click", () => {
//     period_days = Number(
//       document.querySelector(".calculator__info-profit-selected-day")
//     ).innerText;
//     console.log(period_days);
//     // fake_input();
//   });

function setPeriod(value) {
  period_days = Number(value);
  fake_input();
}

function changeCoin(value) {
  coin_selected = value;
  fake_input();
}

function fake_input() {
  const input = document.getElementById(input_active);
  input.dispatchEvent(new Event("input", { bubbles: true }));
}

window.onload = function () {
  fake_input();
};
