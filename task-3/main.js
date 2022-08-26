const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let input = result.input;
  let number = input.split(",");
  let x = parseInt(number[0]);
  let n = parseInt(number[1]);
  let a = x ** n;
  console.log(a);  
});
