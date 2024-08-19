var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//form submit event 폼 제출 이벤트
form.addEventListener("submit", addItem);

//delete event 삭제 이벤트
itemList.addEventListener("click", removeItem);

//filter event 필터 이벤트
filter.addEventListener("keyup", filterItems);

//1. `addItem(e) {}` 함수 내에  id="item" 에 입력된 input 값을 `<li> 태그`로 추가합니다.

//2. 이 때, li 를 생성해서 `appendChild()`와   `.createTextNode(`) 를 사용합니다.

//3. 아이템이 생성된 동시에 삭제 버튼도 `appendChild()`를 사용해서 li에 추가합니다. ( `itemList`에 생성된 li를 추가합니다.)

// 아이템 추가 함수
function addItem(e) {
  e.preventDefault();       // 폼 제출 리로드 방지


    // 입력값 가져오기
    var newItem = document.getElementById("item").value;

    // 아이템 생성
    // <li> 생성
    var li = document.createElement("li");
    // <li>에 클래스 이름 추가
    li.className = "list-group-item";
    // 입력된 값 <li>에 추가
    li.appendChild(document.createTextNode(newItem));

    // 삭제
    // 삭제 버튼 생성
    var deleteBtn = document.createElement("button");
    // 삭제 버튼에 클래스 이름 추가
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    // 삭제 버튼에 "삭제" 추가
    deleteBtn.appendChild(document.createTextNode("삭제"));

    // 삭제 버튼 <li>에 추가
    li.appendChild(deleteBtn);

    // <li> 아이템 리스트에 추가
    itemList.appendChild(li);

    // 입력 필드 비우기
    document.getElementById("item").value = "";
}

//5. `removeItem(e) {}` 함수 내에 작성합니다.

//6. index.html에`btn btn-danger btn-sm float-right delete` 로 태그된 delete 버튼을 click 하게 될 경우  itemList에서 제거합니다. 이 때 removeChild()를 사용합니다.

// 아이템 삭제 함수
function removeItem(e) {
  // 버튼 확인
  if(e.target.classList.contains("delete")) {
      // 삭제 확인 문구
      if(confirm("정말 삭제하시겠습니까?")) {
          // <li> 조회 및 제거
          var li = e.target.parentElement;
          itemList.removeChild(li);     // 자식요소 제거
      }
  }
}

//아이템 진열하기
function filterItems(e) {
  //convert to lowercase
  var text = e.target.value.toLowerCase();
  //get lis
  var items = itemList.getElementsByTagName("li");
  //conver to an array
  Array.from(items).forEach((item) => {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
