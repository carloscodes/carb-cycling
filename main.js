let dsply = document.getElementById('userInfo');

// Cut
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
// Cut end

// Maintenance
let lowCarbM = 0;
let highCarbM = 0;

let carbsCaloriesM = 0;
let carbsGramsM = 0;

let carbsCaloriesHighM = 0;
let carbsGramsHighM = 0;

let proteinCaloriesM = 0;
let proteinGramsM = 0;

let proteinCaloriesHighM = 0;
let proteinGramsHighM = 0;

let fatCaloriesM = 0;
let fatGramsM = 0;

let fatCaloriesHighM = 0;
let fatGramsHighM = 0;
// Maintenance End

// Surplus
let lowCarbS = 0;
let highCarbS = 0;

let carbsCaloriesS = 0;
let carbsGramsS = 0;

let carbsCaloriesHighS = 0;
let carbsGramsHighS = 0;

let proteinCaloriesS = 0;
let proteinGramsS = 0;

let proteinCaloriesHighS = 0;
let proteinGramsHighS = 0;

let fatCaloriesS = 0;
let fatGramsS = 0;

let fatCaloriesHighS = 0;
let fatGramsHighS = 0;
// Surplus end

// calculate low surplus day
function calculateLowS(tdee, bw) {
  lowCarbS = tdee * 1.1;

  carbsCaloriesS = lowCarbS * 0.25;
  carbsGramsS = carbsCaloriesS / 4;
  //format
  carbsCaloriesS = Number(carbsCaloriesS.toPrecision(4));
  carbsGramsS = Number(carbsGramsS.toPrecision(4));

  proteinGramsS = bw;
  proteinCaloriesS = proteinGramsS * 4;

  fatCaloriesS = lowCarbS - (carbsCaloriesS + proteinCaloriesS);
  fatGramsS = fatCaloriesS / 9;
  //format
  fatCaloriesS = fatCaloriesS.toPrecision(4);
  fatGramsS = fatGramsS.toPrecision(4);
}

//calculate high carb surplus day
function calculateHighS(tdee, bw) {
  highCarbS = tdee * 1.1;

  carbsCaloriesHighS = highCarbS * 0.5;
  carbsGramsHighS = carbsCaloriesHighS / 4;
  //format
  carbsCaloriesHighS = Number(carbsCaloriesHighS.toPrecision(4));
  carbsGramsHighS = Number(carbsGramsHighS.toPrecision(4));

  proteinGramsHighS = bw;
  proteinCaloriesHighS = proteinGramsHighS * 4;

  fatCaloriesHighS = highCarbS - (carbsCaloriesHighS + proteinCaloriesHighS);
  fatGramsHighS = fatCaloriesHighS / 9;
  //format
  fatCaloriesHighS = fatCaloriesHighS.toPrecision(4);
  fatGramsHighS = fatGramsHighS.toPrecision(4);
}

// Maintenance
function calculateLowM(tdee, bw) {
  lowCarbM = tdee;

  carbsCaloriesM = lowCarbM * 0.25;
  carbsGramsM = carbsCaloriesM / 4;
  //format
  carbsCaloriesM = Number(carbsCaloriesM.toPrecision(4));
  carbsGramsM = Number(carbsGramsM.toPrecision(4));

  proteinGramsM = bw;
  proteinCaloriesM = proteinGrams * 4;

  fatCaloriesM = lowCarbM - (carbsCaloriesM + proteinCaloriesM);
  fatGramsM = fatCaloriesM / 9;
  //format
  fatCaloriesM = fatCaloriesM.toPrecision(4);
  fatGramsM = fatGramsM.toPrecision(4);
}

function calculateHighM(tdee, bw) {
  highCarbM = tdee;

  carbsCaloriesHighM = highCarbM * 0.5;
  carbsGramsHighM = carbsCaloriesHighM / 4;
  //format
  carbsCaloriesHighM = Number(carbsCaloriesHighM.toPrecision(4));
  carbsGramsHighM = Number(carbsGramsHighM.toPrecision(4));

  proteinGramsHighM = bw;
  proteinCaloriesHighM = proteinGramsHighM * 4;

  fatCaloriesHighM = highCarbM - (carbsCaloriesHighM + proteinCaloriesHighM);
  fatGramsHighM = fatCaloriesHighM / 9;
  //format
  fatCaloriesHighM = fatCaloriesHighM.toPrecision(4);
  fatGramsHighM = fatGramsHighM.toPrecision(4);
}
// Maintenance end

// Cut
function calculateLow(tdee, bw) {
  lowCarb = tdee - tdee * 0.25;

  carbsCalories = lowCarb * 0.2;
  carbsGrams = carbsCalories / 4;
  //format
  carbsCalories = Number(carbsCalories.toPrecision(4));
  carbsGrams = Number(carbsGrams.toPrecision(4));

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
  carbsCaloriesHigh = Number(carbsCaloriesHigh.toPrecision(4));
  carbsGramsHigh = Number(carbsGramsHigh.toPrecision(4));

  proteinGramsHigh = bw;
  proteinCaloriesHigh = proteinGramsHigh * 4;

  fatCaloriesHigh = highCarb - (carbsCaloriesHigh + proteinCaloriesHigh);
  fatGramsHigh = fatCaloriesHigh / 9;

  //format
  fatCaloriesHigh = Number(fatCaloriesHigh.toPrecision(4));
  fatGramsHigh = Number(fatGramsHigh.toPrecision(4));
}
// Cut end

function resetAllValues(td, bdyw) {
  if (td && bdyw) {
    // Cut
    lowCarb = 0;
    highCarb = 0;

    carbsCalories = 0;
    carbsGrams = 0;

    carbsCaloriesHigh = 0;
    carbsGramsHigh = 0;

    proteinCalories = 0;
    proteinGrams = 0;

    proteinCaloriesHigh = 0;
    proteinGramsHigh = 0;

    fatCalories = 0;
    fatGrams = 0;

    fatCaloriesHigh = 0;
    fatGramsHigh = 0;
    // Cut end

    // Maintenance
    lowCarbM = 0;
    highCarbM = 0;

    carbsCaloriesM = 0;
    carbsGramsM = 0;

    carbsCaloriesHighM = 0;
    carbsGramsHighM = 0;

    proteinCaloriesM = 0;
    proteinGramsM = 0;

    proteinCaloriesHighM = 0;
    proteinGramsHighM = 0;

    fatCaloriesM = 0;
    fatGramsM = 0;

    fatCaloriesHighM = 0;
    fatGramsHighM = 0;

    // Surplus
    lowCarbS = 0;
    highCarbS = 0;

    carbsCaloriesS = 0;
    carbsGramsS = 0;

    carbsCaloriesHighS = 0;
    carbsGramsHighS = 0;

    proteinCaloriesS = 0;
    proteinGramsS = 0;

    proteinCaloriesHighS = 0;
    proteinGramsHighS = 0;

    fatCaloriesS = 0;
    fatGramsS = 0;

    fatCaloriesHighS = 0;
    fatGramsHighS = 0;
  }
}

function getInfo() {
  let td = document.getElementById('shorten').value;
  let bdyw = document.getElementById('bw').value;

  resetAllValues(td, bdyw);

  if (td < 0 || bdyw < 0) {
    alert('Please enter valid values');
  } else if (!td || !bdyw) {
    alert('Please enter all values');
  } else {
    calculateLow(td, bdyw);
    calculateHigh(td, bdyw); // cut

    calculateLowM(td, bdyw);
    calculateHighM(td, bdyw); // maintenance

    calculateLowS(td, bdyw);
    calculateHighS(td, bdyw); // surplus

    dsply.innerHTML = `
    <h2 style="padding-top: 20px; padding-bottom: 20px;"><strong>Your TDEE Number:</strong> ${td} Calories Per Day</h2>
    <br>
    <h1>Cut </h1>
    <br>
    <hr>
    <br>
    <p> <strong>Low Carb Day at a 25% deficit:</strong </p>
    <br>

    <ul>
        <li>Total Calories: ${lowCarb} </li>
        <li>Carbs: ${carbsCalories} Calories / ${carbsGrams} Grams</li>
        <li>Protein: ${proteinCalories} Calories / ${proteinGrams} Grams</li>
        <li>Fats: ${fatCalories} Calories / ${fatGrams} Grams</li>
    </ul>
    <br>
    <p> <strong>High Carb Day at a 10% deficit:</strong> </p>
    <br>

    <ul>
        <li>Total Calories: ${highCarb} </li>
        <li>Carbs: ${carbsCaloriesHigh} Calories / ${carbsGramsHigh} Grams</li>
        <li>Protein: ${proteinCaloriesHigh} Calories / ${proteinGramsHigh} Grams</li>
        <li>Fats: ${fatCaloriesHigh} Calories / ${fatGramsHigh} Grams</li>
    </ul>

    <br>
    <br>
    <h1>Maintenance </h1>
    <br>
    <hr>
    <br>
    <p> <strong>Low Carb Day with no deficit:</strong </p>
    <br>
    <ul>
        <li>Total Calories: ${lowCarbM} </li>
        <li>Carbs: ${carbsCaloriesM} Calories / ${carbsGramsM} Grams</li>
        <li>Protein: ${proteinCaloriesM} Calories / ${proteinGramsM} Grams</li>
        <li>Fats: ${fatCaloriesM} Calories / ${fatGramsM} Grams</li>
    </ul>
    <br>
    <p> <strong>High Carb Day with no deficit:</strong> </p>
    <br>
    <ul>
        <li>Total Calories: ${highCarbM} </li>
        <li>Carbs: ${carbsCaloriesHighM} Calories / ${carbsGramsHighM} Grams</li>
        <li>Protein: ${proteinCaloriesHighM} Calories / ${proteinGramsHighM} Grams</li>
        <li>Fats: ${fatCaloriesHighM} Calories / ${fatGramsHighM} Grams</li>
    </ul>

    <br>
    <br>
    <h1>Surplus </h1>
    <br>
    <hr>
    <br>
    <p> <strong>Low Carb Day with a 10% Surplus:</strong </p>
    <br>
    <ul>
        <li>Total Calories: ${lowCarbS} </li>
        <li>Carbs: ${carbsCaloriesS} Calories / ${carbsGramsS} Grams</li>
        <li>Protein: ${proteinCaloriesS} Calories / ${proteinGramsS} Grams</li>
        <li>Fats: ${fatCaloriesS} Calories / ${fatGramsS} Grams</li>
    </ul>
    <br>
    <p> <strong>High Carb Day with a 10% Surplus:</strong> </p>
    <br>
    <ul>
        <li>Total Calories: ${highCarbS} </li>
        <li>Carbs: ${carbsCaloriesHighS} Calories / ${carbsGramsHighS} Grams</li>
        <li>Protein: ${proteinCaloriesHighS} Calories / ${proteinGramsHighS} Grams</li>
        <li>Fats: ${fatCaloriesHighS} Calories / ${fatGramsHighS} Grams</li>
    </ul>
    `;
  }
}
