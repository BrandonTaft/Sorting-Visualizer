

const max = 20;
const arr = [];

for (let i = 0; i < max;) {
   
    let num = Math.floor(Math.random() * max + 1)
    while (arr.includes(num) === false) {
        const container = document.getElementById('container');
        const bar = document.createElement('div');
        bar.innerText = num;
        bar.classList.add('bar');
        bar.style.width = num + "%"
        container.appendChild(bar);
        arr.push(num)
        i++
    }
}

function swap(el1,el2)
{
const style1 = window.getComputedStyle(el1);
const style2 = window.getComputedStyle(el2);
const transform1 = style1.getPropertyValue("height");
const transform2 = style2.getPropertyValue("height");
el1.style.height = transform2;
el2.style.height = transform1;
}

function test(){
    const newBar = document.getElementsByClassName('bar')
    console.log(newBar[0])
    for(let i = 0; i < newBar.length; i++){
        newBar[i].style.backgroundColor="red"
    }
    //document.getElementById('container').style.backgroundColor="red"
        
    }
    

async function bubbleSort() {
    const newBar = document.getElementsByClassName('bar')
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        await new Promise(resolve => setTimeout(resolve, 500));
        for (let j = 0; j < len; j++) {
            await new Promise(resolve => setTimeout(resolve, 500));
            if (arr[j] > arr[j + 1]) {
                //await new Promise(resolve => setTimeout(() => {resolve(), delay(2)}));
                await new Promise(resolve => setTimeout(resolve,500));
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                    console.log(arr[j], tmp)
                    newBar[i].innerText=arr[j+1]
                    newBar[i+1].innerText=arr[j]
                    newBar[j].style.width=tmp+"%"
            }
        
        }
    }
    console.log(arr)
};




function newArray(){
    location.reload()
    }
