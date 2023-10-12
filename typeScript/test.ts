//타입 스크립트의 기본형태
let ab: string = "hi";
let b: number = 1;
let c: boolean = true;
let d: object = {
  name: "gildong",
  age: 28,
};
console.log(b, c, d);

//typescript를 쓰는 이유

//1. JS로 실행시 타입 체크가 없어 의도와 다른 방식으로 쓰일 수 있음
//2. 정적파일언어 -> 실행하지 않고 코드 상의 에러를 알려줌(실시간 디버깅)

//배열
let numArr: number[] = [1, 2, 3, 4, 5];
let strArr: string[] = ["hi", "hello"];

//객체(object)
let person: {
  name: string;
  age: number;
}[];
//객체배열은 []을 넣어준다.
person = [
  {
    name: "gildong",
    age: 20,
  },
];
