/*
Write a function called printDepthFirst that will traverse the given graph
depth-first, printing each node when visited exactly once, on a newline.

Hint: How can you use your code from the breadth-first traversal to get a head
start writing your depth-first traversal?
*/

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

// Create a stack and push the starting node
// Create a set to store visited nodes, and add the starting node
// While the stack is not empty, repeat steps 4-6
// Pop the node on the top of the stack.
// DO THE THING THAT YOU NEED TO DO FOR THE POPPED NODE
// For example, add it to a running total, print it, or save it in an array
// For each unvisited neighbor, add it to the visited nodes and to the top of the stack.

function printDepthFirst(start) {
  // Your code here 
  let stack = [start];
  let visited = new Set([]);

  while (stack.length) {
    let currentNode = stack.pop();

    if (!visited.has(currentNode)) {
      console.log(currentNode);
      visited.add(currentNode);
    }

    for (let node of adjList[currentNode]) {
      if (!visited.has(node)) stack.push(node);
    }
  }

}

console.log("First Test:")
printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
                    // One possible solution:  3, 4, 6, 5, 2, 1
console.log("Second Test:")
printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
                    // One possible solution:  6, 4, 5, 2, 3, 1
console.log("Third Test:")
printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
                    // One possible solution:  4, 6, 5, 2, 3, 1


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = printDepthFirst;
