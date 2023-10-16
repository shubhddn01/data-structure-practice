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
temp1.next=temp2
temp2.next=new Node(30);
head=temp1;

const newHead = deleteFirstNode(head)

recPrint(newHead);


function deleteFirstNode(head){
    if(head===null) return;
    return head.next;
}

/**
 * print recursively
 */
function recPrint(head){
    if(head===null) return;
    console.log(head.data);
    recPrint(head.next);
}
