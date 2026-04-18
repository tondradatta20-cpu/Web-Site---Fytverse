function showPage(page){
let pages=document.querySelectorAll('.container');
pages.forEach(p=>p.classList.remove('active'));
document.getElementById(page).classList.add('active');
window.scrollTo(0,0);
}

function beginnerWorkout(){
document.getElementById("workoutText").innerHTML=
"Beginner Plan:<br>✔ Push-ups: 5-10 reps<br>✔ Squats: 10 reps<br>✔ Walking: 10 mins";
}

function intermediateWorkout(){
document.getElementById("workoutText").innerHTML=
"Intermediate Plan:<br>✔ Push-ups: 15 reps<br>✔ Lunges: 12 reps<br>✔ Plank: 30 sec<br>✔ Jogging: 15 mins";
}

function advancedWorkout(){
document.getElementById("workoutText").innerHTML=
"Advanced Plan:<br>✔ Burpees: 15 reps<br>✔ Jump Squats: 15 reps<br>✔ Plank: 1 min<br>✔ Running: 20 mins";
}

function calculateBMI(){
let w=document.getElementById("weight").value;
let ft=document.getElementById("feet").value;
let inch=document.getElementById("inch").value;

let h=((ft*12)+parseInt(inch))*0.0254;

if(w && ft && inch){
let bmi=(w/(h*h)).toFixed(2);
let status="";
let tipsHtml="";

if(bmi<18.5){
status="Underweight";
tipsHtml="<div class='bmi-box'>✔ Include more protein and calories 💪</div>";
}
else if(bmi<25){
status="Normal";
tipsHtml="<div class='bmi-box'>✔ Maintain diet and exercise ✅</div>";
}
else{
status="Overweight";
tipsHtml="<div class='bmi-box'>✔ Do cardio and reduce sugar 🏃</div>";
}

document.getElementById("bmiResult").innerHTML="Your BMI: "+bmi+" ("+status+")";
document.getElementById("bmiTips").innerHTML=tipsHtml;

}else{
document.getElementById("bmiResult").innerHTML="Enter valid data";
document.getElementById("bmiTips").innerHTML="";
}
}