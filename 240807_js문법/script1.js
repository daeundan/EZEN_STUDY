const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector(".orderInfo");

orderButton.addEventListener("click", () => {
  const newH = document.createElement("h2");
  const title = document.querySelector(".desc > h2");
  const textNode = document.createTextNode(title.innerText);

  newH.style.fontSize = "2rem";
  newH.style.color = "crimson";

  const newImg = document.createElement("img");
  const srcNode = document.createAttribute("src");
  srcNode.value =
    "https://static.nike.com/a/images/w_1920,c_limit,f_auto,q_auto/57c63b2a-880d-4c7d-83c4-4d5436ebc240/image.png";

  newImg.setAttributeNode(srcNode);
  newImg.style.width = "1000px";

  newH.appendChild(textNode);
  orderInfo.appendChild(newH);
  orderInfo.appendChild(newImg);
});
