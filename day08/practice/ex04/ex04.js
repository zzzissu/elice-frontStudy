/*지시사항을 따라 작성해주세요*/
let inputs = document.getElementsByTagName("input");
let loginButton = document.getElementsByTagName("button")[0];

let id = inputs[0];
let pw = inputs[1];

/*1. 버튼 활성화시키기*/
function activateBtn() {
  /* 여기에 작성해주세요 */
  // id가 존재하는지 확인
  if(id.value) {
      // pw가 존재하는지 확인
      if(pw.value) {
          // 입력된 경우에만 버튼 활성화
          loginButton.classList.add("activatedColor");
          loginButton.classList.remove("deactivatedColor");
        }
      } else {
          // 입련된게 없으면 비활성화
          loginButton.classList.add("deactivatedColor");
          loginButton.classList.remove("activatedColor");
      }
}

// 비밀번호 입력란에서 키를 누를 때 activateBtn 실행
pw.addEventListener("keyup", activateBtn);

/*2. 로그인 성공 여부 나타내기*/
function login() {
  /* 여기에 작성해주세요 */
  if(id.value === "elice" && pw.value === "1234") {
      alert("로그인 성공");
  } else {
      alert("로그인 실패");
  }
}

// 로그인 버튼 클릭 시 login 함수 실행
loginButton.addEventListener("click", login);
