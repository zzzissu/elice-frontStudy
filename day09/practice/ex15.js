// reduce() 함수
// 지시사항
/* reduce()를 사용해서 구입할 제품의 총금액(total)을 구하고, 이를 console.log로 출력하세요.
shoppingCart는 배열로써, 몇 개의 상품들이 담겨 있습니다.
각 상품들의 금액은 개수(qty)와 가격(price)의 곱인 qty x price 입니다.
(qty는 수량을 의미하는 quantity의 약자입니다)
각 상품들의 금액을 구한 후, 이를 축적하는 방식으로 reduce()를 구현하여 총 금액을 계산해 봅시다. */

let shoppingCart = [
    {
      product: "자전거",
      qty: 1,
      price: 849.0,
    },
    {
      product: "에어팟",
      qty: 1,
      price: 249.0,
    },
    {
      product: "운동화",
      qty: 1,
      price: 90.99,
    },
    {
      product: "스웨터",
      qty: 2,
      price: 50.99,
    },
    {
      product: "양말",
      qty: 5,
      price: 5.99,
    },
  ];
  
  //1. reduce()를 사용해서 구입할 제품의 총금액을 반환하는 함수를 작성해서 console.log로 출력하세요.
  
  const total = shoppingCart.reduce((acc, val) => {
      return (acc += val.qty * val.price);
  }, 0);
  
  console.log(total);
  