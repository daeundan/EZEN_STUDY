const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
const contentFrame = document.querySelector("#contentFrame");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "background: #eb7e00; color: #fff";
  menuGame.style = "background: #f7e1ad; color: #fec054";
  menuJukebox.style = "background: #f7e1ad; color: #fec054";
};
const GameChange = () => {
  contentFrame.setAttribute("src", "./Game.html");
  menuHome.style = "background: #f7e1ad; color: #fec054";
  menuGame.style = "background: #eb7e00; color: #fff";
  menuJukebox.style = "background: #f7e1ad; color: #fec054";
};
const JukeboxChange = () => {
  contentFrame.setAttribute("src", "./Jukebox.html");
  menuHome.style = "background: #f7e1ad; color: #fec054";
  menuGame.style = "background: #f7e1ad; color: #fec054";
  menuJukebox.style = "background: #eb7e00; color: #fff";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", GameChange);
menuJukebox.addEventListener("click", JukeboxChange);

// background: #f7e1ad; color: #fec054;
