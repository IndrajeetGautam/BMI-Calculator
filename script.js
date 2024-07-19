let weight = document.getElementById("weight");
let height = document.getElementById("height");

function calculateBMI() {
    let heigh = height.value / 100;
    let calc = weight.value / (heigh * heigh);
    let resultText = calc.toFixed(2) + " ::";

    if (calc < 18.5) {
        resultText += "Underweight";
    } else if (calc >= 18.5 && calc < 24.9) {
        resultText += "Normal weight";
    } else if (calc >= 25 && calc < 29.9) {
        resultText += "Overweight";
    } else {
        resultText += "Obesity";
    }

    document.getElementById("result").innerHTML = resultText;
}
