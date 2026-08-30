window.addEventListener("load", function () {
    const httja = document.querySelector(".htt-ja");
    const fullSc = document.querySelector(".full-sc");
    const simHead = document.querySelector(".sim--head");
    const eColiSim = document.querySelector(".e-coli-sim");
    const forward = document.querySelector(".forward");
    const nav = document.querySelector("nav");
    const overL = document.querySelector(".overlay");
    const btnOk = document.querySelector(".btnOk");
    const err = document.querySelector(".error");
    const haji = document.querySelector(".haji");
    const btnok1 = document.querySelector('.btnOk1');
    const hand = document.querySelector('.hand');
    const backG= document.querySelectorAll('.backG');
    let query = window.matchMedia("(max-width:800px)");
    forward.disabled = true;
    
    // rangeGTE.style.cursor = "not-allowed";
    let query1 = window.matchMedia("(max-width:480px)");
    if (query1.matches) {
      document.querySelector('.btnOk1').style.display = 'block';
      document.querySelector('.btnOk').style.display = 'none';
      document.querySelectorAll('.hide').forEach(e => {
        haji.textContent = "To perform the simulation rotate the device";
        e.style.display = "block";
      });
      btnok1.addEventListener('click', function () {
        document.querySelectorAll('.hide').forEach(e => {
          e.style.display = 'none';
        });
        btnok1.style.display = 'none';
        document.querySelector('.btnOk').style.display = 'block';
      })
  
    } else {
      document.querySelectorAll('.hide').forEach(e => {
        e.style.display = "none"
      });
      backG.forEach(e=>{
        e.style.display='none';
      })
    };
    const normalScreen = function () {
      document.exitFullscreen();
      simHead.classList.replace("sim--head-full", "sim--head");
      fullSc.classList.replace("full-sc-click", "full-sc");
      eColiSim.classList.replace("e-coli-sim-full", "e-coli-sim");
      httja.style.display = "flex";
      query.matches ? nav.style.display = 'none' : nav.style.display = "grid";
    btnOk.addEventListener("click", function () {
      err.style.display = "none";
      overL.style.display = "none";
    });
    backG.forEach(e=>{
      e.style.display='none';
    });
};
    const fullScreen = function () {
      document.documentElement.requestFullscreen();
      hand.style.display = 'block';
      simHead.classList.replace("sim--head", "sim--head-full");
      fullSc.classList.replace("full-sc", "full-sc-click");
      eColiSim.classList.replace("e-coli-sim", "e-coli-sim-full");
      httja.style.display = "none";
      nav.style.display = "none";
      backG.forEach(e=>{
        e.style.display='block';
      })

        hand.style.display = 'block';
        gsap.to(('.hand'), {
          translateX: query.matches && simHead.classList.contains("sim--head-full") ? 82 : 170,
          translateY: query.matches && simHead.classList.contains("sim--head-full") ? 28 : 90,
          duration: 3,
          ease: 'out',
        });
        // query.matches && simHead.classList.contains("sim--head-full") ? rotorContent.classList.replace('rotor-content', 'rotor-content1') : '';
        
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
    //   controls();
      toggleFullsc();
    });
    // values.innerHTML = rangeSlider.value;
    // rangeSlider.oninput = function () {
    //   values.innerHTML = this.value;
    // };
  });