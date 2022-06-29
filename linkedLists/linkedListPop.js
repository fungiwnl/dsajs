/* Pop method linked lists */ 

class Node  {
    constructor(value) {
        this.value = value 
        this.next = null
    }
}

class LinkedList { 
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head 
        this.length = 1
    }
    pop() {
        if(!this.head) return undefined 
        let tmp = this.head
        let pre = this.head 
        while (tmp.next) {
            pre = tmp 
            tmp = tmp.next 
        }
        this.tail = pre 
        this.tail.next = null 
        this.length-- 
        if (this.length === 0) {
            this.head = null 
            this.tail = null
        }
        return tmp
    }
}