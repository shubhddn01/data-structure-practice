class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

let head = null;
let temp1 = new Node(10);
let temp2 = new Node(20);
let temp3 = new Node(30);

temp1.next = temp2;
temp2.previous = temp1;
temp2.next = temp3;
temp3.previous = temp2;
head = temp1;

recPrint(head);
const newHead = revList(head)
console.log("\n New Value:")
recPrint(newHead)

function revList(head) {
    if(head===null) return head;
    let previous=null;
    let currentNode=head;
    while(currentNode.next!==null){
        //move forward
        previous = currentNode;
        //hold the previous value and swap with next
        let temp = currentNode.previous;
        currentNode.previous = currentNode.next;
        currentNode.next=temp;
        //move backward
        currentNode=currentNode.previous;
    }
    return  previous;
}

/**
 * print recursively
 */
function recPrint(head) {
    if (head === null) return;
    console.log(head.data);
    recPrint(head.next);
}
