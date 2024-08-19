// ex01
// HTML <img> 요소를 선택하도록 코드를 작성하세요.
var imgs = document.getElementsByTagName('img');

// HTML <div> 요소를 선택하도록 코드를 작성하세요.
var selectedTagName = document.getElementsByTagName('div');

// 아이디가 “gtomato"인 요소를 선택하도록 코드를 작성하세요.
var selectedId = document.getElementById('gtomato');

// 클래스가 "vegetable"인 모든 요소를 선택하도록 코드를 작성하세요.
var selectedClassNameS = document.getElementsByClassName('vegetable');

// name 속성값이 "tomato"인 모든 요소를 선택하도록 코드를 작성하세요.
var selectedNameS = document.getElementsByName('tomato');

// 선택된 요소들을 출력합니다. 출력 순서를 변경하면 오답 처리가 됩니다.
document.write(imgs + "<br>");
document.write(imgs[0] + "<br>");
document.write(selectedTagName + "<br>");
document.write(selectedId + "<br>");
document.write(selectedClassNameS + "<br>");
document.write(selectedNameS[0] + "<br>");

document.write(selectedTagName[1].textContent + "<br>");
document.write(selectedId.textContent + "<br>");

document.getElementsByTagName();  // 태그 이름 선택
document.getElementById();   // 아이디 선택
document.getElementsByClassName();   //클래스 선택
document.getElementsByName();  // name 속성값 선택
// ===================================================================

// ex02
// alert("Hello world!");


// HTML <div> 요소를 선택하도록 코드를 작성하세요
var selectedTagName = document.getElementsByTagName('div');

// 아이디가 “banana"인 요소를 선택하도록 코드를 작성하세요
var selectedId = document.getElementById('banana');

// 클래스가 "vegetable"인 모든 요소를 선택하도록 코드를 작성하세요
var selectedClassNameS = document.getElementsByClassName('vegetable');

// name 속성값이 "red"인 모든 요소를 선택하도록 코드를 작성하세요
var selectedNameS = document.getElementsByName('red');


// 선택된 요소들을 출력합니다.
document.write(selectedTagName);
document.write(selectedId);
document.write(selectedClassNameS);
document.write(selectedNameS);
// ===================================================================

// ex03
// 아이디가 "apple"인 요소를 선택하도록 코드를 작성하세요
var selectedId = document.getElementById('apple');

// 선택한 요소의 색깔을 red로 바꿉니다.
selectedId.style.color = 'red'; 

// 아이디가 "banana"인 요소를 선택하도록 코드를 작성하세요
var selectedId2 = document.getElementById('banana');

// 선택한 요소의 색깔을 yellow로 바꿉니다.
selectedId2.style.color = 'yellow'; 
// ===================================================================

// ex04
// 아이디가 "apple"인 요소를 선택하도록 코드를 작성하세요
var selectedId = document.getElementById('apple');

// 선택한 요소의 내용을 "strawberry"로 바꿉니다.
selectedId.innerHTML = 'strawberry'; 

// 아이디가 "onion"인 요소를 선택하도록 코드를 작성하세요
var selectedId2 = document.getElementById('onion');

// 선택한 요소의 내용을 "garlic" 바꿉니다.
selectedId2.innerHTML = 'garlic'; 
// ===================================================================

// ex05
function highlightWords() {
    const txt = document.getElementById("targetp").innerText;
    let words = txt.split(" ");
  
    let output = "";
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let replacementword;
  
      // 2. 단어의 길이가 8 이상인 경우 단어를 하이라이트 하세요.
      if(word.length >= 8) {
          replacementword = "<span class='lightext'>" + word + "</span>";
          // <span>태그로 감싸서 하이라이트 주기
      } else {
          replacementword = word;
          // 거짓이면 원래 단어 그대로 저장
      }
  
      output = output + " " + replacementword + " ";
      // 수정 및 저장된 단어들 공백 포함하여 정렬하기
    }
  
    return output;
  }
  
  document.getElementById("targetp").innerHTML = highlightWords();
  // output에 저장된 문자열을 "targetp"에 적용
  
  // 3. 볼드체인 텍스트를 모두 파란색으로 변경하세요.
  function highlight() {
      let boldElements = document.getElementsByTagName("b");
    
      for (let i = 0; i < boldElements.length; i++) {
          boldElements[i].style.color = "blue";
      }
  }
  
  // 4. 볼드체인 텍스트를 모두 검은색으로 변경하세요.
  function returnNormal() {
      let boldElements = document.getElementsByTagName("b");
  
      for (let i = 0; i < boldElements.length; i++) {
          boldElements[i].style.color = "black";
      }
  }
  
// ===================================================================

// ex06
var myUl = document.querySelector("ul");

//1. for loop을 사용해서 index.html의 <ul></ul> 내에 li 태그 문장 20개를 createTextNode()와 appendChild()를 사용해서 추가합니다.
for (let i = 0; i < 21; i++) {
    // li 요소 생성
    var myli = document.createElement("li");
    
    // li 요소의 텍스트 노드 생성
    var textNode = document.createTextNode(i + "번째 문장");
    
    // 텍스트 노드를 li 요소에 추가
    myli.appendChild(textNode);
    
    // li 요소를 ul 요소에 추가
    myUl.appendChild(myli);
}
// ===================================================================

// ex07
function myFunction() {
    // p 태그 생성
    var newParagraph = document.createElement("p");
    
    // p 태그의 텍스트 노드 생성
    var textNode = document.createTextNode("이것이 추가 될 문장입니다.");
    
    // 텍스트 노드를 p 태그에 추가
    newParagraph.appendChild(textNode);
    
    // "myDiv" 가져오기
    var myDiv = document.getElementById("myDiv");
    
    // p 태그 "myDiv"에 추가
    myDiv.appendChild(newParagraph);
}
// ===================================================================

// ex08
// 1.‘Home’이라고 적힌 <li> 태그를 생성하세요.
let homeItem = document.createElement("li");
homeItem.textContent = "Home";

// 2.insertBefore()를 사용해서 menu의 <li> 태그 앞에 'Home'을 삽입하세요.
let menu = document.getElementById("menu");
menu.insertBefore(homeItem, menu.firstChild);

// 3. insertBefore()를 사용해서 calendar의 첫 번째 child로 예약 알람 문구를 삽입하세요.
let calendar = document.getElementById("calendar");
let reminderDiv = document.createElement("div");

let strongText = document.createElement("strong");
strongText.textContent = "안녕하세요!";
reminderDiv.appendChild(strongText);

let normalText = document.createTextNode(" 예약하신 날짜입니다.");
reminderDiv.appendChild(normalText);

calendar.insertBefore(reminderDiv, calendar.firstChild);

// 4. removeChild()를사용해서 'Contact'라고 적힌 <li> 태그를 삭제하세요.
let contactItem = menu.querySelector("li:nth-child(4)");
menu.removeChild(contactItem);
// ===================================================================

// ex09
//  window.onload를 사용하여 HTML 문서가 로드될 때 이벤트 핸들러가 작동하도록 해보세요.
window.onload = 

    // "페이지가 열렸습니다" 문구를 띄우는 함수를 작성하세요.
    function() {
        // 아이디가 "text"인 요소를 선택하도록 코드를 작성하세요..
        var text = document.getElementById("text"); 
        text.textContent = "페이지가 열렸습니다";
    }
// ===================================================================

// ex10
// 1. 아이디가 "carrot"인 요소를 선택하세요
var carrot_btn = document.getElementById("carrot"); 

// 2. click 할 시 텍스트를 보여주는 함수를 작성합니다.
//    버튼을 클릭하면 "토끼가 나타났어요!!" 문장을 출력하도록 해보세요

function showText() {
    document.getElementById("text").innerHTML = "토끼가 나타났어요!!";

};

// 3. 선택한 요소에 "click" 이벤트 핸들러를 등록하세요 (이벤트명:"click", 함수이름)
carrot_btn.addEventListener("click", showText) ;  
// ===================================================================

// ex11
/*지시사항을 따라 작성해주세요*/
var target = document.getElementById("btn");

// 버튼 클릭 시 색상과 텍스트를 변경하는 함수
function changeButtonOnclick() {
  /*지시사항 1번*/
  // 버튼의 클래스 목록에 'changeColor' 클래스를 추가
  target.classList.add("changeColor");
  
  /*지시사항 2번*/
  // 버튼의 텍스트를 '버튼 클릭 성공!'으로 변경
  target.innerText = "버튼 클릭 성공!";
}

/*지시사항 3번*/
// 버튼 클릭 시 changeButtonOnclick 함수 실행
target.addEventListener("click", changeButtonOnclick);
// ===================================================================

// ex12
/*지시사항을 따라 작성해주세요*/
const image = document.getElementsByClassName("zoom-img")[0];

function zoomIn() {
  /* 여기에 작성해주세요 */
  image.style.transition = "all 0.5s";
  image.style.transform = "scale(1.2)";
}

function zoomOut() {
  /* 여기에 작성해주세요 */
  image.style.transition = "all 0.5s";
  image.style.transform = "scale(1)";
}

/* 여기에 작성해주세요 */
image.addEventListener("mouseover", zoomIn);
image.addEventListener("mouseout", zoomOut);
// ===================================================================

// ex13
// ===================================================================

// ex14
var blockOne = document.getElementById("red");
var blockTwo = document.getElementById("yellow");
var blockThree = document.getElementById("green");

/*지시사항을 따라 작성해주세요*/
// 마우스를 올렸을 때 색상을 변경하는 함수
function setHoverColor(element, colorClass) {
    element.classList.add(colorClass);
}
// 각 요소에 이벤트 리스너를 추가
blockOne.addEventListener("mouseenter", function() {
    setHoverColor(blockOne, "red");
});


blockTwo.addEventListener("mouseenter", function() {
    setHoverColor(blockTwo, "yellow");
});


blockThree.addEventListener("mouseenter", function() {
    setHoverColor(blockThree, "green");
});

// ===================================================================

// ex15

function move() {

    // 코드를 완성시켜 주세요.
      var box = document.getElementById('move');
      box.style.width = "600px";
      box.style.height = "600px";
      box.style.left = "300px";
  };
  
  var btn = document.getElementById('btn');
  
  btn.addEventListener("click", move);  
// ===================================================================

// ex16
// select 클래스를 가지고 있는 3개의 요소를 가져옵니다.
var selectItems = document.querySelectorAll(".select");

function handleOnclick() {
  this.classList.toggle("on"); // 선택된 요소에 on 클래스를 추가
}

// 가져온 3개의 요소에 이벤트를 등록합니다.
selectItems.forEach(function(item) {
  item.addEventListener("click", handleOnclick);
});

// ===================================================================