const input = document.querySelector('.inp');
const sbmt = document.querySelector('.submit');
const result= document.querySelector('.answer');

sbmt.addEventListener('click', function () {
    let arr = input.value.split(",");
    for (let i = 0; i < arr.length; i++) {
        arr[i]= Number(arr[i]);
    }

    const sortingArr= function(array){
        for(let i=0; i<array.length; i++){
            for (let j=0; j<array.length-i-1;j++){
                if (array[j]>array[j+1]){
                    tmp= array[j];
                    array[j]= array[j+1];
                    array[j+1]= tmp;
                    console.log(array);
                    // result.textContent+= array;
                    let ilr= `<p style="margin-left: 20px">${array}</p> <br>`
                    result.insertAdjacentHTML('beforebegin',ilr);
                }
            }
        }
    }
    sortingArr(arr);
})