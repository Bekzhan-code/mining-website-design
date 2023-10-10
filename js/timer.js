var timeSeconds = 60; // Нужно установить таймер взяв данные из бд

timer = setInterval(function () {
  seconds = timeSeconds % 60; // Получаем секунды
  minutes = (timeSeconds / 60) % 60; // Получаем минуты
  hour = (timeSeconds / 60 / 60) % 60; // Получаем часы
  // Условие если время закончилось то...
  if (timeSeconds <= 0) {
    // Выводит сообщение что время закончилось
    document.getElementById("bonus_button").disabled = false;
    document.getElementById("bonus_timer").innerHTML = "Get bonus";
  } else {
    // Иначе
    // Создаём строку с выводом времени
    let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
    // Выводим строку в блок для показа таймера
    document.getElementById("bonus_timer").innerHTML = strTimer;
    --timeSeconds; // Уменьшаем таймер
  }
}, 1000);
