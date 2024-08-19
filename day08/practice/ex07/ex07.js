window.onload = function () {
    var el = document.getElementById('change_heading');
    el.innerText = '카 레이싱 대회';
  
    //2. `<section>`내에 있는 색 팔레트에 마우스 커서를 갖다댈 때 `index.html`에 `<span class="selected">`태그에 None!을 해당하는 색깔로 대체하는 코드를 작성하세요.
    var section = document.querySelector('section');
    // 지시사항 2
    section.addEventListener('mouseover', e => {
      const colorName = e.target.className;
      document.querySelector('.selected').textContent = colorName;
    });
  
    var newDiv = document.createElement('div');
    newDiv.className = 'purple';
    section.appendChild(newDiv);
  
    var button = document.querySelector('button');
    var car1 = document.querySelector('.car1');
    var car2 = document.querySelector('.car2');
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;
  
    function reset(car1, car2) {
      clearTimeout(car1.timer);
      clearTimeout(car2.timer);
      car1.style.marginLeft = 0;
      car2.style.marginLeft = 0;
      button.disabled = false;
    }
  
    //3.`button.addEventListener()` 함수 내에 경주 시작 버튼을 클릭할 때 car1과 car 2를 좌에서 우로 움직이는 코드를 작성하세요.
    //4.car1이 오른쪽 사이드에 먼저 도착했을 경우 Car 1 승이라는 alert를 띄우세요. car2도 동일하게 alert 메시지를 띄우는 코드를 작성하세요.
    button.addEventListener('click', function (event) {
      button.disabled = true;
  
      // 지시사항 3, 4
      // Math.random()
      // setInterval()
      car1.timer = setInterval(function () {
        car1.style.marginLeft =
          parseInt(car1.style.marginLeft) + Math.floor(Math.random() * 61) + 'px';
        var rect = car1.getBoundingClientRect();
        //   if (parseInt(car1.style.marginLeft) > window.innerWidth) {
        //     alert('Car 1 wins!');
        //     reset(car1, car2);
        //   }
        if (rect.right > window.innerWidth) {
          alert('Car 1 wins!');
          reset(car1, car2);
        }
      }, 100);
  
      car2.timer = setInterval(function () {
        car2.style.marginLeft =
          parseInt(car2.style.marginLeft) + Math.floor(Math.random() * 61) + 'px';
        var rect = car2.getBoundingClientRect();
        //   if (parseInt(car2.style.marginLeft) > window.innerWidth) {
        //     alert('Car 2 wins!');
        //     reset(car1, car2);
        //   }
        console.log('right', rect.right, 'innerWidth', window.innerWidth);
        if (rect.right > window.innerWidth) {
          alert('Car 2 wins!');
          reset(car1, car2);
        }
      }, 100);
    });
  };