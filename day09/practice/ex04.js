// Rest Operator
// 지시사항
/* 나머지 매개변수 사용하기
mul() 함수의 인자 내에 rest operator를 이용해 모든 매개 변수의 곱을 구하는 함수를 작성하세요.

상단에 작성된 sumArray 함수의 구조를 참고하세요.
함수의 마지막 매개변수 앞에 “…”를 붙이면 모든 후속 매개변수를 배열에 담아 저장합니다. 이 때 마지막 매개변수만 나머지 매개변수로 설정할 수 있습니다.
mul(2, 5, 6) 은 60을 반환하고 mul(2, 4, 6, 8)은 384를 반환합니다.

나머지 매개변수를 일반 매개변수와 함께 사용하기
나머지 매개변수를 이용해 multiply() 함수의 첫 번째 매개변수를 제외한 모든 매개변수를 배열에 저장하세요.
나머지 매개변수에 첫 번째 매개변수를 곱한 배열을 반환하는 코드를 작성하세요.
예를 들어 multiply(5, 4, 3, 2, 1)은{(5*4), (5*3), (5*2), (5*1) }인 [ 20, 15, 10, 5 ]를 반환해야 합니다.
*/

function sumArray(sum, ...arr) {
    // arr.length는 sum을 제외한 매개변수의 개수를 의미합니다
    if (arr.length === 0) return sum;
  
    const [head, ...tail] = arr;
  
    // arr.length는 하나씩 줄어들며, 길이가 0이 되면 합을 반환합니다.
    return sumArray(sum + head, ...tail);
  }
  sumArray(0, 1, 2, 3, 4, 5);
  
  //지시사항 1
  function mul(...num) {
      return num.reduce((x, y) => x * y, 1);
  }
  
  console.log(mul(3, 6, 9, 12, 15));
  
  console.log(mul(11, 13, 17, 19, 23, 29));
  
  //지시사항 2
  function multiply(first, ...rest) {
    return rest.map(num => num * first);
  }
  
  let arr = multiply(12, 6, 4, 3, 2, 1);
  console.log(arr);
  