const Tree = require('./tree');

let tree = Tree.Trie;


let arr = ["flower", "flow", "flows"];
tree.insertArr(arr)
console.log(tree.getLongestPrefix(arr))
