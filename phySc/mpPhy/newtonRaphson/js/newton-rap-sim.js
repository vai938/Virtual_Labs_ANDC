let aroundVal = document.querySelector(".interval--A");
let userIterations = document.querySelector(".iterations");
const a = document.querySelector(".cube-coefficient");
const b = document.querySelector(".square-coefficient");
const c = document.querySelector(".linear-coefficient");
const d = document.querySelector(".coefficient");
const submit = document.querySelector(".root--finder");
const equationResult = document.querySelector(".eqnResult");
const validResult = document.querySelector(".validRange");
const algebraic = document.querySelector(".alg-eqn");
const algebraicEqn1 = document.querySelector(".algebraic--equation1");
const algebraicEqn2 = document.querySelector(".algebraic--equation2");
const transedental = document.querySelector(".trsn-eqn");
const transedentalEqn1 = document.querySelector(".transedental--equation1");
const transedentalEqn2 = document.querySelector(".transedental--equation2");
const equationData = [];
const interval = [];
const arrEquation1 = [];
const arrGuess = [];
const arrRoot = [];

document.getElementById("select-eqn").addEventListener("change", function (e) {
  if (e.target.value === "Algebraic-equation") {
    algebraicEqn1.style.display = "block";
    algebraicEqn2.style.display = "block";
    transedentalEqn1.style.display = "none";
    transedentalEqn2.style.display = "none";
  } else if (e.target.value === "Transcendental-equation") {
    transedentalEqn1.style.display = "block";
    transedentalEqn2.style.display = "block";
    algebraicEqn1.style.display = "none";
    algebraicEqn2.style.display = "none";
  } else {
    transedentalEqn1.style.display = "none";
    transedentalEqn2.style.display = "none";
    algebraicEqn1.style.display = "none";
    algebraicEqn2.style.display = "none";
  }
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let iterations = 0;
  let guess = Number(aroundVal.value);
  const inpGuess = Number(aroundVal.value);
  const valueA = Number(a.value);
  const valueB = Number(b.value);
  const valueC = Number(c.value);
  const valueD = Number(d.value);
  const userIterationsValue = Number(userIterations.value);
  let root;
  let valEqu1;
  let valEqu2;
  const equation1 = function () {
    return valueA * root ** 3 + valueB * root ** 2 + valueC * root + valueD;
  };
  const equation2 = function () {
    return 3 * valueA * root ** 2 + 2 * valueB * root + valueC;
  };

  for (iterations; iterations < userIterationsValue; iterations++) {
    root = guess;
    valEqu1 = equation1(valueA, valueB, valueC, valueD, root);
    valEqu2 = equation2(valueA, valueB, valueC, root);
    guess = root - valEqu1 / valEqu2;
    equationData.push([iterations + 1, inpGuess, root]);
    interval.push(iterations);
    arrEquation1.push(valEqu1);
    arrRoot.push(root);
    arrGuess.push(inpGuess);
  }
  let trace1 = {
    x: interval,
    y: arrGuess,
    type: "scatter",
    name: "guess",
  };
  let trace2 = {
    x: interval,
    y: arrRoot,
    type: "scatter",
    name: "Root value",
  };
  let layout = {
    autosize: true,
    title: "Guess vs Root",
    xaxis: {
      title: "Value of Root",
    },
    yaxis: {
      title: "Input Guess",
    },
  };
  const data12 = [trace1, trace2];
  var config = {responsive: true};
  Plotly.newPlot("graph", data12, layout, config);
  equationResult.textContent = root;
});
document.getElementById("file--download").onclick = function down(e) {
  e.preventDefault();
  function download_csv_file() {
    var rows = ["Iterations", "Guess Input", "Root\n"];
    equationData.forEach(function (cell) {
      rows += cell.join(",");
      rows += "\n";
    });

    var hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(rows);
    hiddenElement.target = "_blank";
    hiddenElement.download = "Newton-Rapson-Method.csv";
    hiddenElement.click();
  }
  download_csv_file();
};

let aroundValTrans = document.querySelector(".interval--trans");
let val, intEq1, intEq2;
let dip;
const fdArr = [];
let Iterate = document.querySelector(".iterationsTrans");
const submitTrans = document.querySelector(".root--finder-tran");
const equationResultTran = document.querySelector(".eqnResultTran");
const tr1 = document.querySelector(".root1");
const tr2 = document.querySelector(".root2");
const tr3 = document.querySelector(".root3");
const tr4 = document.querySelector(".root4");
const disp1 = document.querySelector(".inten1");
const disp2 = document.querySelector(".inten2");
const disp3 = document.querySelector(".inten3");
const disp4 = document.querySelector(".inten4");
// const

submitTrans.addEventListener("click", function (e) {
  e.preventDefault();
  let transGuess = Number(aroundValTrans.value);
  let iteration = 0;
  const itera = Number(Iterate.value);
  const intensityEq = function () {
    return val * Math.cos(val) - Math.sin(val);
  };
  const intensityDiff = function () {
    return -val * Math.sin(val);
  };

  for (iteration; iteration < itera; iteration++) {
    val = transGuess;
    intEq1 = intensityEq(val);
    intEq2 = intensityDiff(val);
    transGuess = val - intEq1 / intEq2;
  }
  equationResultTran.textContent = val;
});

//  Fraunhofer diffraction
document.querySelector(".graph--tran").addEventListener("click", function (e) {
  e.preventDefault();
  const frn = [-10.904, -7.725, -4.493, 0, 4.493, 7.725, 10.904];
  const frnMain = [
    Number(tr1.value),
    Number(tr2.value),
    Number(tr3.value),
    Number(tr4.value),
  ];
  const fraunVal = [];
  const disp = [disp1, disp2, disp3, disp4];
  const interval = [];
  const val1 = [0];
  const val2 = [1];
  const fraunHoff = function (dip) {
    if (dip === 0) return 1;
    else return (Math.sin(dip) / dip) ** 2;
  };
  for (let j = 0; j <= 3; j++) {
    disp[j].textContent = fraunHoff(frnMain[j]).toFixed(6);
    fdArr.push([j, frn[j], fraunVal[j]]);
    interval.push(j);
  }
  frn.push(...frnMain);
  const uniqFrn = [...new Set(frn)];
  uniqFrn.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < uniqFrn.length; i++) {
    fraunVal.push(fraunHoff(uniqFrn[i]).toFixed(6));
  }
  console.log(uniqFrn);
  console.log(fraunVal);
  // frn.push(...[-10.904,-7.725,-4.493,0,4.493,7.725,10.904,])
  // fraunVal.push(...[0.0083,0.016,0.047,1,0.047,0.016,0.0083,]);

  setTimeout(() => {
    let layout = {
      autosize: true,
      title: "Root vs Intensity",
      xaxis: {
        title: "Value of Root",
      },
      yaxis: {
        title: "Intensity",
      },
    };
    let trace1 = {
      x: val1,
      y: val2,
      type: "scatter",
      name: "Max Intensity",
    };

    let trace2 = {
      x: uniqFrn,
      y: fraunVal,
      type: "scatter",
      name: "Intensity",
      line: {
        shape: "spline",
      },
    };
    const data12 = [trace1, trace2];
    var config = {responsive: true}
    Plotly.newPlot("graph--1", data12, layout,config);
  }, 1000);
});

document.getElementById("file--download--tran").onclick = function down(e) {
  e.preventDefault();
  function download_csv_file() {
    var rows = ["Iterations", "Roots", "Intensity\n"];
    fdArr.forEach(function (cell) {
      rows += cell.join(",");
      rows += "\n";
    });

    var hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(rows);
    hiddenElement.target = "_blank";
    hiddenElement.download = "Intensity-Fraunhofer.csv";
    hiddenElement.click();
  }
  download_csv_file();
};
