const button = document.querySelector("#tweetButton");
console.log(button);

button.addEventListener("click", () => {
  let tweetText = document.querySelector("#tweetTextArea").value;
  tweetText += ` #dandan_dev #sns #js`;
  const encodedText = encodeURIComponent(tweetText); //우리가 인식하는 문자열을 인코딩해주는 함수
  console.log(encodedText);

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`;

  window.open(tweetURL);
});
