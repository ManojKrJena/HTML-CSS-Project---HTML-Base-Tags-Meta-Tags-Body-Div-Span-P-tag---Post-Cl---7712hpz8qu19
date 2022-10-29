let icons = document.getElementsByTagName("a");
for(let i=0; i<icons.length; i++){
  icons[i].addEventListener("click", (event) => {
    let activeElement = document.getElementsByClassName("active")[0];
    activeElement.classList.remove("active");
    icons[i].classList.add("active");
  });
}
