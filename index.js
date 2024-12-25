let display = document.getElementsByClassName('counterDisplay')[0].children[0];
// let range = document.getElementById('range').value;
console.log("ehsan");

// getting range value;
let rangeNo = 1;
let rangeVal=()=>{
    rangeNo= range.value;
    console.log(rangeNo);
    
}


let count = 0;

// increment funciton
const increment = ()=>{

    count = count + Number(rangeNo);
    console.log(count);
    
    display.innerHTML=count;
}
// decremetn funciton
const decrement = ()=>{
    console.log(count);
    
    count = (count-rangeNo);
    display.innerHTML=count;
}

// reset function
const reset = ()=>{
    count = 0;
    rangeNo=1;
    range.value=1;
    display.innerHTML=0
}
