const input = document.querySelector('.inp');
const sbmt = document.querySelector('.submit');
const result= document.querySelector('.answer');

sbmt.addEventListener('click', function () {
    let inputVal= Number(input.value);
    let n1= 0;
    let n2= 1;
    let next;
    const fibArr= [];
    for (let i = 1; i <= inputVal; i++) {
        fibArr.push(n1);
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
    result.textContent= fibArr;
})