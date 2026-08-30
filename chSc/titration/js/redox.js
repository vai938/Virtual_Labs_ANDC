window.addEventListener("load", function () {
  const reTit = document.querySelector(".re-tit-sim");
  const fullSc = document.querySelector(".full-sc");
  const simHead = document.querySelector(".sim--head");
  const httja = document.querySelector(".htt-ja");
  const switchOn = document.querySelector("#swOn");
  const switching = document.querySelector(".switching");
  const rpmVal = document.querySelector(".machine-val");
  const massVal = document.querySelector(".mass");
  const wBtl = document.querySelector(".Wbottle");
  const dkn = document.querySelector(".dhakkan");
  const fullScSetup = document.querySelector(".fullScreenSetup");
  const gm = document.querySelector(".gm");
  const petridish = document.querySelector(".petridish");
  const spatula = document.querySelector(".spatula");
  const wM = document.querySelector(".weighM");
  const mSalt = document.querySelector(".dabba");
  let incVal = +Math.random().toFixed(4) + +12.9998;
  const nxt = document.querySelector(".nxt");
  const err = document.querySelector(".error");
  const sulp = document.querySelector(".sulphuricA");
  const star = document.querySelector(".weighControl");
  nxt.style.display = "none";
  const washB = document.querySelector(".washB");
  const dropper = document.querySelector(".dropper");
  const pippt = document.querySelector(".pippt");
  const diphe = document.querySelector(".diphe");
  const ortho = document.querySelector(".ortho");
  const mainPpt = document.querySelector(".mainPpt");
  const gola = document.querySelector(".gola2");
  const gola1 = document.querySelector(".golaFlask");
  const bStand = document.querySelector(".bStand");
  const tuti1 = document.querySelector("#tuti-1");
  const tuti2 = document.querySelector("#tuti-2");
  const values = document.querySelector("#valMsol");
  const rangeSlider = document.querySelector("#mSol");
  const values1 = document.querySelector("#valHsol");
  const rangeSlider1 = document.querySelector("#hSol");
  const values2 = document.querySelector("#valOsol");
  const rangeSlider2 = document.querySelector("#oSol");
  const golden = document.querySelector(".control1");
  const overL = document.querySelector(".overlay");
  const btnOk = document.querySelector(".btnOk");
  const nav = document.querySelector("nav");
  const haji = document.querySelector(".haji");
  const insInfo= document.querySelector('.instruct-info');

  const thirdPhase = [pippt, diphe, ortho, gola, mainPpt];
  thirdPhase.forEach((e) => {
    e.style.display = "none";
  });
  btnOk.addEventListener("click", function () {
    err.style.display = "none";
    overL.style.display = "none";
  });
  err.style.display = "none";
  overL.style.display = "none";
  washB.style.display = "none";
  dropper.style.display = "none";
  sulp.style.display = "none";
  bStand.style.display = "none";
  const y = document.querySelector(".yoyoH");

  gsap.to("#sbseBad", {
    opacity: 0,
  });
  let check1,
    check2,
    check3,
    check4,
    check5,
    check6,
    ayush,
    tillu,
    hui,
    shri,
    draw,
    ramu,
    ant,
    sonu,
    mishraJi,
    siddhu,
    bro,
    sssss,
    ui,
    dj,
    bgr = false;
  const getFullScElement = function () {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullscreenElement
    );
  };
  const normalScreen = function () {
    document.exitFullscreen();
    simHead.classList.replace("sim--head-full", "sim--head");
    fullSc.classList.replace("full-sc-click", "full-sc");
    reTit.classList.replace("re-tit-sim-full", "re-tit-sim");
    httja.style.display = "flex";
    nav.style.display = "grid";
    fullScSetup.style.display = "none";
  };
  const fullScreen = function () {
    document.documentElement.requestFullscreen();
    simHead.classList.replace("sim--head", "sim--head-full");
    fullSc.classList.replace("full-sc", "full-sc-click");
    reTit.classList.replace("re-tit-sim", "re-tit-sim-full");
    httja.style.display = "none";
    fullScSetup.style.display = "block";
    nav.style.display = "none";

    inc = petridish.getBoundingClientRect();
  };
  const toggleFullsc = function () {
    if (getFullScElement()) normalScreen();
    else fullScreen();
  };
  fullSc.addEventListener("click", function () {
    toggleFullsc();
  });

  values.innerHTML = rangeSlider.value;
  rangeSlider.oninput = function () {
    values.innerHTML = this.value;
  };
  values1.innerHTML = rangeSlider1.value;
  rangeSlider1.oninput = function () {
    values1.innerHTML = this.value;
  };
  values2.innerHTML = rangeSlider2.value;
  rangeSlider2.oninput = function () {
    values2.innerHTML = this.value;
  };

  switching.addEventListener("click", function (e) {
    e.preventDefault();

    if (switching.textContent === "ON") {
      switching.textContent = "OFF";
      switchOn.style.fill = "green";
      rpmVal.textContent = "0.0000";
      massVal.style.display = "inline-block";
    } else if (switching.textContent === "OFF") {
      switching.textContent = "ON";
      switchOn.style.fill = "red";
      massVal.style.display = "none";
    }
  });
  gsap.to("#cyFill", {
    opacity: 0,
  });
  const dropping = function (e) {
    gsap.to("#Spwd1", {
      fillOpacity: 0,
    });
    gsap.to("#Spwd2", {
      fillOpacity: 0,
    });
    gsap.to("#Spwd3", {
      fillOpacity: 0,
    });
    gsap.to(`#pwd${e}`, {
      fillOpacity: 1,
    });
  };
  const dropFade = function (e) {
    gsap.to(`#pwd${e}`, {
      fillOpacity: 0,
    });
  };
  const step5 = function () {
    check1 = true;
    Draggable.create(".Wbottle", {
      bounds: "#sim--img",
      onDrag: function () {
        if (check1 === true) {
          nxt.style.display = "inline-block";
        }
        if (this.hitTest("#stand")) {
          rpmVal.textContent = "12.6530";
          insInfo.textContent= 'Click on next'
        } else {
          rpmVal.textContent = "0.0000";
        }
      },
    });
  };
  const step4 = function () {
    tillu = true;
    if (bro === true) {
      Draggable.create(".Wbottle", {
        bounds: "#sim--img",
        onDrag: function () {
          document.querySelector("#dknFlk").style.display = "none";
          if (this.hitTest(".funnel") && tillu === true) {

            tillu = false;
            gsap.to(".Wbottle", {
              rotate: -155,
            });
            dropFade(1);
            dropFade(2);
            dropFade(3);
            gsap.to("#pInF1", {
              fillOpacity: 1,
            });
            gsap.to("#pInF2", {
              fillOpacity: 1,
            });
            gsap.to("#pInF3", {
              fillOpacity: 1,
            });
            setTimeout(() => {
              gsap.to(".Wbottle", {
                rotate: 0,
              });
              sonu = true;
            }, 800);
            insInfo.textContent= 'Now weigh the weighing bottle.'
          } else if (!this.hitTest(".funnel") && sonu === true) {
            ramu = true;
            gsap.to("#dknFlk", {
              display: "none",
            });
            if (ramu === true) {
              step5();
            }
          }
        },
      });
    }
  };
  const step3 = function () {
    Draggable.create(".Wbottle", {
      bounds: "#sim--img",
      onDrag: function () {
        if (this.hitTest("#stand")) {
          rpmVal.textContent = incVal.toFixed(4);
        } else if (!this.hitTest("#stand")) {
          rpmVal.textContent = "0.0000";
          gsap.to(".spatula", {
            translateX: 0,
            translateY: 0,
          });
          gsap.to("#Spwd1", {
            fillOpacity: 0,
          });
          gsap.to("#Spwd2", {
            fillOpacity: 0,
          });
          gsap.to("#Spwd3", {
            fillOpacity: 0,
          });
          step4();
          bgr = true;
        }
        if (this.hitTest(".golaFlask", "50%") && bgr === true) {
          bgr = false;
          err.style.display = "block";
          overL.style.display = "block";
        }
        insInfo.textContent= 'Drag the funnel and place it inside the flask.'
        Draggable.create(".funnel", {
          bounds: "#sim--img",
          onDrag: function () {
            if (this.hitTest(".golaFlask")) {
              insInfo.textContent= "Drag the weighing bottle and pour Mohr's salt into the flask";
              gsap.to(".funnel", {
                rotate: 0,
              });
              gsap.to("#dknFlk", {
                display: "none",
              });
              bro = true;
            }
          },
        });
      },
    });
  };
  const step2 = function () {
    Draggable.create(".spatula", {
      bounds: "#sim--img",
      onDrag: function () {
        if (this.hitTest(".petridish", "50%")) {
          gsap.to("#Spwd1", {
            fillOpacity: 1,
          });
          gsap.to("#Spwd2", {
            fillOpacity: 1,
          });
          gsap.to("#Spwd3", {
            fillOpacity: 1,
          });
        } else if (this.hitTest(".Wbottle", "60%")) {
          dropping(1);
          dropping(2);
          dropping(3);
          step3();
          insInfo.textContent= 'Now weigh the weighing bottle and notedown the reading.'
        }
      },
    });
  };
  const step1 = function () {
    insInfo.textContent= 'Drag and remove the lid from weighing bottle.'
    Draggable.create(".dhakkan", {
      bounds: "#sim--img",
      onDrag: function () {
        insInfo.textContent= 'Now switch on the weighing balance and weigh the empty weighing bottle.'
        let hukka = false;
        hukka = true;
        if (hukka === true) {
          Draggable.create(".Wbottle", {
            bounds: "#sim--img",
            onDrag: function () {
              gsap.to(".dhakkan", {
                translateX: 120,
                translateY: 400,
              });
              // gsap.to('.dhakkan',{
              //     translateX: 50,
              // });
              if (this.hitTest("#stand")) {
                TweenLite.to(this.target, 1, {
                  phle: function () {
                    rpmVal.textContent = "12.6528";
                  },
                });
                insInfo.textContent= 'Now remove the weighing bottle from weighing machine and place it on table.'
              } else if (!this.hitTest("#stand")) {
                TweenLite.to(this.target, 1, {
                  bad: function () {
                    rpmVal.textContent = "0.0000";
                  },
                });
                insInfo.textContent= "Use the spatula to pour Mohr's salt from petridish to empty weighing bottle."
                step2();
              }
            },
          });
        }
      },
    });
    function gc() {
      check1 = true;
    }
    step1.gc = gc;
  };
  step1();
  const allApp = [petridish, wM, mSalt, spatula, rpmVal, gm];
  const step6 = function () {
    insInfo.textContent= 'Add distilled water in flask with the help of wash bottle.'
    gsap.to("#water2", {
      opacity: 0,
    });
    ayush = true;
    Draggable.create(".washB", {
      bounds: "#sim--img",
      onDrag: function () {
        if (this.hitTest(".funnel", "50%")) {
          setTimeout(() => {
            gsap.to("#solBadme", {
              display: "block",
              fill: "#d2fffc",
            });
          }, 300);
          setTimeout(() => {
            gsap.to("#water1", {
              opacity: 0,
            });
            gsap.to("#water2", {
              opacity: 1,
            });
          }, 1000);
          insInfo.textContent= 'Now add few drops of dilute sulphuric acid with the help of dropper in the flask.'
        }
      },
    });
    if (ayush === true) {
      Draggable.create(".dropper", {
        bounds: "#sim--img",
        onDrag: function () {
          gsap.to(".dropper", {
            rotate: 0,
          });
          if (this.hitTest(".sulphuricA", "60%")) {
            setTimeout(() => {
              gsap.to("#dhakknH2so", {
                display: "none",
              });
            }, 50);
            setTimeout(() => {
              gsap.to("#h2Pehle", {
                fillOpacity: 0,
              });
              gsap.to("#h2Bad", {
                fillOpacity: 1,
              });
            }, 1000);
            setTimeout(() => {
              gsap.to("#layer1", {
                fill: "#c7e3e1",
              });
            }, 1500);
            shri = true;
          } else if (this.hitTest(".golaFlask", "40%") && shri === true) {
            // draw= true;
            gsap.to("#layer1", {
              fillOpacity: 0,
            });
            gsap.to("#layer2", {
              fill: "#c7e3e1",
              fillOpacity: 1,
            });
            insInfo.textContent= 'Again add distilled water in flask.'
            step7();
          }
        },
      });
    }
  };
  const step7 = function () {
    ayush = false;
    Draggable.create(".washB", {
      bounds: "#sim--img",
      onDrag: function () {
        if (this.hitTest(".golaFlask")) {
          insInfo.textContent= 'Shake the flask vigorously';
          gsap.to(".dropper", {
            translateX: 265,
            translateY: -130,
          });
          setTimeout(() => {
            gsap.to("#water2", {
              opacity: 0,
            });
          }, 1000);
          setTimeout(() => {
            gsap.to("#solPehle", {
              display: "block",
              fill: "#d2fffc",
            });
          }, 1500);
          setTimeout(() => {
            gsap.to("#hath", {
              display: "block",
            });
          }, 2000);
          Draggable.create(".golaFlask", {
            bounds: "#sim--img",
            onDrag: function () {
              gsap.to(".funnel", {
                translateX: 0,
                translateY: 0,
                rotate: 180,
              });
            },
          });
          setTimeout(() => {
            insInfo.textContent= 'Click on next';
            nxt.style.display = "inline-block";
          }, 2300);
        }
      },
    });
    check3 = true;
  };
  const step8 = function () {
    insInfo.textContent= "Select the volume of Mohr's salt as 10mL, dilute sulphuric acid as 10mL & Ortho phosphoric acid as 2mL."
    gsap.to(".dropper", {
      translateX: 0,
      translateY: 0,
      rotate: -90,
    });
    gsap.to("#layer1", {
      opacity: 0,
    });
    gsap.to("#layer2", {
      opacity: 0,
    });
    gsap.to("#dhakknH2so", {
      display: "block",
    });
    gsap.to("#h2Pehle", {
      opacity: 1,
    });
    gsap.to(".sulphuricA", {
      translateX: -100,
    });
    gsap.to(".tsP", {
      display: "none",
    });
    const allC3 = [wBtl, dkn, washB];
    allC3.forEach((e) => (e.style.display = "none"));

    gsap.to(".golaFlask", {
      translateX: -300,
      translateY: 30,
    });
    gsap.to("#hath", {
      display: "none",
    });
    thirdPhase.forEach((e) => {
      e.style.display = "block";
    });
    gsap.to(".funnel", {
      display: "none",
    });
    gsap.to(".golaFlask", {
      translateX: 200,
    });
    if( values.innerHTML == 10 &&
      values1.innerHTML == 10 &&
      values2.innerHTML == 2){
      insInfo.textContent= 'Now drag the pipette and fix the pipette sucker on it.'
    }
    Draggable.create(".mainPpt", {
      bounds: "#sim--img",
      onDrag: function () {
        insInfo.textContent='Fill the pipette with the help of flask.';
        gsap.to(".mainPpt", {
          rotate: 0,
        });
        Draggable.create(".pippt", {
          bounds: "#sim--img",
          onDrag: function () {
            gsap.to(".pippt", {
              rotate: 0,
            });
            if (this.hitTest(".mainPpt", "80%")) {
              setTimeout(() => {
                gsap.to(".pippt", {
                  display: "none",
                });
              }, 100);
              setTimeout(() => {
                gsap.to("#pippt1", {
                  display: "block",
                });
              }, 300);
              sssss = true;
            }
          },
        });
        if (sssss === true && this.hitTest(".golaFlask", "80%")) {
          insInfo.textContent= 'Now dip the pipette into the empty flask.'
          sssss = false;
          draw = true;
          setTimeout(() => {
            gsap.to("#dknFlk1", {
              display: "none",
            });
          }, 50);
          setTimeout(() => {
            gsap.to("#solPehle", {
              display: "none",
            });
          }, 100);
          setTimeout(() => {
            gsap.to("#kitnaHua2", {
              display: "block",
            });
          }, 300);
        }
        if (draw === true && this.hitTest(".gola2", "80%")) {
          draw = false;
          setTimeout(() => {
            gsap.to("#solB1", {
              display: "block",
            });
          }, 100);
          setTimeout(() => {
            gsap.to("#kitnaHua2", {
              display: "none",
            });
          }, 150);
          setTimeout(() => {
            siddhu = true;
          }, 2000);
          insInfo.textContent= 'Add few quantity of dilute sulphuric acid with the help of pipette into the flask'
        }
        if (siddhu === true && this.hitTest(".sulphuricA", "80%")) {
          setTimeout(() => {
            gsap.to("#dhakknH2so", {
              display: "none",
            });
          }, 50);
          setTimeout(() => {
            gsap.to("#kitnaHua2", {
              display: "block",
            });
            gsap.to("#h2Pehle", {
              opacity: 0,
            });
          }, 1000);
          setTimeout(() => {
            ant = true;
          }, 2000);
        }
        if (this.hitTest(".gola2", "80%") && ant === true) {
          siddhu = false;
          setTimeout(() => {
            gsap.to("#dhakknH2so", {
              display: "block",
            });
            gsap.to("#kitnaHua2", {
              display: "none",
            });
          }, 100);
          setTimeout(() => {
            gsap.to("#solB2", {
              display: "block",
            });
          }, 1000);

          setTimeout(() => {
            gsap.to(".mainPpt", {
              display: "none",
            });
            gsap.to(".mCylinder", {
              display: "block",
            });
          }, 2000);
          hui = true;
        }
        if (hui === true) {
          Draggable.create(".dropper", {
            bounds: "#sim--img",
            onDrag: function () {
              gsap.to(".dropper", {
                rotate: 0,
              });
              if (this.hitTest(".diphe", "80%")) {
                console.log("jai ho");
                mishraJi = true;
                setTimeout(() => {
                  gsap.to("#Vect", {
                    display: "none",
                  });
                }, 100);
                setTimeout(() => {
                  gsap.to("#layer1", {
                    display: "block",
                    opacity: 1,
                    fillOpacity: 1,
                    fill: "#592f4e",
                  });
                }, 1500);
              } else if (mishraJi === true && this.hitTest(".gola2", "40%")) {
                gsap.to("#Vect", {
                  display: "block",
                });
                setTimeout(() => {
                  gsap.to("#layer1", {
                    opacity: 0,
                  });
                  gsap.to("#layer2", {
                    opacity: 1,
                    fill: "#592f4e",
                  });
                }, 500);
                setTimeout(() => {
                  gsap.to("#bbl1", {
                    display: "block",
                    fill: "#592f4e",
                  });
                  gsap.to("#bbl2", {
                    display: "block",
                    fill: "#592f4e",
                  });
                  gsap.to("#solB1", {
                    fill: "#B8FFC7",
                  });
                  gsap.to("#solB2", {
                    fill: "#B8FFC7",
                  });
                }, 1000);
                setTimeout(() => {
                  gsap.to("#bbl1", {
                    display: "none",
                  });
                  gsap.to("#bbl2", {
                    display: "none",
                  });
                  gsap.to("#layer2", {
                    opacity: 0,
                    fill: "#592f4e",
                  });
                }, 1500);
                ant = false;
                ui = true;
              }
              if (this.hitTest(".ortho", "50%") && ui === true) {
                setTimeout(() => {
                  gsap.to("#dhaknH2", {
                    display: "none",
                  });
                }, 100);
                setTimeout(() => {
                  gsap.to("#layer1", {
                    opacity: 1,
                    fill: "#c7e3e1",
                  });
                }, 1500);
                dj = true;
              }
              if (this.hitTest(".mCylinder", "40%") && dj === true) {
                setTimeout(() => {
                  gsap.to("#cyFill", {
                    opacity: 1,
                  });
                  gsap.to("#dhaknH2", {
                    display: "block",
                  });
                }, 100);
                setTimeout(() => {
                  gsap.to("#layer1", {
                    opacity: 0,
                    fill: "#c7e3e1",
                  });
                }, 200);
                Draggable.create(".mCylinder", {
                  bounds: "#sim--img",
                  onDrag: function () {
                    if (this.hitTest(".gola2", "10%")) {
                      setTimeout(() => {
                        gsap.to(".mCylinder", {
                          rotate: -155,
                        });
                      }, 100);
                      setTimeout(() => {
                        gsap.to("#cyFill", {
                          opacity: 0,
                        });
                      }, 500);
                      setTimeout(() => {
                        gsap.to("#solB2", {
                          display: "block",
                        });
                      }, 1000);
                      setTimeout(() => {
                        gsap.to(".mCylinder", {
                          rotate: 0,
                        });
                        check4 = true;
                        nxt.style.display = "block";
                      }, 1500);
                    }
                  },
                });
              }
            },
          });
        }
      },
    });
  };
  const step9 = function () {
    gsap.to("#pInF1", {
      display: "none",
    });
    gsap.to("#pInF2", {
      display: "none",
    });
    gsap.to("#pInF3", {
      display: "none",
    });
    const cyl = document.querySelector(".mCylinder");
    const allCont = [
      dropper,
      pippt,
      diphe,
      sulp,
      washB,
      ortho,
      cyl,
      mainPpt,
      gola,
    ];
    allCont.forEach((e) => (e.style.display = "none"));
    gsap.to("#solBadme", {
      display: "none",
    });
    gsap.to("#solPehle", {
      display: "block",
      fill: "#fff50e",
    });
    bStand.style.display = "block";
    Draggable.create(".golaFlask", {
      bounds: "#sim--img",
      onDrag: function () {
        if (this.hitTest(".bStand", "20%")) {
          gsap.to(".golaFlask", {
            rotate: -155,
          });
          setTimeout(() => {
            gsap.to("#b1", {
              display: "block",
            });
            gsap.to("#b2", {
              display: "block",
            });
            gsap.to("#b3", {
              display: "block",
            });
            gsap.to("#bFill", {
              display: "block",
            });
          }, 1000);
          setTimeout(() => {
            gsap.to("#solPehle", {
              display: "none",
            });
            gsap.to("#sbseBad", {
              display: "none",
            });
            gsap.to("#pInF1", {
              display: "none",
            });
            gsap.to("#pInF2", {
              display: "none",
            });
            gsap.to("#pInF3", {
              display: "none",
            });
          }, 1200);
          setTimeout(() => {
            gsap.to(".golaFlask", {
              display: "none",
            });
          }, 1500);
        }
      },
    });
    y.addEventListener("click", function () {
      tuti1.classList.toggle("khul");
      tuti2.classList.toggle("khul");

      let tl = gsap.timeline({ repeat: 20, repeatDelay: 0.4 });
      gsap.to('#bulbul',{
        display: 'block',
      })
      tl.to("#bulbul", { y: 1000, duration: 10 });
      tl.to("#bulbul", { y: 1000, duration: 0.1 });
      const logOutTimer = function () {
        let time = 20;
        const tick = function () {
          labelTimer.textContent = time;
          if (time < 5) {
            gsap.to("#solB2", {
              fill: "#573d30",
              fillOpacity: 1,
            });
          }
        };
        time--;
        const timer = setInterval(tick, 1000);
        tick();
      };
      if (tuti1.classList.contains("khul")) {
        sssss = true;
        gsap.to("#bulbul", {
          display: "none",
        });
        tl.pause();
        time = 20;
      } else {
        gsap.to("#bulbul", {
          display: "block",
        });
        tl.resume();
        if (sssss === true) {
          setTimeout(() => {
            let tl1 = gsap.timeline({ repeat: 10, repeatDelay: 0 });
            tl1.to("#b1", { y: 1000, duration: 2 });
            tl1.to("#b1", { y: 1000, duration: 0.1 });
            gsap.to("#solB2", {
              fill: "#2962ff",
              fillOpacity: 0.4,
            });
          }, 3000);
          setTimeout(() => {
            gsap.to("#solB2", {
              fill: "#2962ff",
              fillOpacity: 0.7,
            });
            let tl2 = gsap.timeline({ repeat: 1, repeatDelay: 0 });
            tl2.to("#b2", { y: 1000, duration: 2 });
            tl2.to("#b2", { y: 1000, duration: 0.1 });
          }, 9000);
          setTimeout(() => {
            gsap.to("#solB2", {
              fill: "#2962ff",
              fillOpacity: 1,
            });
            let tl3 = gsap.timeline({ repeat: 1, repeatDelay: 0 });
            tl3.to("#b3", { y: 1000, duration: 2 });
            tl3.to("#b3", { y: 1000, duration: 0.1 });
          }, 15000);
          logOutTimer();
        }
      }

      Draggable.create("#GrpGola", {
        bounds: ".bStand",
        onDrag: function () {
          gsap.to("#hath1", {
            display: "block",
          });
          gsap.to("#GrpGola", {
            display: "block",
          });
        },
      });
    });
  };
  nxt.addEventListener("click", function () {
    check2 = true;
    nxt.style.display = "none";
    washB.style.display = "block";
    dropper.style.display = "block";
    sulp.style.display = "block";
    allApp.forEach((e) => {
      e.style.display = "none";
    });
    gsap.to(".dhakkan", {
      translateX: 120,
      translateY: 340,
    });
    gsap.to(".Wbottle", {
      translateX: 0,
      translateY: 0,
    });
    if (check2 === true) {
      star.style.display = "none";
      check2 = false;
      step6();
    }
    if (check3 === true) {
      check3 = false;
      golden.style.display = "block";
      step8();
    }
    if (check4 === true) {
      if (
        values.innerHTML == 10 &&
        values1.innerHTML == 10 &&
        values2.innerHTML == 2
      ) {
        check4 = false;
        golden.style.display = "none";
        step9();
        check5 = true;
      } else {
        const lasttt = document.querySelector(".lastHyo");
        haji.textContent = "Choose the quantity as given in the instructions.";
        err.style.display = "block";
        overL.style.display = "block";
      }
    }
  });
});
