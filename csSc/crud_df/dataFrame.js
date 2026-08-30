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

function update(){
    const btn = document.getElementById('updt-btn')
    const updt = document.getElementById('updt-2->3')
    if(btn.innerText==='Update'){
        btn.innerText='reset';
        updt.innerText=3;
        document.querySelector('.obs-1').style.display='none';
        document.querySelector('.obs-2').style.display='block';
        document.querySelector('#updt-reflct').style.color = 'black';
    }else{
        btn.innerText='Update';
        updt.innerText=2;
        document.querySelector('.obs-1').style.display='block';
        document.querySelector('.obs-2').style.display='none';
        document.querySelector('#updt-reflct').style.color = 'red';
    }
    
}

function selected(prop) {
    if(prop.className!='wrng-ans'){
     prop.style.cssText="background: #26f737ab; border-radius: 12px; padding-left: 20px; padding-right: 20px;"
    }
 }

//  sia js delete function

function Delete(){
    const colum = document.getElementById('del');
    const btn = document.getElementById('dlt-btn');
   
    if(btn.innerText==='DELETE'){
        btn.innerText='reset';
        colum.style="display:none;"
        document.querySelector('.dlt-obs-1').style.display='none';
        document.querySelector('.dlt-obs-2').style.display='block';
        document.querySelector('#del-reflct').style.color = 'black';

        
    }else{
        btn.innerText='DELETE';
        colum.removeAttribute('style');
        document.querySelector('.dlt-obs-1').style.display='block';
        document.querySelector('.dlt-obs-2').style.display='none';
        document.querySelector('#del-reflct').style.color = 'red';
    } 
}


// Harsh's code and label changer 
methods = document.getElementById("method");
textarea = document.getElementById("icodearea");
label = document.querySelector(".desc-p2");
methods.addEventListener('change', function(e){
    if(e.target.value === "m1"){
        textarea.value = "import pandas as pd" + '\r\n' 
        + "data ={'Name':['Siya','Nilesh','Amit'" + '\r\n' 
        + "              ,'Rishabh','Shahnawaz'], " + '\r\n' 
        + "'Marks':[20,10,15,5,10]}" + '\r\n' 
        +"df=pd.DataFrame(data)" + '\r\n' 
        +"df.loc[len(df.index)] = ['Amit', 18]" + '\r\n'
        +"print(df)";
        label.textContent = 'Using python loc() method to add row in dataframe.';
    }
    else if(e.target.value === "m2"){
        textarea.value = "import pandas as pd"+ '\r\n' 
        +"data={'Name':['Siya','Nilesh','Amit'" + '\r\n' 
        + "            ,'Rishabh','Shahnawaz'], " + '\r\n' 
        + "'Marks':[20,10,15,5,10]}" + '\r\n' + 
        "df=pd.DataFrame(data)" + '\r\n' +
        "df2 = {'Name': 'Amit', 'Marks': 18}" + '\r\n' +
        "df = df.append(df2, ignore_index = True)" + '\r\n' +
        "print(df)";
        label.textContent = 'Using python append() method to add row in dataframe.';
    }
    else if(e.target.value === "m3"){
        textarea.value = "import pandas as pd"+ '\r\n' 
        +"data={'Name':['Siya','Nilesh','Amit'" + '\r\n' 
        + "            ,'Rishabh','Shahnawaz'], " + '\r\n' 
        + "'Marks':[20,10,15,5,10]}" + '\r\n' + 
        "df=pd.DataFrame(data)" + '\r\n' +
        "data = {'Name':['Amit','Divyam','Taneesha','Sahiba','Piyush']," + '\r\n' +
        "'Marks':[18,15,17,19,12]}" + '\r\n' +
        "df2 = pd.DataFrame(data)" + '\r\n' +
        "df = pd.concat([df, df2], ignore_index = True)" + '\r\n' +
        "print(df)";
        label.textContent = 'Using python pandas.concat() method to concatenate two dataframes.';
    }
    else if(e.target.value === "m4"){
        textarea.value = "import pandas as pd" + '\r\n' 
        +"info= {'Num':[12,14,13,12,14,13,15], " + '\r\n' 
        + "'NAME':['John','Camili','Rheana','Joseph'," + '\r\n' 
        + "'Amanti','Alexa','Siri'}" + '\r\n' + 
        "data=pd.DataFrame(info)" + '\r\n' + 
        "print(df)" + '\r\n' +
        "data.at[6,'NAME']='Safa'" + '\r\n' +
        "print(df)";
        label.textContent = 'Using Python at() method to update a single element of a row.';
    }
    else if(e.target.value === "m5"){
        textarea.value = "import pandas as pd" + '\r\n' 
        +"info= {'Num':[12,14,13,12,14,13,15], " + '\r\n' 
        + "'NAME':['John','Camili','Rheana','Joseph'," + '\r\n' 
        + "'Amanti','Alexa','Siri'}" + '\r\n' + 
        "data=pd.DataFrame(info)" + '\r\n' + 
        "print(df)" + '\r\n' +
        "data.loc[0:2,['Num','NAME']] = [100,'Python']" + '\r\n' +
        "print(df)";
        label.textContent = 'Python loc() function to change the value of a row/column.';
    }
    else if(e.target.value === "m6"){
        textarea.value = "import pandas as pd" + '\r\n' 
        +"info= {'Num':[12,14,13,12,14,13,15], " + '\r\n' 
        + "'NAME':['John','Camili','Rheana','Joseph'," + '\r\n' 
        + "'Amanti','Alexa','Siri'}" + '\r\n' + 
        "data=pd.DataFrame(info)" + '\r\n' + 
        "print(df)" + '\r\n' +
        "data.replace('Siri',  'Code',inplace=True)" + '\r\n' +
        "print(df)";
        label.textContent = 'Python replace() method to update values in a DataFrame.';
    }
});