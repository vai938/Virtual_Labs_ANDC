const color = ['#FF0000','#00008B','#800080'];
const master = [[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]];
const submit = document.getElementById("submit")
const ans = document.getElementById("answer")
const simAct = document.getElementById("simul")
const para = document.getElementById("para")
para.style.display='none';
simAct.addEventListener("click",function(){
    simAct.disabled = 'true'
    bdkeBaba(6);
    para.style.display='block';
})
submit.addEventListener("click", function baba(){
    const value = +document.getElementById("input").value;
    if (value==''){
        window.alert("Please input a valid number.")
    }
    else if(value==0){
        ans.innerHTML = "1"+".";
    }
    else if(value<0){
        window.alert("Please input a POSITIVE integer.")
    }
    choteBaba(value);
})
function calcFact(n){
    if(n==1){
        return 1
    }
    else{
        return n*calcFact(n-1)
    }    
}
function choteBaba(n){
    const factAns = calcFact(n)
    ans.innerHTML = factAns+".";
}
function bdkeBaba(n){
    // tab.remove();
    const table = document.createElement("table");
    let count = 0;
    for(let i=0;i<n;i++){
        if(count>5){
            count = 0
        }
        let row = document.createElement("tr")
        let data1 = document.createElement("td")
        data1.innerHTML=`${master[count][0]+1}`;
        let data2 = document.createElement("td")
        data2.innerHTML=`${master[count][1]+1}`;
        let data3 = document.createElement("td")
        data3.innerHTML=`${master[count][2]+1}`;
        data1.setAttribute("style",`background-color:${color[master[count][0]]}`)
        row.appendChild(data1)
        data2.setAttribute("style",`background-color:${color[master[count][1]]}`)
        row.appendChild(data2)
        data3.setAttribute("style",`background-color:${color[master[count][2]]}`)
        row.appendChild(data3)
        table.appendChild(row)
        count+=1
    }
    document.getElementById("sim-holder").appendChild(table);
}