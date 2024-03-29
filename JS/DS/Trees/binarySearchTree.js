/** 
 * 
 * Binary Search Tree
*/

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        let node = new Node(value);
        if(!this.root){
            this.root = node
            return this;
        }
        let current = this.root;
        while(true){
                if (current.value === value) return undefined; //handle duplicates - you can also add a freq count the node 
                if (current.value > value){
                    if(current.left){
                        current = current.left
                    } else {
                        current.left = node;
                        return this;
                    }
                } else if (value > current.value){
                    if(current.right){
                        current = current.right;
                    } else {
                        current.right = node;
                        return this;
                    }
                }
        }
    
    }


    contains(value){
        if(!this.root) return undefined;
        let current = this.root;
        while(current){
            if (current.value === value) return true;
            if (value < current.value){
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    find(value){
        if(!this.root) return undefined;
        let current = this.root;
        let found = false;
        while(current && !found){//while current is valid and the val has not been found
            if(value < current.value){
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                // the values are equal
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    delete(value){
        if(this.root === null) return this.root;
        // value < root.value recurse down left subtree 
        // value > root.value recurse down right subtree

        // check for current node.right or left is === to value
        // if it is then remove the node -
            // check if node is parent node or leaf node
            // if its a leaf node then we can simply remove the node;
        // if its a parent
            // need to find a successor 
    }

    breadthFirstSearch(){
        if (this.root === null) return null;
        const queue = [];
        const result = [];

        queue.push(this.root);
        while(queue.length > 0){
            let node = queue.shift();
            result.push(node.value);
            if (node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);

        }
        return result;
    }
    //Depth First Search
    DFSPreOrder(){
        const result = [];
        let current = this.root;
        function traverse(node){
            result.push(node.value);
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);

        }

        traverse(current);
        return result;
    }

    DFSPostOrder(){
        const result = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result
    }

    DFSInOrder(){
        const result = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            result.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

}

let t = new BinarySearchTree();

t.insert(10);
t.insert(5);
t.insert(13);
t.insert(11);
t.insert(2);
t.insert(16);
t.insert(7);

console.log(t.DFSInOrder())
/*
        10
    5        13
 2    7    11   16 
*/


