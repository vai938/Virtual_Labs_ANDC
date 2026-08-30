const input = document.querySelector('.inp');
const sbmt = document.querySelector('.submit');
const result= document.querySelector('.answer');

sbmt.addEventListener('click', function () {
    const inpValue= input.value;
    const reverseValue= inpValue.split("").reverse().join("");
    if (inpValue== reverseValue){
        result.textContent= "Given input is a palindrome";
    }else {
        result.textContent= "Given input is not a palindrome";
    }
})