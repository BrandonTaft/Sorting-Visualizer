

const max = 100;
const x = [];

for (let i = 0; i < max;) {
    let num = Math.floor(Math.random() * max + 1)
    while (x.includes(num) === false) {
        const container = document.getElementById('container');
        const bar = document.createElement('div');
        bar.innerText = num;
        bar.classList.add('bar');
        bar.style.width = num + "%"
        container.appendChild(bar);
        x.push(num)
        i++
    }
}

function bubbleSort(){
    
}

function newArray(){
    location.reload()
    }
