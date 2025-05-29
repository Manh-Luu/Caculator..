
        let toanhang1 = "";
        let toanhang2 = "";
        let opt = undefined;

        function buttonHandler(btn) {
            const pressedValue = btn.innerText;
            const resultInput = document.getElementById("resultInput");

            if (isNaN(pressedValue) && pressedValue !== ".") {
                if (pressedValue === "C") {
                    toanhang1 = "";
                    toanhang2 = "";
                    opt = undefined;
                    resultInput.value = "";
                    return;
                }

                if (pressedValue === "=") {
                    if (toanhang1 === "" || toanhang2 === "" || !opt) {
                        resultInput.value = "Lỗi nhập thiếu";
                        return;
                    }
                    const result = perform(toanhang1, toanhang2, opt);
                    resultInput.value = result;
                    toanhang1 = "";
                    toanhang2 = "";
                    opt = undefined;
                    return;
                }

                // Nếu là toán tử (+, -, x, /)
                opt = pressedValue;
            } else {
                if (opt) {
                    toanhang2 += pressedValue;
                    resultInput.value = toanhang2;
                } else {
                    toanhang1 += pressedValue;
                    resultInput.value = toanhang1;
                }
            }
        }

        function perform(orand1, orand2, operator) {
            const num1 = Number(orand1);
            const num2 = Number(orand2);

            switch (operator) {
                case '+':
                    return num1 + num2;
                case '-':
                    return num1 - num2;
                case 'x':
                case '*':
                    return num1 * num2;
                case '/':
                    return num2 === 0 ? "Lỗi chia 0" : num1 / num2;
                default:
                    return "Lỗi toán tử";
            }
        }
