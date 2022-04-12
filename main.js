

//************* CREATE NEW RANDOM ARRAY **************** */

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


//************* PERFORM BUBBLE SORT **************** */

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


//************* PERFORM SELECTION SORT **************** */

async function selectionSort() {
    const newBar = document.getElementsByClassName('bar');
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        newBar[i].style.backgroundColor = "red"
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Finding the smallest number in the subarray
        let min = i;
        for (let j = i + 1; j < len; j++) {
            newBar[min].style.backgroundColor = "red"
            newBar[j].style.backgroundColor = "blue"

            await new Promise(resolve => setTimeout(resolve, 1000));
            if (arr[j] < arr[min]) {
                newBar[min].style.backgroundColor = "greenyellow"
                min = j;
            }
            newBar[j].style.backgroundColor = "greenyellow"
            newBar[min].style.backgroundColor = "greenyellow"

        }
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (min != i) {
            // Swapping the elements
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
            newBar[i].innerText = arr[i]
            newBar[i].style.width = arr[i] + "%"
            newBar[i].style.backgroundColor = "pink"
            newBar[i].style.marginLeft = "50%"
            newBar[min].innerText = arr[min]
            newBar[min].style.width = arr[min] + "%"


        } newBar[i].style.backgroundColor = "pink"
        newBar[i].style.marginLeft = "50%"

    }

    newBar[len - 1].style.backgroundColor = "pink"
    newBar[i].style.marginLeft = "50%"
    return arr;
}


//************* PERFORM INSERTION SORT **************** */

async function insertionSort() {
    const newBar = document.getElementsByClassName('bar');
    const len = arr.length;
    newBar[0].style.backgroundColor = "green"
        for (let i = 1; i < len; i++) {
            // The last element of our sorted subarray
            let j = i-1; 
            console.log(newBar[j])
            // Choosing the first element in our unsorted subarray
            let current = arr[i];
            console.log(current)
            newBar[i].style.backgroundColor = "blue"
            await new Promise(resolve => setTimeout(resolve, 3000));
            while ((j > -1) && (current < arr[j])) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                newBar[j].innerText = current
                arr[j+1] = arr[j];
                newBar[j+1].innerText = arr[j]
                //newBar[j+1].style.backgroundColor = "greenyellow"
                newBar[i].style.backgroundColor = "green"
                j--;
            }
            
            newBar[j+1].style.backgroundColor = "green"
            arr[j+1] = current;
            newBar[j+1].innerText = current
            await new Promise(resolve => setTimeout(resolve, 3000));
            
        }
        
    return arr;
}


//************* PERFORM QUICK SORT **************** */

function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};


//************* PERFORM MERGE SORT **************** */

function merge(left, right) {
    const newBar = document.getElementsByClassName('bar');
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

function mergeSort() {
  const newBar = document.getElementsByClassName('bar');
  const half = arr.length / 2
  // Base case or terminating case
  if(arr.length < 2){
    return arr 
  }
  
  newBar[Math.floor(half)].style.marginBottom="10%"
  const left = arr.splice(0, half)
  newBar[left.length-1].classList.add('left')
  return merge(mergeSort(left),mergeSort(arr))
}
  
//************* REFRESH THE ARRAY **************** */

function newArray() {
    location.reload()
}
