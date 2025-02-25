function calculate() {
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    let mhr;
  
    if (gender === "male") {
      mhr = 209 - (0.7 * age);
    } else if (gender === "female") {
      mhr = 206 - (0.88 * age);
    } else if (gender === "non-binary") {
      mhr = 214 - (0.8 * age);
    } else {
      mhr = 200 - (0.75 * age);
    }
  
    document.getElementById("result").textContent = "Your estimated maximum heart rate is " + mhr;
  
    let heartRateZone;
    if (mhr < 100) {
      heartRateZone = "Resting or very low activity";
    } else if (mhr < 150) {
      heartRateZone = "Light to moderate activity";
    } else {
      heartRateZone = "Vigorous activity";
    }
  
    document.getElementById("result").textContent += "\nThis falls within the " + heartRateZone + " zone.";
  }