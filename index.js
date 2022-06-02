console.log("Hello World from OOP-JS");

/**Object Literal */
console.log("***********OBJECT LITERAL SYNTAX *************");

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

circle.draw();
/**Factory Fuction */
console.log("***********FACTORY*************");

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}
const circledos = createCircle(1);
circledos.draw();

/**Constructor Fuction */
console.log("***********CONSTRUCTOR FUCTION*************");

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw a circle with radio", this.radius);
  };
}

const newConstructorFunctionCircle = new Circle(1);
newConstructorFunctionCircle.draw();

console.log("***************CONSTRUCTORS*************");

new Object(); // Object Literal ==> x={}
new String(); // String Literal ==> ''. "", ``
new Boolean(); // Boolean Literal ==> true, false
new Number(); // Number Literal ==> 1,2,3, 4.5, -2

console.log("Functions are Objects");

new Function(); // Constructor Function

const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
  this.draw = function () {
    console.log("draw a circle with radio", this.radius);
  };
`
);

const circleObject = new Circle1(1);
console.log("Creating objects with new Function() Constructor");
console.log(circleObject);

console.log("Creating objects with method call, apply and bind");

Circle.call({}, 1); // Multiple Arguments ==> Circle.call({},1,2,3,4)/ this expression is the same like *** new Circle1(1);***
Circle.apply({}, [1, 2, 3]); // With apply you pass the Argumens in an Array [1,2,2,3,34,0]

console.log("***************VALUES PRIMITIVES AND REFERENCES*************");
console.log(`Values types  `, `                        Reference Types`);
console.log(`   Numbers            `, `                 Object`);
console.log(`   String            `, `                  Functions`);
console.log(`   Boolean            `, `                 Array`);
console.log(`   Symbol `);
console.log(`   undefined `);
console.log(`   null `);

console.log(`**********************************************`);
console.log(`Primitives are copied by their values and`);
console.log(`Object are copied by their reference`);
console.log(`**********************************************`);

console.log("Value type demostration");

let x = 10; // Value of X is assign 20;
console.log(`let x = 10;`);
let y = x; // value of Y is assign x that have the value 20 and it is copied to Y
console.log(`let y = x;`);

x = 20;
console.log(`x=20;`);
/** Those values x and y are independence of each others*/
console.log(`Those values x and y are independence of each others`);
console.log(`x===>`, x);
console.log(`y===>`, y);

console.log("Reference type demostration");

let x1 = { value: 10 }; // Value of X is assign 20;
console.log(`let x1 = { value: 10 };`);

let y1 = x1; // value of Y is assign x that have the value 20 and it is copied to Y
console.log(`let y1 = x1;`);
x1.value = 20;
console.log(`x1.value = 20;`);

console.log(`x1 ===>`, x1);
console.log(`y1 ===>`, y1);
/** When you use an object that object is not stored in this variable */
console.log(`When you use an object that object is not stored in this`);
console.log(`variable That object is stored somewhere else in the`);
console.log(`memory and the address of that memory location is`);
console.log(`stored inside that memory variable it is the`);
console.log(`address or the reference that is copied, because`);
console.log(`x1 and y1 are pointing to the same object in memmory`);

console.log(`Example of function pass value types`);

let number = 10;
function increase(number) {
  number++;
}
increase(number);

console.log(`
let number = 10;
function increase(number) {
  number++;
}
increase(number);
`);

console.log(number);

console.log(`Example of function pass reference types`);

let numberObject = { value: 10 };
function increaseObject(numberObject) {
  numberObject.value++;
}
increaseObject(numberObject);

console.log(`
let numberObject = {value:10};
function increaseObject(numberObject) {
  numberObject.value++;
}
increaseObject(numberObject);
`);

console.log(numberObject);
