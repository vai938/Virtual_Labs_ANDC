let guess = document.querySelector('.guess');
const w = document.querySelector(".cube-coefficient");
const r = document.querySelector(".square-coefficient");
const c = document.querySelector(".linear-coefficient");
const d = document.querySelector(".coefficient");
const submit = document.querySelector(".root--finder");
const equationResult = document.querySelector(".eqnResult");
const validResult = document.querySelector(".validRange");
const algebra = document.querySelector('.algebra');
const transe = document.querySelector('.transe');
const algebra1 = document.querySelector('.algebra1');
const transe1 = document.querySelector('.transe1');
const check = document.querySelector('.check');
const submit2 = document.querySelector('.sub');
const equationResult1= document.querySelector('.eqnResult1')
const equationData = [];
const interval = [];
const arrEquation1 = [];
const arrEquation2 = [];
const arrRoot = [];

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
  let a = Number(guess.value);
  let x0 = 0;
  const valueA = Number(w.value);
  const valueB = Number(r.value);
  const valueC = Number(c.value);
  const valueD = Number(d.value);
  const iterativeMethod = function (x) {
    if (valueA === 0) return (-(valueC * x + valueD) / valueB) ** 0.5
    else if (valueB === 0) return (-(valueD + valueC * x) / valueA) ** (1 / 3)
    else return (-(d + x * valueC + x ** 2 * valueB) / valueA) ** (1 / 3)
  };

  for (iterations; iterations < 11; iterations++) {
    x0 = iterativeMethod(a);
    a = x0;
    equationData.push([iterations + 1, iterativeMethod(x0)]);
    interval.push(iterations);
    arrRoot.push(iterativeMethod(x0));
  };
  let trace1 = {
    x: interval,
    y: guess.value,
    type: "scatter",
    name: "f(a)",
  };
  let trace2 = {
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
  const data12 = [trace1, trace2];
  var config = { responsive: true };
  Plotly.newPlot("graph", data12, layout, config);
  equationResult.textContent = x0;
});

submit2.addEventListener('click', function (e) {
  e.preventDefault();
  let tGuess = document.querySelector('.tGuess');
  const trigo = ["sin", "cos", "tan", "e^x"];
  const valCheck = check.value;
  let guess = Number(tGuess.value);
  let c = 0;
  const values = valCheck.split(" ");
  const emArr = [];
  values.forEach(function (el) {
    if (trigo.some(i => el.includes(i))) {
      emArr.push("Math.".concat(el));
    } else {
      emArr.push(el);
    }
  });
  let lk= emArr.indexOf("+");
  let lk1= emArr.indexOf("-");
  let chauhan= emArr.indexOf("x");
  let val1= emArr[0];
  if (lk!==-1){
    emArr[lk]= "-"
    emArr[lk1]= "+" 
    // emArr[0]= "-";
    // emArr[1]= val1
  };
  // emArr.splice(chauhan,1);
  
  console.log(emArr);
  const elev = function (x) {
    const inputFunction = emArr.join("");
    return eval(inputFunction);
  }
  for (let i = 0; i < 20; i++) {
    c= elev(guess);
    guess= c;

    equationData.push([i + 1, elev(c)]);
    interval.push(i);
    arrRoot.push(elev(c));
    console.log(i, c);
    equationResult1.textContent = c
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
    hiddenElement.download = "Iterative-Method.csv";
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
    hiddenElement.download = "Iterative-Method.csv";
    hiddenElement.click();
  }
  download_csv_file();
};
