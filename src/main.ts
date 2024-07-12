import { __values } from "tslib";
import {Name, WeatherLocation } from "./NameAndWeather";

function myFunction(param:number | string) {
  if(typeof(param) == "number"){
  let number = param.toFixed(2);
  console.log("My result: " + number);    
  }
  else{
      let result = (param as any) + 100;
      console.log("My result: " + result);    
   }
}
let condition:boolean = true;
let person:string = "Raj";
const age:number = 40;
let place: string| undefined | null;
console.log("palce value: " + place + " Type: " + typeof(place));
place = 'India';
console.log("palce value:" + place + " Type: " + typeof(place));
place = null;
console.log("palce value:" + place + " Type: " + typeof(place));

let firstBool = true;
let secondBool = false;

let firstString = "test string";
let secondString = 'Second string';
let daysInWeek = 7;
let pi = 3.14;
let hexValue = 0xFFFF;

let person1 = "Person1";
let person2:string | undefined = "Bob";

let firstName = "Adam";

if(firstName == "Adam"){
console.log("first name is Adam");
}else if(firstName == "Jacqui"){
  console.log("first name Jacqui");
} else{
  console.log("firstname is either Adam or Jacqui");
}

switch(firstName)  {
  case "Adam":
    console.log("firstname is Adam");
    break;
  case "Jacqui":
    console.log("jacqui");
    break;
  default:
    console.log("firstname is Adam ro Jacq");
    break;

}

//Equality operator vs Identity operation

let firstVal: any = 5;
let secondVal: any = "5";

if(firstVal == secondVal){
  console.log("they are same");
}else{
  console.log("They are not same");
}

if(firstVal === secondVal){
  console.log("they are same");
}else{
  console.log("They are not same");
}
let mydata = 5 + 5;
let mydata2 =  5 + "5";
console.log(`Result 1: ${mydata}, Type of ${typeof(mydata)}`);
console.log(`Result 2 : ${mydata}, type of : ${typeof(mydata2)}`);

let mydata3 = (5).toString() + String(5);
console.log(`Result 1: ${mydata3}, Type of ${typeof(mydata3)}`);

let mydata4 = Number("5") + parseInt("5");
console.log(`Result 1: ${mydata4}, Type of ${typeof(mydata4)}`);

//null coalescing operator

let val1:string | undefined;
let val2:string | undefined = "london";
console.log(`val2 ${val2}`);

let coalesced1 = val1 || "fallback value";
console.log(`coalesced value ${coalesced1}`);

let val3: number | undefined = 0;

let coalesced3 = val3 || 100;
console.log(`Results ${coalesced3}`)

let coalesced4 = val3 ?? 100;
console.log(`coalesced4 Results ${coalesced4}`)

let count: number | undefined | null = 100;
if(count != null && count != undefined){
  let result1:string = count.toFixed(2);
  console.log(`result1 ${result1}`);
}

let result2: string | undefined = count?.toFixed(2);
console.log(`Results: ${result2}`);

myFunction(1);
//myFunction("London");

function writeValue(val:string | null){
  console.log(`value: ${val ?? "fallback value"}`);
}
writeValue("London");
writeValue(null);

function writeValue2(val?: string){
console.log(`value: ${val ?? "fallback value"}`)
}
writeValue2("London");
writeValue2();

function writeValue3(val:string  = "default value"){
  console.log(`value: ${val}`);
}
writeValue3("value3");
writeValue3();

//rest parameter
function writeValue4(val:string, ...extraInfo:string[]){
  console.log(`value: ${val}, Extras: ${extraInfo}`);
}
writeValue4("London","param1","param2","param3");
writeValue4("London","param1");
writeValue4("London");

function composeString(val:string): string{
  return `composed string ${val}`;
}
function writeValue5(val?: string){
  console.log(composeString(val?? "fallback value"));
}
writeValue5("hello");
writeValue5();

function getUKCapital(): string{
  return "London";
}
function writecity(f:() => string){
  console.log(`city:${f()}`);
}
writecity(getUKCapital);
writecity(() => "Paris");

//closure - Function can access values that are defined in the surrounding code using a feature called closure.
let myCity = "CBE";
writecity(() => myCity);

//working with arrays

let myArray = [];
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;

let myArray1: any[] = [];
let myArray2: (Number|string)[] = [];
let myArray3:(number|string)[] = [100,"test","test2"];
myArray3[0] = 200;
let val = myArray3[0];
console.log(`value ${val}`);
for (let index = 0; index < myArray3.length; index++) {
  console.log("index :" + index + "value :" + myArray3[index]);  
}
myArray3.forEach((value,index) => console.log("Index :" + index + " Value : " + value));

//Spread Operator: Spread operator is used to expand an array so that ites contents can be used as function
//arguments or combined with other arrays

let otherArray = [...myArray3,200,"Esakki",false];

let sum: number = otherArray.filter( v => typeof(v) == "number")
                             .reduce((total:number,v) => total + (v as number),0);
console.log(`sum :${sum}`);

//creating an object
let hat = {
  name :"hat",
  price: 100
};
let boots = {
  name :"Boots",
  price:200,
  categpry:"snow bear"
}

console.log(`Name : ${hat.name}, Price : ${hat.price}`);
console.log(`Name: ${boots.name}, Price: ${boots.price}`);

//describing object type

function printDetails(product:{name:string,price:number,category?: string}) {
  console.log(`Name: ${product.name}, Price : ${product.price}`);
}

printDetails(hat);
printDetails(boots);

class Product{
  constructor(name:string, price:number, category?:string) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
  name: string
  price: number
  category?:string

  printDetails(){
    if (this.category != undefined) {
      console.log(`Name: ${this.name} , Price : ${this.price}, Category: ${this.category}`)
    } else{
      console.log(`Name: ${this.name} , Price : ${this.price}`)
    }
  }
}
let newHat = new Product("Hat",100);
let newBoots = new Product("Boots",200,"snow gear");

newHat.printDetails();
newBoots.printDetails();

//inheritance

class DiscountProduct extends Product {
  constructor(name: string, price: number, private discount: number) {
    super(name,price - discount);
  }
}
let hatInheritance = new DiscountProduct("Hat",100,10);
let bootsInheritance = new Product("boots",100,"show Gear");

hatInheritance.printDetails();
bootsInheritance.printDetails();

console.log(`Hat is a Product? ${hatInheritance instanceof Product}`)
console.log(`Hat is a Product? ${hatInheritance instanceof DiscountProduct}`)
console.log(`Hat is a Product? ${bootsInheritance instanceof DiscountProduct}`)

let name = new Name("Esakki","Raja");
let loc = new WeatherLocation("raining","London");

console.log(name.nameMessage);
console.log(loc.weatherMessage);