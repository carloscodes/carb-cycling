let dsply = document.getElementById('userInfo');
let lowCarb = 0;
let highCarb = 0;

let carbsCalories = 0;
let carbsGrams = 0;

let carbsCaloriesHigh = 0;
let carbsGramsHigh = 0;

let proteinCalories = 0;
let proteinGrams = 0;

let proteinCaloriesHigh = 0;
let proteinGramsHigh = 0;

let fatCalories = 0;
let fatGrams = 0;

let fatCaloriesHigh = 0;
let fatGramsHigh = 0;

function calculateLow(tdee, bw) {
  lowCarb = tdee - tdee * 0.25;

  carbsCalories = lowCarb * 0.2;
  carbsGrams = carbsCalories / 4;
  //format
  carbsCalories = carbsCalories.toPrecision(4);
  carbsGrams = carbsGrams.toPrecision(4);

  proteinGrams = bw;
  proteinCalories = proteinGrams * 4;

  fatCalories = lowCarb - (carbsCalories + proteinCalories);
  fatGrams = fatCalories / 9;
  //format
  fatCalories = fatCalories.toPrecision(4);
  fatGrams = fatGrams.toPrecision(4);
}

function calculateHigh(tdee, bw) {
  highCarb = tdee - tdee * 0.1;

  carbsCaloriesHigh = highCarb * 0.5;
  carbsGramsHigh = carbsCaloriesHigh / 4;
  //format
  carbsCaloriesHigh = carbsCaloriesHigh.toPrecision(4);
  carbsGramsHigh = carbsGramsHigh.toPrecision(4);

  proteinGramsHigh = bw;
  proteinCaloriesHigh = proteinGramsHigh * 4;

  fatCaloriesHigh = highCarb - (carbsCaloriesHigh + proteinCaloriesHigh);
  fatGramsHigh = fatCaloriesHigh / 9;
  //format
  fatCaloriesHigh = fatCaloriesHigh.toPrecision(4);
  fatGramsHigh = fatGramsHigh.toPrecision(4);
}

function getInfo() {
  let td = document.getElementById('shorten').value;
  let bdyw = document.getElementById('bw').value;

  if (!td || !bdyw) {
    alert('Please enter all values');
  } else {
    calculateLow(td, bdyw);
    calculateHigh(td, bdyw);
    dsply.innerHTML = `<hr>
    <p style="padding-top: 20px; padding-bottom: 20px;"><strong>Your TDEE Number:</strong> ${td} </p>
    <br>
    <p> <strong>Low Carb Day at a 25% deficit will consist of:</strong </p>
    <br>

    <ul>
        <li>Total Calories: ${lowCarb} </li>
        <li>Carbs: ${carbsCalories} Calories / ${carbsGrams} Grams</li>
        <li>Protein: ${proteinCalories} Calories / ${proteinGrams} Grams</li>
        <li>Fats: ${fatCalories} Calories / ${fatGrams} Grams</li>
    </ul>
    <br>
    <p> <strong>High Carb Day at a 10% deficit will consist of:<strong> </p>
    <br>

    <ul>
        <li>Total Calories: ${highCarb} </li>
        <li>Carbs: ${carbsCaloriesHigh} Calories / ${carbsGramsHigh} Grams</li>
        <li>Protein: ${proteinCaloriesHigh} Calories / ${proteinGramsHigh} Grams</li>
        <li>Fats: ${fatCaloriesHigh} Calories / ${fatGramsHigh} Grams</li>
    </ul>
    `;
  }
}
