let price = 100;
let tax = 0.18;
let totalPrice = price * tax;
console.log("Price: ", price, "Tax: ", tax, "Total price:", totalPrice);

//counter
let counter = 320

//toplama
counter+=1
counter++
console.log(counter); //322

//cixma
counter--
counter-=1
console.log(counter); //320

//ustu
counter*=10
console.log(counter); //3200


//bolme
counter/=2
console.log(counter); // 1600

//mod alma
counter %= 3;
console.log(counter); //1

//examples
console.log(15 % 2); //1
console.log(14 % 2); //0
console.log(2 * 2 * 2 * 2); //16
console.log(3 ** 3); //27
console.log(2 + 5 * 10); //52
console.log((2+5)* 10); //70

//Math floor ceil round

console.log(Math.floor(3.9)); //3 en asagi reqem
console.log(Math.ceil(3.4)); //4 en yuxari reqem
console.log(Math.round(3.4)); //3
console.log(Math.round(3.5)); //4
console.log(Math.floor(-4.1)); //-5
console.log(Math.ceil(-4.6)); //-4
console.log(Math.round(-3.5)); // -3
console.log(Math.round(-3.6)); //-4

//from string to number 
let number = "11"
console.log(Number(number)); //changed to number
console.log(+number); //changed to number