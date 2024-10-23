function quicksort(x) {
    // Stack to store the range of indices to be sorted (lo, hi)
    let stack = [];
    
    // Push the initial full array range to the stack
    stack.push({ lo: 0, hi: x.length - 1 });

    // Continue until the stack is empty
    while (stack.length > 0) {
        // Pop the last range (subarray) from the stack
        let { lo, hi } = stack.pop();

        // Base case: skip if the subarray has one or zero elements
        if (lo >= hi) continue;

        // Set the pivot index to the low boundary of the subarray
        let p = lo;

        // Partitioning: move elements smaller than the pivot to the left
        for (let i = lo + 1; i <= hi; i++) {
            if (x[i] < x[lo]) {
                p++;
                swap(x, p, i);
            }
        }

        // Swap the pivot element to its correct position
        swap(x, lo, p);

        // Push the left subarray (elements less than the pivot) onto the stack
        if (p - 1 > lo) stack.push({ lo: lo, hi: p - 1 });

        // Push the right subarray (elements greater than the pivot) onto the stack
        if (p + 1 < hi) stack.push({ lo: p + 1, hi: hi });
    }

    // Return the sorted array
    return x;
}

// Helper function to swap two elements in the array
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
