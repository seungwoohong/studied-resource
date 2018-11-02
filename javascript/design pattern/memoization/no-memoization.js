var fibonacci = (function() {
    var save = {};
    var fibo = function(number) {
      if (number < 2) {
        return number;
      } else {
        var saved1 = save[number - 1] || fibo(number - 1);
        var saved2 = save[number - 2] || fibo(number - 2);
        var result = saved1 + saved2;
        save[number] = result;
        console.log(saved1, saved2, result);
        return result;
      }
    };
    return fibo;
  })();
  fibonacci(5); // 1 0 1, 1 1 2, 2 1 3, 3 2 5, 5
  fibonacci(5); // 3 2 5, 5