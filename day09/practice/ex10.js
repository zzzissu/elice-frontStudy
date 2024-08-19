// map 사용하기
// 지시사항
/* sphereVolume 함수에 매개변수로 들어가는 각 반지름에 대해 변환된 요소가 포함된 새 배열을 반환하는 함수를 작성하세요.
그런 다음 sphereVolume 함수를 map()메서드에 전달하세요.
console.log(newVolumes) 출력  */

let radius = [10, 30, 50, 7700];

let volumes = []; // 구의 부피를 저장할 배열
let volume = 0;
for (let i = 0; i < radius.length; i++) {
  volume = Math.floor((Math.PI * Math.pow(radius[i], 3) * 4) / 3);
  volumes.push(volume);
}
console.log(volumes);

function sphereVolume(radius) {
  // 지시사항에 맞게 코드를 작성해 주세요.
  return Math.floor((Math.PI * Math.pow(radius, 3) * 4) / 3);
}

// 지시사항에 맞게 코드를 작성해 주세요.
let newVolumes = radius.map(sphereVolume);
console.log(newVolumes);
