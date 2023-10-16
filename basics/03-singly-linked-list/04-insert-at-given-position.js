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

temp1.next = temp2;
temp2.next = temp3;
temp3.next = temp4;
head = temp1;

/**
 * insert after 3
 * 10->20->30->40 
 * ^        ^     
 * 1        3
 * Logic : postion-2 
 * we are at 1, to go till 3, move 2 times
 */

const head1 = insertAtPosition(head, 3, 35)
recPrint(head1)



function insertAtPosition(head, pos, data) {
    let temp = new Node(data);
    if (pos === 1) {
        temp.next = head; //setting up node at first position
        //new head is temp
        return temp;
    }

    let currentNode = head;
    for (let i = 1; i <= ((pos - 2) && currentNode.next !== null); i++) {
        currentNode = currentNode.next;
    }
    //when position is greater
    if (currentNode === null) return head;
    temp.next = currentNode.next; //place temp, so link the next position in temp
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
