window.addEventListener("load", function () {
  const httja = document.querySelector(".htt-ja");
  const fullSc = document.querySelector(".full-sc");
  const simHead = document.querySelector(".sim--head");
  const containerB = document.querySelector(".container-background");
  const insInfo = document.querySelector(".instruct-info");
  const nav = document.querySelector("nav");
  const lacOpBackground = document.querySelector(".lacOpBackground");
  const overL = document.querySelector(".overlay");
  const btnOk = document.querySelector(".btnOk");
  const err = document.querySelector(".error");
  var dots = Array.from(document.querySelectorAll(".eleStyle"));
  // const ifMatch= document.querySelector('.ifMatch');
  const setFull = document.querySelectorAll(".setFull");
  let query = window.matchMedia("(max-width:800px)");
  err.style.display = "none";
  containerB.style.display = "none";
  overL.style.display = "none";
  let query1 = window.matchMedia("(max-width:480px)");
  if (query1.matches) {
    document.querySelector(".btnOk1").style.display = "block";
    document.querySelector(".btnOk").style.display = "none";
    document.querySelectorAll(".hide").forEach((e) => {
      haji.textContent = "To perform the simulation rotate the device";
      e.style.display = "block";
    });
  } else {
    document.querySelectorAll(".hide").forEach((e) => {
      e.style.display = "none";
    });
  }
  const normalScreen = function () {
    document.exitFullscreen();
    httja.style.display = "flex";
    nav.style.display = "grid";
    containerB.style.display = "none";
    setFull.style.display = "none";
    simHead.classList.replace("sim--head-full", "sim--head");
    fullSc.classList.replace("full-sc-click", "full-sc");
    lacOpBackground.classList.replace(
      "lacOpBackground-full",
      "lacOpBackground"
    );
    tronCol.style.display = "none";
    query.matches ? (nav.style.display = "none") : (nav.style.display = "grid");
    tronColFull.style.display = "none";
    display3.style.display = "none";
    display2.forEach((e) => {
      e.style.display = "none";
    });
    display4.forEach((e) => {
      e.style.display = "none";
    });
  };
  btnOk.addEventListener("click", function () {
    err.style.display = "none";
    overL.style.display = "none";
  });
  const fullScreen = function () {
    insInfo.textContent = "Match the boxes accordingly.";
    document.documentElement.requestFullscreen();
    containerB.style.display = "block";
    httja.style.display = "none";
    nav.style.display = "none";
    setFull.forEach((e) => {
      e.style.display = "block";
    });
    lacOpBackground.src = "images/backgroundfull.svg";
    lacOpBackground.classList.replace(
      "lacOpBackground",
      "lacOpBackground-full"
    );
    simHead.classList.replace("sim--head", "sim--head-full");
    fullSc.classList.replace("full-sc", "full-sc-click");

    TweenLite.set(dots, {
      transformOrigin: "center",
    });

    tweenRandDot();

    function tweenRandDot(lastDot) {
      var availableDots = dots.filter(function (dot) {
        return dot !== lastDot;
      });

      var index = Math.floor(Math.random() * availableDots.length);
      var newDot = availableDots[index];

      TweenMax.to(newDot, 0.4, {
        // autoAlpha: 0,
        translateY: 4.5,
        repeat: 1,
        yoyo: true,
        onComplete: tweenRandDot,
        onCompleteParams: [newDot],
      });
    }

    Draggable.create("#bhai1", {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: "#Lac-Op",
      inertia: true,
      onDrag: function () {
        if (this.hitTest("#recLac")) {
          gsap.to("#bhai1", {
            display: "none",
          });
          gsap.to("#recLac1", {
            display: "block",
          });
        }
      },
    });
    Draggable.create("#bhai2", {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: "#Lac-Op",
      inertia: true,
      onDrag: function () {
        if (this.hitTest("#recLacA")) {
          gsap.to("#bhai2", {
            display: "none",
          });
          gsap.to("#recLacA1", {
            display: "block",
          });
        }
      },
    });
    Draggable.create("#bhai3", {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: "#Lac-Op",
      inertia: true,
      onDrag: function () {
        if (this.hitTest("#recLacY")) {
          gsap.to("#bhai3", {
            display: "none",
          });
          gsap.to("#recLacY1", {
            display: "block",
          });
        }
      },
    });
    Draggable.create("#bhai4", {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: "#Lac-Op",
      inertia: true,
      onDrag: function () {
        if (this.hitTest("#recLacZ")) {
          gsap.to("#bhai4", {
            display: "none",
          });
          gsap.to("#recLacZ1", {
            display: "block",
          });
        }
      },
    });
    Draggable.create("#bhai5", {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: "#Lac-Op",
      inertia: true,
      onDrag: function () {
        if (this.hitTest("#recO")) {
          gsap.to("#bhai5", {
            display: "none",
          });
          gsap.to("#recO1", {
            display: "block",
          });
        }
      },
    });
    Draggable.create("#bhai6", {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: "#Lac-Op",
      inertia: true,
      onDrag: function () {
        if (this.hitTest("#recPLac")) {
          gsap.to("#bhai6", {
            display: "none",
          });
          gsap.to("#recPLac1", {
            display: "block",
          });
        }
      },
    });
    Draggable.create("#bhai7", {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: "#Lac-Op",
      inertia: true,
      onDrag: function () {
        if (this.hitTest("#recP")) {
          gsap.to("#bhai7", {
            display: "none",
          });
          gsap.to("#recP1", {
            display: "block",
          });
        }
      },
    });
  };
  const getFullScElement = function () {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullscreenElement ||
      document.mozFullscreenElement
    );
  };
  const toggleFullsc = function () {
    if (getFullScElement()) normalScreen();
    else fullScreen();
  };
  fullSc.addEventListener("click", function () {
    toggleFullsc();
  });
});
