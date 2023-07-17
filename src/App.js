let string = "lavanya";
let count = {};
const findoccurnace = (str) => {
  for (let st of str) {
    count[st] = count[st] ? count[st] + 1 : 1;
  }
  console.log(count);

  let maxValue = 0;
  let maxChar = "";
  for (let co in count) {
    if (count[co] > maxValue) {
      maxValue = count[co];
      maxChar = co;
    }
  }
  console.log(maxChar, maxValue);
};
findoccurnace(string);
