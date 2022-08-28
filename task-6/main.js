const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let a = result.input;
  let res = parseInt(a / 10);
  console.log(res);  
});
