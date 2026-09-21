
// class that create a node with data and next
class Nodez {
  constructor(public data: number, public next: Nodez | null = null){
    this.data = data;
    this.next = next;
  }
}


// class that creates a linked list
class SinglyLinkedList {
  constructor(public head: Nodez | null = null){
    this.head = head;
  }


  displayLinkedList(){
    let curr = this.head;
    while(curr !== null){
      // console.log(curr.data);
      (globalThis as any).process.stdout.write(`${curr.data} -> `);
      curr = curr.next;
    }

    (globalThis as any).process.stdout.write("null");
    console.log("\n");
  }


  addNodeAtEnd(data: number){
    const newNode = new Nodez(data);

    if(this.head === null){
      this.head = newNode;
      return;
    }

    let curr = this.head;
    while(curr.next !== null){
      curr = curr.next;
    }
    curr.next = newNode;
  }


  addNodeAtStart(data: number){
    let newNode = new Nodez(data);

    if(this.head === null){
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }


  addNodeInAnyPosition(data: number, position: number){
    let newNode = new Nodez(data);

    if(this.head === null){
      this.head = newNode;
      return;
    }

    if(position === 1){
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    
    let curr = this.head;
    // we are taking position from 1 index
    while(position > 2 && curr.next !== null){
      curr = curr.next
      position--;
    }
    
    let temp = curr.next;
    curr.next = newNode;
    newNode.next = temp;
  }


  // remove nodes methods
  removeNodeAtEnd(){
    if(this.head === null || this.head.next === null){
      this.head = null;
      return;
    }

    let curr = this.head;
    while(curr.next && curr.next.next !== null){
      curr = curr.next;
    }

    curr.next = null;
  }


  removeNodeAtStart(){
    if(this.head === null){
      return ;
    }

    let oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
  }
  

  removeNodeByPosition(position: number){
    if(this.head === null){
      return;
    }

    if(position === 1){
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      return;
    }
    
    let curr = this.head;

    while(position > 2 && curr.next !== null){
      curr = curr.next;
      position--;
    }

    let temp = curr.next;
    if(temp){
      curr.next = temp.next;
    }
    temp = null;
  }


  removeNodeByElement(element: number) {
    if (this.head === null) {
      return;
    }

    if (this.head.data === element) {
      const oldHead = this.head;
      this.head = oldHead.next;
      oldHead.next = null;
      return;
    }

    let curr = this.head;

    while (curr.next !== null && curr.next.data !== element) {
      curr = curr.next;
    }

    if (curr.next === null) {
      return;
    }

    const nodeToRemove = curr.next;
    curr.next = nodeToRemove.next;
    nodeToRemove.next = null;
  }

}


const list = new SinglyLinkedList();
list.addNodeAtEnd(3);
list.addNodeAtEnd(4);
list.addNodeAtEnd(5);

list.addNodeAtStart(2);
list.addNodeAtStart(1);

list.addNodeInAnyPosition(11, 3);
list.addNodeInAnyPosition(22, 4);
list.addNodeInAnyPosition(99, 10);


list.removeNodeAtEnd();
list.removeNodeAtStart();

list.removeNodeByPosition(3);
list.removeNodeByPosition(5);
list.removeNodeByPosition(2);

list.removeNodeByElement(4);


list.displayLinkedList();