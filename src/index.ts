import once from "./once";
import onceAndAfter from "./onceAndAfter";
import printTodoSize, {
  sumRandomNumbers,
} from "./point-free-programming-style";

const squeak = (a: string) => console.log(a, "squeak!!");
const creak = (x: string) => console.log(x, "creak");

const makeSound = onceAndAfter(squeak, creak);

squeak("original");
squeak("original");
squeak("original");

const squeakOnce = once(squeak);

squeakOnce("only once");
squeakOnce("only once");
squeakOnce("only once");

makeSound("door");
makeSound("door");
makeSound("door");
makeSound("door");

// point-free programming style execution
printTodoSize();
sumRandomNumbers();
