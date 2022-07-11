/* S hift method linked lists */ 

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
    shift() {
        if (!this.head) return undefined
        let tmp = this.head 
        this.head = this.head.next 
        tmp.next = null
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return tmp
    }
}