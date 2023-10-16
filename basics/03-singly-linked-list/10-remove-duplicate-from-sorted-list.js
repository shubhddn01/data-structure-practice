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
let temp3 = new Node(20);
let temp4 = new Node(30);
let temp5 = new Node(30);
let temp6 = new Node(30);
let temp7 = new Node(40);
let temp8 = new Node(50);

temp1.next = temp2;
temp2.next = temp3;
temp3.next = temp4;
temp4.next = temp5;
temp5.next = temp6;
temp6.next = temp7;
temp7.next = temp8;
head = temp1;

/**
 * I/P: 10->20->20->30->30->30->40->50
 * O/P=10->20->30->40->50
 */

const head1 = remDup(head)
recPrint(head1)

/**rev list
 * Logic :
 * break the chain, if current value is same as current.next
 * else, move forward and re-assign to next value
 * @param {*} head 
 * @returns 
 */
function remDup(head) {
    let currentNode = head;
    while(currentNode!==null && currentNode.next!==null){
        if(currentNode.data===currentNode.next.data){
            //break the link
            currentNode.next = currentNode.next.next;
        }else{
            //move forward
            currentNode = currentNode.next;
        }
    }
    return head
}

/**
 * print recursively
 */
function recPrint(head) {
    if (head === null) return;
    console.log(head.data);
    recPrint(head.next);
}
