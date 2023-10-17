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
const newHead = deleteAtEnd(head)
console.log("\n New Value:")
recPrint(newHead)

function deleteAtEnd(head) {
    if (head === null || head.next === null) {
        return null;
    }
    let currentNode = head;
    //go till the end
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
    }
    //go to 2nd last and break the chain
    currentNode.previous.next=null;
    return head;
}

/**
 * print recursively
 */
function recPrint(head) {
    if (head === null) return;
    console.log(head.data);
    recPrint(head.next);
}
