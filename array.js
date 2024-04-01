// length

const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length);
console.log("======");
// join

const element =['Fire' ,  'Air' , 'Water'];
console.log(element.join());
console.log(element.join(''));
console.log(element.join('-'));
console.log("======");

// slice

const animals = ['ant' , 'bison' , 'camel' , 'duck' , 'element'];
console.log(animals.slice(2));
console.log(animals.slice(2 , 4));
console.log(animals.slice(1 , 5));
console.log(animals.slice(-2));
console.log(animals.slice(2 , -1));
console.log(animals.slice());
console.log("======");

// index

const beasts = ['ant' , 'bison' , 'camel' , 'duck' , 'bison'];
console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf('bison' , 2));
console.log(beasts.indexOf('giraffe'));
console.log("======");

// push

const animal = ['pigs', 'goats', 'sheep'];
const count = animal.push('cows');
console.log(animal);
animal.push('chickens', 'cats', 'dogs');
console.log(animal);
console.log("======");

// splice

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
months.splice(4, 1, 'May');
console.log(months);
console.log("======");

// concat

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
console.log("======");

// copyWithin

const array4 = [ 'a', 'b', 'c', 'd', 'e'];
console.log(array4.copyWithin(0, 3, 4));
console.log(array4.copyWithin(1, 3));
console.log("======");

// every

const isBelowThreshold = (currentValue) => currentValue < 40 ;
const array5 = [1, 30, 39, 29, 10, 13];
console.log(array5.every(isBelowThreshold));
console.log("======");

// filter

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);
console.log("======");

// flat

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat());
console.log(arr2.flat(2));
console.log(arr2.flat(Infinity));
console.log("======");

// flat map

const arr3 = [1, 2, 1];
const result1 = arr3.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(result1);

// For Each

const array6 = ['a', 'b', 'c'];
array1.forEach((element) => console.log(element));
console.log("======");

// lastIndexOf

const animals1 = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals1.lastIndexOf('Dodo'));
console.log(animals1.lastIndexOf('Tiger'));
console.log("======");

// map

const array7 = [1, 4, 9, 16];
const map1 = array7.map((x) => x * 2);
console.log(map1);
console.log("======");

// reduce

const array8 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array8.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);
console.log("======");

// reduceRight

const array9 = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  
  const res = array9.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
  );
  
  console.log(res);
  console.log("======");
  
  // reverse

  const array10 = ['one', 'two', 'three'];
console.log('array10:', array10);
const reversed = array10.reverse();
console.log('reversed:', reversed);
console.log('array10:', array10);

// some

const array12 = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array12.some(even));
console.log("======");

// sort 

const month = ['March','Jan','Feb','Dec'];
months.sort();
console.log(months);

const array11 = [1,30,4,21,100000];
array10.sort();
console.log(array11);

  

