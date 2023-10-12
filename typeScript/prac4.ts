function arrElement<T>(arr: T[], num: number) {
  if (arr.length > num) {
    return arr[num];
  } else {
    return false;
  }
}

console.log(arrElement<string>(["a", "b"], 3));
