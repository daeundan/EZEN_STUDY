const userName = document.querySelector("#name");
const userMajor = document.querySelector("#major");
const userDegree = document.querySelector("#degree");
const userGrades = document.querySelector("#grades");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userName.value === "" || userMajor.value === "")
    alert("정상적인 데이터를 입력하세요!");
  else {
    const tbody = document.querySelector("tbody");
    const newTr = document.createElement("tr");

    const nameTd = document.createElement("td");
    nameTd.innerText = userName.value;
    userName.value = "";

    const majorTd = document.createElement("td");
    majorTd.innerText = userMajor.value;
    userMajor.value = "";

    const degreeTd = document.createElement("td");
    degreeTd.innerText = userDegree.value;
    userDegree.value = "";

    const gradesTd = document.createElement("td");
    gradesTd.innerText = userGrades.value;
    userGrades.value = "";

    newTr.appendChild(nameTd);
    newTr.appendChild(majorTd);
    newTr.appendChild(degreeTd);
    newTr.appendChild(gradesTd);

    tbody.appendChild(newTr);
  }
});

console.log(userName, userMajor);
