// 템플릿 리터럴
// 지시사항
/* ex02.js에 선언된 변수를 이용해 템플릿 리터럴로 아래 문자열을 sentence 변수에 저장하세요.
 - 나는 자바스크립트를 3년째 공부중입니다. */

var learn = '자바스크립트';
var year = 3;

var sentence = `나는 ${learn}를 ${year}년째 공부중입니다.`;
document.write(sentence);