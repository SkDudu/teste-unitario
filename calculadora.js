function soma(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function dividir(a, b) {
    return a / b;
}

function multiplicar(a, b) {
    return a * b;
}

function mdc(a, b) {
    var resto;

    do {
        resto = a % b;

        a = b;
        b = resto;

    } while (resto != 0);

return a;
}

function contagem(a, b) {
    return a-b;
}

function fibonacci(a) {    
        if(a==0) 
            return 0; 
        if (a == 1) 
            return 1; 
        return fibonacci(a - 1) + fibonacci(a - 2); 
} 

function primo(a){
    for(let i = 2; i < a; i++)
    if(a % i === 0) {
        return false
    };
  return a > 1;
}



function Quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return Quicksort(left).concat(pivot, Quicksort(right));
  };

  module.exports = {
      soma, subtrair, multiplicar, dividir, mdc, contagem, fibonacci, primo, Quicksort,
  }