// forEach() 함수
// 지시사항
/* 주어진 for문 대신 forEach()와 myFunction을 이용해서 동일한 값을 출력하세요. */

var fruits = ["apple", "orange", "cherry"];

function myFunction(item, index) {
  document.write(index + ":" + item + "<br>");
}

// for (i = 0; i < 3; i++) {
//   document.write(i);
//   document.write(":" + fruits[i] + "<br>");
// }

fruits.forEach(myFunction);