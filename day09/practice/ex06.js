// 이름, 나이 목록 만들기
// 지시사항
/* 예시 화면이 구현되도록 index.js, makeList.js 2개 파일의 코드를 작성하세요. */


// indexe.js

// makeList.js 에서 export한 배열, 함수명을 기입해 주세요.
import { inputExample, forEachList } from "./makeList.js";
// import { inputExample, mapList } from "./makeList.js";
// import { inputExample, filterList } from "./makeList.js";
// import { inputExample, forList } from "./makeList.js";
// 지시사항의 예시와 같은 구현 화면이 나오도록, 코드를 자유롭게 작성해 보세요.

document.addEventListener('list1', () => {
    forEachList(inputExample);
})
// document.addEventListener('list2', () => {
//     mapList(inputExample);
// })
// document.addEventListener('list3', () => {
//     filterList(inputExample);
// })
// document.addEventListener('list4', () => {
//     forList(inputExample);
// })


// makeList.js

// 함수(1개 혹은 여러개)를 자유롭게 구현해 보세요.

// forEach
function forEachList(inputExample) {
    const adultName = document.getElementById('adultnamelist');
    const adultAge = document.getElementById('adultagelist');
    const childName = document.getElementById('childnamelist');
    const childAge = document.getElementById('childagelist');

    inputExample.forEach(person => {
        const nameList = document.createElement('li');
        const ageList = document.createElement('li');

        nameList.textContent = person.name;
        ageList.textContent = person.age;

        if(person.age > 19) {
            adultName.appendChild(nameList);
            adultAge.appendChild(ageList);
        } else {
            childName.appendChild(nameList);
            childAge.appendChild(ageList);
        }
    });
}

// // map
// function mapList(inputExample) {
//     const adultName = document.getElementById('adultnamelist');
//     const adultAge = document.getElementById('adultagelist');
//     const childName = document.getElementById('childnamelist');
//     const childAge = document.getElementById('childagelist');

//     inputExample.map(person => {
//         const nameList = document.createElement('li');
//         const ageList = document.createElement('li');

//         nameList.textContent = person.name;
//         ageList.textContent = person.age;

//         if(person.age > 19) {
//             adultName.appendChild(nameList);
//             adultAge.appendChild(ageList);
//         } else {
//             childName.appendChild(nameList);
//             childAge.appendChild(ageList);
//         }
//     });
// }

// // filter
// function filterList(inputExample) {
//     const adultName = document.getElementById('adultnamelist');
//     const adultAge = document.getElementById('adultagelist');
//     const childName = document.getElementById('childnamelist');
//     const childAge = document.getElementById('childagelist');

//     const adults = inputExample.filter(person => person.age > 19);
//     const children = inputExample.filter(person => person.age <= 19);

//     adults.forEach(person => {
//         const nameList = document.createElement('li');
//         const ageList = document.createElement('li');

//         nameList.textContent = person.name;
//         ageList.textContent = person.age;

//         adultName.appendChild(nameList);
//         adultAge.appendChild(ageList);
//     });

//     children.forEach(person => {
//         const nameList = document.createElement('li');
//         const ageList = document.createElement('li');

//         nameList.textContent = person.name;
//         ageList.textContent = person.age;

//         childName.appendChild(nameList);
//         childAge.appendChild(ageList);
//     });
// }

// // for
// function forList(inputExample) {
//     const adultName = document.getElementById('adultnamelist');
//     const adultAge = document.getElementById('adultagelist');
//     const childName = document.getElementById('childnamelist');
//     const childAge = document.getElementById('childagelist');

//     for(let i = 0; i < inputExample.length; i++) {
//         const person = inputExample[i];
//         const nameList = document.createElement('li');
//         const ageList = document.createElement('li');

//         nameList.textContent = person.name;
//         ageList.textContent = person.age;

//         if(person.age > 19) {
//             adultName.appendChild(nameList);
//             adultAge.appendChild(ageList);
//         } else {
//             childName.appendChild(nameList);
//             childAge.appendChild(ageList);
//         }
//     }
// }

// 아래의 배열 예시를 활용하여 실행해 보세요.
const inputExample = [{
  name: "제이슨",
  age: 12
}, 
{
  name: "캐롤린",
  age: 5
},
{
  name: "오바마",
  age: 30
},
{
  name: "토르",
  age: 40
},
{
  name: "아이언맨주니어",
  age: 12
},
{
  name: "스파이더맨",
  age: 20
},
{
  name: "알리사",
  age: 15
},
{
  name: "나타샤",
  age: 35
},
{
  name: "잭",
  age: 40
}]

// 위 배열 변수명 및 작성한 함수명을 아래에 기입해 주세요.
export { inputExample, forEachList};
// export { inputExample, mapList };
// export { inputExample, filterList };
// export { inputExample, forList };