let range = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sum(range1, range2) {
  let result = [];

  if (range1 == 1 && range2 >= 1 && range2 <= 9) {
    result.push(range2);
    console.log(result);
  } else if (range1 == 2 && range2 > 2 && range2 <= 9) {
    for (let i = 0; i < range2 / 2 - 1; i++) {
      result.push(range[i]);
      for (let j = 0; j < range.length; j++) {
        if (range[j] + range[i] == range2) {
          result.push(range[j]);
        }
      }
      console.log(result);
      for (let j = 0; j <= result.length; j++) {
        result.pop();
      }
    }
  } else if (range1 == 3 && range2 > 5 && range2 <= 9) {
    result.push(range[0]);
    for (let i = 0; i < range2 / 3 - 1; i++) {
      result.push(range[i + 1]);
      for (let j = 0; j < range.length; j++) {
        if (range[j] + range[i + 1] + 1 == range2) {
          result.push(range[j]);
        }
      }
      if (result[i] != result[i + 1]) {
        console.log(result);
      }

      for (let j = 0; j <= result.length; j++) {
        result.pop();
      }
    }
  } else {
    console.log('no combination');
  }
}

let test2 = sum(3, 8);
