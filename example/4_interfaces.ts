// // 인터페이스
// interface User {
//   name: string;
//   age: number;
// }

// // 변수에 사용하는 경우
// const seho: User = { name: "hi", age: 100 };

// // 함수의 매개변수에 사용하는 경우
// function getUser(user: User): void {
//   console.log(user);
// }
// getUser(seho);

// // 함수의 전체 타입에 사용하는 경우
// // 함수의 타입 설정은 인터페이스를 굳이 사용하지 않아도 좋음.
// interface SumFunction {
//   //매개변수 타입과 리턴타입 설정
//   (a: number, b: number): number;
// }

// let sum: SumFunction = function (num1, num2) {
//   return num1 + num2;
// };
// sum(1, 2);
// // 배열의 인덱싱에 사용하는 경우
// interface StringArray {
//   //인덱스값으로는 숫자만 가능하며 배열은 string 값만 들어간다.
//   [index: number]: string;
// }
// let arr: StringArray;
// arr[0] = "hi";
// // arr[1] = 10;

// interface StringRegexDictionary {
//   //key값으로 string값을 받고, value값으로는 RegExp를 받는다.
//   [key: string]: RegExp;
// }

// const obj: StringRegexDictionary = {
//   sth: /abc/,
// };

// // 인터페이스 확장
// interface Person {
//   name: string;
//   age: number; // 옵셔널 선택자 ? 동일하게 적용 가능
// }
// interface Developer extends Person {
//   language: string;
// }
// const joo: Developer = { name: "joo", age: 20, language: "ts" };
