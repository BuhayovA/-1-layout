
function countdown(i) {
    console.log(i);
    if (i <= 0) return;
    countdown(i - 1);
  }
  
  countdown(5);



const text = "Привет, меня зовут Алексей!"
const reverseText = text.split('').reverse().join('')

console.log(text);
console.log(reverseText);

function getRandomBetween (min, max) {
  return Math.floor(Math.random()* (max - min + 1) + min);

}
console.log(getRandomBetween(1, 100));




