var left = document.getElementById("left");
var right = document.getElementById("right");

left.style.paddingLeft = "20%";
right.style.float = "right";
right.style.paddingRight = "20%";

var iframe = document.getElementById("myFrame");

iframe.style.position = "relative";
iframe.style.left = "20%";

set_element_size_style();

var correct_answers = [
  [
    "1/6",
    "1 / 6",
    "1/6 молотка",
    "1 / 6 молотка",
    "1/6 молоток",
    "1 / 6 молоток",
    "одна шестая молотка"
  ],
  [
    "6",
    "шесть",
    "6 гвоздей",
    "шесть гвоздей",
    "6 гвоздь",
    "шесть гвоздь"
  ]
]

function set_element_size_style() {
  left.style.width = left.parentElement.clientWidth * 0.25 + "px";
  right.style.width = left.style.width;
  iframe.style.width = iframe.parentElement.clientWidth * 0.6 + "px";
  iframe.style.height = iframe.clientWidth * 0.35 + "px";
}

function submitAnswers() {
  var ans_1 = document.getElementById("answer_1");
  var ans_2 = document.getElementById("answer_2");
  if(correct_answers[0].indexOf(ans_1.value) != -1) {
    ans_1.style.background = "green";
  }
  else {
    ans_1.style.background = "red";
  }
  if(correct_answers[1].indexOf(ans_2.value) != -1) {
    ans_2.style.background = "green";
  }
  else {
    ans_2.style.background = "red";
  }
}

function showAnswer() {
  document.getElementById("btn").parentNode.removeChild(document.getElementById("btn"));
  var p = document.createElement("P");
  var t = document.createTextNode("Ответ: Альтернативная стоимость производства молотка ниже у работника – значит, ему придется отказаться от меньшего количества гвоздей для производства молотка. То есть, общее количество гвоздей увеличится не так сильно. Значит, молоток должен делать работник, а не помощник.");
  p.appendChild(t);
  document.getElementById("add_to").appendChild(p);
}

window.addEventListener("resize", set_element_size_style);

localStorage.clear();
