/*methods= document.getElementById('method');
const code1= document.querySelector('.code-1'); 
const code2= document.querySelector('.code-2'); 
const code3= document.querySelector('.code-3'); 
const code4= document.querySelector('.code-4'); 
const code5= document.querySelector('.code-5'); 
const code6= document.querySelector('.code-6'); 
const descP2= document.querySelector('.desc-p2');
const code = [code1,code2,code3,code4,code5,code6]
document.querySelector('.desc-p2').textContent='Creating a dataframe using list';
codearea = document.getElementById("icodearea");
methods.addEventListener('change',function(e){
    if (e.target.value==='m1') {
        document.querySelector('.desc-p2').textContent='Adding columns using lists.';
        code[0].style.display= 'block'
        code[1].style.display= 'none'
        code[2].style.display= 'none'
        code[3].style.display= 'none'
        code[4].style.display= 'none'
        code[5].style.display= 'none'
    }
    else if (e.target.value==='m2'){
        document.querySelector('.desc-p2').textContent='Creating a dataframe from dict of n arrays/lists';
        code[0].style.display= 'none'
        code[1].style.display= 'block'
        code[2].style.display= 'none'
        code[3].style.display= 'none'
        code[4].style.display= 'none'
        code[5].style.display= 'none'
        codearea.value = "import pandas as pd"+ '\r\n' 
        +"df =pd.DataFrame()" + '\r\n' 
        + "df = {'name':['aparna', 'pankaj', 'sudhir', 'Geeku']," + '\r\n'
        + "'degree': ['MBA', 'BCA', 'M.Tech', 'MBA']," + '\r\n'
        + "'score':[90, 40, 80, 98]}" + '\r\n'
        + "print(df)";
        console.log("Harsh is great !!");
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
*/
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



// quizz pankaj 
function selected(prop) {
   if(prop.className!='wrng-ans'){
    prop.style.cssText="background: #26f737ab; border-radius: 12px; padding-left: 20px; padding-right: 20px;"
   }
}

// Harsh's code and label changer
methods = document.getElementById("method");
textarea = document.getElementById("icodearea");
label = document.querySelector(".desc-p2");
methods.addEventListener('change', function(e){
    if(e.target.value === "m1"){
        textarea.value = "import pandas as pd"+ '\r\n' 
        +"df =pd.DataFrame()" + '\r\n' 
        + "df['Rollno']=[1,2,3,4,5]" + '\r\n' 
        + "df['Name']=['Kunal','Ram','Sahil','Preeti','Raj']" + '\r\n'
        + "print(df)";
        label.textContent = 'Adding columns using lists.';
    }
    else if(e.target.value === "m2"){
        textarea.value = "import pandas as pd"+ '\r\n' 
        +"data={'Name':['Siya','Nilesh','Amit'" + '\r\n' 
        + "            ,'Rishabh','Shahnawaz'], " + '\r\n' 
        + "             'Marks':[20,10,15,5,10]}" + '\r\n' + 
        "print(df)";
        label.textContent = 'Creating a dataframe from dict of n arrays/lists.';
    }
    else if(e.target.value === "m3"){
        textarea.value = "import pandas as pd"+ '\r\n' 
        +"array = np.array([[1, 1, 1], [2, 4, 8], [3, 9, 27], [4, 16, 64]])" + '\r\n' 
        + "index_values = ['first', 'second', 'third','fourth']" + '\r\n' + 
        "column_values = ['number', 'squares', 'cubes']" + '\r\n' +
        "df = pd.DataFrame(data = array," + '\r\n'
        +"                 index = index_values," + '\r\n'
        +"                 columns = column_values)" + '\r\n' +
        "print(df)";
        label.textContent = 'Creating a indexes DataFrame using arrays.';
    }
    else if(e.target.value === "m4"){
        textarea.value = "import pandas as pd" + '\r\n' 
        +"data = [{'Geeks': 'dataframe', 'For': 'using', 'geeks': 'list'}," + '\r\n' 
        + "       {'Geeks':10, 'For': 20, 'geeks': 30}] " + '\r\n' 
        + "df = pd.DataFrame(data)" + '\r\n' + 
        "print(df)";
        label.textContent = 'Creating Dataframe from list of dicts.';
    }
    else if(e.target.value === "m5"){
        textarea.value = "import pandas as pd" + '\r\n' 
        +"Name = ['tom', 'krish', 'nick', 'juli']" + '\r\n' 
        + "Age = [25, 30, 26, 22]" + '\r\n' 
        + "list_of_tuples = list(zip(Name, Age))" + '\r\n' + 
        "df = pd.DataFrame(list_of_tuples, columns = ['Name', 'Age'])" + '\r\n'
        + "print(df)";
        label.textContent = 'Creating DataFrame using zip() function.';
    }
    else if(e.target.value === "m6"){
        textarea.value = "import pandas as pd" + '\r\n' 
        +"author = ['Jitender', 'Purnima', 'Arpit', 'Jyoti']" + '\r\n' 
        + "article = [210, 211, 114, 178]" + '\r\n' 
        + "auth_series = pd.Series(author)" + '\r\n'
        + "article_series = pd.Series(article)" + '\r\n'
        + "frame = { 'Author': auth_series, 'Article': article_series }" + '\r\n'
        + "result = pd.DataFrame(frame)" + '\r\n'
        + "print(result)";
        label.textContent = 'Creating DataFrame from Dicts of series';
    }
});
