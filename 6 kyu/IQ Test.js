// IQ Test

/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
FUNDAMENTALS
 */

function iqTest(num){
  let obj = {zero: 0, iZero: 0, one: 0, iOne: 0};
  let arr = num.split(' ').map(el => el % 2 === 0 ? 0 : 1);
  arr.map((el, i) => {
    if (el === 0) {
      obj.zero +=1;
      obj.iZero = i;
    } else {
      obj.one +=1;
      obj.iOne = i;
    }
  });
  return obj.zero < obj.one ? obj.iZero + 1 : obj.iOne + 1;
}