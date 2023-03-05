const countVal = document.querySelector('#counter');

const countStep = document.querySelector('#step');

const increment = ()=> {
    let value = parseInt(countVal.innerText);
    value = value+step;
    countVal.innerText = value;
};

const decrement = ()=> {
    let value = parseInt(countVal.innerText);
    value = value-step;
    countVal.innerText = value;
};

let step = 0;
let decrement_step = ()=>{
    step = parseInt(countStep.innerText);
    step = step-1;
    countStep.innerText = step;
};

let increment_step = ()=>{
    step = parseInt(countStep.innerText);
    step = step+1;
    countStep.innerText = step;
};
