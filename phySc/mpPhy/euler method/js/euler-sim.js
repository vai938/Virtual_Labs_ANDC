const fun = document.querySelector(".check");
const valX = document.querySelector(".lowerLim");
const valY = document.querySelector(".upperLim");
const iterations = document.querySelector(".intrvl");
const desiredX = document.querySelector(".ds");
const submit = document.querySelector(".sub");
const result= document.querySelector(".eqnResult1");
const arrayX= [];
const arrayY= [];
const arrayI= [];
const listing= [];

submit.addEventListener("click", function (e) {
    e.preventDefault();
    const functionValue = fun.value;
    const valueXInitial = Number(valX.value);
    const valueYInitial = Number(valY.value);
    const iteration = Number(iterations.value);
    const finalXvalue = Number(desiredX.value);
    const stepSize= (finalXvalue- valueXInitial)/iteration;
    function func(x, y) {
        return eval(functionValue);
    }

    function euler(x0, y, h, x) {
        let temp = -0;
        let i= 0;
        while (x0 < x) {
            i++;
            temp = y;
            y = y + h * func(x0, y);
            x0 = x0 + h;
            arrayX.push(x0);
            arrayY.push(y);
            arrayI.push(i);
        }
        var trace1 = {
            x: arrayX,
            y: arrayY,
            type: 'scatter',
            name: 'Estimated pi',
        };
        var trace2 = {
            x: arrayI,
            y: arrayY,
            type: 'scatter',
            name: 'Reference line',
        };
        data12 = [trace1];
        var layout = {
            autosize: true,
            title: 'Pi vs Interval Graph',
            xaxis: {
                title: 'x'
            },
            yaxis: {
                title: 'f(x)',
            }
        };
        var config = {responsive: true}
        Plotly.newPlot("graph", data12, layout, config );

        result.textContent= y;
        console.log(arrayX,arrayY);
    }

    euler(valueXInitial, valueYInitial, stepSize, finalXvalue);
})

document.getElementById("file--download1").onclick = function down() {
    function download_csv_file() {
        for (let p = 0; p < arrayI.length; p++) {
            listing.push([arrayX[p], arrayY[p]]);
        }
        var rows = ['x', 'f(x) \n'];
        var jaiho = listing;

        jaiho.forEach(function (cell) {
            rows += cell.join(',');
            rows += "\n";
        });

        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(rows);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'Euler_method_data.csv';
        hiddenElement.click();
    }
    download_csv_file();
};