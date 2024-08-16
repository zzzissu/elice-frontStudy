/* 함수명: addStringLength
입력: 2개의 문자열
출력(반환): 각 문자열의 길이의 합(숫자)

[예시 1]
입력: "abc", "de"
출력: 5

[예시 2]
입력: "hello", "world"
출력: 10 */
function addStringLength(inputA, inputB) {

    var a = inputA.length;
    var b = inputB.length;
    
    
      return a + b;
};

/* [조건]
함수명: repeatString
입력: 문자열 1개, 숫자 1개
출력(반환): 각 문자열이 숫자만큼 반복되어 만들어진 새로운 문자열

[예시 1]
입력: "abc", 2
출력: "abcabc"

[예시 2]
입력: "hello", 3
출력: "hellohellohello" */
function repeatString(inputA, inputB) {
  
    return inputA.repeat(inputB);
  
};

/* [조건]
함수명: removeBlank
입력: 문자열 1개
출력(반환): 입력된 문자열에서 빈 칸(띄어쓰기)을 없앤 문자열

[예시 1]
입력: "hello world"
출력: "helloworld"

[예시 2]
입력: "안녕, 나의 이름은 엘리스야"
출력: "안녕,나의이름은엘리스야" */
function removeBlank(inputA) {

    var blank = inputA.split(" ").join("");
        return blank;
}

/* [조건]
함수명: sortStringArray
입력: 문자열들로 이루어진 배열 1개
출력(반환): 문자열들이 알파벳 순서대로 나열된 배열

[예시 1]
입력: ["c", "b", "d"]
출력: ["b", "c", "d"]

[예시 2]
입력: ["kakao", "naver", "apple"]
출력: ["apple", "kakao", "naver"] */
function sortStringArray(inputA) {
    return inputA.sort();
}

/* [조건]
함수명: reverseStringArray
입력: 문자열들로 이루어진 배열 1개
출력(반환): 문자열들이 알파벳 순서 반대대로 나열된 배열

[예시 1]
입력: ["c", "b", "d"]
출력: ["d", "c", "b"]

[예시 2]
입력: ["kakao", "naver", "apple"]
출력: ["naver", "kakao", "apple"] */
function reverseStringArray(inputA) {
    return inputA.sort().reverse();
}

/* [조건]
함수명: addMiddleNumbers
입력: 7개의 숫자로 이루어진 배열
출력(반환): 2, 5, 7번째 숫자의 합

[예시 1]
입력: [1, 2, 3, 4, 5, 6, 7]
출력: 14
(= 2+5+7)

[예시 2]
입력: [2, 5, 10, 1, 4, 12, 6]
출력: 15
(= 5+4+6) */
function addMiddleNumbers(inputA) {
    return inputA[1] + inputA[4] + inputA[6];
}

/* [조건]
함수명: makeTotalPrice
입력: 아래와 같은 형태의 객체

{
  quantity1: 숫자a,
  price1: 숫자b,
  quantity2: 숫자c,
  price2: 숫자d
}

출력(반환):
a*b + c*d
출력: 2600 */
function makeTotalPrice(inputA) {

    var one = inputA.quantity1;
    var two = inputA.price1;
    var three = inputA.quantity2;
    var four = inputA.price2;

    return one*two + three*four;
}

/* [조건]
함수명: makeIntroducingText
입력: 아래와 같은 형태의 객체

{
  firstName: 문자열(이름),
  lastName: 문자열(성),
  age: 숫자(나이)
}
출력: "안녕하세요, 저의 이름은 박태환이고, 나이는 32살입니다." */
function makeIntroducingText(inputA) {
    var name2 = inputA.firstName;
    var name1 = inputA.lastName;
    var fullName = name1 + name2;
    var age = inputA.age;

    return "안녕하세요, 저의 이름은 " + fullName + "이고, 나이는 " + age + "입니다.";
}

var inputA = {
    firstName: "태환",
    lastName: "박",
    age: 32
  };

/* 변수 비교하기 */
var a = 10;
var b = 10;

document.write(a == b);
document.write(a === b);

b = "10";

document.write(a == b);
document.write(a === b);

/* 소수의 합 구하기 */

var sum = 0;

for (var i = 1; i <= 200; i++) {
    for (var j = 2; j <= i; j++) {
        if (i % j == 0) {
        break;
        }
    }
    if (j == i) {
        sum += j;
    }
}
document.write(sum);


// ---------------------------------
let sum = 0;
function solution(n) {
  // 0이 포함되기 때문에 입력받은 수보다 하나 크게
  const arr = Array.from({ length: n + 1 }).fill(true); // 201 인 배열을 만드는데, fill 을 하면 요소들을 참으로 채운다.
  arr[0] = arr[1] = false; // 0 과 1은 소수가 아니다.

  const sqrt = parseInt(Math.sqrt(n)); // n 의 제곱근을 구한다.

  for (let i = 2; i <= sqrt; i++) {
    if (arr[i] === true) {
      for (let j = 2; i * j <= n; j++) {
        arr[i * j] = false;
      }
    }
  }
  sum = arr.reduce((accumulator, value, i) => {
    if (value) return accumulator + i;
    return accumulator + 0;
  }, 0);
}

solution(200);

document.write('1이상 200이하의 소수의 합 = ' + sum);

/* 짝수 반환 함수 만들기 */
function getOnlyEvenNumber(inputA) {
    var num = [];
    for(var i = 0; i <= inputA.length; i++) {
        if(inputA[i] % 2 == 0) {
            num.push(inputA[i]);
        }
    }
    return num;
}

/* 홀수 반환 함수 만들기 */
function getOnlyOddNumber(inputA) {
    var num = [];
    for(var i = 0; i <= inputA.length; i++) {
        if(inputA[i] % 2 == 1) {
            num.push(inputA[i]);
        }
    }
    return num;
}

/* 각 자리수 반환함수 만들기 

[예시 1]
입력: 1100
출력: [1, 1, 0, 0]

[예시 2]
입력: 14
출력: [1, 4]
*/
function getDigits(inputA) {
    
    var numString = inputA.toString();
    var result = [];

    for(var i = 0; i < numString.length; i++) {
        result.push(parseInt(numString[i]));
    }
    return result;
}

/* 자릿수 배열을 숫자로 되돌리는 함수 만들기 
[조건]
함수명: makeNumberFromDigits
입력: 숫자들로 이루어진 배열
출력(반환): 해당 숫자들을 각 자릿수로 하여 합쳐서 만든 숫자

[예시 1]
입력: [1, 1, 0, 0]
출력: 1100

[예시 2]
입력: [1, 4]
출력: 14
*/
function makeNumberFromDigits(inputA) {
    
    var numString = ""; // 숫자를 문자열로 저장할 빈 변수 선언

    // 배열의 각 요소를 문자열로 결합
    for (var i = 0; i < inputA.length; i++) {
        numString += inputA[i];
    }

    // 문자열을 숫자로 변환하여 반환
    return parseInt(numString);
}

/* 올바른 이메일 형태인지 확인하는 함수 만들기

[조건]
함수명: verifyEmail
입력: 문자열
출력(반환): 아래 조건이 모두 충족되면 true, 하나라도 미충족이면 false

문자열에 @(골뱅이)가 포함됨
문자열에 .(점)이 포함됨
문자열의 길이가 5 이상
[예시 1]
입력: "abc@example.com"
출력: true

[예시 2]
입력: "abc@com"
출력: false */
function verifyEmail(targetEmail) {
    if (targetEmail === '') return false;
    return (
      targetEmail.length >= 5 &&
      targetEmail.includes('@') &&
      targetEmail.includes('.')
    );
}

/* 성인만 골라내는 함수 만들기 */
function getOnlyAdults(a) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
      if (a[i].age >= 20) result.push(a[i].name);
    }
    return result;
  }

/* 어린이만 골라내는 함수 만들기 */
function getOnlyChilds(a) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i].age < 20) result.push(a[i].name);
    }
    return result;
  }
  
/* 직각삼각형 여부를 판단하는 함수 만들기

[조건]
함수명: isRightTriangle
입력: 숫자 3개 (항상 첫 번째 인자가 빗변의 길이임)
출력(반환): 직각삼각형이면 true, 아니라면 false

빗변의 길이의 제곱이, 나머지 두 변의 길이의 제곱의 합과 같으면 직각삼각형입니다.

[예시 1]
입력: 5, 3, 4
출력: true

[예시 2]
입력: 10, 3, 2
출력: false */
function isRightTriangle(inputA, inputB, inputC) {
    var a = inputA * inputA;
    var bc = inputB * inputB + inputC * inputC;

    if(a === bc) {
        return true;
    } else { return false; }

}