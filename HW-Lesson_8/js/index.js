//утсановка даты и времени
const data = new Date();
const day = data.getDate();
const month = data.getMonth() + 1;
const hour = data.getHours () +1;
const min = data.getMinutes ();
const $CARENT_DATA = document.querySelector(".current__data");
$CARENT_DATA.textContent = `${day}.${month} ${hour}:${min}`;


const $USER_PASSWORD = document.querySelector(".userPassword");
const $LOGIN_BTN = document.querySelector(".login-btn");
const $LOGO = document.querySelector(".logo");
const $HEADER = document.querySelector("#header");
const $ADMIN_PANEL = document.querySelector(".admin");

let password = "1488";

const showAdmin = () => {
  if ($USER_PASSWORD.value === password) {
    $ADMIN_PANEL.classList.toggle("active");
    $LOGIN_BTN.textContent = "Выйти";
    $USER_PASSWORD.style.display = "none";
    $LOGO.textContent = "Панель администратора";
    $HEADER.style.backgroundColor = "#fff";
  } else if (!$ADMIN_PANEL.classList.contains("active")) {
    $ADMIN_PANEL.classList.toggle("active");
    $LOGIN_BTN.textContent = "Войти";
    $USER_PASSWORD.style.display = "block";
    $LOGO.textContent = "Бензоколонка 3000";
    $HEADER.style.backgroundColor = "transparent";
  } else if (
    $USER_PASSWORD.value.length >= 1 &&
    $USER_PASSWORD.value.length < 4
  ) {
    alert("недостаточно символов");
  } else if ($USER_PASSWORD.value == "") {
    alert("введите пароль!");
  } else if ($USER_PASSWORD.value !== password) {
    alert("не верный пароль!");
  } else if ($USER_PASSWORD.value = "") {
    alert ("добро пожаловать!")
  }
  $USER_PASSWORD.value = "";
};

const $ADMIN_BTN = document.querySelectorAll(".adminBtn");
const $GAS_CARD_INPUT = document.querySelectorAll(".gas-card__input");
const $ADMIN_ITEM_INPUT = document.querySelectorAll(".adminItemInput");

let cardInput = [];
for (let i = 0; i < $GAS_CARD_INPUT.length; i++) {
  cardInput.push($GAS_CARD_INPUT[i]);
}

let adminInput = [];
for (let i = 0; i < $ADMIN_ITEM_INPUT.length; i++) {
  adminInput.push($ADMIN_ITEM_INPUT[i]);
}

let input = cardInput.concat(adminInput);

for (let i = 0; i < $ADMIN_BTN.length; i++) {
  $ADMIN_BTN[i].addEventListener("click", (e) => {
    e.target.classList.toggle("yellow");
    input.forEach((item) => {
      if (e.target.dataset.btn == item.dataset.admin) {
        for (let i = 0; i < $GAS_CARD_INPUT.length; i++) {
          if ($GAS_CARD_INPUT[i].dataset.gas == item.dataset.admin) {
            $GAS_CARD_INPUT[i].setAttribute("data-cost", item.value);
          }
        }
      }
    });
  });
}

const $CARD_BTN = document.querySelectorAll(".card-btn");
const $COST_OUT = document.querySelector(".cost-out");

$CARD_BTN.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target);
    for (let i = 0; i < $GAS_CARD_INPUT.length; i++) {
      if (e.target.dataset.result == $GAS_CARD_INPUT[i].dataset.gas) {
        let result = $GAS_CARD_INPUT[i].value * $GAS_CARD_INPUT[i].dataset.cost;
        $COST_OUT.textContent = result.toFixed(2);
        document.querySelector(".cost-name").textContent =
          $GAS_CARD_INPUT[i].dataset.id;
      }
    }
  });
});

$LOGIN_BTN.addEventListener("click", showAdmin);
