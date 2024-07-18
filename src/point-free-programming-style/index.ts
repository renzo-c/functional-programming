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

// In point-free style the arguments for each function application are never specified 
// See (parseDataToJson, getSize) and (numberGenerator processNumbers) operating together

const printTodoSize = () => {
  fetch(url)
    .then(methods.parseDataToJson.bind(methods))
    .then(methods.getSize.bind(methods));
};

const sumRandomNumbers = async () => {
  numberGenerator().then(processNumbers);
};

export default printTodoSize;
export { sumRandomNumbers };
