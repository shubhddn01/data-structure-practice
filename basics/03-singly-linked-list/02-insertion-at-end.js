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

/**
 * ADD 40 at the end
 */

 const head1= insertAtEnd(head,40)
 recPrint(head1)
 console.log("\n")
 const head2=insertAtEnd(head1,50)
 recPrint(head2)
 console.log("\n")
 const head3=insertAtEnd(null,60)
 recPrint(head3)




function insertAtEnd(head,data){
    let temp = new Node(data);
    if(head===null){
        return temp;
    }
    let currentNode = head;
    while(currentNode.next!==null){
        currentNode=currentNode.next;
    }
    currentNode.next=temp;
    return head;
}

function recPrint(head){
    if(head===null) return;
    console.log(head.data);
    recPrint(head.next);
}
