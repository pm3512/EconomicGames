var on_submit = function() {
    function get_word(score) {
        switch(score) {
            case 1: return 'вопрос';
            break;
            case 0:
            case 5: return 'вопросов';
            break;
            default: return 'вопроса';
        }
    }

    inputs = [];
    right_answers = [0, 1, 0, 1, 0];
    for (let i = 1; i <= 5; ++i) {
        inputs.push([
            document.getElementById('q' + i.toString() + '-1'), 
            document.getElementById('q' + i.toString() + '-2')
        ]);
    }
    let score = 0;
    for (let i = 0; i < 5; ++i) {
        inputs[i][0].setAttribute("disabled", "disabled");
        inputs[i][1].setAttribute("disabled", "disabled");
        inputs[i][right_answers[i]].parentElement.style.backgroundColor = "#98FB98";
        if (inputs[i][right_answers[i]].checked) {
            ++score;
        } else if (inputs[i][1 - right_answers[i]].checked) {
            inputs[i][1 - right_answers[i]].parentElement.style.backgroundColor = "red";
        }
    }
    document.getElementById('score').innerText = "Вы ответили правильно на " + score.toString() + " " + get_word(score) + " из 5!";
    return false;
}