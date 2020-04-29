let savings_elem = document.getElementById('savings_value');
let essentials_sum_elem = document.getElementById('essentials_sum');
let not_essentials_sum_elem = document.getElementById('not_essentials_sum');
let debt_elem = document.getElementById('debt_value');
let debt_range = document.getElementById('debt_range');
let debt_button = document.getElementById('new_debt_value');
let bank_elem = document.getElementById('bank_amount');
let bank_range = document.getElementById('bank_range');
let bank_button = document.getElementById('new_bank_value');
let not_essentials_list_elem = document.getElementById('not_essentials_list');
let essentials_list_elem = document.getElementById('essentials_list');
let incomes_elem = document.getElementById('income_value');
let score_elem = document.getElementById('score_value');
let bank_interest_elem = document.getElementById('bank_interest');
let debt_return_range = document.getElementById('debt_return_range');
let debt_return_button = document.getElementById('return_debt_value');
let max_allowed_debt_elem = document.getElementById('max_allowed_debt_value');

let month = 0;
let months_count = 5;
let savings = 0;
let overall_benefit = 0;

let debt_amount = 0;
let bank_amount = 0;
let allowed_debt = 0;
let max_allowed_debt = 0;
let bank_interest = 1.02;
let essentials = [
    [
        {name: 'Вы приобрели неплохую машину от Audi. Нужно выплатить кредит', cost: 20000},
        {name: 'Питание', cost: 8000},
        {name: 'Плата за квартиру и ЖКХ', cost: 24000},
        {name: 'Бензин', cost: 3000},
        {name: 'Крыша на даче протекает из-за дождя. Нужно срочно исправлять', cost: 15000},
        {name: 'Подарок лучшему другу на день рождения. Он попросил кроссовки, вы не можете отказать.', cost: 10000}
    ],
    [// неудачный месяц
        {name: 'Питание', cost: 8000},
        {name: 'Плата за квартиру и ЖКХ', cost: 24000},
        {name: 'Бензин', cost: 3000},
        {name: 'Срочно нужно посетить больного друга в другом городе. Билет на поезд туда и обратно', cost: 10000},
        {name: 'Кредит за машину', cost: 20000},
        {name: 'Сломался телефон. Необходимо купить новый, но хороший, чтобы служил долго', cost: 50000},
        {name: 'Вы пошли на концерт. У вас украли деньги', cost: 5000}
    ],
    [
        {name: 'Питание.  В этом месяце Вам пришлось пару дней кормить друзей, заехавших в гости', cost: 10000},
        {name: 'Плата за квартиру и ЖКХ', cost: 24000},
        {name: 'Бензин', cost: 3000},
        {name: 'Кредит за машину', cost: 20000},
        {name: 'Новая одежда на новый сезон – футболки, шорты, бейсболка, сандалии', cost: 15000},
         {name: 'Машина барахлила. Вы провалили сделку на работе', cost: 20000},
    ],
    [
        {name: 'Питание', cost: 8000},
        {name: 'Плата за квартиру и ЖКХ', cost: 24000},
        {name: 'Бензин', cost: 3000},
        {name: 'Кредит за машину', cost: 20000},
        {name: 'Штраф за превышение скорости', cost: 2500},
        {name: 'Превысив скорость, вы врезались в фонарь. Ремонт машины и посещение травмпункта.', cost: 25000}
    ],
    [
        {name: 'Питание', cost: 8000},
        {name: 'Плата за квартиру и ЖКХ', cost: 24000},
        {name: 'Бензин', cost: 3000},
        {name: 'Кредит за машину', cost: 20000},
        {name: 'Регулярное посещение стоматолога', cost: 5000}
    ],
];

let not_essentials = [

  [

    {
      name: 'Постер «Властелина Колец» с автографом режиссера',
      cost: 12000,
      benefit: 15000
    },

    {
      name: 'ужин в шикарном ресторане, чтобы впечатлить коллег',
      cost: 15000,
      benefit: 20000
    },

    {
      name: 'Курс по экономике, чтобы продвинуть знания по сложным процентам',
      cost: 5000,
      benefit: 6000
    },

    {name: 'Книга «Фрикономика»', cost: 1500, benefit: 1700}

  ],

  [

    {name: 'билеты на матч «Спартака»', cost: 5000, benefit: 5100},

    {
      name: 'Ограниченная коллекция кроссовок от вашего любимого певца',
      cost: 10000,
      benefit: 12000
    },

    {name: 'СПА-салон. 6 сеансов', cost: 12000, benefit: 13000}

  ],

  [

    {
      name: 'Новая компьютерная игра в жанре экшн-шутер',
      cost: 4000,
      benefit: 4800
    },

    {name: 'Пожертвования в благотворительный фонд', cost: 8000, benefit: 12000}

  ],

  [

    {name: 'Заказ пиццы на дом', cost: 1000, benefit: 1200},

    {name: 'Посещение книжной выставки', cost: 2000, benefit: 2600},

    {
      name: 'Посещение последнего концерта Эминема в России',
      cost: 20000,
      benefit: 25000
    },

    {name: 'Прыжок с парашютом', cost: 5000, benefit: 800}

  ],

  [

    {name: 'Новый фильм Marvel в кино', cost: 500, benefit: 700},

    {name: 'Новый модный номер на машину (Н700НН)', cost: 10000, benefit: 10500}

  ],

];

let incomes_table = 
    [120000,  //тут 20к из сбережений, зарплата везде сотка
     100000, 100000, 100000, 100000];

let update_bank_slider = function() {
  bank_button.innerText = bank_range.value;
};

let update_debt_slider = function() {
  debt_button.innerText = debt_range.value;
};

let update_debt_return_slider = function() {
  debt_return_button.innerText = debt_return_range.value;
};

let generate_essential_good_div = function(good) {
  let result_elem = document.createElement('tr');
  let result_name_elem = document.createElement('td');
  result_name_elem.innerText = good.name;
  let result_cost_elem = document.createElement('td');
  result_cost_elem.innerText = good.cost.toString() + ' рублей';
  result_elem.appendChild(result_name_elem);
  result_elem.appendChild(result_cost_elem);
  return result_elem;
};

let generate_not_essential_good_div = function(good, index) {
  let result_elem = document.createElement('tr');
  let result_name_elem = document.createElement('td');
  result_name_elem.innerText = good.name;
  let result_cost_elem = document.createElement('td');
  result_cost_elem.innerText = good.cost.toString();
  let result_benefit_elem = document.createElement('td');
  result_benefit_elem.innerText = good.benefit.toString();
  let result_button_elem = document.createElement('td');
  let result_button = document.createElement('button');
  result_button.id = index.toString();
  result_button.purchase = result_button.setAttribute(
      'onclick', 'void handle_not_essential_button_press(parseInt(this.id));');
  result_button.innerText = 'Купить';
  result_button.className = 'button2';
  result_button_elem.appendChild(result_button);
  result_elem.appendChild(result_name_elem);
  result_elem.appendChild(result_cost_elem);
  result_elem.appendChild(result_benefit_elem);
  result_elem.appendChild(result_button_elem);
  return result_elem;
};

let generate_essentials_table = function(goods) {
  essentials_list_elem.innerHTML = '';
  let header = document.createElement('tr');
  let header_name_sign = document.createElement('th');
  let header_cost_sign = document.createElement('th');
  header_name_sign.innerText = 'Наименование';
  header_cost_sign.innerText = 'Цена (р)';
  header.appendChild(header_name_sign);
  header.appendChild(header_cost_sign);
  essentials_list_elem.appendChild(header);
  let sum = 0;
  for (let i = 0; i < goods.length; ++i) {
    let div = generate_essential_good_div(goods[i]);
    sum += goods[i].cost;
    essentials_list_elem.appendChild(div);
  }
  max_allowed_debt = sum;
  allowed_debt = sum;
  essentials_sum_elem.innerText = sum.toString();
};

let generate_not_essentials_table =
    function(goods) {
  not_essentials_list_elem.innerHTML = '';
  let header = document.createElement('tr');
  let header_name_sign = document.createElement('th');
  let header_cost_sign = document.createElement('th');
  let header_benefit_sign = document.createElement('th');
  header_name_sign.innerText = 'Наименование';
  header_cost_sign.innerText = 'Цена (р)';
  header_benefit_sign.innerText = 'Полезность (р)';
  header.appendChild(header_name_sign);
  header.appendChild(header_cost_sign);
  header.appendChild(header_benefit_sign);
  not_essentials_list_elem.appendChild(header);
  for (let i = 0; i < goods.length; ++i) {
    let div = generate_not_essential_good_div(goods[i], i);
    not_essentials_list_elem.appendChild(div);
  }
  not_essentials_sum_elem.innerText = '0';
}

let update_savings = function() {
  savings_elem.innerText = savings.toString();
};

let update_income =
    function() {
  incomes_elem.innerText = incomes_table[month].toString();
}

let update_score =
    function() {
  score_elem.innerText = overall_benefit.toString();
}

let handle_not_essential_button_press = function(id) {
  let button = document.getElementById(id);
  if (button.innerText == 'Купить') {
    button.innerText = 'Не покупать';
    let currentSum = parseInt(not_essentials_sum_elem.innerText);
    currentSum += not_essentials[month][id].cost;
    not_essentials_sum_elem.innerText = currentSum.toString();
  } else {
    button.innerText = 'Купить';
    let currentSum = parseInt(not_essentials_sum_elem.innerText);
    currentSum -= not_essentials[month][id].cost;
    not_essentials_sum_elem.innerText = currentSum.toString();
  }
};

let debt_slider_update = function() {
  debt_range.min = 0;
  debt_range.max = allowed_debt;
  debt_range.value = 0;
  update_debt_slider();
};

let bank_slider_update = function() {
  bank_range.min = 0;
  bank_range.max = savings;
  bank_range.value = 0;
  update_bank_slider();
};

let return_debt_slider_update = function() {
  debt_return_range.min = 0;
  debt_return_range.max = Math.min(debt_amount, savings);
  debt_return_range.value = 0;
  update_debt_return_slider();
};

let debt_update = function() {
  let sum = parseInt(debt_range.value);
  if (sum < 0 || sum > allowed_debt) {
    return;
  }
  debt_amount += sum;
  allowed_debt -= sum;
  savings += sum;
  debt_value.innerText = debt_amount.toString();
  max_allowed_debt_elem.innerText = allowed_debt.toString();
  update_savings();
  debt_slider_update();
  bank_slider_update();
  return_debt_slider_update();
  update_debt_slider();
  update_bank_slider();
  update_debt_return_slider();
};

let bank_update = function() {
  let sum = parseInt(bank_range.value);
  if (sum < 0 || sum > savings) {
    return;
  }
  bank_amount += sum;
  savings -= sum;
  bank_elem.innerText = bank_amount.toString();
  update_savings();
  return_debt_slider_update();
  bank_slider_update();
  update_bank_slider();
  update_debt_return_slider();
};

let return_debt_update = function() {
  let sum = parseInt(debt_return_range.value);
  if (sum < 0 || sum > Math.min(savings, debt_amount)) {
    return;
  }
  debt_amount -= sum;
  savings -= sum;
  allowed_debt += sum;
  if (allowed_debt > max_allowed_debt) {
    allowed_debt = max_allowed_debt;
  }
  debt_value.innerText = debt_amount.toString();
  update_savings();
  debt_slider_update();
  update_debt_slider();
  update_bank_slider();
  bank_slider_update();
};

let not_essential_selected = function(ind) {
  return document.getElementById(ind.toString()).innerText != 'Купить';
};

let substract_spendings = function() {
  for (let i = 0; i < essentials[month].length; ++i) {
    savings -= essentials[month][i].cost;
  }
  for (let i = 0; i < not_essentials[month].length; ++i) {
    if (not_essential_selected(i)) {
      savings -= not_essentials[month][i].cost;
      overall_benefit += not_essentials[month][i].benefit;
    }
  }
  score_elem.innerHTML = overall_benefit.toString();
};

let update_view =
    function() {
  update_score();
  update_income();
  update_savings();
  generate_essentials_table(essentials[month]);
  max_allowed_debt_elem.innerText = allowed_debt.toString();
  generate_not_essentials_table(not_essentials[month]);
  debt_slider_update();
  bank_slider_update();
  return_debt_slider_update();
}

let handle_debt_failure = function() {
  alert('Вы попали в долговую яму! GAME OVER');
  location = location;
};

let handle_success = function() {
  let score =
      Math.round(savings + overall_benefit + bank_amount - 1.2 * debt_amount);
  alert('Вы выжили! Ваш score: ' + score.toString());
  location = location;
};

let move_to_next_month = function() {
  substract_spendings();
  bank_amount = bank_amount * bank_interest;
  savings += incomes_table[month];
  if (savings < 0) {
    handle_debt_failure();
    return false;
  }
  month++;
  if (month == months_count) {
    handle_success();
    return false;
  }
  update_view();
};

debt_elem.innerText = '0';
bank_elem.innerText = '0';
bank_interest_elem.innerText =
    Math.round(((bank_interest - 1) * 100)).toString();

update_view();