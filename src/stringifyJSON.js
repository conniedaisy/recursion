// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//Javascript has 9 types of data: 
//  Stringifiable:
//   - array: JSON.stringify([1, 'false', false]) --> '[1,"false",false]'
//   - object: JSON.stringify({ x: 5 }) --> '{"x":5}'
//   - boolean: JSON.stringify(true) --> 'true'
//   - string: JSON.stringify('foo') --> '"foo"'
//   - number: JSON.stringify(9) --> '9'
//   - null: JSON.stringify(null) --> 'null'
//  Unstringifiable (typically omitted):
//   - undefined: JSON.stringify(undefined) --> undefined
//   - function: --> undefined
//  Not sure:
//   - regular expression ???

//JSON.stringify takes valid data from any type and converts it to a string

//What is the base case?

//REFERENCE ONLY
/*
var stringifyJSON = function(obj) {
  if (obj && typeof(obj) === 'object') {
    var results = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof(obj[key]) === 'function') {
        continue;
      }
      results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + results.join() + '}';
  }
};
*/

//MY CODE
var stringifyJSON = function(obj) {

  //if obj is an array
  if (Array.isArray(obj)) {
    var result1 = [];
    for (var i = 0; i < obj.length; i++) {
      result1.push(stringifyJSON(obj[i]));
    }
    return '[' + result1 + ']'
  }

  //if obj is an object
  else if (obj && typeof(obj) === 'object') {
    var a, b;
    var result2 = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof(obj[key]) === 'function') {
        continue;
      }
      else {
        a = stringifyJSON(key);
        b = stringifyJSON(obj[key]);
        result2.push(a + ':' + b);
        //result2.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{'+ result2.join() + '}';
   }

  //if obj is a string
  else if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }

  //if obj is a boolean, number, or null
  else {
    return '' + obj;
  }
  
};

