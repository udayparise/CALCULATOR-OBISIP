window.onload = function() {
    var input = document.getElementById("inputBox");
    var container = document.getElementById("container");

    container.addEventListener("click", function(e) {
        buttonClick(e.target.id);
    });

    var calc = document.getElementById("Button=");
    if (calc) {
        calc.addEventListener("click", calculate);
    }

    var C = document.getElementById("ButtonC");
    if (C) {
        C.addEventListener("click", erase);
    }

    function buttonClick(buttonId) {
        if (buttonId.startsWith("Button") && (buttonId != "ButtonC") && (buttonId != "Button=")) {
            var s = buttonId.replace("Button", "");
            entries(s);
        }
    }

    function entries(s) {
        input.value += s;
    }

    function calculate() {
        try {
            input.value = eval(input.value.replace('x', '*').replace('%', '/100'));
        } catch (e) {
            input.value = "Error";
        }
    }

    function erase() {
        input.value = "";
    }
};
