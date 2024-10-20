function mincost(arr) {
    // Check for the edge case where the length of the array is 1
    if (arr.length <= 1) {
        return 0;
    }

    // Create a min-heap using the built-in sort for simplicity
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    // Continue until we have only one rope
    while (arr.length > 1) {
        // Take the two smallest ropes
        let first = arr.shift(); // Remove the first (smallest) rope
        let second = arr.shift(); // Remove the second (next smallest) rope

        // Connect the ropes and calculate the cost
        let cost = first + second;
        totalCost += cost;

        // Insert the new rope back into the array
        arr.push(cost);

        // Sort again to maintain the min-heap property
        arr.sort((a, b) => a - b);
    }

    return totalCost;
}

// Example usage
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33

module.exports = mincost;

