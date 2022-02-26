function getNumber(value: number) {
  return value;
}

function getArray(value: string[]) {
  return value;
}

// 제네릭 기본 문법 - 함수
function getValue<T>(value: T): T {
  return value;
}
getValue('hi').toLocaleUpperCase();
getValue(100).toLocaleString();

// 제네릭 기본 문법 - 인터페이스
interface Developer<T> {
  name: string;
  age: T;
}
const tony: Developer<number> = { name: 'tony', age: 100 };

// 제네릭 타입 제한 - 구체적인 타입
function getNumberAndArray<T>(value: T): T {
  value.length; // X
  return value;
}

function getNumberAndArray<T>(value: T[]): T[] {
  value.length; // O
  return value;
}

// 제네릭 타입 제한 - keyof
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}

// keyof는 선언된 인터페이스 속성중에 키값을 가지고 타입을 지정
function getAllowedOptions<T extends keyof ShoppingItems>(option: T): T {
  if (option === 'name' || option === 'address') {
    console.log('option type is string');
    return option;
  }
  if (option === 'price' || option === 'stock') {
    console.log('option type is number');
    return option;
  }
}
getAllowedOptions('nothing');
getAllowedOptions('name');

// const a = getAllowedOptions('name');
// a.toUpperCase(); // Name

// function logTextLength<T>(text : T):T{
//   console.log(text.length);
//   return text;
// }

// logTextLength<string[]>('hi');

interface LengthType{
  length: number;
}

function logTextLength<T extends LengthType>(text : T):number{
  const len = text.length;
  return len;
}
logTextLength('a')

T ? T: string & { length : number }
b : Data{ data : string, value: number }
interface Data{
  data: string;
  value: number;
}