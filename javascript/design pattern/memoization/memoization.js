var factorial = (function() {
    var save = {};
    var fact = function(number) {
        
      if (number > 0) {
        var saved = save[number - 1] || fact(number - 1);
        var result = number * saved;
        save[number] = result;
        console.log(saved, result);
        return result;
      } else {
        return 1;
      }
    };
    return fact;
  })();
  factorial(7); // 1 1, 1 2, 2 6, 6 24, 24 120, 120 720, 720 5040
  factorial(8); // 720 5040
  