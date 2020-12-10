const { soma, subtrair, dividir, multiplicar, primo, mdc, contagem, fibonacci } = require('./calculadora');

//soma
test('adds 1 + 2 to equal 3', () => {
    expect(soma(1, 2)).toBe(3);
});

test('adds 89 + 48 to equal 137', () => {
    expect(soma(89, 48)).toBe(137);
});

//subtração
test('adds 5 - 7 to equal -2', () => {
    expect(subtrair(5, 7)).toBeLessThan(1);
});

test('adds 89 - 48 to equal 41', () => {
    expect(subtrair(89, 48)).toBe(41);
});

//divisão
test('adds 48 / 4 to equal 12', () => {
    expect(dividir(48, 4)).toBe(12);
});

test('adds 450 / 5 to equal 90', () => {
    expect(dividir(450, 5)).toBe(90);
});

//Multiplicação
test('adds 48 * 4 to equal 192', () => {
    expect(multiplicar(48, 4)).toEqual(192);
});

test('adds 56 * 92 to equal 5152', () => {
    expect(multiplicar(56, 92)).toEqual(5152);
});

//Máximo divisor comum
test('mdc de 12 e 8 é 4', () => {
    expect(mdc(12, 8)).toBe(4)
});

test('mdc de 25 e 48 é 1', () => {
    expect(mdc(25, 48)).toBe(1)
});

//Contagem
test('Contagem ', () => {
    expect(contagem(25, 26)).toBeLessThan(1)
});

test('Contagem ', () => {
    expect(contagem(46, 26)).toBe(20)
});

//fibonacci
test('Fibonacci ', () => {
    expect(fibonacci(10)).toBe(55)
});

test('Fibonacci ', () => {
    expect(fibonacci(25)).toBe(75025)
});

//Primo
test('11 é um numero primo ', () => {
    expect(primo(11)).toEqual(true)
});

test('2 não é um numero primo ', () => {
    expect(primo(4)).toEqual(false)
});
