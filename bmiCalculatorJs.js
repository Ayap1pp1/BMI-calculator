function calculateBmi() {

    var weight = document.getElementById("weight").value.replace(/,/g, '.');
    var height = document.getElementById("height").value.replace(/,/g, '.');
    var cmIsChecked = document.getElementById("chkbxCm").checked;

    if (cmIsChecked) {
        height = height / 100;
    }
    var bmi = Math.round(weight / Math.pow(height, 2) * 10) / 10;
    var result = "Your BMI is " + bmi;

    if (bmi < 18.5) {
        result += " You are underweight.";
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        result += " You are normal weight.";
    }
    if (bmi >= 25 && bmi <= 29.9) {
        result += " You are overweight.";
    }
    if (bmi >= 30) {
        result += " You are obese.";
    }
    if (isNaN(bmi)) {
        result = "Input your height and weight correctly."

    }
    document.getElementById("result").innerText = result;
}

function calculateResult() {
    calculateBmi();
    calculateBmr();
}

//Reset button
function resetAllFields() {
    document.getElementById("bmiForm").reset();
    document.getElementById("result").innerText = "";
    document.getElementById("resultBmr").innerText = "";
}


function calculateBmr() {

    var weight = document.getElementById("weight").value.replace(/,/g, '.');
    var height = document.getElementById("height").value.replace(/,/g, '.');
    var age = document.getElementById("age").value;
    var maleIsChecked = document.getElementById("chkbxMale").checked;
    var femaleIsChecked = document.getElementById("chkbxFemale").checked;
    var mIsChecked = document.getElementById("chkbxM").checked;

    if (mIsChecked) {
        height = height * 100;
    }
    var bmr;
    var result;

    if (maleIsChecked) {
        //Men:  BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        result = "Your BMR is " + Math.round(bmr).toString();
    }
    if (femaleIsChecked) {
        //Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) - (4.330 x age in years)
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        result = "Your BMR is " + Math.round(bmr).toString();
    }

    if (!age || isNaN(age)) { //if age doesnt have a value; if age is not a number
        result = "Input your age correctly."
    }

    document.getElementById("resultBmr").innerText = result;

}

