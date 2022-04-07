class Calc {
  calculate() {
    const monkeyCords = [0, 0];

    const tree1 = [2, 2];
    const tree2 = [1, 1];

    let cords = [tree1, tree2];

    let cordsSumArr = cords.map((cord) => getCordSum(cord));

    let monkey = getCordSum(monkeyCords);

    let minimum = getClosest(monkey, cordsSumArr);

    // get the index of cord
    console.log(cords[minimum]);
  }
}

function getClosest(a, array) {
  // the money cord
  console.log("monkey", a);
  console.log("array", array);

  //   var newArr = array;

  var arrayMin = array.map((value) => Math.abs(value - a));
  console.log("minArray", arrayMin);
  var minimum = Math.min(...arrayMin);

  console.log("Minimum cord", minimum);
  console.log("Index of minimum", array.indexOf(minimum));
  return arrayMin.indexOf(minimum);
}

function getCordSum(cord) {
  return cord[0] + cord[1];
}

const calc = new Calc();

console.log(calc.calculate());
