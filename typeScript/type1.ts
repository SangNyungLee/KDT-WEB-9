//튜플
//타입선언
let drink: [string, number];
drink = ["cola", 1];

//튜플의 선언과 초기화
let drink2: [string, number] = ["cola", 2000];

//js 배열과 동일하게 인덱스 접근 가능, 메서드 사용 가능
console.log(drink[0]);

//spread 연산자 사용이 가능
console.log([...drink2, "콜라"]);

//readonly : 데이터를 변경할 수 없게 만듬
let drink3: readonly [string, number] = ["water", 50000];
//drink3.push('콜라') => 오류발생!

/* ---------------------------- */
//열거형
//enum은 기본적으로 0부터 1씩 증가하는 값을 갖는다.
enum Auth {
  admin,
  user,
  guest,
}

//enum은 문자열을 지정해 줄 수 있다.
enum Delivery {
  pending = "pending",
  delivery = "delivery",
  finish = "finish",
}

console.log(Auth.admin);
console.log(Auth.guest);
console.log(Delivery.delivery);

/*-------------------------------------- */
//any타입
let a: any = ["1", "2", "3", 1, 2, 3];
