// 지시사항을 참고하여 코드를 작성하세요.
var formEl = document.getElementById('form');
var inputEl = document.getElementById('input');
var answerEl = document.getElementById('answer');

formEl.addEventListener('submit', function(event) {
    event.preventDefault();     // form제출 방지
    answerEl.textContent = inputEl.value;   // input 값을 answer에 저장하기
    inputEl.value = '';         // 텍스트 박스 초기화
})