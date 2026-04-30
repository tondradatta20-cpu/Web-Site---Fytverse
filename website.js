function showPage(page){
    let pages = document.querySelectorAll('.container');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(page).classList.add('active');
    window.scrollTo(0,0);
}

function beginnerWorkout(){
    document.getElementById("workoutText").innerHTML =
    "Beginner Plan:<br>✔ Push-ups: 5-10 reps<br>✔ Squats: 10 reps<br>✔ Walking: 10 mins";
}

function intermediateWorkout(){
    document.getElementById("workoutText").innerHTML =
    "Intermediate Plan:<br>✔ Push-ups: 15 reps<br>✔ Lunges: 12 reps<br>✔ Plank: 30 sec<br>✔ Jogging: 15 mins";
}

function advancedWorkout(){
    document.getElementById("workoutText").innerHTML =
    "Advanced Plan:<br>✔ Burpees: 15 reps<br>✔ Jump Squats: 15 reps<br>✔ Plank: 1 min<br>✔ Running: 20 mins";
}

function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let feet = document.getElementById("feet").value;
    let inch = document.getElementById("inch").value;

    let height = (feet * 0.3048) + (inch * 0.0254);

    let bmi = weight / (height * height);
    bmi = parseFloat(bmi.toFixed(2)); // number হিসেবে রাখলাম

    let status = "";
    let tips = "";

    if (bmi < 18.5) {
        status = "Underweight ⚠️";
        tips = `
        <div class="tip-box"><b>Underweight:</b> Increase calorie intake 🍚</div>
        <div class="tip-box">Eat protein-rich food like eggs, milk 🥚</div>
        <div class="tip-box">Strength training recommended 💪</div>
        `;
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        status = "Normal ✅";
        tips = `
        <div class="tip-box"><b>Normal:</b> Maintain your lifestyle ✅</div>
        <div class="tip-box">Balanced diet & regular exercise 🥗</div>
        <div class="tip-box">Stay hydrated 💧</div>
        `;
    }
    else if (bmi >= 25 && bmi < 29.9) {
        status = "Overweight ⚠️";
        tips = `
        <div class="tip-box"><b>Overweight:</b> Reduce junk food 🍔</div>
        <div class="tip-box">Cardio exercise like running 🏃</div>
        <div class="tip-box">Drink more water 💧</div>
        `;
    }
    else {
        status = "Obese ❗";
        tips = `
        <div class="tip-box"><b>Obese:</b> Follow strict diet plan ⚠️</div>
        <div class="tip-box">Daily workout & walking 🚶</div>
        <div class="tip-box">Consult a fitness expert 👨‍⚕️</div>
        `;
    }

    // BMI result show
    document.getElementById("bmiResult").innerHTML =
        "Your BMI: " + bmi + " (" + status + ")";

    // Tips show
    document.getElementById("dynamicTips").innerHTML = tips;
}