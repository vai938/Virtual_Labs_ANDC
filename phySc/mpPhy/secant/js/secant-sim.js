let intervalA = document.querySelector(".interval--A");
let intervalB = document.querySelector(".interval--B");
const w = document.querySelector(".cube-coefficient");
const r = document.querySelector(".square-coefficient");
const c = document.querySelector(".linear-coefficient");
const d = document.querySelector(".coefficient");
const submit = document.querySelector(".root--finder");
const equationResult = document.querySelector(".eqnResult");
const equationResult1 = document.querySelector(".eqnResult1");
const validResult = document.querySelector(".validRange");
const equationData = [];
const interval = [];
const arrEquation1 = [];
const arrEquation2 = [];
const arrRoot = [];
const algebra = document.querySelector('.algebra');
const transe = document.querySelector('.transe');
const algebra1 = document.querySelector('.algebra1');
const transe1 = document.querySelector('.transe1');
const check = document.querySelector('.check');
const submit2 = document.querySelector('.sub');
const lowerLimit = document.querySelector('.lowerLim');
const upperLimit = document.querySelector('.upperLim');

document.getElementById("select-eqn").addEventListener("change", function (e) {
  if (e.target.value === "Algebraic-equation") {
    algebra.style.display = "block";
    transe.style.display = "none";
    algebra1.style.display = "block";
    transe1.style.display = "none";
  } else if (e.target.value === "Transcendental-equation") {
    algebra.style.display = "none";
    transe.style.display = "block";
    algebra1.style.display = "none";
    transe1.style.display = "block";
  } else {
    transe.style.display = "none";
    algebra.style.display = "none";
    transe1.style.display = "none";
    algebra1.style.display = "none";
  }
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let iterations = 0;
  let a = Number(intervalA.value);
  let b = Number(intervalB.value);
  let x0 = 0;
  let x1 = 0;
  let fx0 = 0;
  let fx1 = 0;
  let x2 = 0;
  const valueA = Number(w.value);
  const valueB = Number(r.value);
  const valueC = Number(c.value);
  const valueD = Number(d.value);
  const secantMethod = function (x) {
    let i = (valueA * x ** 3 + valueB * x ** 2 + valueC * x + valueD)
    return i;
  };

  for (iterations; iterations < 11; iterations++) {
    x0 = a;
    x1 = b;
    fx0 = secantMethod(x0);
    fx1 = secantMethod(x1);
    x2 =
      (x0 * secantMethod(x1) - x1 * secantMethod(x0)) /
      (secantMethod(x1) - secantMethod(x0));
    a = x1;
    b = x2;
    equationData.push([iterations + 1, secantMethod(x0), secantMethod(x1), x2]);
    interval.push(iterations);
    arrEquation1.push(secantMethod(x0));
    arrEquation2.push(secantMethod(x1));
    arrRoot.push(x2);
  };
  let trace1 = {
    x: interval,
    y: arrEquation1,
    type: "scatter",
    name: "f(a)",
  };
  let trace2 = {
    x: interval,
    y: arrEquation2,
    type: "scatter",
    name: "f(b)",
  };
  let trace3 = {
    x: interval,
    y: arrRoot,
    type: "scatter",
    name: "Value of the root",
  };
  let layout = {
    autosize: true,
    title: "Interval vs Calculated roots ",
    xaxis: {
      title: "Intervals",
    },
    yaxis: {
      title: "Calculated Root",
    },
  };
  const data12 = [trace1, trace2, trace3];
  var config = { responsive: true };
  Plotly.newPlot("graph", data12, layout, config);
  equationResult.textContent = x2;
});

submit2.addEventListener('click', function (e) {
  e.preventDefault();
  const trigo = ["sin", "cos", "tan", "e^x"];
  const valCheck = check.value;
  let valueLowLim = Number(lowerLimit.value);
  let valueUpLim = Number(upperLimit.value);
  let c;
  // const values= valCheck.split(/[-\+/]/);
  const values = valCheck.split(" ");
  const emArr = [];
  let x0,x1,fx0,fx1;
  values.forEach(function (el) {
    if (trigo.some(i => el.includes(i))) {
      emArr.push("Math.".concat(el));
    } else {
      emArr.push(el);
    }
  })
  console.log(emArr);
  const elev = function (x) {
    const inputFunction = emArr.join("");
    return eval(inputFunction);
  }
  let a = elev(valueLowLim);
  let b = elev(valueUpLim);
  for (let i = 0; i < 10; i++) {

    x0 = a;
    x1 = b;
    fx0 = elev(x0);
    fx1 = elev(x1);
    x2 =
      (x0 * elev(x1) - x1 * elev(x0)) /
      (elev(x1) - elev(x0));
    a = x1;
    b = x2;
    equationData.push([i + 1, elev(x0), elev(x1), x2]);
    interval.push(i);
    arrEquation1.push(elev(x0));
    arrEquation2.push(elev(x1));
    arrRoot.push(x2);

    console.log(i, x2);
    equationResult1.textContent = x2;
  }
  let trace1 = {
    x: interval,
    y: arrEquation1,
    type: 'scatter',
    name: 'f(a)',
  };
  let trace2 = {
    x: interval,
    y: arrEquation2,
    type: 'scatter',
    name: 'f(b)',
  };
  let trace3 = {
    x: interval,
    y: arrRoot,
    type: 'scatter',
    name: 'Value of the root',
  };
  let layout = {
    autosize: true,
    title: 'Function vs Interval ',
    xaxis: {
      title: 'Intervals'
    },
    yaxis: {
      title: 'Calculated Root',
    }
  };
  const data12 = [trace1, trace2, trace3];
  var config = { responsive: true };
  Plotly.newPlot("graph", data12, layout, config);
});

document.getElementById("file--download").onclick = function down(e) {
  e.preventDefault();
  function download_csv_file() {
    var rows = ["Iterations", "f(A)", "f(B)", "Root\n"];
    equationData.forEach(function (cell) {
      rows += cell.join(",");
      rows += "\n";
    });

    var hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(rows);
    hiddenElement.target = "_blank";
    hiddenElement.download = "Secant-Method.csv";
    hiddenElement.click();
  }
  download_csv_file();
};

document.getElementById("file--download1").onclick = function down(e) {
  e.preventDefault();
  function download_csv_file() {
    var rows = ["Iterations", "f(A)", "f(B)", "Root\n"];
    equationData.forEach(function (cell) {
      rows += cell.join(",");
      rows += "\n";
    });

    var hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(rows);
    hiddenElement.target = "_blank";
    hiddenElement.download = "Secant-Method.csv";
    hiddenElement.click();
  }
  download_csv_file();
};
