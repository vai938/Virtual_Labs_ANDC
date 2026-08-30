let intervalA = document.querySelector('.interval--A');
let intervalB = document.querySelector('.interval--B');
let userIterations = document.querySelector('.iterations');
const a = document.querySelector('.cube-coefficient');
const b = document.querySelector('.square-coefficient');
const c = document.querySelector('.linear-coefficient');
const d = document.querySelector('.coefficient');
const submit = document.querySelector('.root--finder');
const equationResult = document.querySelector('.eqnResult');
const validResult = document.querySelector('.validRange');
const equationResult1 = document.querySelector('.eqnResult1');
const validResult1 = document.querySelector('.validRange1');
const algebra = document.querySelector('.algebra');
const transe = document.querySelector('.transe');
const algebra1 = document.querySelector('.algebra1');
const transe1 = document.querySelector('.transe1');
const check = document.querySelector('.check');
const submit2 = document.querySelector('.sub');
const lowerLimit = document.querySelector('.lowerLim');
const upperLimit = document.querySelector('.upperLim');
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


submit.addEventListener('click', function (e) {
    e.preventDefault();
    let iterations = 0;
    let intervalAvalue = Number(intervalA.value);
    let intervalBvalue = Number(intervalB.value);
    const valueA = Number(a.value);
    const valueB = Number(b.value);
    const valueC = Number(c.value);
    const valueD = Number(d.value);
    const userIterationsValue = Number(userIterations.value);
    let root;
    let equation;

    for (iterations; iterations < userIterationsValue; iterations++) {
        const equation1 = valueA * intervalAvalue ** 3 + valueB * intervalAvalue ** 2 + valueC * intervalAvalue + valueD;
        const equation2 = valueA * intervalBvalue ** 3 + valueB * intervalBvalue ** 2 + valueC * intervalBvalue + valueD;

        if ((equation1 * equation2) > 1) {
            validResult.textContent = 'Enter a valid range';
        } else {
            root = (intervalAvalue + intervalBvalue) / 2;
            equation = valueA * root ** 3 + valueB * root ** 2 + valueC * root + valueD;
            if (equation > 0) {
                intervalBvalue = root;
            } else if (equation < 0) {
                intervalAvalue = root;
            }
            equationData.push([iterations + 1, equation1, equation2, root]);
            interval.push(iterations);
            arrEquation1.push(equation1);
            arrEquation2.push(equation2);
            arrRoot.push(root);
        }
    };
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
    equationResult.textContent = root;
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
    for (let i = 0; i < 100; i++) {
        let a = elev(valueLowLim);
        let b = elev(valueUpLim);
        if (a * b > 1) {
            equationResult1.textContent = "Enter a valid range"
        } else {
            c = (valueLowLim + valueUpLim) / 2;
            
            if (elev(c) > 0) {
                valueUpLim = c; 
            } else {
                valueLowLim = c;
            }
            equationData.push([i + 1, a, b, c]);
            interval.push(i);
            arrEquation1.push(a);
            arrEquation2.push(b);
            arrRoot.push(c);
            console.log(i,a,b,c);
        }
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
})

document.getElementById("file--download").onclick = function down(e) {
    e.preventDefault();
    function download_csv_file() {
        var rows = ['Iterations', 'f(A)', 'f(B)', 'Root\n'];
        equationData.forEach(function (cell) {
            rows += cell.join(',');
            rows += "\n";
        });

        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(rows);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'Bisection-Method.csv';
        hiddenElement.click();
    }
    download_csv_file();
};
