// BMI Calculator Function
function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let result = document.getElementById("bmiResult");

    if (weight > 0 && height > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        let message = `Your BMI is: ${bmi} - `;

        if (bmi < 18.5) {
            message += "You are underweight. Consider a balanced diet with more protein and carbs. 🍚🥩";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            message += "You have a normal weight. Keep maintaining a healthy lifestyle! ✅";
        } else if (bmi >= 25 && bmi < 29.9) {
            message += "You are overweight. Try regular exercise and a balanced diet. 🏃‍♂🥗";
        } else {
            message += "You are obese. Consult a doctor for professional advice. 🏥";
        }

        result.innerText = message;
    } else {
        result.innerText = "⚠ Please enter valid weight and height values!";
    }
}

// Water Intake Tracker Function
let dailyGoal = 3; // Set daily water intake goal in liters
let currentIntake = 0;

function trackWater() {
    let intake = parseFloat(document.getElementById("water").value);
    let result = document.getElementById("waterResult");

    if (intake > 0) {
        currentIntake += intake;
        let remaining = (dailyGoal - currentIntake).toFixed(1);
        
        let message = `✅ You have recorded ${currentIntake}L of water today. `;
        if (currentIntake >= dailyGoal) {
            message += "Great job! You’ve met your daily goal. 🎉💧";
        } else {
            message += Keep going! You need ${remaining}L more to reach your goal. 🚰;
        }

        result.innerText = message;
    } else {
        result.innerText = "⚠ Please enter a valid amount!";
    }
}

// Symptom Checker Function
function checkSymptoms() {
    let symptoms = document.getElementById("symptoms").value.toLowerCase();
    let result = document.getElementById("symptomResult");
    let message = "🔍 Based on your symptoms, here are some general suggestions:\n\n";

    if (symptoms.includes("fever") || symptoms.includes("cough") || symptoms.includes("cold")) {
        message += "- You might have a common cold or flu. Drink warm fluids, rest, and stay hydrated. 🛌☕\n";
    }
    if (symptoms.includes("headache")) {
        message += "- Try drinking water, resting, or taking mild pain relief. Avoid screen time. 💆‍♂💊\n";
    }
    if (symptoms.includes("stomach pain") || symptoms.includes("nausea")) {
        message += "- Avoid heavy foods, eat light meals, and drink herbal tea. 🍵\n";
    }
    if (symptoms.includes("chest pain")) {
        message += "- Seek immediate medical attention if the pain is severe. 🚨\n";
    }
    if (symptoms.includes("fatigue") || symptoms.includes("weakness")) {
        message += "- Get enough sleep, eat iron-rich foods, and stay hydrated. 🥦💧\n";
    }

    if (message === "🔍 Based on your symptoms, here are some general suggestions:\n\n") {
        message += "⚠ No matching symptoms found. If symptoms persist, please consult a doctor. 🏥";
    }

    result.innerText = message;
}

// Daily Health Tips
const healthTips = [
    "💪 Exercise for at least 30 minutes daily to stay fit.",
    "🥦 Eat more fruits and vegetables to boost your immunity.",
    "💧 Drink at least 2-3 liters of water per day.",
    "🛌 Get 7-8 hours of sleep every night for better health.",
    "☀ Spend some time in sunlight to get your daily Vitamin D.",
    "🧘 Practice meditation or deep breathing for mental well-being.",
    "🚶 Take short breaks and walk around if you sit for long hours."
];

function showRandomTip() {
    let randomIndex = Math.floor(Math.random() * healthTips.length);
    document.getElementById("dailyTip").innerText = healthTips[randomIndex];
}

// Run a random tip on page load
window.onload = function() {
    showRandomTip();
};