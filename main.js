  setTimeout(() => {
      // TO check media Querie is applied
      if (window.matchMedia("(max-width: 812px)").matches) {
          // Viewport is less or equal to 700 pixels wide
          const mainNav = document.getElementById("collapsable-nav");
          // const submenu = document.querySelectorAll(".nav-list")
          // const menuIcon = document.getElementById("menu-icon");
          document.getElementById("li2").style = "margin-top: 30px;";
          document.getElementById("li3").style = "margin-top: 30px;";
      
          document.getElementById("menu-icon").addEventListener("click",function () {
              if (mainNav.style.display != "block") {
                  mainNav.style.display = "block";
                  this.innerHTML = "X";
                  this.style = "background-color:grey";
                }
                else{
                    mainNav.style.display = "none";
                    this.innerHTML = "≣";
                    this.style = "background-color:rgb(72, 180, 252)";
              }
          })
        }
      
  }, 0);