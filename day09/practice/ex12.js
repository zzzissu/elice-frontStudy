// filter 이해하기
// 지시사항
/* [조건]
함수명: isLong
입력: 문자열
출력(반환): 5글자 이상이면 true, 아니면 false */

// 지시사항 1에 따라 함수 코드를 작성합니다.
function isLong(five) {
    if(five.length >= 5) {
        return true;
    } else {
        return false;
    }
}


// 지시사항 2에 따라, 위 함수명을 아래의 빈 칸에 기입합니다.
function getLongString(inputA) {
  const LongStrings = inputA.filter(isLong);
  
  return LongStrings  
}






// 아래 배열 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
const inputA = ["안", "안녕", "안녕하", "안녕하세", "안녕하세요"]

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA], func: getLongString }
