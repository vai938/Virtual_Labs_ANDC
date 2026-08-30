const func = document.querySelector('.check');
const lowerLim = document.querySelector('.lowerLim');
const upperLim = document.querySelector('.upperLim');
const intrvl = document.querySelector('.intrvl');
const sbmt = document.querySelector('.sub');
const eqnResult1 = document.querySelector('.eqnResult1');
const arr = [];
const arrValue = [];

sbmt.addEventListener('click', function (e) {
    e.preventDefault();
    const lowerVal = Number(lowerLim.value);
    const upperVal = Number(upperLim.value);
    const intVal = Number(intrvl.value);

    const fun = function (x) {
        const funcVal = func.value;
        return eval(funcVal)
    }
    let h = (upperVal - lowerVal) / intVal;
    let sum1 = fun(upperVal) + fun(lowerVal);
    for (let i = 1; i < intVal; i++) {
        let w = lowerVal + i * h;
        if (i%2==0){
            sum1 = sum1 + 2 * fun(w);
        }else {
            sum1 = sum1 + 4 * fun(w);
        }
        arr.push(w);
        arrValue.push(fun(w));
    };
    arr[0]= lowerVal;
    arr[-1]= upperVal
    arrValue[0]= fun(lowerVal);
    arrValue[-1]= fun(upperVal);
    console.log(arr,arrValue);
    const final = sum1 * h / 3
    eqnResult1.textContent = final
    let trace1 = {
        x: arr,
        y: arrValue,
        type: "lines",
        name: "f(a)",
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
    const data12 = [trace1];
    var config = { responsive: true };
    Plotly.newPlot("graph", data12, layout, config);

})
