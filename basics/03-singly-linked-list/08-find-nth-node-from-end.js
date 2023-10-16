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
 * n=2
 * O/P=40
 */

console.log("2\t",findNthFromEnd(head,2))
console.log("4\t",findNthFromEnd(head,4))

/**
 * Find the nth position data from end
 * Logic:  Take 2 pointer
 * Pointer One : iterate and place it till n position
 * Pointer Two : place at head
 * Now iterate and increment both pointer by 1
 * Return Pointer Two, when one reaches at null
 * @param {*} head 
 * @returns 
 */
function findNthFromEnd(head,pos){
    if(head===null) return;
    let firstPointer = head;
    //place till n postion
    for(let i=1;i<=pos;i++){
        if(firstPointer!==null)
            firstPointer=firstPointer.next;
    }
    let secondPointer=head;
    while(firstPointer!==null){
        //increment by 1
        firstPointer=firstPointer.next;
        secondPointer=secondPointer.next;
    }
    return secondPointer.data;
}

/**
 * print recursively
 */
function recPrint(head) {
    if (head === null) return;
    console.log(head.data);
    recPrint(head.next);
}
