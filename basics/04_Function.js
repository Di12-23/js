let prod = myFunction(45,55);
function myFunction(a,b)
{
    return a*b;
}
console.log(prod);
/*******************OBJECTS****************** */
//Objects are variables too. But objects can contain many values.
//This code assigns many values (Fiat, 500, white) to a varible named car
const car={ type:"Volvo", color:"White"};
console.log(car["color"]);
console.log(car.type);

/*****************OBJECT METHOD*************** */
//objects can also have methods.
// Methods are actions that are performed on objects.
// MEthods are stored in properties as function definitions.
// A method is a function stored as property