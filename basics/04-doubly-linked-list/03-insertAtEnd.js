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

recPrint(head)
//add 40 at end
const newHead = insertAtEnd(head, 40)
console.log("\n New Value:")
recPrint(newHead)

function insertAtEnd(head, data) {
    let temp = new Node(data);
    if (head === null) return temp;
    let currentNode = head;
    while(currentNode.next!==null){
        currentNode = currentNode.next;
    }
    //set new node and link it
    currentNode.next = temp;
    temp.previous=currentNode;
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
