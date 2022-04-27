function fiboEvenSum(n) {
    // create fibonacci sequence
    // create sum
    // add sum nums to sum for each sequence
    if(n < 1) {
        return 0;
    } 
    else {
        let evenSum = 0,
            fiboPrev = 1,
            fibo = 1;
        for (let i = 2; fibo <= Number; i++){
            if(fibo % 2 === 0) {
                evenSum += fibo;
            }
            [fiboPrev, fibo] = [fibo, fiboPrev + fibo];
        }
        return evenSum;
    }
  }

  fiboEvenSum(10);