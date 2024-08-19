// 이름 목록 만들기 2
// 지시사항
/* 함수명: makeAdultNameList, makeChildNameList
입력(공통): 아래와 같은 형태의 객체들로 이루어진 배열

{
  name: 문자열(이름),
  age: 숫자(나이)
}

출력(반환): 아래와 같은 형태의 태그가 이어져서 만들어진 1개의 문자열 */

// 지시사항에 따라 makeAdultNameList 함수의 코드를 작성합니다.
function makeAdultNameList(inputArray) {
    return inputArray
    .filter(person => person.age > 19)
    .map(person => `<li>${person.name}</li>`)
    .join('');
}


// 지시사항에 따라 makeChildNameList 함수의 코드를 작성합니다.
function makeChildNameList(inputArray) {
    return inputArray
    .filter(person => person.age < 20)
    .map(person => `<li>${person.name}</li>`)
    .join('');
}


// 아래 문자열과 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = [{
  name: "박태환",
  age: 35
}, 
{
  name: "유재석",
  age: 49
},
{
  name: "김강훈",
  age: 12
},
{
  name: "최태민",
  age: 15
},
{
  name: "이바람",
  age: 52
},
{
  name: "이지원",
  age: 15
}]

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
export { inputA, makeAdultNameList, makeChildNameList }
