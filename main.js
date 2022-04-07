

const max = 10;
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

function swap(el1, el2) {
    const newBar = document.getElementsByClassName('bar')
    const style1 = window.getComputedStyle(newBar[i]);
    const style2 = window.getComputedStyle(newBar[i + 1]);
    const transform1 = style1.getPropertyValue("width");
    const transform2 = style2.getPropertyValue("width");
    el1.style.width = transform2;
    el2.style.width = transform1;
}

function test() {
    const newBar = document.getElementsByClassName('bar')
    console.log(newBar[0])
    for (let i = 0; i < newBar.length; i++) {
        newBar[i].style.backgroundColor = "red"
    }
    //document.getElementById('container').style.backgroundColor="red"

}



async function bubbleSort() {
    const newBar = document.getElementsByClassName('bar');
    const len = arr.length;
    let checked;

    do {
        checked = false

        for (let i = 0; i < len; i++) {
             //The element we are testing turns red
            newBar[i].style.backgroundColor = "red"
            //Sets delay for the first iteration
            await new Promise(resolve => setTimeout(resolve, 1000));

            if (arr[i] < arr[i + 1]) {
                //The element we are swapping with turns blue
                newBar[i + 1].style.backgroundColor = "blue"
                //Sets delay for the rest of the intervals
                await new Promise(resolve => setTimeout(resolve, 1000));
                //Swap the elements in the array since element is less than the next element
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                //Use CSS to display the swapped the bars
                newBar[i].innerText = arr[i]
                newBar[i].style.width = arr[i] + "%"
                newBar[i + 1].innerText = arr[i + 1]
                newBar[i + 1].style.width = arr[i + 1] + "%"
                //Is only changed to true when there is a swap made
                checked = true
            }
            // If the element is greater than the next element, it turns back yellow 
            // and the next element turns red and continues down the line
            newBar[i].style.backgroundColor = "greenyellow"
        }
        //If a swap is not made checked will not be true thus terminating the loop
        //Ensuring loop will not run on a sorted array more than once
    } while (checked)
    return arr
};

async function selectionSort() { 
    const newBar = document.getElementsByClassName('bar');
    const len = arr.length;
        
    for(let i = 0; i < len; i++) {
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < len; j++){
            newBar[j].style.backgroundColor = "red"
            newBar[min].style.backgroundColor = "greenyellow"
            if(arr[j] < arr[min]) {
                min=j; 
                //newBar[min].style.backgroundColor = "greenyellow"
            }
         }
         await new Promise(resolve => setTimeout(resolve, 1000));
         if (min != i) {
             // Swapping the elements
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;   
             newBar[i].innerText = arr[i]
                newBar[i].style.width = arr[i] + "%"
                newBar[i + 1].innerText = arr[i + 1]
                newBar[i + 1].style.width = arr[i + 1] + "%"   
                
        }
    }
    console.log(arr)
    return arr;
}

function newArray() {
    location.reload()
}
