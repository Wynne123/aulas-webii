

  const menuButton = document.getElementById("menu-button");
  const sideBar = document.querySelector(".sidebar");

  
  menuButton.addEventListener("click", function () {
    sideBar.classList.toggle("active");
  });

  
  document.addEventListener("click", function (event) {
    if (!sideBar.contains(event.target) && !menuButton.contains(event.target)) {
      sideBar.classList.remove("active");
    }
  });

 
  const menuLinks = document.querySelectorAll(".sidebar a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      sideBar.classList.remove("active");
    });
  });

