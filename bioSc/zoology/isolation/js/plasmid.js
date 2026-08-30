window.addEventListener("load", function () {
  let I = document.querySelector(".htt-ja"),
    i = document.querySelector(".full-sc"),
    J = document.querySelector(".sim--head"),
    j = document.querySelector(".switching"),
    K = document.querySelector(".e-coli-sim"),
    L = document.querySelector(".centrifuge"),
    M = document.querySelector(".btn-nor"),
    b = document.querySelector("#range-centri"),
    a = document.querySelector("#GTE-input"),
    c = document.querySelector("#SDS-input"),
    d = document.querySelector("#Nacl-input"),
    e = document.querySelector("#iso-input"),
    f = document.querySelector("#dis-input"),
    g = document.querySelector("#input-timer"),
    k = document.querySelector("#values-rpm"),
    l = document.querySelector("#values-timer"),
    m = document.querySelector("#values-SDS"),
    n = document.querySelector("#values-GTE"),
    o = document.querySelector("#values-Nacl"),
    p = document.querySelector("#values-iso"),
    q = document.querySelector("#values-dis"),
    N = document.querySelector(".rotor-content");
  document.querySelector(".dis-water");
  let O = document.querySelector(".start"),
    P = document.querySelector(".test-tube"),
    Q = document.querySelector(".eppen"),
    r = document.querySelector("#pallet"),
    s = document.querySelector("#bchaHua"),
    t = document.querySelector(".container"),
    u = document.querySelector(".container-background"),
    h = document.querySelector(".forward"),
    R = document.querySelector("#sim--img"),
    v = document.querySelectorAll(".disp2");
  document.querySelector(".pippete");
  let w = document.querySelector(".disp3"),
    x = document.querySelector(".time-label"),
    S = document.querySelector(".timer-GTE"),
    T = document.querySelector(".discard"),
    y = document.querySelectorAll(".disp4"),
    U = document.querySelector(".centri-cont"),
    V = document.querySelectorAll(".GTE"),
    W = document.querySelectorAll(".SDS"),
    X = document.querySelectorAll(".NACL"),
    Y = document.querySelectorAll(".DISW"),
    Z = document.querySelector(".instruct-info"),
    $ = document.querySelector("nav"),
    _ = document.querySelector(".invt"),
    aa = document.querySelector(".invt1"),
    z = document.querySelector(".overlay"),
    A = document.querySelector(".btnOk"),
    B = document.querySelector(".error"),
    ab = document.querySelector(".haji"),
    C = document.querySelector(".btnOk1"),
    D = document.querySelector(".hand"),
    E = document.querySelector(".hand2"),
    F = document.querySelector(".hand3"),
    G = document.querySelector(".hand4"),
    H = document.querySelector(".hand5"),
    ac = window.matchMedia("(max-width:800px)"),
    ad = new Audio("centri.mp3"),
    ae,
    af,
    ag,
    ah,
    ai,
    aj,
    ak,
    al,
    am,
    an = !1,
    ao = 0;
  v.forEach((a) => {
    a.style.display = "none";
  }),
    y.forEach((a) => {
      a.style.display = "none";
    }),
    (D.style.display = "none"),
    (E.style.display = "none"),
    (F.style.display = "none"),
    (G.style.display = "none"),
    (H.style.display = "none"),
    (B.style.display = "none"),
    (z.style.display = "none"),
    (r.style.display = "none"),
    (x.style.display = "none"),
    (s.style.display = "none"),
    (t.style.display = "none"),
    (u.style.display = "none"),
    (w.style.display = "none"),
    (h.disabled = !0),
    (a.disabled = !0);
  let ap = !0;
  a.style.cursor = "not-allowed";
  let aq = !0,
    ar,
    as,
    at,
    au = !1;
  window.matchMedia("(max-width:480px)").matches
    ? ((document.querySelector(".btnOk1").style.display = "block"),
      (document.querySelector(".btnOk").style.display = "none"),
      document.querySelectorAll(".hide").forEach((a) => {
        (ab.textContent = "To perform the simulation rotate the device"),
          (a.style.display = "block");
      }),
      C.addEventListener("click", function () {
        document.querySelectorAll(".hide").forEach((a) => {
          a.style.display = "none";
        }),
          (C.style.display = "none"),
          (document.querySelector(".btnOk").style.display = "block");
      }))
    : document.querySelectorAll(".hide").forEach((a) => {
        a.style.display = "none";
      });
  let av = function () {
      document.exitFullscreen(),
        (D.style.display = "none"),
        (E.style.display = "none"),
        (F.style.display = "none"),
        (G.style.display = "none"),
        (H.style.display = "none"),
        J.classList.replace("sim--head-full", "sim--head"),
        i.classList.replace("full-sc-click", "full-sc"),
        K.classList.replace("e-coli-sim-full", "e-coli-sim"),
        L.classList.replace("centrifuge-full", "centrifuge"),
        P.classList.replace("test-tube-full", "test-tube"),
        Q.classList.replace("eppen-full", "eppen"),
        (t.style.display = "none"),
        (I.style.display = "flex"),
        ac.matches ? ($.style.display = "none") : ($.style.display = "grid"),
        (u.style.display = "none"),
        (w.style.display = "none"),
        v.forEach((a) => {
          a.style.display = "none";
        }),
        y.forEach((a) => {
          a.style.display = "none";
        });
    },
    aw = function () {
      [V, W, X, Y].forEach((a) => a.forEach((a) => (a.style.display = "none")));
    };
  A.addEventListener("click", function () {
    (B.style.display = "none"), (z.style.display = "none");
  });
  let ax = function () {
    //   document.documentElement.requestFullscreen(),
      document.documentElement.requestFullscreen() || document.documentElement.webkitRequestFullscreen() || document.documentElement.mozRequestFullScreen() ||  document.documentElement.msRequestFullscreen() || document.documentElement.element.mozRequestFullScreen();
        (D.style.display = "block"),
        J.classList.replace("sim--head", "sim--head-full"),
        i.classList.replace("full-sc", "full-sc-click"),
        K.classList.replace("e-coli-sim", "e-coli-sim-full"),
        L.classList.replace("centrifuge", "centrifuge-full"),
        P.classList.replace("test-tube", "test-tube-full"),
        Q.classList.replace("eppen", "eppen-full"),
        (t.style.display = "block"),
        (u.style.display = "block"),
        (I.style.display = "none"),
        ($.style.display = "none"),
        (Z.textContent =
          "Drag the overnight grown culture test-tube towards the eppendorf"),
        setTimeout(() => {
          (D.style.display = "block"),
            gsap.to(".hand", {
              translateX:
                ac.matches && J.classList.contains("sim--head-full") ? 82 : 170,
              translateY:
                ac.matches && J.classList.contains("sim--head-full") ? 28 : 90,
              duration: 3,
              ease: "out",
            }),
            gsap.to(".hand", { opacity: 0, delay: 4 });
        }, 3e3),
        (function () {
          ac.matches &&
            J.classList.contains("sim--head-full") &&
            N.classList.replace("rotor-content", "rotor-content1"),
            (ao = 1),
            O.addEventListener("click", function () {
              1 == ao
                ? "OFF" === j.textContent &&
                  !1 === aA &&
                  5e3 == k.textContent &&
                  10 == l.textContent
                  ? (ad.play(),
                    navigator.vibrate(5e3),
                    (aA = !0),
                    gsap.to(".centri-rotor", { display: "inline-block" }),
                    L.classList.add("shake-img"),
                    setTimeout(() => {
                      gsap.to(".centri-rotor", { display: "none" });
                    }, 4e3),
                    setTimeout(() => {
                      gsap.to(".openDhkkn", { translateX: "-20px" });
                    }, 5e3),
                    gsap.to(".eppen-full", {
                      translateX:
                        ac.matches && J.classList.contains("sim--head-full")
                          ? "141px"
                          : "250px",
                      translateY:
                        ac.matches && J.classList.contains("sim--head-full")
                          ? "-96px"
                          : "-154px",
                    }),
                    setTimeout(() => {
                      gsap.to(".eppen-full", {
                        display: "inline-block",
                        fill: "#FCFF5C",
                      }),
                        gsap.to(".sup-nen", {
                          display: "inline-block",
                          fill: "#FCFF5C",
                        }),
                        gsap.to("#bubbles", { display: "inline-block" });
                    }, 5500),
                    setTimeout(() => {
                      gsap.to(".openDhkkn", { translateX: "0px" });
                    }, 8e3),
                    setTimeout(() => {
                      gsap.to(".viewing", { display: "none" }),
                        setTimeout(() => {
                          gsap.to(".hand", {
                            translateX:
                              ac.matches &&
                              J.classList.contains("sim--head-full")
                                ? 250
                                : 460,
                            translateY:
                              ac.matches &&
                              J.classList.contains("sim--head-full")
                                ? 30
                                : 80,
                            duration: 3,
                            opacity: 1,
                            ease: "out",
                          }),
                            gsap.to(".hand", { opacity: 0, delay: 4 });
                        }, 1e3),
                        (Z.textContent =
                          "Drag the eppendorf towards discard box for discarding the supernatant");
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
                                    gsap.to(".sup-nen", {
                                      translateY: "-300px",
                                      opacity: 0,
                                    }),
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
                                    gsap.to("#bchaHua", {
                                      display: "inline-block",
                                    }),
                                    gsap.to("#pallet", {
                                      display: "inline-block",
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
                                  gsap.to(".discard", { display: "none" }),
                                    (Z.textContent = "Click on Next"),
                                    gsap.to(".forward", {
                                      cursor: "pointer",
                                      background: "white",
                                    });
                                }, 4e3),
                                (h.disabled = !1),
                                (ae = !0),
                                V.forEach((a) => (a.style.display = "none"));
                            },
                          });
                      },
                    }))
                  : ((au = !1), az())
                : 2 === ao &&
                  ("OFF" === j.textContent &&
                  1e4 == k.textContent &&
                  20 == l.textContent
                    ? (navigator.vibrate(5e3),
                      gsap.to(".centri-rotor", { display: "inline-block" }),
                      L.classList.add("shake-img"),
                      N.classList.add("shake-img"),
                      setTimeout(() => {
                        gsap.to(".centri-rotor", { display: "none" });
                      }, 4e3),
                      setTimeout(() => {
                        gsap.to(".openDhkkn", { translateX: "-20px" });
                      }, 5e3),
                      gsap.to(".eppen-full", {
                        translateX: "250px",
                        translateY: "-154px",
                      }),
                      setTimeout(() => {
                        gsap.to(".eppen-full", {
                          display: "inline-block",
                          fill: "#FCFF5C",
                        }),
                          gsap.to(".sup-nen", {
                            display: "inline-block",
                            fill: "#FCFF5C",
                          }),
                          gsap.to("#bubbles", { display: "inline-block" });
                      }, 5500),
                      setTimeout(() => {
                        gsap.to(".openDhkkn", { translateX: "0px" });
                      }, 8e3),
                      setTimeout(() => {
                        gsap.to(".viewing", { display: "none" }),
                          (Z.textContent =
                            "Drag the eppendorf towards discard box for discarding the supernatant"),
                          (ai = !0);
                      }, 8500))
                    : az());
            });
          let a = Draggable.create(".test-tube-full", {
            bounds: ".e-coli-sim-full",
            onDrag: function () {
              (cottonOut = function () {
                gsap.to("#cotton", { opacity: 0 });
              })(),
                this.hitTest(".eppen-full") &&
                  TweenLite.to(this.target, 1, {
                    rotation: 110,
                    translateX:
                      ac.matches && J.classList.contains("sim--head-full")
                        ? "180%"
                        : "85%",
                    translateY: "-50%",
                    changing: function () {
                      (Z.textContent =
                        "Drag the eppendorf into the centrifuge. Two eppendorfs are inserted so as to maintain balance."),
                        setTimeout(() => {
                          gsap.to(".hand", {
                            translateX:
                              ac.matches &&
                              J.classList.contains("sim--head-full")
                                ? 195
                                : 430,
                            translateY:
                              (ac.matches &&
                                J.classList.contains("sim--head-full"),
                              -20),
                            duration: 4,
                            opacity: 1,
                            ease: "out",
                          }),
                            gsap.to(".hand", { opacity: 0, delay: 4 });
                        }, 3e3);
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
                                  (au = !0),
                                    gsap.to(".openDhkkn", {
                                      translateX: "-20px",
                                    }),
                                    (Z.textContent =
                                      "Now switch ON the centrifuge, select RPM at 5000 & timer at 10 min, then click on Start");
                                }, 500);
                              },
                              drEpn: function () {
                                setTimeout(() => {
                                  gsap.to(".eppen-full", { display: "none" });
                                }, 100);
                              },
                              closeDkkt: function () {
                                setTimeout(() => {
                                  gsap.to(".openDhkkn", { translateX: "0px" });
                                }, 1500);
                              },
                            });
                        },
                      });
                    },
                  });
            },
            onDragEnd: function () {
              a[0].disable();
            },
          });
        })();
    },
    ay = function () {
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullscreenElement ||
      document.mozFullscreenElement ||
      document.mozRequestFullScreen
        ? av()
        : ax();
    };
  i.addEventListener("click", function () {
    aw(), ay();
  }),
    j.addEventListener("click", function (a) {
      a.preventDefault(),
        "ON" === j.textContent
          ? ((j.textContent = "OFF"),
            M.classList.replace("btn-nor", "btn-green"))
          : "OFF" === j.textContent &&
            ((j.textContent = "ON"),
            M.classList.replace("btn-green", "btn-nor"),
            (N.textContent = ""));
    }),
    (k.innerHTML = b.value),
    (b.oninput = function () {
      k.innerHTML = this.value;
    }),
    b.addEventListener("change", function (a) {
      a.preventDefault(),
        "OFF" == j.textContent
          ? (N.textContent = `RPM ${k.textContent}`)
          : (N.style.display = "none");
    }),
    (n.innerHTML = a.value),
    (a.oninput = function () {
      n.innerHTML = this.value;
    }),
    (m.innerHTML = c.value),
    (c.oninput = function () {
      m.innerHTML = this.value;
    }),
    (o.innerHTML = d.value),
    (d.oninput = function () {
      o.innerHTML = this.value;
    }),
    (p.innerHTML = e.value),
    (e.oninput = function () {
      p.innerHTML = this.value;
    }),
    (q.innerHTML = f.value),
    (f.oninput = function () {
      q.innerHTML = this.value;
    }),
    (l.innerHTML = g.value),
    (g.oninput = function () {
      l.innerHTML = this.value;
    });
  let az = function () {
      (ab.textContent = "Read the instructions carefully."),
        (B.style.display = "block"),
        (z.style.display = "block");
    },
    aA = !1,
    aB = function (b, c = !1, d = !1, e = !1) {
      gsap.to(".time-label", { display: "inline-block" });
      let a = function () {
          (S.textContent = b),
            0 === b &&
              ((Z.textContent = "Click on Next"),
              (h.disabled = !1),
              clearInterval(f),
              gsap.to(".time-label", { display: "none" })),
            b--;
        },
        f = setInterval(a, 1e3);
      a(), (ap = !1);
    };
  h.addEventListener("click", function (d) {
    if (
      ((U.style.display = "none"),
      (T.style.display = "none"),
      gsap.to(".centri-cont", { display: "none" }),
      !0 === ae)
    ) {
      gsap.to(".hand", {
        translateX:
          ac.matches && J.classList.contains("sim--head-full") ? 200 : 380,
        translateY:
          ac.matches && J.classList.contains("sim--head-full") ? 70 : 130,
      }),
        (ae = !1),
        (Z.textContent =
          "Select the volume of GTE (Glucose/Tris/EDTA) solution as 200uL then drag the pipette and dip into the GTE solution"),
        V.forEach((a) => (a.style.display = "inline-block")),
        (a.disabled = !1),
        (a.style.cursor = "pointer"),
        (h.disabled = !0),
        d.preventDefault(),
        gsap.to("#baadme", { fillOpacity: 0 }),
        gsap.to(".eppen-full", { translateX: "0%", translateY: "0%" }),
        gsap.to(".test-tube-full", { display: "none" }),
        (R.src = "images/background2.png"),
        v.forEach((a) => {
          a.style.display = "inline-block";
        }),
        gsap.to(".discard", { display: "none" });
      let e = function () {
        setTimeout(() => {
          gsap.to(".hand", {
            translateX:
              ac.matches && J.classList.contains("sim--head-full") ? 10 : 0,
            translateY:
              (ac.matches && J.classList.contains("sim--head-full"), 0),
            duration: 4,
            opacity: 1,
            ease: "out",
          }),
            gsap.to(".hand", { opacity: 0, delay: 4 });
        }, 3e3),
          Draggable.create(".pippete", {
            bounds: ".bchKrhna",
            onDrag: function () {
              200 == n.textContent
                ? (gsap.to(".pippete", { rotate: 0 }),
                  this.hitTest(".flask")
                    ? ((aq = !1),
                      (ar = !0),
                      TweenLite.to(this.target, 1, {
                        step2: function () {
                          setTimeout(() => {
                            gsap.to("#pehle", { opacity: 0 }),
                              gsap.to("#baadme", { fillOpacity: 1 });
                          }, 1e3),
                            (Z.textContent =
                              "Drag the pipette into the eppendorf and once the eppendorf is filled with sol, incubation will start"),
                            setTimeout(() => {
                              gsap.to("#fillPipe", {
                                fill: "#00FFE0",
                                fillOpacity: 1,
                              });
                            }, 2e3),
                            setTimeout(() => {
                              gsap.to(".hand", {
                                translateX:
                                  ac.matches &&
                                  J.classList.contains("sim--head-full")
                                    ? 80
                                    : 160,
                                translateY:
                                  ac.matches &&
                                  J.classList.contains("sim--head-full")
                                    ? 20
                                    : 90,
                                duration: 3,
                                opacity: 1,
                                ease: "out",
                              }),
                                gsap.to(".hand", { opacity: 0, delay: 3 });
                            }, 2500),
                            setInterval(() => {
                              D.style.display = "none";
                            }, 8e3);
                        },
                      }))
                    : this.hitTest(".eppen-full") &&
                      !1 === aq &&
                      !0 === ar &&
                      TweenLite.to(this.target, 1, {
                        step22: function () {
                          (ar = !1),
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
                                (aq = !0);
                            }, 1500),
                            setTimeout(() => {
                              gsap.to(".fill-rot", { rotate: 0 }),
                                gsap.to(".time-label", {
                                  display: "inline-block",
                                }),
                                (ae = !1);
                            }, 2500),
                            !1 == (ap = !1) &&
                              (setTimeout(() => {
                                aB(15, !0);
                              }, 2e3),
                              (af = !0));
                        },
                      }))
                : az();
            },
          });
      };
      e();
    } else if (!0 === af) {
      setTimeout(() => {
        (E.style.display = "block"),
          gsap.to(".hand2", {
            translateX:
              ac.matches && J.classList.contains("sim--head-full") ? -170 : 200,
            translateY:
              ac.matches && J.classList.contains("sim--head-full") ? -60 : -80,
            duration: 4,
            opacity: 1,
            ease: "out",
          }),
          gsap.to(".hand2", { opacity: 0, delay: 4 });
      }, 2e3),
        (af = !1),
        (h.disabled = !0),
        (_.style.display = "block");
      let r = !1;
      (Z.textContent =
        "Select the volume of SDS (Sodium Dodecyl Sulfate) 1% and 0.2N NaOH solution as 400uL then drag the pipette and dip into the SDS Solution"),
        gsap.to("#pallet", { display: "none" }),
        (aq = !0),
        V.forEach((a) => (a.style.display = "none")),
        W.forEach((a) => (a.style.display = "inline-block")),
        (w.style.display = "inline-block"),
        gsap.to("#baadmeSDS", { fillOpacity: 0 }),
        gsap.to("#pehleSDS", { fillOpacity: 0.5 }),
        gsap.to(".flask", { display: "none" }),
        gsap.to(".eppen-full", { translateX: "0%", translateY: "0%" }),
        gsap.to(".pippete", { rotate: 90, translateX: "0%", translateY: "0%" }),
        Draggable.create(".pippete", {
          bounds: ".bchKrhna",
          onDrag: function () {
            if (400 == m.textContent) {
              let a = function () {
                gsap.to(".pippete", { rotate: 0 });
              };
              a(),
                this.hitTest(".SDS-flask")
                  ? ((aq = !1),
                    setTimeout(() => {
                      gsap.to(".hand2", {
                        translateX:
                          ac.matches && J.classList.contains("sim--head-full")
                            ? -100
                            : -160,
                        translateY:
                          ac.matches && J.classList.contains("sim--head-full")
                            ? -20
                            : -40,
                        duration: 3,
                        opacity: 1,
                        ease: "out",
                      }),
                        gsap.to(".hand2", { opacity: 0, delay: 3 });
                    }, 2e3),
                    setTimeout(() => {
                      (E.style.display = "none"), (D.style.display = "none");
                    }, 7e3),
                    TweenLite.to(this.target, 1, {
                      bbG: function () {
                        setTimeout(() => {
                          gsap.to("#pehleSDS", { fillOpacity: 0 }),
                            gsap.to("#baadmeSDS", { fillOpacity: 1 }),
                            gsap.to("#fillPipe", {
                              display: "inline-block",
                              fillOpacity: 1,
                              fill: "#00FFE0",
                            });
                        }, 1e3);
                      },
                    }),
                    (Z.textContent = "Drag the pipette into the eppendorf"),
                    document
                      .querySelector(".invt")
                      .addEventListener("click", function () {
                        !0 === r
                          ? ((ao = 1),
                            gsap.to(".eppen-full", {
                              translateX: "100px",
                              translateY:
                                ac.matches &&
                                J.classList.contains("sim--head-full")
                                  ? "-92px"
                                  : "-200px",
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
                                (Z.textContent = "Now incubation starts"),
                                aB(15, !0, !1, !1),
                                (ag = !0),
                                (am = !0),
                                (_.style.display = "none");
                            }, 7500))
                          : az();
                      }))
                  : !1 === aq &&
                    this.hitTest(".eppen-full") &&
                    ((r = !0),
                    (aq = !0),
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
                        (Z.textContent = "Click on Invert Mix"),
                        (ap = !0);
                    }, 2e3));
            } else 400 == !o.textContent && az();
          },
        });
    } else if (!0 === ag && !0 === am) {
      (ao = 2), (am = !1), (ag = !1);
      let s = !1;
      (_.style.display = "none"),
        (aa.style.display = "block"),
        (h.disabled = !0),
        setTimeout(() => {
          (F.style.display = "block"),
            gsap.to(".hand3", {
              translateX:
                ac.matches && J.classList.contains("sim--head-full")
                  ? -170
                  : -260,
              translateY:
                ac.matches && J.classList.contains("sim--head-full")
                  ? -50
                  : -90,
              duration: 4,
              opacity: 1,
              ease: "out",
            }),
            gsap.to(".hand3", { opacity: 0, delay: 4 });
        }, 1e3),
        (Z.textContent =
          "Select the volume of Potassium Acetate sol as 200uL then drag the pipette into the flask"),
        W.forEach((a) => (a.style.display = "none")),
        X.forEach((a) => (a.style.display = "inline-block"));
      let t = !1;
      (aq = !0),
        gsap.to("#baadmePot", { display: "none" }),
        (w.style.display = "none"),
        y.forEach((a) => (a.style.display = "inline-block")),
        gsap.to(".pippete", { rotate: 90, translateX: "0%", translateY: "0%" }),
        Draggable.create(".pippete", {
          bounds: ".bchKrhna",
          onDrag: function () {
            200 == o.textContent
              ? (gsap.to(".pippete", { rotate: 0 }), this.hitTest(".potAce"))
                ? (setTimeout(() => {
                    (F.style.display = "block"),
                      gsap.to(".hand3", {
                        translateX:
                          ac.matches && J.classList.contains("sim--head-full")
                            ? -100
                            : -190,
                        translateY:
                          ac.matches && J.classList.contains("sim--head-full")
                            ? -30
                            : -50,
                        duration: 3,
                        opacity: 1,
                        ease: "out",
                      }),
                      gsap.to(".hand3", { opacity: 0, delay: 4 });
                  }, 1500),
                  (D.style.display = "none"),
                  (E.style.display = "none"),
                  (F.style.display = "none"),
                  TweenLite.to(this.target, 1, {
                    babuJi: function () {
                      (Z.textContent = "Now drag the pipette to the eppendorf"),
                        setTimeout(() => {
                          gsap.to("#pehlePot", { display: "none" }),
                            gsap.to("#fillPipe", { display: "inline-block" });
                        }, 400),
                        setTimeout(() => {
                          gsap.to("#baadmePot", { display: "inline-block" }),
                            (aq = !1),
                            (as = !0);
                        }, 600);
                    },
                  }),
                  aa.addEventListener("click", function () {
                    !0 === s
                      ? (gsap.to(".eppen333", {
                          translateX: "100px",
                          translateY:
                            ac.matches && J.classList.contains("sim--head-full")
                              ? "-92px"
                              : "-200px",
                        }),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 30 });
                        }, 2e3),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 60 }),
                            gsap.to(".ghummi", {
                              fill: "#00FFE0",
                              fillOpacity: "0.3",
                            });
                        }, 2200),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 90 });
                        }, 2400),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 120 });
                        }, 2600),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 150 });
                        }, 2800),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 180 });
                        }, 3e3),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 150 });
                        }, 3200),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 120 });
                        }, 3400),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 90 });
                        }, 3600),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 60 });
                        }, 3800),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 30 });
                        }, 4e3),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 0 });
                        }, 4200),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 30 });
                        }, 5e3),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 60 });
                        }, 5200),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 90 });
                        }, 5400),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 120 });
                        }, 5600),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 150 });
                        }, 5800),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 180 });
                        }, 6e3),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 150 });
                        }, 6200),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 120 });
                        }, 6400),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 90 });
                        }, 6600),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 60 });
                        }, 6800),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 30 });
                        }, 7e3),
                        setTimeout(() => {
                          gsap.to(".eppen333", { rotate: 0 }),
                            gsap.to(".ghummi", {
                              fill: "url(#paint0_linear_1_3)",
                              fillOpacity: 1,
                            }),
                            gsap.to("#dna", { display: "inline-block" });
                        }, 7200),
                        setTimeout(() => {
                          gsap.to(".eppen333", {
                            translateX: "0%",
                            translateY: "0%",
                          }),
                            (aa.style.display = "none"),
                            (Z.textContent = "Now incubation starts"),
                            aB(5, !1, !0, !1);
                        }, 7500))
                      : az();
                  }))
                : this.hitTest(".eppen-full") &&
                  !0 === as &&
                  !1 === t &&
                  ((D.style.display = "none"),
                  (E.style.display = "none"),
                  (F.style.display = "none"),
                  (s = !0),
                  (t = !0),
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
                  (Z.textContent = "Click on Invert mix"),
                  (ah = !0))
              : az();
          },
        });
    } else if (!0 === ah)
      setTimeout(() => {
        (F.style.display = "block"),
          gsap.to(".hand3", {
            translateX:
              ac.matches && J.classList.contains("sim--head-full") ? 50 : 130,
            translateY:
              ac.matches && J.classList.contains("sim--head-full") ? -40 : -110,
            duration: 4,
            opacity: 1,
            ease: "out",
          }),
          gsap.to(".hand3", { opacity: 0, delay: 4 });
      }, 1500),
        (ah = !1),
        (h.disabled = !0),
        (b.value = 1e3),
        (g.value = 5),
        (aa.style.display = "none"),
        (k.textContent = 1e3),
        (l.textContent = 5),
        (_.style.display = "none"),
        (Z.textContent = "Drag the eppendorf into the centrifuge"),
        (j.textContent = "ON"),
        M.classList.replace("btn-green", "btn-nor"),
        (N.textContent = ""),
        L.classList.remove("shake-img"),
        gsap.to(".pippete", { display: "none" }),
        y.forEach((a) => {
          a.style.display = "none";
        }),
        gsap.to(".centri-cont", { display: "inline-block" }),
        X.forEach((a) => (a.style.display = "none")),
        gsap.to(".viewing", { display: "inline-block" }),
        Draggable.create(".eppen-full", {
          bounds: ".bchKrhna",
          onDrag: function () {
            this.hitTest(".centrifuge-full") &&
              TweenLite.to(this.target, 1, {
                jindaHo: function () {
                  setTimeout(() => {
                    gsap.to(".openDhkkn", { translateX: "-20px" }),
                      (Z.textContent =
                        "Now switch ON the centrifuge, select RPM at 10000 & timer at 20 min, then click on Start");
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
                  document.querySelector(".switching2").style.display = "none";
                  let a = document.querySelector(".swit");
                  (a.style.display = "block"),
                    a.addEventListener("click", function () {
                      "OFF" === j.textContent &&
                      1e4 == k.textContent &&
                      20 == l.textContent
                        ? (navigator.vibrate(5e3),
                          ad.play(),
                          gsap.to(".centri-rotor", { display: "inline-block" }),
                          L.classList.add("shake-img"),
                          setTimeout(() => {
                            gsap.to(".eppen-full", {
                              translateX: "250px",
                              translateY: "-154px",
                            }),
                              gsap.to(".centri-rotor", { display: "none" });
                          }, 4e3),
                          setTimeout(() => {
                            gsap.to(".openDhkkn", { translateX: "-20px" });
                          }, 5e3),
                          setTimeout(() => {
                            gsap.to(".eppen-full", {
                              display: "inline-block",
                              translateX: 0,
                              translateY: 0,
                            }),
                              gsap.to("#Distilled-solution", {
                                display: "inline-block",
                                fill: "#00FFE0",
                                fillOpacity: 0.75,
                              }),
                              gsap.to("#dna", {
                                display: "inline-block",
                                opacity: 0,
                              });
                          }, 6e3),
                          setTimeout(() => {
                            gsap.to(".openDhkkn", { translateX: "0px" });
                          }, 8e3),
                          setTimeout(() => {
                            gsap.to(".viewing", { display: "none" }),
                              (ai = !0),
                              (h.disabled = !1),
                              (Z.textContent = "Click on Next");
                          }, 8500))
                        : az();
                    });
                },
              });
          },
        });
    else if (!0 === ai)
      gsap.to(".hand3", {
        translateX:
          ac.matches && J.classList.contains("sim--head-full") ? -105 : -194,
        translateY:
          ac.matches && J.classList.contains("sim--head-full") ? -24 : -40,
      }),
        (ai = !1),
        (h.disabled = !0),
        (R.src = "images/background3.png"),
        gsap.to(".eppen_part2", { display: "block" }),
        setTimeout(() => {
          (F.style.display = "block"),
            gsap.to(".hand3", {
              translateX:
                ac.matches && J.classList.contains("sim--head-full")
                  ? -38
                  : -64,
              translateY:
                ac.matches && J.classList.contains("sim--head-full")
                  ? -24
                  : -40,
              duration: 4,
              opacity: 1,
              ease: "out",
            }),
            gsap.to(".hand3", { opacity: 0, delay: 4 });
        }, 1e3),
        (Z.textContent = "Now take the supernatant in a fresh tube"),
        Draggable.create(".eppen-full", {
          bounds: ".e-coli-sim-full",
          onDrag: function () {
            this.hitTest(".eppen_part2") &&
              TweenLite.to(this.target, 1, {
                rotation: 110,
                thisIsLast: function () {
                  setTimeout(() => {
                    gsap.to(".fill-rot", {
                      rotate: -145,
                      transformOrigin: "14px 15px",
                    });
                  }, 500),
                    setTimeout(() => {
                      gsap.to("#Vector_2", {
                        rotate: 145,
                        transformOrigin: "60px 15px",
                      });
                    }, 600),
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
                        gsap.to("#bchaHua", { translateY: "-410px" });
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
                      gsap.to("#shifting", { display: "inline-block" });
                    }, 2e3),
                    setTimeout(() => {
                      gsap.to("#Vector_2", { rotate: 0 });
                    }, 2500),
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
                      gsap.to(".eppen-full", {
                        translateY: "0%",
                        translateX: "0%",
                      });
                    }, 5e3),
                    setTimeout(() => {
                      (Z.textContent = "Click on Next"),
                        (aj = !0),
                        (h.disabled = !1);
                      let a = document.querySelector(".pippete1");
                      a.style.transform = "rotate(90deg)";
                    }, 5100);
                },
              });
          },
        });
    else if (!0 === aj) {
      (G.style.display = "block"),
        setTimeout(() => {
          gsap.to(".hand4", {
            translateX:
              ac.matches && J.classList.contains("sim--head-full") ? 88 : 120,
            translateY:
              ac.matches && J.classList.contains("sim--head-full") ? -40 : -100,
            duration: 4,
            opacity: 1,
            ease: "out",
          }),
            gsap.to(".hand4", { opacity: 0, delay: 4 });
        }, 1e3),
        (aj = !1),
        (Z.textContent =
          "Select the volume of Iso-Propanol solution as 800uL then drag the pippete into the solution"),
        (h.disabled = !0);
      let u = !1;
      gsap.to(".pippete1", {
        rotate: 90,
        display: "block",
        translateX: "0px",
        translateY: "0px",
      }),
        (R.src = "images/background2.png");
      let f = document.querySelectorAll(".ISO");
      f.forEach((a) => {
        a.style.display = "block";
      }),
        gsap.to(".eppen-full", { display: "none" }),
        gsap.to(".eppen_part2", {
          translateX:
            ac.matches && J.classList.contains("sim--head-full")
              ? "-65px"
              : "-130",
        }),
        gsap.to(".iso-beaker", { display: "block" }),
        Draggable.create(".pippete1", {
          bounds: ".bchKrhna",
          onDrag: function () {
            800 == p.textContent
              ? (gsap.to(".pippete1", { rotate: 0 }),
                this.hitTest(".iso-beaker") &&
                  (setTimeout(() => {
                    gsap.to(".hand4", {
                      translateX:
                        ac.matches && J.classList.contains("sim--head-full")
                          ? -102
                          : -194,
                      translateY:
                        (ac.matches && J.classList.contains("sim--head-full"),
                        -34),
                      duration: 4,
                      opacity: 1,
                      ease: "out",
                    }),
                      gsap.to(".hand4", { opacity: 0, delay: 4 });
                  }, 1e3),
                  TweenLite.to(this.target, 1, {
                    babuJi: function () {
                      (Z.textContent = "Now drag the pipette to the eppendorf"),
                        setTimeout(() => {
                          gsap.to("#isoP", { display: "none" }),
                            gsap.to("#fillPipe", { display: "inline-block" });
                        }, 500),
                        setTimeout(() => {
                          gsap.to("#isoB", { display: "inline-block" });
                        }, 700);
                    },
                  }),
                  (an = !0)),
                this.hitTest(".eppen_part2") &&
                  !0 === an &&
                  ((u = !0),
                  (mjnu = !0),
                  setTimeout(() => {
                    gsap.to("#Vector_2", {
                      rotate: 145,
                      transformOrigin: "60px 15px",
                    });
                  }, 100),
                  setTimeout(() => {
                    gsap.to("#fillPipe", { display: "none" });
                  }, 500),
                  setTimeout(() => {
                    gsap.to("#isoFull", { display: "inline-block" });
                  }, 1e3),
                  setTimeout(() => {
                    gsap.to("#Vector_2", {
                      rotate: 0,
                      transformOrigin: "60px 15px",
                    }),
                      (Z.textContent = "Click on invert mix");
                  }, 1500),
                  (aa.style.display = "block"),
                  document,
                  aa.addEventListener("click", function () {
                    !0 === u
                      ? ((ao = 4),
                        gsap.to(".eppen_part2", {
                          translateX:
                            ac.matches && J.classList.contains("sim--head-full")
                              ? "50px"
                              : "100px",
                          translateY:
                            ac.matches && J.classList.contains("sim--head-full")
                              ? "-92px"
                              : "-200px",
                        }),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 30 });
                        }, 2e3),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 60 }),
                            gsap.to(".ghummi1", {
                              fill: "#00FFE0",
                              fillOpacity: "0.3",
                            });
                        }, 2200),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 90 });
                        }, 2400),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 120 });
                        }, 2600),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 150 });
                        }, 2800),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 180 });
                        }, 3e3),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 150 });
                        }, 3200),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 120 });
                        }, 3400),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 90 });
                        }, 3600),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 60 });
                        }, 3800),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 30 });
                        }, 4e3),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 0 });
                        }, 4200),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 30 });
                        }, 5e3),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 60 });
                        }, 5200),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 90 });
                        }, 5400),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 120 });
                        }, 5600),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 150 });
                        }, 5800),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 180 });
                        }, 6e3),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 150 });
                        }, 6200),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 120 });
                        }, 6400),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 90 });
                        }, 6600),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 60 });
                        }, 6800),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 30 });
                        }, 7e3),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", { rotate: 0 }),
                            gsap.to(".ghummi1", {
                              fill: "url(#paint0_linear_4_3)",
                              fillOpacity: 1,
                            }),
                            gsap.to("#dna", { display: "inline-block" });
                        }, 7200),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", {
                            translateX:
                              ac.matches &&
                              J.classList.contains("sim--head-full")
                                ? "-66px"
                                : "0%",
                            translateY: "0%",
                          });
                        }, 7300),
                        setTimeout(() => {
                          gsap.to(".eppen_part2", {
                            translateX:
                              ac.matches &&
                              J.classList.contains("sim--head-full")
                                ? "-65px"
                                : -130,
                          }),
                            (aa.style.display = "none"),
                            (ak = !0),
                            (at = !0);
                        }, 7500))
                      : az();
                  }),
                  !0 === at && aB(5, !1, !1, !0)))
              : az();
          },
        });
    } else if (!0 === ak) {
      (N.textContent = ""),
        (aa.style.display = "none"),
        (h.disabled = !0),
        (ak = !1),
        gsap.to(".swit", { display: "none" }),
        gsap.to(".pippete", { display: "none" });
      let i = document.querySelectorAll(".ISO");
      i.forEach((a) => {
        a.style.display = "none";
      }),
        gsap.to(".iso-beaker", { display: "none" }),
        (L.style.display = "block");
      let c = document.querySelector(".switchg");
      (_.style.display = "none"),
        (O.style.display = "none"),
        (c.style.display = "inline-block"),
        (Z.textContent = "Drag the eppendorf into the centrifuge"),
        setTimeout(() => {
          gsap.to(".hand4", {
            translateX:
              ac.matches && J.classList.contains("sim--head-full") ? 9 : 94,
            translateY:
              ac.matches && J.classList.contains("sim--head-full") ? -64 : -143,
            duration: 4,
            opacity: 1,
            ease: "out",
          }),
            gsap.to(".hand4", { opacity: 0, delay: 4 });
        }, 1e3),
        (j.textContent = "ON"),
        M.classList.replace("btn-green", "btn-nor"),
        L.classList.remove("shake-img"),
        gsap.to(".centri-cont", { display: "inline-block" }),
        gsap.to(".viewing", { display: "inline-block" }),
        (b.value = 1e3),
        (g.value = 5),
        (k.textContent = 1e3),
        (l.textContent = 5),
        Draggable.create(".eppen_part2", {
          bounds: ".bchKrhna",
          onDrag: function () {
            this.hitTest(".centrifuge-full") &&
              (setTimeout(() => {
                gsap.to(".openDhkkn", { translateX: "-20px" }),
                  (Z.textContent =
                    "Now switch ON the centrifuge, select RPM at 10000 & timer at 20 min, then click on Start");
              }, 200),
              setTimeout(() => {
                gsap.to(".eppen_part2", { display: "none" });
              }, 400),
              setTimeout(() => {
                gsap.to(".openDhkkn", { translateX: "0px" });
              }, 1e3),
              setTimeout(() => {
                gsap.to(".eppen_part2", { translateX: -130 });
              }, 4100));
          },
        }),
        c.addEventListener("click", function () {
          "OFF" === j.textContent && 1e4 == k.textContent && 20 == l.textContent
            ? (navigator.vibrate(5e3),
              ad.play(),
              gsap.to(".centri-rotor", { display: "inline-block" }),
              L.classList.add("shake-img"),
              setTimeout(() => {
                gsap.to(".centri-rotor", { display: "none" });
              }, 4e3),
              setTimeout(() => {
                gsap.to(".openDhkkn", { translateX: "-20px" });
              }, 5e3),
              gsap.to(".eppen_part2", {
                translateX:
                  ac.matches && J.classList.contains("sim--head-full")
                    ? "13px"
                    : "250px",
                translateY:
                  ac.matches && J.classList.contains("sim--head-full")
                    ? "-60px"
                    : "-154px",
              }),
              setTimeout(() => {
                gsap.to(".eppen_part2", {
                  display: "inline-block",
                  fill: "#c7e3e1",
                }),
                  gsap.to("#bubble", { display: "inline-block" }),
                  gsap.to("#dna1", { display: "block" }),
                  gsap.to("#pallet1", { display: "block" });
              }, 5500),
              setTimeout(() => {
                gsap.to(".openDhkkn", { translateX: "0px" });
              }, 8e3),
              setTimeout(() => {
                gsap.to(".viewing", { display: "none" }),
                  (Z.textContent =
                    "Drag the eppendorf towards discard box for discarding the supernatant");
              }, 8500),
              setTimeout(() => {
                gsap.to(".discard", {
                  display: "block",
                  translateX:
                    ac.matches && J.classList.contains("sim--head-full")
                      ? "-50px"
                      : "-110px",
                }),
                  gsap.to(".hand4", {
                    translateX:
                      ac.matches && J.classList.contains("sim--head-full")
                        ? -5
                        : 12,
                    translateY:
                      ac.matches && J.classList.contains("sim--head-full")
                        ? -24
                        : -56,
                    duration: 4,
                    opacity: 1,
                    ease: "out",
                  }),
                  gsap.to(".hand4", { opacity: 0, delay: 4 });
              }, 9e3),
              Draggable.create(".eppen_part2", {
                bounds: ".e-coli-sim-full",
                onDrag: function () {
                  this.hitTest(".discard") &&
                    TweenLite.to(this.target, 1, {
                      rotation: -110,
                      thisIsLast: function () {
                        setTimeout(() => {
                          gsap.to("#Vector_2", {
                            rotate: 145,
                            transformOrigin: "60px 15px",
                          }),
                            gsap.to("#shifting", { display: "none" });
                        }, 500),
                          setTimeout(() => {
                            gsap.to("#bubble", { translateY: "-180px" }),
                              gsap.to("#isoFull", {
                                translateY: "-400px",
                                display: "none",
                              });
                          }, 1e3),
                          setTimeout(() => {
                            gsap.to("#bubble", {
                              opacity: 0,
                              overFlow: "visible",
                              transformOrigin: "center",
                            }),
                              gsap.to("#dna1", { display: "inline-block" }),
                              gsap.to("#pallet1", { display: "inline-block" });
                          }, 1500),
                          setTimeout(() => {
                            gsap.to(".eppen_part2", { rotate: 0 });
                          }, 3e3),
                          setTimeout(() => {
                            gsap.to("#Vector_2", {
                              rotate: 0,
                              transformOrigin: "60px 15px",
                            });
                          }, 3500),
                          setTimeout(() => {
                            gsap.to(".discard", { display: "none" }),
                              gsap.to(".pippete", {
                                translateX: "0px",
                                translateY: "0px",
                                rotate: 90,
                              }),
                              (Z.textContent = "Click on Next"),
                              (h.disabled = !1),
                              (al = !0);
                          }, 4e3);
                      },
                    });
                },
              }))
            : az();
        });
    } else if (!0 === al) {
      (R.src = "images/background4.png"),
        setTimeout(() => {
          (H.style.display = "block"),
            gsap.to(".hand5", {
              translateX:
                ac.matches && J.classList.contains("sim--head-full")
                  ? 149
                  : -410,
              translateY:
                ac.matches && J.classList.contains("sim--head-full")
                  ? -39
                  : -107,
              duration: 3,
              opacity: 1,
              ease: "out",
            }),
            gsap.to(".hand5", { opacity: 0, delay: 4 });
        }, 1e3),
        (al = !1),
        (Z.textContent =
          "Select the volume of Double distilled water as 30uL then drag the pippete and dip into the solution"),
        gsap.to(".eppen_part2", { translateX: 0, translateY: 0 }),
        Y.forEach((a) => (a.style.display = "inline-block")),
        gsap.to(".forward", { display: "none" }),
        gsap.to(".dis-water", { display: "inline-block" }),
        gsap.to(".pippete", {
          display: "inline-block",
          translateX:
            ac.matches && J.classList.contains("sim--head-full")
              ? "-109px"
              : "90px",
          translateY: "0px",
          rotate: 90,
        }),
        gsap.to("#fillPipe", { display: "none" });
      let x = !1;
      Draggable.create(".pippete", {
        bounds: ".e-coli-sim-full",
        onDrag: function () {
          30 == q.textContent
            ? (gsap.to(".pippete", { rotate: 0 }),
              this.hitTest(".dis-water")
                ? (setTimeout(() => {
                    (H.style.display = "block"),
                      gsap.to(".hand5", {
                        translateX:
                          ac.matches && J.classList.contains("sim--head-full")
                            ? 30
                            : -175,
                        translateY:
                          ac.matches && J.classList.contains("sim--head-full")
                            ? -27
                            : -34,
                        duration: 3,
                        opacity: 1,
                        ease: "out",
                      }),
                      gsap.to(".hand5", { opacity: 0, delay: 4 });
                  }, 1e3),
                  TweenLite.to(this.target, 1, {
                    sweety: function () {
                      gsap.to("#pehlePani", { display: "none" }),
                        gsap.to("#fillPipe", { display: "inline-block" }),
                        gsap.to("#badmePani", { display: "inline-block" }),
                        (Z.textContent = "Drag the pipette into the eppendorf");
                    },
                  }),
                  (x = !0))
                : !0 === x &&
                  this.hitTest(".eppen_part2") &&
                  TweenLite.to(this.target, 1, {
                    sundar: function () {
                      (x = !1),
                        setTimeout(() => {
                          gsap.to("#Vector_2", {
                            rotate: 145,
                            transformOrigin: "60px 15px",
                          });
                        }, 400),
                        setTimeout(() => {
                          gsap.to("#shifting", {
                            translateY: "0%",
                            display: "inline-block",
                            fill: "#00FFE0",
                            fillOpacity: 1,
                          });
                        }, 1e3),
                        setTimeout(() => {
                          gsap.to("#fillPipe", { display: "none" }),
                            gsap.to("#Vector_2", {
                              rotate: 0,
                              transformOrigin: "60px 15px",
                            });
                        }, 1200),
                        (Z.textContent =
                          "Congratulations!\u{1F389}\u{1F389} You have successfully completed the lab simulation");
                    },
                  }))
            : 30 !== q.textContent && az();
        },
      });
    }
  });
});
