// 로컬스토리지 저장 연습 - 안됨. 나중에 배울 것이라 복잡하다고 하심.

const userName = document.querySelector("#name");
const userMajor = document.querySelector("#major");
const userDegree = document.querySelector("#degree");
const userGrades = document.querySelector("#grades");
const form = document.querySelector("#userForm");
const tbody = document.querySelector("tbody");

function addRowToTable(name, major, degree, grades) {
  const newTr = document.createElement("tr");

  const nameTd = document.createElement("td");
  nameTd.innerText = name;

  const majorTd = document.createElement("td");
  majorTd.innerText = major;

  const degreeTd = document.createElement("td");
  degreeTd.innerText = degree;

  const gradesTd = document.createElement("td");
  gradesTd.innerText = grades;

  newTr.appendChild(nameTd);
  newTr.appendChild(majorTd);
  newTr.appendChild(degreeTd);
  newTr.appendChild(gradesTd);

  tbody.appendChild(newTr);
}

function saveDataToLocalStorage(name, major, degree, grades) {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  students.push({ name, major, degree, grades });
  localStorage.setItem("students", JSON.stringify(students));
}

function loadDataFromLocalStorage() {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  students.forEach((student) => {
    addRowToTable(student.name, student.major, student.degree, student.grades);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userName.value === "" || userMajor.value === "")
    alert("정상적인 데이터를 입력하세요!");
  else {
    addRowToTable(
      userName.value,
      userMajor.value,
      userDegree.value,
      userGrades.value
    );
    saveDataToLocalStorage(
      userName.value,
      userMajor.value,
      userDegree.value,
      userGrades.value
    );

    userName.value = "";
    userMajor.value = "";
    userDegree.value = "";
    userGrades.value = "";
  }
});

document.addEventListener("DOMContentLoaded", loadDataFromLocalStorage);
