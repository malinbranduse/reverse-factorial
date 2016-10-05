window.onload = load;

function load() {

    var input = document.getElementById('text-input'),
        button = document.getElementById('button'),
        result = document.getElementById('result');

    var submit = function(event) {
            event.preventDefault();

            function reverseFactorial(value, factor) {
                if (value === factor) {
                    return factor + '!';
                }
                if (value % factor === 0) {
                    return reverseFactorial(parseInt(value / factor), factor += 1);
                }
                return "it ain't factorial mate";
            }

            var value = parseInt(input.value);

            if (!isNaN(value)) {
                var factorial = reverseFactorial(value, 2);
                result.innerHTML = factorial;
            }

    };

    var keypress = function(event) {
        if(!isNaN(parseInt(event.key)) && button.disabled == true) {
            button.disabled = false;
        }
    }

    input.onkeydown = keypress;
    button.onclick = submit;

}
