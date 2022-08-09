const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let a=parseInt(result.input);
let s=parseInt(6*a**2)
let v=(a**3)
console.log(s,v);  
});
