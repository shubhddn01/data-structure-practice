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

console.log(findMid(head))

/**
 * find mid
 * Logic: Take 2 pointers, initialise both with head
 * first pointer will increment by 1
 * second pointer will increment by 2
 * Return first when second or second.next reaches to null
 * @param {*} head 
 * @returns 
 */
function findMid(head){
    if(head===null) return;
    let slowPointer=head;
    let twicePointer = head;

    while(twicePointer!==null && twicePointer.next!==null ){
        slowPointer=slowPointer.next;
        twicePointer=twicePointer.next.next;
    }
    return slowPointer.data
}

/**
 * print recursively
 */
function recPrint(head) {
    if (head === null) return;
    console.log(head.data);
    recPrint(head.next);
}
