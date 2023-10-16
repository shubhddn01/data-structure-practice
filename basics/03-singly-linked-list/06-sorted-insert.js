/**
 * simple create a node and print
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = null;
let temp1 = new Node(10);
let temp2 = new Node(20);
let temp3 = new Node(30);
let temp4 = new Node(40);
let temp5 = new Node(50);

temp1.next = temp2;
temp2.next = temp3;
temp3.next = temp4;
temp4.next = temp5;
head = temp1;

/**
 * Sorted insertion
 * I/P: 10->20->30->40->50
 * X=25
 * O/p:10->20->25->30->40->50
 */
recPrint(head)

let head1 = sortedInsertion(head, 25)
console.log("\n");
recPrint(head1)
let head2 = sortedInsertion(head, 15)
console.log("\n");
recPrint(head2)
let head3 = sortedInsertion(head, 65)
console.log("\n");
recPrint(head3)

function sortedInsertion(head, data) {
    let temp = new Node(data);
    if (head === null) return temp;
    if (data < head.data) {
        temp.next = head;
        return temp;
    }
    let currentNode = head;
    //look for next, as for first value, we checked above
    while (currentNode.next !== null && currentNode.next.data < data) {
        currentNode = currentNode.next;
    }
    temp.next = currentNode.next;
    currentNode.next = temp;
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
