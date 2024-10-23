# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Answer

The time complexity of our implementation in the worst case is $\Theta(n^{2})$

First, when we look at the partitioning step. We can see that we iterate through the subarray to place elements in their
correct positions relative to the pivot. For a subarray of size $n$ the processes takes $O(n)$ time because it involves a single 
pass through the array. 

In the worst case when we have an already sorted or reverse sorted array. The partitioning needs to go through progressively smaller and smaller subarrays. This gives us $n$ partitioning steps, each taking $n$ time giving us the worst case time complexity of $\Theta(n^{2})$


## Plagiarism Acknowledgement

In this assignment, I followed a similar approach to the mergesort assignment. I started with the recursive version from the lecture slides and worked on it until it passed the provided test code. Afterward, I made the necessary changes to remove all recursive calls and convert the solution into an iterative version. I did use my previous semesters repository but went through and tried to make some changes to the code so that I was not exactly replicating my previous implementation. I also found a few websites that had some helpful information.  

https://github.com/COSC3020/quicksort-swilso59-1

https://learnersbucket.com/examples/algorithms/quick-sort-iterative/
https://learnersbucket.com/tutorials/algorithms/quick-sort-algorithm-javascript/

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”

