//타입스크립트의 경우
function tsFunc(a: number, b: number, c?: number): number {
  return a + b;
}
tsFunc(1, 2, 3);
tsFunc(4, 5);

//함수 표현식(화살표 함수)
const arrowTsFunc = (a: number, b: number): number => {
  return a + b;
};

//위 함수의 축약형
const arrowTsFunc2 = (a: number, b: number): number => a * b;

//리턴이 없는 함수
function printFunc(a: string, b: string): void {
  console.log(a, b);
}

/*------------------------------------------- */
//never 타입
//never : 특정 조건에서만 빠져나갈 수 있고, 어떤 조건에서는 무한루프
//항상 함수 끝에 도달하지 않는 경우
function goinOn(a: number) {
  while (true) {
    console.log("go");
  }
}
goinOn(1);
