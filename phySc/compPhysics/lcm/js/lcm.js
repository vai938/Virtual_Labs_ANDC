const input1 = document.querySelector('.inp1');
const input2 = document.querySelector('.inp2');
const sbmt = document.querySelector('.submt');
const result= document.querySelector('.answer');

sbmt.addEventListener('click', function () {
   const inp1= Number(input1.value);
   const inp2= Number(input2.value);
   let min = (inp1>inp2) ? inp1: inp2;
   while(true){
       if (min % inp1==0 && min % inp2==0){
           result.textContent= `LCM of ${inp1} and ${inp2} is ${min}`;
           break;
       }
       min++;
   }
})