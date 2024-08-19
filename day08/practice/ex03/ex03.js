/*지시사항을 따라 작성해주세요*/

/*1. index.html 파일을 참고해 주어진 변수들 완성시키기*/

const target = document.querySelector('.attend'); // 출석 버튼 가져오기
const inputName = document.querySelector('input[name="name"]'); // 입력한 이름 받아올 input태그
const attendee = document.getElementById('attendee'); // 입력한 이름을 보여줄 영역

/*2. 입력받은 이름을 출석부에 나타내기*/

function attend() {
  /*여기에 작성해주세요.*/
  // 입력된 이름 가져오기
  const name = inputName.value;

  // 이름이 입력되면 출석부에 추가
  if(name) {
      attendee.textContent += name + '\n';      // 새로운 줄에 이름 추가

    // 입력창 비우기
      inputName.value = '';
  }
}

// 출석 버튼 클릭 시 attend 실행
target.addEventListener("click", attend);
