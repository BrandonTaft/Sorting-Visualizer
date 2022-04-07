

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
    const newBar = document.getElementsByClassName('bar')
const style1 = window.getComputedStyle(newBar[j]);
const style2 = window.getComputedStyle(newBar[j+1]);
const transform1 = style1.getPropertyValue("width");
const transform2 = style2.getPropertyValue("width");
el1.style.width = transform2;
el2.style.width = transform1;
}

function test(){
    const newBar = document.getElementsByClassName('bar')
    console.log(newBar[0])
    for(let i = 0; i < newBar.length; i++){
        newBar[i].style.backgroundColor="red"
    }
    //document.getElementById('container').style.backgroundColor="red"
        
    }
    

// async function bubbleSort() {
//     const newBar = document.getElementsByClassName('bar')
//     console.log(arr)
//     let len = arr.length;
//     for (let i = 0; i < len; i++) {
//         await new Promise(resolve => setTimeout(resolve, 100));
//         for (let j = 0; j < len; j++) {
            
//             newBar[j].style.backgroundColor="red" //The element we are testing turns red
           
//             await new Promise(resolve => setTimeout(resolve, 100));

//             if (arr[j] < arr[j + 1]) {
//                 newBar[j+1].style.backgroundColor="blue" //The element we are comparing to turns blue
//                 //await new Promise(resolve => setTimeout(() => {resolve(), delay(2)}));
//                 await new Promise(resolve => setTimeout(resolve,100));
//                 let tmp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tmp;
                    
//                     newBar[j].innerText=arr[j]
//                     newBar[j].style.width=arr[j]+"%"
//                     newBar[j+1].innerText=arr[j+1]
//                     newBar[j+1].style.width=arr[j+1]+"%"
                   
//                     //newBar[i].style.backgroundColor="yellowgreen"
//             } newBar[j].style.backgroundColor="greenyellow"
        
//         }
//     }
//     return  arr
// };

async function bubbleSort() {
    const newBar = document.getElementsByClassName('bar');
    const len = arr.length;
    let checked;

    do{
        checked = false
    // for (let i = 0; i < len; i++) {
    //     await new Promise(resolve => setTimeout(resolve, 100));
        for (let j = 0; j < len; j++) {
            
            newBar[j].style.backgroundColor="red" //The element we are testing turns red
           
            await new Promise(resolve => setTimeout(resolve, 100));

            if (arr[j] < arr[j + 1]) {
                newBar[j+1].style.backgroundColor="blue" //The element we are comparing to turns blue
                //await new Promise(resolve => setTimeout(() => {resolve(), delay(2)}));
                await new Promise(resolve => setTimeout(resolve,100));
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                    
                    newBar[j].innerText=arr[j]
                    newBar[j].style.width=arr[j]+"%"
                    newBar[j+1].innerText=arr[j+1]
                    newBar[j+1].style.width=arr[j+1]+"%"
                   checked = true
                    //newBar[i].style.backgroundColor="yellowgreen"
            } newBar[j].style.backgroundColor="greenyellow"
        
        }
   // }
}while (checked)
    return  arr
};



function newArray(){
    location.reload()
    }
