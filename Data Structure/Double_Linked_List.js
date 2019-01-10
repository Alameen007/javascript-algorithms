class Node {
    constructor (val) {
     this.val = val;
     this.next = null;
     this.prev
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
     }
     pop() {
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;  
        return poppedNode;
    }
     shift() {
        if(!this.head) return undefined;
        let oldHead = this.head;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;  
        return oldHead;
    }
    unshift(val) {
        const newNode = new Node(val)
       if (!this.head) {
           this.head.prev = newNode;
           this.tail = this.head;
       } else {
           this.head.prev = newNode;
           newNode.next = this.head;
           this.head = newNode;
       }
       this.length++;
       return this
    }
    get(index) {
        if(index < 0 || index >= this.length) return null;
        let count, current;
        if (index <= this.length/2) {
            count = 0;
            current = this.head;
            while(count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val) {
        let foundNode = this.get(index)
        if(foundNode !== null) {
          foundNode.val = val
          return true
        } 
        return false
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if(index < 0 || index >= this.length) return null;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();
        
        let removedNode = the.get(index - 1);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;

        this.length--;
        return removed;
    }
    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}