/**
 * simple create a node and print
 */
 class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

let head=null;
let temp1=new Node(10);
let temp2=new Node(20);
let temp3=new Node(30);
let temp4=new Node(40);
let temp5=new Node(50);

temp1.next=temp2;
temp2.next=temp3;
temp3.next=temp4;
temp4.next=temp5;
head=temp1;

/**
 * I/P: 10->20->30->40->50
 * X=20
 * O/p:2
 */
recPrint(head)

console.log("20","position:\t",searchPosition(head,20),"\n")
console.log("10","position:\t",searchPosition(head,10),"\n")
console.log("60","position:\t",searchPosition(head,60),"\n")

function searchPosition(head,data){
    let position=1;
    let currentNode = head;
    while(currentNode!==null){
        if(currentNode.data===data) return position;
        currentNode=currentNode.next;
        position++;
    }
    return -1;
}

/**
 * print recursively
 */
function recPrint(head){
    if(head===null) return;
    console.log(head.data);
    recPrint(head.next);
}
