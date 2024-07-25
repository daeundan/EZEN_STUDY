// import products from "./products.js";
// console.log(products.data[0].img);

const productInfo = "./products.json";
fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    let idCounter = Date.now(); //현재 날짜 정보를 주되
    const products = {
      data: data.data.map((item) => ({
        ...item, //기존 값 건드리지 말고 그대로 가져와라
        id: idCounter++, //하나씩 꺼낼대마다 증감시켜라
      })), //소괄호 한번더 붙여줘야함*
    };

    // 아이템 중복 방지
    const removeItems = () => {
      const items = document.querySelectorAll("li");
      items.forEach((item) => {
        item.remove();
      });
    };

    // 아이템 생성
    const createItem = (product) => {
      const ul = document.querySelector("ul");
      const li = document.createElement("li");
      //li라는 노드 요소를 만들어서 변수에 넣을 것이다.
      const img = document.createElement("img");
      const attr = document.createAttribute("src");
      //DOM안에서 특정 태그 속성 사용하고자 할 때
      //src생성해서 attr이라는 변수 안에 적용해줘
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const span = document.createElement("span");

      li.id = product.id;

      const price = new Intl.NumberFormat("ko-kr", {
        style: "currency",
        currency: "KRW",
      }).format(product.price);
      //프로토타입 함수 (NumberFormat)
      //format 앞에서 정의한 함수를 누구한테 줄 것인지 적어라
      h3.className = "name";
      h3.innerText = product.name;
      span.className = "price";
      span.innerText = price;
      // attr.value = product.price;
      attr.value = product.img;
      img.setAttributeNode(attr);
      div.append(h3, span);
      li.append(img, div);
      ul.appendChild(li);
    };

    // import는 함수를 출력해주는 역할 할것임
    const importData = () => {
      products.data.map((product) => {
        //product 참조변수 : 각각의 아이템 의미함
        createItem(product); //내용들을 이 함수에 토스해주는 것 원본 건드리지 않고 새로운 배열 생성
      });
    };

    importData();

    // 버튼 이벤트 생성
    const newlisting = document.querySelector(".newlisting");

    const sortNew = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return b.id - a.id;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    newlisting.addEventListener("click", sortNew);

    // 어센딩
    const asceButton = document.querySelector(".ascending");
    const sortAsce = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        // a와 b를 인수로 받아야 함
        return a.price - b.price;
      });
      removeItems();
      myProducts.forEach((product) => {
        createItem(product);
      });
      // console.log("click")
    };
    asceButton.addEventListener("click", sortAsce); // 주석처리된 위치로 이동

    // 내림차순 정렬
    const descButton = document.querySelector(".decending");
    const sortDesc = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return b.price - a.price;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };
    descButton.addEventListener("click", sortDesc);

    // Search
    const searchBar = document.querySelector(".searchBar");
    console.log(searchBar);
    searchBar.addEventListener("input", () => {
      const keyword = searchBar.value.toLowerCase();
      if (keyword === "") {
        removeItems();
        importData();
      } else {
        const filtered = products.data.filter((product) => {
          return product.name.toLowerCase().includes(keyword);
        });

        removeItems();

        filtered.forEach((product) => {
          createItem(product);
        });
      }
    });

    // Sekect Event
    const select = document.querySelector("select");

    const selectCategory = (e) => {
      const selectedIndex = e.target.options.selectedIndex;
      const value = e.target.options[selectedIndex].value;
      const filtered = products.data.filter((product) => {
        return product.category === value;
      });

      removeItems();
      
      filtered.forEach((product) => {
        createItem(product);
    });

    select.addEventListener("change", selectCategory);
  })
  .catch((error) => {
    console.log(error);
  }); 
