let bank_stored_value = 0;
let bank_interest_value = 0.02;
let income_value = 0;
let spendings_value = 0;
let debt_value = 0;
let debt_interest_value = 0.05;

let game_length = 5;

let game_incomes = [
    30000,
    20000,
    50000,
    40000,
    50000
];

let game_spendings = [
    15000,
    40000,
    30000,
    40000,
    20000
];

let current_elem = 0;

let bank_stored_elem = document.getElementById('bankStoredValue');
let bank_interest_elem = document.getElementById('bankInterest');
let income_elem = document.getElementById('incomeValue');
let spendings_elem = document.getElementById('spendingsValue');
let debt_elem = document.getElementById('debtValue');
let chosen_elem = document.getElementById('chosenValue');
let range_elem = document.getElementById('range');

var update_slider = function() {
    let val = range_elem.value;
    let text = 'Вы хотите потратить ' + val.toString() + ' на покрытие расходов. ';
    if (val < spendings_value) {
        text += 'У вас не получится покрыть все расходы на эту сумму, поэтому вы берете в долг ' +
        (spendings_value - val).toString() + ' рублей. '
    }
    if (income_value > spendings_value) {
        text += 'Остальную сумму (а именно ' + (income_value - spendings_value).toString() + ' рублей) вы кладете в банк';
    }
    chosen_elem.innerText = text;
}

let update_view = function() {
    bank_interest_elem.innerText =
    'Сейчас в банке лежит: ' + bank_stored_value.toString();

    bank_interest_elem.innerText =
    'Процент по вкладу в банке: ' + (Math.round(bank_interest_elem * 100)).toString();

    income_elem.innerText = 
    'Доходы в этот месяц: ' + income_value.toString();
    
    spendings_elem.innerText =
    'Расходы в этот месяц (которые нужно оплатить): ' + spendings_value.toString();
    
    debt_elem.innerText =
    'Общая сумма долга: ' + debt_value.toString();

    debt_interest_elem.innerText =
    'Процент по долгам: ' + (Math.round(debt_interest_elem * 100)).toString();

    range_elem.setAttribute('max', Math.min(bank_stored_value + income_value, spendings_value));
    range_elem.setAttribute('min', 0);
    range_elem.setAttribute('step', 1);
    range_elem.value = spendings_value;

    update_slider();

};

let get_chosen_value = function() {
    return document.getElementById('range').value;
};

let update_spendings = function() {
    income_value = game_incomes[current_elem];
    spendings_value = game_spendings[current_elem];
    current_elem++;
};

let update_game = function() {
    let chosen_value = get_chosen_value();
    if (chosen_value < spendings_value) {
        let new_debt = spendings_value - chosen_value;
        debt_value += new_debt;
    }
    if (income_value > spendings_value) {
        let addition = income_value - spendings_value;
        bank_stored_value += addition;
    }
    debt_value = Math.round(debt_value * (1 + debt_interest_value));
    bank_stored_value = Math.round(bank_stored_value * (1 + bank_interest_value));
};

let update = function () {
    if (current_elem = game_length) {
        alert('Game end!\n')
    }
}