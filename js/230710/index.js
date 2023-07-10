var number = 5; //변수의 선언과 할당이 동시에 일어난다.

var number1; // 변수를 선언한다.
number1 = 5; // 변수에 값을 할당한다.
number1 = 6;

let string = "가나다";
string = "가마다라마"
//let string = "라마바";  //재선언 불가능

function aaa(){
        var string = "가나다";
}
const string2 = "가마바"
// string2 = "aaa";
console.log(string2);

let lll;
console.log(lll);

let name="sang";
let hihi =`안녕하세요 ${name}입니다.`
console.log(`안녕하세요 ${name}입니다.`);
console.log(hihi);

let names =["Orange", "Pineapple", "Apple", "Banana"];
// 인덱스
// 인덱싱 : 0부터 시작!


console.log(names.length);

names.push("grape");
console.log("push : ", names);

names.pop("Apple");
console.log(names);

names.unshift("Melon");
console.log(names);

names.shift(names);
console.log(names);

let index = names.indexOf("Pineapple");
console.log(index);

let include = names.includes("Pineapple");
console.log(include);

let cat ={
        name : '나비',
        age : 1,
        isCute : true,
        mew: function (){
                return '냐옹'
        },
};
