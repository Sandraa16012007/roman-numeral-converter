const output = document.getElementById('output');
const input = document.getElementById('number');
const button = document.getElementById('convert-btn');

const convert = () => {

    if(input.value === "") {
        output.classList.add('text');
        output.innerText = "Please enter a valid number";
        return;
    }
    else{

        let number = parseInt(input.value);
        let roman = "";
        output.classList.remove('text', 'roman');

        if (number < 1) {
            output.classList.add('text');
            output.innerText = "Please enter a number greater than or equal to 1";
        } else if (number > 3999) {
            output.classList.add('text');
            output.innerText = "Please enter a number less than or equal to 3999";
        } else {
            output.classList.add('roman');
            const romanNumerals = [
                { value: 1000, numeral: "M" },
                { value: 900, numeral: "CM" },
                { value: 500, numeral: "D" },
                { value: 400, numeral: "CD" },
                { value: 100, numeral: "C" },
                { value: 90, numeral: "XC" },
                { value: 50, numeral: "L" },
                { value: 40, numeral: "XL" },
                { value: 10, numeral: "X" },
                { value: 9, numeral: "IX" },
                { value: 5, numeral: "V" },
                { value: 4, numeral: "IV" },
                { value: 1, numeral: "I" }
            ];

            for (let i = 0; i < romanNumerals.length; i++) {
                while (number >= romanNumerals[i].value) {
                    roman += romanNumerals[i].numeral;
                    number -= romanNumerals[i].value;
                }
            }

            output.innerText = roman;
        }
    }
};

button.addEventListener('click', convert);