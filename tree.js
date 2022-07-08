class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insertArr(strings){
        if(typeof(strings) == "object"){
            for(const words of strings){
                this.insert(words);
            }
        }
    }
    insert(string){
        let currentNode = this.root;
        for(const char of string){
            if(!currentNode.children.has(char)){
                currentNode.children.set(char, new TrieNode(char));
            }
            currentNode = currentNode.children.get(char);
        }
        currentNode.isEnd = true;
    }
    
    getLongestPrefix() {
        let currentNode = this.root;
        let prefix = "";
        while(currentNode.children.size == 1 && !currentNode.isEnd) {
            currentNode = [...currentNode.children.values()][0]
            prefix += currentNode.value ? currentNode.value : "";
        }
        return prefix;
    }

    longestCommonPrefix(strings) {
        let trie = new Trie();
        for(let word of strings) {
            if(word.length === 0) {
                return "";
            }
            trie.insert(word);
        }
        return trie.getLongestPrefix();
    }
}

class TrieNode {
    constructor(val) {
        this.value = val;
        this.children = new Map();
        this.isEnd = false;
    }
}

//export function Trie();
module.exports = {
    Trie: new Trie()
}