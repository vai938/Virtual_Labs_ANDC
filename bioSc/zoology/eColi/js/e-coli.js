window.addEventListener("load", function () {
  const e = document.querySelector(".htt-ja"),
    t = document.querySelector(".full-sc"),
    n = document.querySelector(".sim--head"),
    o = document.querySelector(".switching"),
    l = document.querySelector(".e-coli-sim"),
    i = document.querySelector(".centrifuge"),
    a = document.querySelector(".btn-nor"),
    s = document.querySelector("#range-centri"),
    p = document.querySelector("#GTE-input"),
    r = document.querySelector("#SDS-input"),
    u = document.querySelector("#Nacl-input"),
    c = document.querySelector("#iso-input"),
    d = document.querySelector("#dis-input"),
    f = document.querySelector("#input-timer"),
    g = document.querySelector("#values-rpm"),
    y = document.querySelector("#values-timer"),
    m = document.querySelector("#values-SDS"),
    h = document.querySelector("#values-GTE"),
    b = document.querySelector("#values-Nacl"),
    T = document.querySelector("#values-iso"),
    k = document.querySelector("#values-dis"),
    x = document.querySelector(".rotor-content"),
    S =
      (document.querySelector(".dis-water"), document.querySelector(".start")),
    D = document.querySelector(".test-tube"),
    C = document.querySelector(".eppen"),
    L = document.querySelector("#pallet"),
    v = document.querySelector("#bchaHua"),
    q = document.querySelector(".container"),
    E = document.querySelector(".container-background"),
    w = document.querySelector(".forward"),
    F = document.querySelector("#sim--img"),
    O = document.querySelectorAll(".disp2"),
    Y = (document.querySelector(".pippete"), document.querySelector(".disp3")),
    N = document.querySelector(".time-label"),
    X = document.querySelector(".timer-GTE"),
    M = document.querySelector(".discard"),
    H = document.querySelectorAll(".disp4"),
    P = document.querySelector(".centri-cont"),
    I = document.querySelectorAll(".GTE"),
    A = document.querySelectorAll(".SDS"),
    G = document.querySelectorAll(".NACL"),
    K = document.querySelectorAll(".ISO"),
    R = document.querySelectorAll(".DISW"),
    _ = document.querySelector(".instruct-info"),
    j = document.querySelector("nav");
  let query = window.matchMedia("(max-width:800px)");
  let z,
    B,
    J,
    W,
    $ = !1;
  O.forEach((e) => {
    e.style.display = "none";
  }),
    H.forEach((e) => {
      e.style.display = "none";
    }),
    (L.style.display = "none"),
    (N.style.display = "none"),
    (v.style.display = "none"),
    (q.style.display = "none"),
    (E.style.display = "none"),
    (Y.style.display = "none"),
    (w.disabled = !0),
    (p.disabled = !0);
  let Q = !0;
  p.style.cursor = "not-allowed";
  let U,
    V = !0,
    Z = !1,
    ee = !1;
    let query1 = window.matchMedia("(max-width:480px)");
    if (query1){
      document.querySelectorAll('.hide').forEach(e=>{
        e.style.display= "block";
      });

      document.querySelector(".btnOk").addEventListener("click",function(){
       document.querySelector('.error').style.display= "none";
       document.querySelector('.overlay').style.display= "none";
      })
    }else {
      document.querySelectorAll('.hide').forEach(e=>{
        e.style.display= "none"
      });
    }
  const te = function () {
    document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullscreenElement ||
      document.mozFullscreenElement
      ? (document.exitFullscreen(),
        n.classList.replace("sim--head-full", "sim--head"),
        t.classList.replace("full-sc-click", "full-sc"),
        l.classList.replace("e-coli-sim-full", "e-coli-sim"),
        i.classList.replace("centrifuge-full", "centrifuge"),
        D.classList.replace("test-tube-full", "test-tube"),
        C.classList.replace("eppen-full", "eppen"),
        (q.style.display = "none"),
        (e.style.display = "flex"),
        (j.style.display = query?"none":"grid"),
        (E.style.display = "none"),
        (Y.style.display = "none"),
        O.forEach((e) => {
          e.style.display = "none";
        }),
        H.forEach((e) => {
          e.style.display = "none";
        }))
      : (function () {
        document.documentElement.requestFullscreen(),
          n.classList.replace("sim--head", "sim--head-full"),
          t.classList.replace("full-sc", "full-sc-click"),
          l.classList.replace("e-coli-sim", "e-coli-sim-full"),
          i.classList.replace("centrifuge", "centrifuge-full"),
          D.classList.replace("test-tube", "test-tube-full"),
          C.classList.replace("eppen", "eppen-full"),
          (q.style.display = "block"),
          (E.style.display = "block"),
          (e.style.display = "none"),
          (j.style.display = "none"),
          (_.textContent =
            "Drag the overnight grown culture test-tube towards the eppendorf");
        let query = window.matchMedia("(max-width:800px)");
        
        if (query.matches && n.classList.contains("sim--head-full")) {
          F.src = "images/Background1.png";
        }
        !(function () {
          const e = Draggable.create(".test-tube-full", {
            bounds: ".e-coli-sim-full",
            onDrag: function () {
              let query = window.matchMedia("(max-width:800px)");
              let n = document.querySelector(".sim--head-full");
              (cottonOut = function () {
                gsap.to("#cotton", { opacity: 0 });
              }),
                cottonOut(),
                this.hitTest(".eppen-full") &&
                TweenLite.to(this.target, 1, {
                  rotation: 110,
                  translateX: query.matches && n.classList.contains("sim--head-full") ? "120%" : "85%",
                  translateY:  "-50%",
                  changing: function () {
                    _.textContent =
                      "Drag the eppendorf into the centrifuge. Two eppendorfs are inserted into the centriguge so as to maintain the equilibrium.";
                  },
                  transOn: function () {
                    setTimeout(() => {
                      gsap.to(".fill-rot", {
                        rotate: -145,
                        transformOrigin: "14px 15px left",
                      });
                    }, 500);
                  },
                  tubKhali: function () {
                    setTimeout(() => {
                      gsap.to(".owCulture", {
                        translateY: "-180px",
                        overFlow: "visible",
                        transformOrigin: "center",
                      }),
                        gsap.to("#fillingOw", {
                          fill: "#FCFF5C",
                          fillOpacity: 1,
                        });
                    }, 1e3);
                  },
                  tranOff: function () {
                    setTimeout(() => {
                      gsap.to(".fill-rot", { rotate: 0 });
                    }, 2e3);
                  },
                  backToNor: function () {
                    setTimeout(() => {
                      gsap.to(".test-tube-full", {
                        translateX: "0%",
                        translateY: "0%",
                        rotate: 0,
                      });
                    }, 2500);
                  },
                  dragEppen: function () {
                    Draggable.create(".eppen-full", {
                      bounds: ".e-coli-sim-full",
                      onDrag: function () {
                        this.hitTest(".centrifuge-full") &&
                          TweenLite.to(this.target, 1, {
                            openDkkn: function () {
                              setTimeout(() => {
                                gsap.to(".openDhkkn", {
                                  translateX: "-20px",
                                }),
                                  (_.textContent =
                                    "Now switch ON the centrifuge, select RPM & timer, then click on Start");
                              }, 500);
                            },
                            drEpn: function () {
                              setTimeout(() => {
                                gsap.to(".eppen-full", { display: "none" });
                              }, 100);
                            },
                            closeDkkt: function () {
                              setTimeout(() => {
                                gsap.to(".openDhkkn", {
                                  translateX: "0px",
                                });
                              }, 1500);
                            },
                          });
                      },
                    });
                  },
                });
            },
            onDragEnd: function () {
              e[0].disable();
            },
          });
        })();
      })();
  };
  t.addEventListener("click", function () {
    [I, A, G, K, R].forEach((e) =>
      e.forEach((e) => (e.style.display = "none"))
    ),
      te();
  }),
    o.addEventListener("click", function (e) {
      e.preventDefault(),
        "ON" === o.textContent
          ? ((o.textContent = "OFF"),
            a.classList.replace("btn-nor", "btn-green"))
          : "OFF" === o.textContent &&
          ((o.textContent = "ON"),
            a.classList.replace("btn-green", "btn-nor"),
            document.querySelector(".rotor-content1").style.display="none",
            (x.textContent = ""));
    }),

    (g.innerHTML = s.value),
    (s.oninput = function () {
      g.innerHTML = this.value;
    }),
    s.addEventListener("click", function (e) {
      e.preventDefault(),
        "OFF" === o.textContent && (x.textContent = `RPM ${g.textContent}`);
    }),
    (h.innerHTML = p.value),
    (p.oninput = function () {
      h.innerHTML = this.value;
    }),
    (m.innerHTML = r.value),
    (r.oninput = function () {
      m.innerHTML = this.value;
    }),
    (b.innerHTML = u.value),
    (u.oninput = function () {
      b.innerHTML = this.value;
    }),
    (T.innerHTML = c.value),
    (c.oninput = function () {
      T.innerHTML = this.value;
    }),
    (k.innerHTML = d.value),
    (d.oninput = function () {
      k.innerHTML = this.value;
    }),
    (y.innerHTML = f.value),
    (f.oninput = function () {
      y.innerHTML = this.value;
    });
  setTimeout(() => {
    if (query && n.classList.contains("sim--head-full")) {
      (s.oninput = function () {
        g.innerHTML = this.value;
        console.log(o.textContent);
        document.querySelector(".rotor-content1").style.display = "inline-block";
        document.querySelector(".rotor-content1").innerHTML = `RPM ${this.value}`
      });
    }
  }, 4000);
  let ne = !1;
  S.addEventListener("click", function () {
    "OFF" === o.textContent &&
      !1 === ne &&
      ((ne = !0),
        gsap.to(".centri-rotor", { display: "inline-block" }),
        i.classList.add("shake-img"),
        x.classList.add("shake-img"),
        setTimeout(() => {
          gsap.to(".centri-rotor", { display: "none" });
        }, 4e3),
        setTimeout(() => {
          gsap.to(".openDhkkn", { translateX: "-20px" });
        }, 5e3),
        gsap.to(".eppen-full", { translateX: query.matches && n.classList.contains("sim--head-full") ? "120px":"250px", 
        translateY: query.matches && n.classList.contains("sim--head-full") ? "-120px":"-154px" }),
        setTimeout(() => {
          gsap.to(".eppen-full", { display: "inline-block", fill: "#FCFF5C" }),
            gsap.to(".sup-nen", { display: "inline-block", fill: "#FCFF5C" }),
            gsap.to("#bubbles", { display: "inline-block" });
        }, 5500),
        setTimeout(() => {
          gsap.to(".openDhkkn", { translateX: "0px" });
        }, 8e3),
        setTimeout(() => {
          gsap.to(".viewing", { display: "none" }),
            (_.textContent =
              "Drag the eppendorf to the discard box to discard the supernatant");
        }, 8500),
        setTimeout(() => {
          gsap.to(".discard", { display: "inline-block" });
        }, 9e3),
        Draggable.create(".eppen-full", {
          bounds: ".e-coli-sim-full",
          onDrag: function () {
            this.hitTest(".discard") &&
              TweenLite.to(this.target, 1, {
                rotation: 110,
                thisIsLast: function () {
                  setTimeout(() => {
                    gsap.to(".fill-rot", {
                      rotate: -145,
                      transformOrigin: "14px 15px left",
                    });
                  }, 500),
                    setTimeout(() => {
                      gsap.to("#bubbles", { translateY: "-180px" }),
                        gsap.to(".sup-nen", { translateY: "-300px", opacity: 0 }),
                        gsap.to("#fillingOw", {
                          translateY: "-400px",
                          display: "none",
                        });
                    }, 1e3),
                    setTimeout(() => {
                      gsap.to("#bubbles", {
                        opacity: 0,
                        overFlow: "visible",
                        transformOrigin: "center",
                      }),
                        gsap.to("#bchaHua", { display: "inline-block" }),
                        gsap.to("#pallet", { display: "inline-block" });
                    }, 1500),
                    setTimeout(() => {
                      gsap.to(".eppen-full", { rotate: 0 });
                    }, 3e3),
                    setTimeout(() => {
                      gsap.to(".fill-rot", {
                        rotate: 0,
                        transformOrigin: "14px 15px left",
                      });
                    }, 3500),
                    setTimeout(() => {
                      gsap.to(".discard", { display: "none" }),
                        (_.textContent = "Click on Next"),
                        gsap.to(".forward", {
                          cursor: "pointer",
                          background: "white",
                        });
                    }, 4e3),
                    (w.disabled = !1),
                    (z = !0),
                    I.forEach((e) => (e.style.display = "none"));
                },
              });
          },
        }));
  }),
    w.addEventListener("click", function (e) {
      if (
        ((P.style.display = "none"),
          (M.style.display = "none"),
          gsap.to(".centri-cont", { display: "none" }),
          !0 === z)
      ) {
        (_.textContent =
          "Select the quantity of GTE (glucose/Tris/EDTA) solution and drag the pipette and dip into the GTE solution"),
          I.forEach((e) => (e.style.display = "inline-block")),
          (p.disabled = !1),
          (p.style.cursor = "pointer"),
          (w.disabled = !0),
          e.preventDefault(),
          gsap.to("#baadme", { fillOpacity: 0 }),
          gsap.to(".eppen-full", { translateX: "0%", 
          translateY:query.matches && n.classList.contains("sim--head-full") ? "-5px": "0%" }),
          gsap.to(".test-tube-full", { display: "none" }),
          query.matches && n.classList.contains("sim--head-full") ? F.src="images/Background2.png":(F.src = "images/background2.png"),
          O.forEach((e) => {
            e.style.display = "inline-block";
          }),
          gsap.to(".discard", { display: "none" }),
          (function () {
            Draggable.create(".pippete", {
              bounds: ".bchKrhna",
              onDrag: function () {
                gsap.to(".pippete", { rotate: 0 }),
                  this.hitTest(".flask")
                    ? ((V = !1),
                      (U = !0),
                      TweenLite.to(this.target, 1, {
                        step2: function () {
                          setTimeout(() => {
                            gsap.to("#pehle", { opacity: 0 }),
                              gsap.to("#baadme", { fillOpacity: 1 });
                          }, 1e3),
                            (_.textContent =
                              "Drag the pipette into the eppendorf and once the eppendorf is filled with sol, incubation will start"),
                            setTimeout(() => {
                              gsap.to("#fillPipe", {
                                fill: "#00FFE0",
                                fillOpacity: 1,
                              });
                            }, 2e3);
                        },
                      }))
                    : this.hitTest(".eppen-full") &&
                    !1 === V &&
                    !0 === U &&
                    TweenLite.to(this.target, 1, {
                      step22: function () {
                        if (
                          ((U = !1),
                            setTimeout(() => {
                              gsap.to(".fill-rot", {
                                rotate: -145,
                                transformOrigin: "14px 15px left",
                              });
                            }, 500),
                            setTimeout(() => {
                              gsap.to("#fillPipe", { display: "none" });
                            }, 1e3),
                            setTimeout(() => {
                              gsap.to("#GTE-solution", {
                                translateY: "0%",
                                display: "inline-block",
                                fill: "#64FFE3",
                                fillOpacity: 1,
                              }),
                                gsap.to("#fillPipe", { fillOpacity: 0 }),
                                (V = !0);
                            }, 1500),
                            setTimeout(() => {
                              gsap.to(".fill-rot", { rotate: 0 }),
                                gsap.to(".time-label", {
                                  display: "inline-block",
                                }),
                                (z = !1);
                            }, 2500),
                            !1 === (Q = !1))
                        ) {
                          (function () {
                            let e = 12;
                            const t = function () {
                              (X.textContent = e),
                                0 === e &&
                                ((B = !0),
                                  (_.textContent = "Click on Next"),
                                  gsap.to(".time-label", {
                                    display: "none",
                                  }),
                                  (w.disabled = !1),
                                  clearInterval(n)),
                                e--;
                            },
                              n = setInterval(t, 1e3);
                            t();
                          })();
                        }
                      },
                    });
              },
            });
          })();
      } else if (!0 === B)
        (_.textContent =
          "Select the quantity of SDS (sodium dodecyl sulfate) solution 1% w/v drag the pipette and dip into the SDS Solution"),
          gsap.to("#pallet", { display: "none" }),
          (V = !0),
          I.forEach((e) => (e.style.display = "none")),
          A.forEach((e) => (e.style.display = "inline-block")),
          (Y.style.display = "inline-block"),
          gsap.to("#baadmeSDS", { fillOpacity: 0 }),
          gsap.to("#pehleSDS", { fillOpacity: 0.5 }),
          gsap.to(".flask", { display: "none" }),
          gsap.to(".eppen-full", { translateX: "0%", translateY: "0%" }),
          gsap.to(".pippete", {
            rotate: 90,
            translateX: "0%",
            translateY: query.matches && n.classList.contains("sim--head-full") ?"-5px":"0%",
          }),
          Draggable.create(".pippete", {
            bounds: ".bchKrhna",
            onDrag: function () {
              gsap.to(".pippete", { rotate: 0 }),
                this.hitTest(".SDS-flask")
                  ? ((V = !1),
                    TweenLite.to(this.target, 1, {
                      bbG: function () {
                        setTimeout(() => {
                          gsap.to("#pehleSDS", { fillOpacity: 0 }),
                            gsap.to("#baadmeSDS", { fillOpacity: 1 }),
                            gsap.to("#fillPipe", {
                              display: "inline-block",
                              fillOpacity: 1,
                              fill: "#00FFE0",
                            }),
                            (_.textContent =
                              "Drag the pipette into the eppendorf and once the eppendorf is filled with sol, incubation will start");
                        }, 1e3);
                      },
                    }))
                  : !1 === V &&
                  this.hitTest(".eppen-full") &&
                  ((V = !0),
                    setTimeout(() => {
                      gsap.to(".fill-rot", { rotate: -145 });
                    }, 1e3),
                    setTimeout(() => {
                      gsap.to("#SDS-solution", {
                        display: "inline-block",
                        fill: "#00FFE0",
                      });
                    }, 1500),
                    setTimeout(() => {
                      gsap.to(".fill-rot", { rotate: 0 }),
                        gsap.to("#fillPipe", { display: "none" }),
                        (Q = !0);
                    }, 2e3),
                    setTimeout(() => {
                      !(function () {
                        gsap.to(".time-label", { display: "inline-block" });
                        let e = 10;
                        const t = function () {
                          (X.textContent = e),
                            0 === e &&
                            ((_.textContent = "Click on Next"),
                              (w.disabled = !1),
                              clearInterval(n),
                              gsap.to(".time-label", { display: "none" })),
                            e--;
                        },
                          n = setInterval(t, 1e3);
                        t(), (Q = !1);
                      })();
                    }, 2100),
                    (B = !1),
                    (J = !0));
            },
          });
      else if (!0 === J) {
        (_.textContent =
          "Select the quantity of NaCl sol and drag the pipette into the flask"),
          I.forEach((e) => (e.style.display = "none")),
          A.forEach((e) => (e.style.display = "none")),
          G.forEach((e) => (e.style.display = "inline-block")),
          K.forEach((e) => (e.style.display = "inline-block"));
        let e = !1,
          t = !1;
        (V = !0),
          gsap.to("#baadmeNMK", { display: "none" }),
          (Y.style.display = "none"),
          H.forEach((e) => (e.style.display = "inline-block")),
          gsap.to(".pippete", {
            rotate: 90,
            translateX: "0%",
            translateY: "0%",
          }),
          Draggable.create(".pippete", {
            bounds: ".bchKrhna",
            onDrag: function () {
              gsap.to(".pippete", { rotate: 0 }),
                this.hitTest(".nacl-flask")
                  ? TweenLite.to(this.target, 1, {
                    babuJi: function () {
                      (_.textContent =
                        "Now drag the pipette to the eppendorf"),
                        setTimeout(() => {
                          gsap.to("#pehleNMK", { display: "none" }),
                            gsap.to("#fillPipe", { display: "inline-block" });
                        }, 1e3),
                        setTimeout(() => {
                          gsap.to("#baadmeNMK", { display: "inline-block" }),
                            (V = !1),
                            (ee = !0);
                        }, 1500);
                    },
                  })
                  : this.hitTest(".eppen-full") &&
                  !0 === ee &&
                  !1 === e &&
                  ((e = !0),
                    setTimeout(() => {
                      gsap.to(".fill-rot", { rotate: -145 });
                    }, 1e3),
                    setTimeout(() => {
                      gsap.to("#Nacl-solution", {
                        display: "inline-block",
                        fill: "#00FFE0",
                      });
                    }, 1500),
                    setTimeout(() => {
                      gsap.to(".fill-rot", { rotate: 0 }),
                        gsap.to("#fillPipe", { display: "none" });
                    }, 2e3),
                    (Z = !0),
                    (V = !0),
                    (_.textContent =
                      "Select the quantity of Iso-Propanol Sol and drag the pipette into Iso-Propanol beaker")),
                this.hitTest(".iso-beaker") && !0 === Z
                  ? (setTimeout(() => {
                    gsap.to("#fillPipe", { display: "inline-block" }),
                      (Z = !1),
                      (t = !0);
                  }, 1e3),
                    (_.textContent = "Drag the pipette info eppendorf"),
                    (V = !0))
                  : this.hitTest(".eppen-full") &&
                  !1 === Z &&
                  !0 === t &&
                  ((t = !1),
                    (Z = !0),
                    setTimeout(() => {
                      gsap.to(".fill-rot", { rotate: -145 }), (e = !1);
                    }, 1e3),
                    setTimeout(() => {
                      gsap.to("#fillPipe", { display: "none" }),
                        gsap.to("#Iso-solution", {
                          fill: "#00FFE0",
                          display: "inline-block",
                        });
                    }, 1500),
                    setTimeout(() => {
                      gsap.to(".fill-rot", { rotate: 0 });
                    }, 2e3),
                    (_.textContent = "Click on the Invert Mix button")),
                document
                  .querySelector(".invt")
                  .addEventListener("click", function () {
                    gsap.to(".eppen-full", {
                      translateX: "100px",
                      translateY: query.matches && n.classList.contains("sim--head-full") ?"-180px":"-200px",
                    }),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 30 });
                      }, 2e3),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 60 }),
                          gsap.to(".ghummi", {
                            fill: "#00FFE0",
                            fillOpacity: "0.3",
                          });
                      }, 2200),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 90 });
                      }, 2400),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 120 });
                      }, 2600),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 150 });
                      }, 2800),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 180 });
                      }, 3e3),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 150 });
                      }, 3200),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 120 });
                      }, 3400),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 90 });
                      }, 3600),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 60 });
                      }, 3800),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 30 });
                      }, 4e3),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 0 });
                      }, 4200),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 30 });
                      }, 5e3),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 60 });
                      }, 5200),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 90 });
                      }, 5400),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 120 });
                      }, 5600),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 150 });
                      }, 5800),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 180 });
                      }, 6e3),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 150 });
                      }, 6200),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 120 });
                      }, 6400),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 90 });
                      }, 6600),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 60 });
                      }, 6800),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 30 });
                      }, 7e3),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { rotate: 0 }),
                          gsap.to(".ghummi", {
                            fill: "url(#paint0_linear_1_3)",
                            fillOpacity: 1,
                          }),
                          gsap.to("#dna", { display: "inline-block" });
                      }, 7200),
                      setTimeout(() => {
                        gsap.to(".eppen-full", {
                          translateX: "0%",
                          translateY: "0%",
                        }),
                          (_.textContent = "Click on Next");
                      }, 7500);
                  });
            },
          }),
          (J = !1),
          (W = !0);
      } else if (!0 === W)
        (_.textContent = "Drag the eppendorf into the centrifuge"),
          (o.textContent = "ON"),
          a.classList.replace("btn-green", "btn-nor"),
          (x.textContent = ""),
          i.classList.remove("shake-img"),
          x.classList.remove("shake-img"),
          gsap.to(".pippete", { display: "none" }),
          H.forEach((e) => {
            e.style.display = "none";
          }),
          gsap.to(".centri-cont", { display: "inline-block" }),
          G.forEach((e) => (e.style.display = "none")),
          K.forEach((e) => (e.style.display = "none")),
          gsap.to(".viewing", { display: "inline-block" }),
          Draggable.create(".eppen-full", {
            bounds: ".bchKrhna",
            onDrag: function () {
              this.hitTest(".centrifuge-full") &&
                TweenLite.to(this.target, 1, {
                  jindaHo: function () {
                    setTimeout(() => {
                      gsap.to(".openDhkkn", { translateX: "-20px" }),
                        (_.textContent =
                          "Now switch ON the centrifuge, select RPM & timer, then click on Start");
                    }, 200),
                      setTimeout(() => {
                        gsap.to(".eppen-full", { display: "none" });
                      }, 400),
                      setTimeout(() => {
                        gsap.to(".openDhkkn", { translateX: "0px" });
                      }, 1e3),
                      setTimeout(() => {
                        gsap.to(".eppen-full", {
                          translateX: "0%",
                          translateY: "0%",
                        });
                      }, 4e3);
                  },
                  bcchaBhai: function () {
                    S.addEventListener("click", function () {
                      !0 === ne &&
                        "OFF" === o.textContent &&
                        (gsap.to(".centri-rotor", { display: "inline-block" }),
                          i.classList.add("shake-img"),
                          x.classList.add("shake-img"),
                          setTimeout(() => {
                            gsap.to(".eppen-full", {
                              translateX: query.matches && n.classList.contains("sim--head-full") ?"120px":"250px",
                              translateY:query.matches && n.classList.contains("sim--head-full") ?"-120px": "-154px",
                            }),
                              gsap.to(".centri-rotor", { display: "none" });
                          }, 4e3),
                          setTimeout(() => {
                            gsap.to(".openDhkkn", { translateX: "-20px" });
                          }, 5e3),
                          setTimeout(() => {
                            gsap.to(".eppen-full", { display: "inline-block" }),
                              gsap.to("#Distilled-solution", {
                                display: "inline-block",
                                fill: "#00FFE0",
                                fillOpacity: 0.75,
                              }),
                              gsap.to(".sup-nen", {
                                translateX: "0%",
                                translateY: "0%",
                                fill: "#00FFE0",
                                opacity: 1,
                              }),
                              gsap.to("#dna", {
                                display: "inline-block",
                                opacity: 1,
                              });
                          }, 6e3),
                          setTimeout(() => {
                            gsap.to(".openDhkkn", { translateX: "0px" });
                          }, 8e3),
                          setTimeout(() => {
                            gsap.to(".viewing", { display: "none" });
                          }, 8500),
                          setTimeout(() => {
                            gsap.to(".discard", { display: "inline-block" }),
                              (_.textContent =
                                "Drag the eppendorf into the discard box");
                          }, 9e3),
                          Draggable.create(".eppen-full", {
                            bounds: ".e-coli-sim-full",
                            onDrag: function () {
                              this.hitTest(".discard") &&
                                TweenLite.to(this.target, 1, {
                                  rotation: 110,
                                  thisIsLast: function () {
                                    setTimeout(() => {
                                      gsap.to(".fill-rot", {
                                        rotate: -145,
                                        transformOrigin: "14px 15px left",
                                      }),
                                        (_.textContent =
                                          "Now eppendorf is left open to air dry overnight and on next day double distilled water solution is added");
                                    }, 500),
                                      setTimeout(() => {
                                        gsap.to(".pippete", {
                                          translateX: "0%",
                                          translateY: "0%",
                                        }),
                                          gsap.to(".sup-nen", {
                                            translateY: "-300px",
                                            opacity: 0,
                                          }),
                                          gsap.to("#Iso-solution", {
                                            translateY: "-320px",
                                            opacity: 0,
                                          }),
                                          gsap.to("#Distilled-solution", {
                                            translateY: "-320px",
                                            opacity: 0,
                                          }),
                                          gsap.to("#GTE-solution", {
                                            translateY: "-320px",
                                            opacity: 0,
                                          }),
                                          gsap.to("#Nacl-solution", {
                                            translateY: "-320px",
                                            opacity: 0,
                                          }),
                                          gsap.to("#SDS-solution", {
                                            translateY: "-320px",
                                            opacity: 0,
                                          }),
                                          gsap.to("#fillingOw", {
                                            translateY: "-400px",
                                            display: "none",
                                          }),
                                          gsap.to("#bchaHua", {
                                            translateY: "-410px",
                                          });
                                      }, 2e3),
                                      setTimeout(() => {
                                        gsap.to("#bubbles", {
                                          opacity: 0,
                                          overFlow: "visible",
                                          transformOrigin: "center",
                                        }),
                                          gsap.to("#bchaHua", {
                                            display: "inline-block",
                                            opacity: 0,
                                          });
                                      }, 1500),
                                      setTimeout(() => {
                                        gsap.to(".eppen-full", { rotate: 0 });
                                      }, 3e3),
                                      setTimeout(() => {
                                        gsap.to(".fill-rot", {
                                          rotate: 0,
                                          transformOrigin: "14px 15px left",
                                        });
                                      }, 3500),
                                      setTimeout(() => {
                                        gsap.to(".fill-rot", { rotate: -145 }),
                                          gsap.to(".eppen-full", {
                                            translateY: "0%",
                                            translateX: "0%",
                                          }),
                                          gsap.to("#dna", {
                                            display: "inline-block",
                                          });
                                        !(function () {
                                          let e = 15;
                                          gsap.to(".time-label", {
                                            display: "inline-block",
                                          });
                                          const t = function () {
                                            (X.textContent = e),
                                              0 === e &&
                                              ((_.textContent =
                                                "Click on Next"),
                                                ($ = !0),
                                                (w.disabled = !1),
                                                gsap.to(".time-label", {
                                                  display: "none",
                                                }),
                                                clearInterval(n)),
                                              e--;
                                          },
                                            n = setInterval(t, 1e3);
                                          t();
                                        })();
                                      }, 5e3),
                                      setTimeout(() => {
                                        _.textContent = "Click on Next";
                                      }, 15e3);
                                  },
                                });
                            },
                          }));
                    });
                  },
                }),
                (W = !1);
            },
          });
      else if (!0 === $) {
        (_.textContent =
          "Select the quantity of Double Distilled water and drag the pipette into the beaker"),
          R.forEach((e) => (e.style.display = "inline-block")),
          gsap.to(".forward", { display: "none" }),
          gsap.to(".dis-water", { display: "inline-block" }),
          gsap.to(".pippete", {
            display: "inline-block",
            translateX: "0%",
            translateY: "0%",
            rotate: 90,
          }),
          gsap.to("#fillPipe", { display: "none" });
        let e = !1;
        Draggable.create(".pippete", {
          bounds: ".e-coli-sim-full",
          onDrag: function () {
            gsap.to(".pippete", { rotate: 0 }),
              this.hitTest(".dis-water")
                ? (TweenLite.to(this.target, 1, {
                  sweety: function () {
                    gsap.to("#pehlePani", { display: "none" }),
                      gsap.to("#fillPipe", { display: "inline-block" }),
                      gsap.to("#badmePani", { display: "inline-block" }),
                      (_.textContent = "Drag the pipette into the eppendorf");
                  },
                }),
                  (e = !0))
                : !0 === e &&
                this.hitTest(".eppen-full") &&
                TweenLite.to(this.target, 1, {
                  sundar: function () {
                    (e = !1),
                      gsap.to("#fillingOw", {
                        translateY: "0%",
                        display: "inline-block",
                        fill: "#00FFE0",
                        fillOpacity: 1,
                      }),
                      gsap.to("#fillPipe", { display: "none" }),
                      (_.textContent =
                        "Congratulations!🎉🎉 You have successfully completed the lab simulation");
                  },
                });
          },
        });
      }
    });
});

