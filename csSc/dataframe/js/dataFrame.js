const methods= document.querySelector('#method');
const code1= document.querySelector('.code-1'); 
const code2= document.querySelector('.code-2'); 
const code3= document.querySelector('.code-3'); 
const code4= document.querySelector('.code-4'); 
const code5= document.querySelector('.code-5'); 
const code6= document.querySelector('.code-6'); 
const descP2= document.querySelector('.desc-p2');
const code = [code1,code2,code3,code4,code5,code6]
document.querySelector('.desc-p2').textContent='Creating a dataframe using list';
methods.addEventListener('change',function(e){
    if (e.target.value==='m1') {
        document.querySelector('.desc-p2').textContent='Creating a dataframe using list';
        code[0].style.display= 'block'
        code[1].style.display= 'none'
        code[2].style.display= 'none'
        code[3].style.display= 'none'
        code[4].style.display= 'none'
        code[5].style.display= 'none'
        descP2.textContent= 'Pandas DataFrame using nested list';
    }
    else if (e.target.value==='m2'){
        document.querySelector('.desc-p2').textContent='Creating a dataframe from dict of n arrays/lists';
        code[0].style.display= 'none'
        code[1].style.display= 'block'
        code[2].style.display= 'none'
        code[3].style.display= 'none'
        code[4].style.display= 'none'
        code[5].style.display= 'none'
        descP2.textContent= 'Pandas DataFrame using dictionary';
    }
    else if (e.target.value==='m3'){
        document.querySelector('.desc-p2').textContent='Creating a indexes DataFrame using arrays';
        code[0].style.display= 'none'
        code[1].style.display= 'none'
        code[2].style.display= 'block'
        code[3].style.display= 'none'
        code[4].style.display= 'none'
        code[5].style.display= 'none'
    }
    else if (e.target.value==='m4'){
        document.querySelector('.desc-p2').textContent='Creating Dataframe from list of dicts';
        code[0].style.display= 'none'
        code[1].style.display= 'none'
        code[2].style.display= 'none'
        code[3].style.display= 'block'
        code[4].style.display= 'none'
        code[5].style.display= 'none'
    }
    else if (e.target.value==='m5'){
        document.querySelector('.desc-p2').textContent='Creating DataFrame using zip() function';
        code[0].style.display= 'none'
        code[1].style.display= 'none'
        code[2].style.display= 'none'
        code[3].style.display= 'none'
        code[4].style.display= 'block'
        code[5].style.display= 'none'
    }
    else if (e.target.value==='m6'){
        document.querySelector('.desc-p2').textContent='Creating DataFrame from Dicts of series';
        code[0].style.display= 'none'
        code[1].style.display= 'none'
        code[2].style.display= 'none'
        code[3].style.display= 'none'
        code[4].style.display= 'none'
        code[5].style.display= 'block'
    };
});
const next= document.querySelector('.nxt');
let count= 1;

document.querySelector('.an--1').style.background='cyan';
document.querySelector(`.det--1`).style.display= 'block';
document.querySelector('.rw--1').style.background= 'yellow';
next.addEventListener('click',function(e){
    e.preventDefault();
    if(count===17){
        count=0;
        next.textContent= 'Next';
        document.querySelector('.rw--12').style.background= 'none';
        document.querySelector('.rw--1').style.background= 'yellow';
    }else if(count===16){
        next.textContent= 'Reset';
    }else{
        next.textContent= 'Next';
    };
    count++;
    document.querySelector(`.det--${count}`).style.display= 'block';
    document.querySelector(`.an--${count}`).style.background= 'cyan';
    if(count<18){
        if(count===1){
            document.querySelectorAll('.tblDt').forEach(e=>e.style.opacity=0);
            document.querySelector(`.an--17`).style.background= 'none';
            document.querySelector(`.det--17`).style.display= 'none';
        }else{
            if(count>2 && count<6){
                document.querySelector(`.dt--${count}`).style.opacity=1;
                document.querySelector(`.dt--${count}`).style.background='red';
            }else if(count===6){
                document.querySelector(`.dt--${3}`).style.background='none';
                document.querySelector(`.dt--${4}`).style.background='none';
                document.querySelector(`.dt--${5}`).style.background='none';
            }
            else if(count>7 && count<11){
                document.querySelector(`.dt--${count}`).style.opacity=1;
                document.querySelector(`.dt--${count}`).style.background='red';
            }else if(count===11){
                document.querySelector(`.dt--${8}`).style.background='none';
                document.querySelector(`.dt--${9}`).style.background='none';
                document.querySelector(`.dt--${10}`).style.background='none';
            }
            else if(count>12 && count<16){
                document.querySelector(`.dt--${count}`).style.opacity=1;
                document.querySelector(`.dt--${count}`).style.background='red';
            }
            else if(count===16){
                document.querySelector(`.dt--${13}`).style.background='none';
                document.querySelector(`.dt--${14}`).style.background='none';
                document.querySelector(`.dt--${15}`).style.background='none';
            }
            document.querySelector(`.an--${count-1}`).style.background= 'none';
            document.querySelector(`.det--${count-1}`).style.display= 'none';
        }
        if(count===7){
            document.querySelector('.rw--1').style.background= 'none';
            document.querySelector('.rw--7').style.background= 'yellow';
        }else if(count===12){
            document.querySelector('.rw--7').style.background= 'none';
            document.querySelector('.rw--12').style.background= 'yellow';
        }
    }
});