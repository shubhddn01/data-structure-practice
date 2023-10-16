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
 * I/P: 10->20->30->40->50
 * O/P=30
 */

const head1 = revList(head)
recPrint(head1)

/**rev list
 * Logic :
 * Hold the next node
 * change the curent next link
 * set new node as previous
 * then move ahead, prevoius will be current and current will be holded next node
 * @param {*} head 
 * @returns 
 */
function revList(head) {
    let currentNode = head;
    let previousNode = null;

    while (currentNode !== null) {
        let holdNextNode = currentNode.next;
        currentNode.next = previousNode;

        //move one step ahead
        previousNode = currentNode;
        currentNode = holdNextNode;
    }
    return previousNode;
}

/**
 * print recursively
 */
function recPrint(head) {
    if (head === null) return;
    console.log(head.data);
    recPrint(head.next);
}
