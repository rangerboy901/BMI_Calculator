/*
Joseph DeWeese
21 July 2022
CE07:Body_Mass_Calculator


BMI Range	Weight Range
BMI is less than 18.5	Under Weight Range
BMI is 18.5 up to but not including 24.9	Normal or Healthy Weight Range
BMI is 24.9 up to but not including 29.9	Over Weight Range
BMI is 29.9 up to but not including 35 	Obese Range
BMI is 35 or over	Extreme Obese Range

User Inputs:

Height - Feet
Height - Inches
Weight - Lbs

[weight (lb) / height (in) / height (in)] x 703

Result To Print Out In H1 Tag:

"Your BMI is X, indicating your weight is in Y for adults of your height."
Where X is the calculated BMI.
Where Y is the Weight Range from the table above.

*/

//JWD: EVENT LISTENER
document.querySelector("#calcBMI").addEventListener("click", function (e) {
  //JWD: VALIDATION
  if (
    document.querySelector("#heightFeet").reportValidity() &&
    document.querySelector("#heightInches").reportValidity() &&
    document.querySelector("#weight").reportValidity()
  ) {
    //JWD: PROPERTIES
    //Extracting values and saving to new variable
    let feetInput = parseInt(document.querySelector("#heightFeet").value);
    let inchesInput = parseInt(document.querySelector("#heightInches").value);
    let weightInput = parseInt(document.querySelector("#weight").value);
    //JWD: BMI CALCULATION
    let height = (feetInput * 12 + inchesInput) * 2.54;
    let weight = weightInput / 2.2;
    //JWD:BMI Conversion
    let bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);

    if (bmi < 18.5) {
      document.querySelector(
        "#bmiResult"
      ).innerHTML = `Your BMI is ${bmi}, indicating your weight is <strong>under-weight for adults of your height</strong>.`;
      //JWD: IMAGE
      document.querySelector("#bmiGraphic").src = "IMG/underWeight.jpg";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      document.querySelector(
        "#bmiResult"
      ).innerHTML = `Your BMI is ${bmi}, indicating your weight is <strong>normal or healthy weight range for adults of your height.</strong>`;
      //JWD: IMAGE
      document.querySelector("#bmiGraphic").src = "IMG/healthyWeight.jpg";
    } else if (bmi >= 24.9 && bmi < 29.8) {
      document.querySelector(
        "#bmiResult"
      ).innerHTML = `Your BMI is ${bmi}, indicating your weight is <strong>over weight range for adults of your height.</strong>`;
      //JWD: IMAGE
      document.querySelector("#bmiGraphic").src = "IMG/overWeight.jpg";
    } else if (bmi >= 29.9 && bmi < 35) {
      document.querySelector(
        "#bmiResult"
      ).innerHTML = `Your BMI is ${bmi}, indicating your weight is <strong> in an <strong>obese weight range for adults of your height.</strong>`;
      //JWD: IMAGE
      document.querySelector("#bmiGraphic").src = "IMG/obeseWeight.jpg";
    } else if (bmi >= 35) {
      document.querySelector(
        "#bmiResult"
      ).innerHTML = `Your BMI is ${bmi}, indicating you are <strong> terribly obese for adults of your height, or you are extremely yoked and
              this BMI scale is the most inaccurate indicator of general weight health, in your opinion.</strong>`;
      //JWD: IMAGE
      document.querySelector("#bmiGraphic").src = "IMG/extremeObeseWeight.jpg";
    }
    document.querySelector("#bmiGraphic").style.visibility = "visible";
  }
});
