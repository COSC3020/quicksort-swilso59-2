function quicksort(array) {

    //First we want to check if the array is empty or only has one element. If so, we return it 
    if(array.length <= 1) {
        return array;
    }

    // Initialize a stack with the starting and ending indices to replace recursion.
    let stack = [0, array.length - 1];

    // Process the stack
    while (stack.length > 0) {

        // Pop the high and low indices for the current subarray
        let high = stack.pop();
        let low = stack.pop();

        // Partition the array based on the pivot 
        let pivot = partition(array, low, high);

        // Check if there are elements on the left of the pivot. Push the low and pivot - 1 indices
        if (pivot - 1 > low) {
            stack.push(low);
            stack.push(pivot - 1);
        }

        // Check if there are elements on the right of the pivot. Push the pivot + 1 and high indices
        if (pivot + 1 < high) {
            stack.push(pivot + 1);
            stack.push(high); 
        }
    }
    
    // Return the sorted array
    return array;
}

// Swap function to swap elements in the array 
function swap(array, first, second) {
    let tmp = array[first];
    array[first] = array[second];
    array[second] = tmp;
    return array;
}

// Partition function to rearrange elements around the pivot 
function partition (array, low, high) {
    
    let pivot = low;
    
    // Loop through the elements in the range [low + 1, high]
    for (let i = low + 1; i <= high; i++) {
        
        // This line was giving me trouble unless I set it us in the exact manner
        // If the current element is smaller than the pivot. Swap the current element with the pivot
        if (array[i] < array[low]) {
            
            // Originally had pivot++, swap(array, pivot, i)
            swap(array, ++pivot, i); 
        }
    }

    // After scanning the netire sub array, place pivot in its correct position 
    swap(array, low, pivot);

    return pivot;
}

