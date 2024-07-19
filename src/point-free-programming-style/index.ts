import fs from "fs";

const numberGenerator = () => {
  return new Promise<number[]>((resolve, reject) => {
    const nums = new Set<number>();
    while (nums.size !== 10) {
      nums.add(Math.floor(Math.random() * 100) + 1);
    }
    resolve([...nums]);
  });
};

const processNumbers = (numbers: number[]) => {
  const initialValue = 0;
  const res = numbers.reduce((acc, curr) => acc + curr, initialValue);
  console.log(`Sum of ${numbers} is ${res}`);
};

type DataObject = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

const methods = {
  parseDataToJson: (data: Response) => data.json(),
  getSize: (dataJson: DataObject[]) =>
    console.log(`Todo size is ${dataJson.length}`),
};

const url = "https://jsonplaceholder.typicode.com/todos";

// In point-free style, the arguments for each function application are never specified
// See (parseDataToJson, getSize) and (numberGenerator processNumbers) operating together

// async examples
const printTodoSize = () => {
  fetch(url)
    .then(methods.parseDataToJson.bind(methods))
    .then(methods.getSize.bind(methods));
};

const sumRandomNumbers = async () => {
  numberGenerator().then(processNumbers);
};

// sorting examples
const words = ["mano", "mítico", "musical", "natural", "ñandu", "oasis"];
const spanishComparison = (a: string, b: string) => a.localeCompare(b, "es");
console.log("words sorted", words.sort(spanishComparison));

type People = {
  name: string;
  age: number;
};
const people = [
  { name: "ricardo", age: 21 },
  { name: "katia", age: 19 },
  { name: "steven", age: 64 },
  { name: "flow", age: 13 },
];
const ageComparison = (a: People, b: People) => a.age - b.age;
console.log("people sorted", people.sort(ageComparison));

export default printTodoSize;
export { sumRandomNumbers };
