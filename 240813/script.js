// 1. 사용자로부터 input을 통해서 입력값을 받는다.
// 2. 입력값이 확인되면, ul 태그 자식 요소로 하나씩 추가한다.
// 3. ul태그 자식 요소 중 삭제 버튼 클릭시, 버튼을 포함한 부모 요소를 확인후 같이 삭제한다.
// 4. 사용자가 입력한 값이 영구적으로 보관되도록 ㅣOCLASTOrage를 활용해 값을 저장한다.
// 5.
// 6.

const form = document.querySelector("form");
// const input = document.querySelector("input[type='text')");
const input = document.querySelector("input[type='text']");
// console.log(input);
const ul = document.querySelector("ul");

let todos = [];

const save = () => {
  localStorage.setItem(`todos`, JSON.stringify(todos));
  // stringify 객체를 json이 인식할 수 있는 문자열로 바꾸어주는 함수
};

const delItem = (e) => {
  const target = e.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
  // filter 배열 안에 특정 아이템 제거하는 방법으로 보편적으로 많이 사용됨. 외우는게 좋음
};

const addItem = (todo) => {
  if (todo !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text;
    button.innerText = `삭제`;
    button.addEventListener("click", delItem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
};

const handler = (e) => {
  e.preventDefault();

  const todo = {
    id: Date.now(),
    text: input.value,
  };

  todos.push(todo);
  // 데이터를 todos 배열안에 순차적으로 쌓이게 함.
  addItem(todo);
  save();
  input.value = "";
};

// 초기화 함수 : 만약 로컬스토리지 값이 존재한다면 그 값을 출력시키고 실행
const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;
  }

  // 배열은 이터러블 객체라서 반복문 사용 가능
};

init();
form.addEventListener("submit", handler);
// localStorage.setItem("Hello", "World");
// const myData = localStorage.getItem("Hello");
// console.log(myData);
